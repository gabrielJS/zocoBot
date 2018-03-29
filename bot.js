const TelegramBot = require('node-telegram-bot-api');
const request = require('request');
const fs = require ('fs');

var configs = fs.readFileSync("config.json");
var configJson = JSON.parse(configs);
var token = configJson.apikey;

// API Token Telegram
//var token = '573668578:AAEoYBB0RlsKEHTHM71eyn-_ikzCt8OSj3g';

const bot = new TelegramBot(token, {polling: true});

var frases = fs.readFileSync("frases.json");
var frasesJson = JSON.parse(frases);

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Zocofrases. Con el comando /frase obtiene una frase random");
});

bot.onText(/\/frase/, (msg) => {
    var randFrase = frasesJson.frases[Math.floor(Math.random() * frasesJson.frases.length)];
    bot.sendMessage(msg.chat.id, randFrase.frase);
});

