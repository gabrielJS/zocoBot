const TelegramBot = require('node-telegram-bot-api');
const fs = require ('fs');
var configs = fs.readFileSync("config.json");
var configJson = JSON.parse(configs);
var mysql = require('mysql');
var con = mysql.createConnection({
    host: configJson.DB_host,
    user: configJson.DB_user,
    password: configJson.DB_password,
    database: configJson.DB_database
});

//Lee token de config.json
var token = configJson.apikey;

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Zocofrases. Con el comando /frase obtiene una frase random");
});

bot.onText(/\/frase/, (msg) => {
    con.query("SELECT * FROM frases ORDER BY RAND() LIMIT 1;", function (err, result, fields) {
        if (err) throw err;
        var randFrase = result[0].frase + ' - ' + result[0].autor;
        bot.sendMessage(msg.chat.id, randFrase);
    });
});

bot.onText(/\/foto/, (msg) => {
    con.query("SELECT * FROM fotos ORDER BY RAND() LIMIT 1;", function (err, result, fields) {
        if (err) throw err;
        var randFrase = result[0].url_foto;
        bot.sendMessage(msg.chat.id, randFrase);
    });
});

bot.onText(/\/agregarFrase/, (msg) => {
    var username = msg.chat.username;
    var sql = 'SELECT * FROM users where username = ?';
    con.query(sql, [username], function (err, result) {
        if (err) throw err;
        if (typeof result !== 'undefined' && result.length > 0) {
            bot.sendMessage(msg.chat.id, 'Ingresa nueva zocofrase', {
                reply_markup: {
                    force_reply: true
                }
            }).then(payload => {
                const replyListenerId = bot.onReplyToMessage(payload.chat.id, payload.message_id, msg => {
                    bot.removeReplyListener(replyListenerId);
                    var nuevaFrase = msg.text;
                    bot.sendMessage(msg.chat.id, 'Ingresa autor', {
                        reply_markup: {
                            force_reply: true
                        }
                    }).then(payload => {
                        const replyListenerId = bot.onReplyToMessage(payload.chat.id, payload.message_id, msg => {
                            bot.removeReplyListener(replyListenerId);
                            var nuevoAutor = msg.text;
                            var sql = "INSERT INTO frases (frase, autor) VALUES ?";
                            var values = [
                                [nuevaFrase, nuevoAutor]
                            ];
                            con.query(sql,[values], function (err, result) {
                                if (err) throw err;
                                bot.sendMessage(msg.chat.id, 'Frase insertada');
                            });
                        })
                    })
                })
            })
        } else {
            bot.sendMessage(msg.chat.id, 'No tienes permisos para insertar frase');
        }
    });
});

bot.onText(/\/agregarFoto/, (msg) => {
    var username = msg.chat.username;
    var sql = 'SELECT * FROM users where username = ?';
    con.query(sql, [username], function (err, result) {
        if (err) throw err;
        if (typeof result !== 'undefined' && result.length > 0) {
            bot.sendMessage(msg.chat.id, 'Ingresa url de foto/video', {
                reply_markup: {
                    force_reply: true
                }
            }).then(payload => {
                const replyListenerId = bot.onReplyToMessage(payload.chat.id, payload.message_id, msg => {
                    bot.removeReplyListener(replyListenerId);
                    var nuevaFoto = msg.text;
                    var sql = "INSERT INTO fotos (url_foto) VALUES ?";
                    var values = [
                        [nuevaFoto]
                    ];
                    con.query(sql,[values], function (err, result) {
                        if (err) throw err;
                        bot.sendMessage(msg.chat.id, 'Registro insertado');
                    });
                })
            })
        } else {
            bot.sendMessage(msg.chat.id, 'No tienes permisos para insertar frase');
        }
    });
});





