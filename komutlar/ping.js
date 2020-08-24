const Discord = require('discord.js')

exports.run = (client, message, params) => {
  
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle("Ping Değerleri")
  .addField("API Gecikmesi:", `**${client.ping}** ms`)
  .addField("Mesaj Gecikmesi:", `**${message.createdTimestamp - message.createdTimestamp}**`)
message.channel.send(embed)
}
exports.conf = {
  enable: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "ping",
  description: "botun pingini gösterir.",
  usage: "ping"
}