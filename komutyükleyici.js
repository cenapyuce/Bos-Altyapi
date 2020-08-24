const Discord = require("discord.js");
const fs = require("fs");
const ayarlar = require("./ayarlar.json")
module.exports = async client => {
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
  fs.readdir("./komutlar/", (err, files) => { 
  if(err) console.error("Hata cıktı: " + err)
  console.log(`Rise Development: Doğru Hesaplandıysa ${files.length} Komut Yüklenicek!`)
    files.forEach(komut => {
      let komutt = require(`./komutlar/${komut}`);
  console.log(`Rise Development: Yüklenen Komutumuzk: ${komutt.help.name}`)
      client.commands.set(komutt.help.name, komutt);
      komutt.conf.aliases.forEach(alias => { 
      client.aliases.set(alias, komutt.help.name);
      })
    })
  })
client.reload = komut => { 
    return new Promise((resolve, reject) => {
    try {
            delete require.cache[require.resolve(`./komutlar/${komut}`)];
      let komutt = require(`./komutlar/${komut}`);
      client.commands.delete(komut);
      client.aliases.forEach((cmd, alias) => { 
      if (cmd === komut) client.aliases.delete(alias);
      });
      client.commands.set(komut, komutt);
            komutt.conf.aliases.forEach(alias => {
        client.aliases.set(alias, komutt.help.name);
      });
            resolve();
    } catch(e) {
      reject(e);
    }
  })}       
client.load = komut => {
  return new Promise((resolve, reject) => {
    try {
      let komutt = require(`./komutlar/${komut}`);
      client.commands.set(komut, komutt);
      komutt.conf.aliases.forEach(alias => {
        client.aliases.set(alias, komutt.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
  client.unload = komut => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${komut}`)];
      let komutt = require(`./komutlar/${komut}`);
      client.commands.delete(komut);
      client.aliases.forEach((cmd, alias) => {
        if (komutt === komut) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
  // kankalar kb bunu server.js'e eklicekdim üşendim burda kalsın tamamı
client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
 if(ayarlar.sahip.includes(message.author.id)) return permlvl = 4;
  return permlvl;
};

}