// Rise Development
// Maker By Cenap

var express = require('express');
var app = express();
const Discord = require('discord.js')
const client = new Discord.Client()
const ayarlar = require("./ayarlar.json");
const fs = require("fs");
console.log("Mödüler yüklendi!")
require("./eventloader.js")(client)
require("./komutyükleyici.js")(client)
const gen = require("./modules/generatepassword.js")


client.login(ayarlar.token)
