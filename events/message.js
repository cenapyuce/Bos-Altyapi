const ayarlar = require('../ayarlar.json');
module.exports = async message => {
  let client = message.client;
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix; // Ben bunu Ayarlamalı olarak kaydetim burdan prefix_${message.guild.id}  var ordan ayarlıyok
  if (message.author.bot) return "sen Botsun neyin kafasındasın Bide bu console'e yansımicak string bu";
  if (!message.content.startsWith(prefix)) return;
  let komut = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1); // HİC KULLANMADIM AMA KALSIN BEN YAPIYOM BUNU HA SİZE HAZIR MESSAGE.JS VEREBİLİRDİM
  let perms = client.elevation(message);
  let komutt;
    if (client.commands.has(komut)) { // eğer bulunduysa isimi o komutu yapıştırıyor!
    komutt = client.commands.get(komut);
  } else if (client.aliases.has(komut)) { // buda eğer başka gösterilmiş şeyler bulursa calıştırıyor
    komutt = client.commands.get(client.aliases.get(komut));
  }
  if (komutt) {
    if (perms < komutt.conf.permLevel) return;
    komutt.run(client, message, params, perms, prefix);
  }

}
// Rise Development Calanın götüne sokarım camı \\