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






