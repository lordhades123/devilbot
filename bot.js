const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


client.on("message", msg => {
	const uyarıembed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setDescription(":crown: " + msg.author + " Devil Bot reklam koruması aktif, reklam yapmayı bırak moruk!:crown:")

const dmembed = new Discord.RichEmbed()
	.setTitle("Sunucunda " + msg.author.tag + " reklam yapıyor!")
      .setColor(0x00AE86)
      .setDescription("-warn <kişi> komutu ile onu uyarabilir ya da -kick <kişi> veya -ban <kişi> komutlarını kullanarak onu sunucudan uzaklaştırabilirsin!")
	.addField("Kullanıcının mesajı:", "**" + msg.content + "**")

if (msg.content.toLowerCase().match(/(discord\.gg\/)|(discordapp\.com\/invite\/)/g) && msg.channel.type === "text" && msg.channel.permissionsFor(msg.guild.member(client.user)).has("MANAGE_MESSAGES")) {
	if(msg.member.hasPermission('BAN_MEMBERS')){
	return;
	} else {
    msg.delete(30).then(deletedMsg => {
     deletedMsg.channel.send(uyarıembed)
	 msg.guild.owner.send(dmembed).catch(e => {
            console.error(e);
          });
        }).catch(e => {
          console.error(e);
        });
      };
	  };
    })


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
		if (!msg.guild.member(msg.author).hasPermission("SEND_MESSAGES")) {
			msg.author.sendMessage('Aleyküm selam,  hoş geldin ^^');
		} else {
		msg.reply('**Aleyküm selam,** *hoş geldin güzel kardeşim sunucumuzda iyi vakit geçirirsin umarım* :yellow_heart:');
		}
	}
});


client.on("guildMemberAdd", member => {
    let otorol = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
    var role = otorol[member.guild.id].role;
  const rol = member.guild.roles.find('name', role);
    if (!rol)
    member.addRole(role);
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sea') {
		if (!msg.guild.member(msg.author).hasPermission("SEND_MESSAGES")) {
			msg.author.sendMessage('Aleyküm selam,  hoş geldin ^^');
		} else {
		msg.reply('**Aleyküm selam,** *hoş geldin güzel kardeşim sunucumuzda iyi vakit geçirirsin umarım* :yellow_heart:');
		}
	}
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamun aleyküm') {
		if (!msg.guild.member(msg.author).hasPermission("SEND_MESSAGES")) {
			msg.author.sendMessage('Aleyküm selam,  hoş geldin ^^');
		} else {
		msg.reply('**Aleyküm selam,** *hoş geldin güzel kardeşim sunucumuzda iyi vakit geçirirsin umarım* :yellow_heart:');
		}
	}
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamın aleyküm') {
		if (!msg.guild.member(msg.author).hasPermission("SEND_MESSAGES")) {
			msg.author.sendMessage('Aleyküm selam,  hoş geldin ^^');
		} else {
		msg.reply('**Aleyküm selam,** *hoş geldin güzel kardeşim sunucumuzda iyi vakit geçirirsin umarım* :yellow_heart:');
		}
	}
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'mrb') {
		if (!msg.guild.member(msg.author).hasPermission("SEND_MESSAGES")) {
			msg.author.sendMessage('Aleyküm selam,  hoş geldin ^^');
		} else {
		msg.reply('Sanada Merhaba^^ :heart:');
		}
	}
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'merhaba') {
		if (!msg.guild.member(msg.author).hasPermission("SEND_MESSAGES")) {
			msg.author.sendMessage('Aleyküm selam,  hoş geldin ^^');
		} else {
		msg.reply('Sanada Merhaba Kızsan Tanışalım mı?^^ :heart:');
		}
	}
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ksggb') {
		if (!msg.guild.member(msg.author).hasPermission("SEND_MESSAGES")) {
			msg.author.sendMessage('Aleyküm selam,  hoş geldin ^^');
		} else {
		msg.reply('**K**alk **S**iktir **G**it **G**elme **B**ida = ***KSGGB*** :yellow_heart:');
		}
	}
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'günaydın') {
		if (!msg.guild.member(msg.author).hasPermission("SEND_MESSAGES")) {
			msg.author.sendMessage('Aleyküm selam,  hoş geldin ^^');
		} else {
		msg.reply('Sanada Günaydın Lanet Olası^^ :blue_heart: ');
		}
	}
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'gnydn') {
		if (!msg.guild.member(msg.author).hasPermission("SEND_MESSAGES")) {
			msg.author.sendMessage('Aleyküm selam,  hoş geldin ^^');
		} else {
		msg.reply('Sanada Günaydın Lanet Olası^^ :blue_heart: ');
		}
	}
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'devil bot için öneri') {
		if (!msg.guild.member(msg.author).hasPermission("SEND_MESSAGES")) {
			msg.author.sendMessage('Aleyküm selam,  hoş geldin ^^');
		} else {
		msg.reply('**Demek Bot İçin Öneri Yapacaksın HMMM.... Ne yapacan lan öneriyi? Neyse Yapımcım Haşmetli Aizen Sousuke :**Oynuyor Kısmıma Bak!** *DM Atınız!*  :yellow_heart:');
		}
	}
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'devil bot ile lol') {
		if (!msg.guild.member(msg.author).hasPermission("SEND_MESSAGES")) {
			msg.author.sendMessage('Aleyküm selam,  hoş geldin ^^');
		} else {
		msg.reply('**Yapımcım ile lol mü oynamak istiyosun?** LoL Nicki: Cât Is Predâtør *Smurf Kasıyor OTP Rengar ve tam bir abazadır. Yine de beni yarattığı için onu seviyorum* :yellow_heart: **Aizen Sousuke** :yellow_heart:');
		}
	}
});


client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.on("message", message => {
  const dmchannel = client.channels.find("name", "dm-log");
  if (message.channel.type === "dm") {
      if (message.author.bot) return;
      dmchannel.sendMessage("", {embed: {
          color: 3447003,
          title: `Gönderen: ${message.author.tag}`,
          description: `Bota Özelden Gönderilen DM: ${message.content}`
      }})
  }
});

client.on('guildCreate', guild => {
    let channel = bot.channels.get("buraya mesajı göndermek istediğiniz kanal id girin")
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`Giriş ${guild.name}`)
        .setThumbnail(guild.iconURL)
        .addField("Kurucu", guild.owner)
        .addField("Sunucu ID", guild.id, true)
        .addField("Toplam Kullanıcı", guild.memberCount, true)
        .addField("Toplam Kanal", guild.channels.size, true)
         channel.send(embed);
    });
client.on('guildDelete', guild => {
    let channel = bot.channels.get("buraya mesajı göndermek istediğiniz kanal id girin")
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`Çıkış ${guild.name}`)
        .setThumbnail(guild.iconURL)
        .addField("Kurucu", guild.owner)
        .addField("Sunucu ID", guild.id, true)
        .addField("Toplam Kullanıcı", guild.memberCount, true)
        .addField("Toplam Kanal", guild.channels.size, true)
         channel.send(embed);
    });

client.login(ayarlar.token);
