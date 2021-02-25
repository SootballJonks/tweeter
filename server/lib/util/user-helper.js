"use strict";

const Chance      = require("chance"),
      chance      = new Chance();

const md5 = require('md5');


module.exports = {
  generateRandomUser: () => {
    const gender    = chance.gender();
    const firstName = chance.first({gender: gender});
    const lastName  = chance.last();
    const userName  = firstName + " " + lastName;
    
    let userHandle = "@";
    if (Math.random() > 0.5) {
      let prefix    = chance.prefix({gender: gender});
      prefix = prefix.replace(".", "");
      userHandle += prefix
    }

    userHandle += lastName;

    if (Math.random() > 0.5) {
      const suffix = Math.round(Math.random() * 100);
      userHandle += suffix;
    }
   
    const avatars = {
    
      Female: ["assets/images/pfps/cleric-hex.png", "assets/images/pfps/sirris-hex.png", "assets/images/pfps/yuria-hex.png", "assets/images/pfps/firekeeper-hex.png", "assets/images/pfps/karla-hex.png"],
      Male: ["assets/images/pfps/abyssWatcher-hex.png", "assets/images/pfps/herald-hex.png", "assets/images/pfps/hollow1-hex.png", "assets/images/pfps/eygon-hex.png", "assets/images/pfps/hollow2-hex.png"]
    
    }
    
    const avatarArray = avatars[gender]
    const userAvatar = avatarArray[Math.floor(Math.random()*avatarArray.length)]
  

    return {
      name: userName,
      handle: userHandle,
      avatars: userAvatar
    };
  }
};