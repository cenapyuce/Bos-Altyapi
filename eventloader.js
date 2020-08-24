const Event = (event) => require(`./events/${event}.js`);
module.exports = client => {
  client.on('ready', () => Event('ready')(client));
 client.on('message', Event('message'));
  console.log("Eventler Yüklendi!")
};
