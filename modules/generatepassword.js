module.exports = function(length) {
  if(!length) {
    console.error("Malmısın nE KADAR UZUN OLCAK SÖYLE ONU MALLL")
    return;
  }
  if(!isNaN(length)) {
      let code = '';
    let dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for(var i = 0; i < length; i++){
        code = code + dict.charAt(Math.floor(Math.random() * dict.length));
    }
    return code;
  } else return console.error("amk malı sayı istiyok");
}