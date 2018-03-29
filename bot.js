const TelegramBot = require('node-telegram-bot-api');

// API Token Telegram
const token = '573668578:AAEoYBB0RlsKEHTHM71eyn-_ikzCt8OSj3g';

const bot = new TelegramBot(token, {polling: true});
const request = require('request');
const frases = [
    'Yo de verdad creo que salgo con ella Y me quedo - Geovanni Andreotti',
    'cata salazar me mando un pack, pero no lo muestro, pa que tan chato - Javier Vergara',
    'no wn pa que tan chato, y se va a dejar el pack pa el. Marako - Gabriel Jiménez',
    'Yo jugaba a la gran capital solo xdd - Geovanni Andreotti',
    'voy a guardar este momento, si en un año pasa lo mismo con got, me van a chupar el pico todos los culiaos - Gabriel Jiménez',
    'y en todo caso, le dije "andai chistoso" no mas - Geovanni Andreotti',
    'quizá con got pase xdd - Gabriel Jiménez'
];

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Zocofrases. Con el comando /frase obtiene una frase random");
});

bot.onText(/\/frase/, (msg) => {
    var randFrase = frases[Math.floor(Math.random() * frases.length)];
    bot.sendMessage(msg.chat.id, randFrase);
});

