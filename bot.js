const config = require("./config.json");
const Discord = require("discord.js");
const fs = require('fs');
const client = new Discord.Client();
const Music = require('discord.js-musicbot-addon');
client.login(process.env.BOT_TOKEN);

client.on('ready', ()  => {
    client.user.setActivity("V2 is HERE!", {type: "LISTENING"});
   console.log('KingBot V2 is Running!');
});

//////////////////// M U S I C - C O M M A N D S ////////////////////
const music = new Music(client, {
    prefix: ".", // Prefix for the commands.
    youtubeKey: 'AIzaSyApvbcgvYRGulf1I1Ffjfhr2K-S6TX0e9w',
    global: false,            // Non-server-specific queues.
    maxQueueSize: 50,        // Maximum queue size of 25.
    playCmd: 'play',        // Sets the name for the 'play' command.
    volumeCmd: 'vol',     // Sets the name for the 'volume' command.
    thumbnailType: 'high',
    leaveCmd: 'stop',      // Sets the name for the 'leave' command.
    anyoneCanSkip: true,
    disableLoop: false,
    searchCmd: 'search',
    requesterName: true,
    inlineEmbeds: false,	 
    queueCmd: 'queue',
    pauseCmd: 'pause',
    resumeCmd: 'resume',
    skipCmd: 'skip',
    loopCmd: 'loop',
    enableQueueStat: true,
  });
  //////////////////// M U S I C - C O M M A N D S ////////////////////

///DANGER ZONE [PLEASE DON'T DO ANYTHING BAD HERE] //
/////////////////////////////////////////////////////
////////////////// C O M M A N D S //////////////////
client.on('message', message => {
if(message.author.bot) return;
let prefix = config.prefix;

if (message.content === prefix + "bot") {
let embed = new Discord.RichEmbed()
.setColor('RANDOM')
.addField("**إسم السيرفر**", message.guild.name)
.addField("**عدد السيرفرات الي فيها البوت:**" , client.guilds.size)
.addField("**المستخدمين:**", client.users.size)
.addField("**قنوات:**", client.channels.size)
message.channel.sendEmbed(embed);
}
if (message.content === prefix + "server") {
    if(!message.channel.guild) return;
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    
    const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
    const days = millis / 1000 / 60 / 60 / 24;
    let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
    var embed  = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField("**🆔 سيـرفر ايــدي**", "**"+message.guild.id+"**",true)
    .addField("**👑 سيــرفر اونـر**", "**"+message.guild.owner+"**" ,true)
    .addField("**✅ الشــات الاســاســي**" , "**"+message.guild.DefaultChannel+"**" ,true)
    .addField("**🌍 المـوقع**" , "**"+message.guild.region+"**",true)
    .addField('**💬 عدد الرومــات الكتابيــة**',`**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`,true)
    .addField("**📣 عدد الرومــات الصوتــية**", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `,true)
    .addField("**🤔 عدد ايــام انشــاء السيــرفر**", ` ** [ ${days.toFixed(0)} ] ** Day ` ,true)
    .addField("**👔 الــرتــب**",`**[${message.guild.roles.size}]** Role `,true)
    .addField("**💠 مســتوى حمــاية الســيرفر**", ` ** [ ${verificationLevels[message.guild.verificationLevel]} ] ** `,true)
    
    .addField("👥عدد الاعضــاء",`**${message.guild.memberCount}**`)
    .setThumbnail(message.guild.iconURL)
    .setColor('RANDOM')
    message.channel.sendEmbed(embed)
    }
    if (message.content === prefix + 'help') {
        let embed = new Discord.RichEmbed()
.setThumbnail("https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/world-circle-blue-128.png")    
     .addField("**:globe_with_meridians: الأوامر العامه**","** **")
     .addField("**.ping :stopwatch:**","**لـ سرعة إتصالك**")
     .addField("**.id :chart_with_downwards_trend:**","**يظهر لك اي دي حقك**")
     .addField("**.avatar :camping:**","**لـ صور الشخص المختار**")
     .addField("**.roll :1234:**","**لـ القرعه من 1 - 100**")
     .addField("**.server :recycle:**","**لـ معلومات السيرفر**")
     .addField("**.icon :frame_photo: **","**لـ يظهر لك صوره السيرفر**")
     .addField("**.animal :unicorn: **","**لـ صور حيوانات كيوت**")
     .addField("**.ui :unicorn: **","** لـ يظهر لك اي دي حقك بشكل غير**")
     
.setColor('RANDOM')
 message.author.sendEmbed(embed).catch(err => {
  return message.reply("**:no_entry_sign: | !ما يمدينا نرسلك الهلب لأنك مقفل الدايركت**");})
}
if (message.content === prefix + 'help') {
    let embed = new Discord.RichEmbed()
.setThumbnail("https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/music-128.png")    
 .addField("**:musical_note:  اوامر الميوزك**","** **")
 .addField("**.play :musical_note: **","**لـ تشغيل لاغنيه**")
 .addField("**.vol :musical_note:**","**لرفع صوت لاغنيه**")
 .addField("**.stop :musical_note:**","**لـ اطفاء لاغنيه**")
 .addField("**.search :musical_note:**","**لـ عرض قائمه لاغاني**")
 .addField("**.skip :musical_note:**","**لـ نخطي لاغنيه**")
 .setFooter("** ❇نبرى ذمتنا ❇: في أي أستعمال خاطئ للهذا الكوماند**")
.setColor('RANDOM')
message.author.sendEmbed(embed);
}
if (message.content === prefix + 'help') {
    let embed = new Discord.RichEmbed()
.setThumbnail("https://cdn2.iconfinder.com/data/icons/clean-and-simple/153/Settings-128.png")    
 .addField("**:radioactive: أوامر الأداره**","** **")
 .addField("الترحيب", "**`welcome` لازم وجود روم أسمه**")
 .addField("**.v2min **","**عمل روم لمده دقيقتين**") 
 .addField("**.mute :mute: **","**اعطاء العضو ميوت كتابي**")  
 .addField("**.umute :loud_sound:  **","**فك الميوت عن العضو**")  
 .addField("**.bc  :mega:**","**لـ البرودكاست**") 
 .addField("**.cv  :restroom: **","**انشاء روم صوتي**")
 .addField("**.ct  :restroom: **","**انشاء روم كتابي**") 
 .addField("**.del  :restroom: **","**حذف روم صوتي او كتابي**")  
 .addField("**.مسح :octagonal_sign:**","**لـ مسح الشات**")
 .addField("**.mutechannel :no_entry: **","**قفل الشات**")
 .addField("**.unmutechannel :on: : **","**فتح الشات**")	 
 .addField("**.colors create :cyclone:**","** لـ اضافة 200 لون**")
 .addField("**.kick  :outbox_tray:**","**لـ طرد الأعضاء**")
 .addField("**.ban  :no_entry:**","**لـ حظر الأعضاء**")
.setColor('RANDOM')
message.author.sendEmbed(embed);
}
if (message.content === prefix + 'help') {
    let embed = new Discord.RichEmbed()
.setThumbnail("https://cdn3.iconfinder.com/data/icons/forall/110/game-128.png")    
 .addField("** :video_game: أوامر الالعاب**","** **")
 .addField("**.كت تويت :video_game: **","**لـ لعبه كت تويت**")
 .addField("**.لوخيروك  :video_game: **","**لـ لعبه ولو خيروك**")
 .addField("**.صراحه :video_game: **","**لـ لعبه صراحه**")
 .addField("**.مريم :video_game:  **","**لـ لعبه مريم**")
 .addField("**.هل تعلم:video_game:  **","**لـ لعبه هل تعلم**")
 .addField("**.لغز:video_game:  **","**لـ يعطيك لغز في صوره:new: **")
 .addField("**.حكم:video_game:  **","**لـ يعطيك حكم لازم تعمله:new: **")
 .addField("**.اسرع كتابه:video_game:  **","**لـ يعطيك كلمه صعبه لازم تكتبها سريع:new: **")
.setColor('RANDOM')
message.author.sendEmbed(embed);
}
if (message.content === prefix + 'help') {
    let embed = new Discord.RichEmbed()
.setThumbnail("https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/support-128.png") 
.addField("**:diamond_shape_with_a_dot_inside: Support ™ **","** **")
.addField("**موقع البوت **","**http://bytetechproject.rf.gd/**")
.addField("**موقع دعوة البوت**","**http://bytetechproject.rf.gd/invite**")
.addField("**لو تبي ترسل لنا رساله **","**.contact <رسالتك>**")
    .addField("**لو حاب ترسل لنا اقتراح **","**.sug <اقتراحك>**")
 .addField("** مبرمجين البوت :wrench: **","** ByteTech™ » <@171259176029257728> <@343383616895713290> <@315477177028050945> <@336606008069849088> **")
  .setColor('RANDOM')
message.author.sendEmbed(embed);
}
    if(message.content === prefix + "icon"){ 
        const embed = new Discord.RichEmbed()

    .setTitle(`${message.guild.name}'s icon`)
  .setColor(0x164fe3)
  .setImage(message.guild.iconURL)
 message.channel.send({embed});
    }
    if (message.content.startsWith(prefix + "avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
    if (message.content.startsWith(prefix + 'ping')) {
        if(!message.channel.guild) return;
 message.channel.sendMessage("**Pinging...**").then((message)=> {

  message.edit(`**Time Taken :ping_pong:** \`${Date.now() - message.createdTimestamp} ms\`` + `\n **Discord API :heartpulse:** \`${client.pings[1]} ms\``);

 })
 }
 if(message.content.startsWith(prefix + 'v2min')) {
    let args = message.content.split(" ").slice(1);
      var nam = args.join(' ');
   
     if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('`**⚠ | `[ADMINISTRATOR]` لا يوجد لديك صلاحية**').then(msg => msg.delete(6000))
     if (!nam) return message.reply(`**.v2min <أسم الروم>`).then(msg => msg.delete(10000))
     message.guild.createChannel(nam, 'voice').then(c => setTimeout(() => c.delete(), 120000)) // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
     message.channel.send(`:ballot_box_with_check: TemporarySound : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> :stopwatch:  انتهى وقت الروم الصوتي`), 120000))  // 120000 دقيقتان
   
    }
    if (message.content.startsWith('..bc-users')){
        if(!message.channel.guild) return;
      if(message.author.id !== '336606008069849088') return;
      let args = message.content.split(' ').slice(1).join(' ');
      message.channel.sendMessage(':incoming_envelope: ➤ **Sending to ' + `${client.users.size} users...**`)
      client.users.forEach(m =>{
      m.sendMessage(args)
      });
      }
      if (message.content.startsWith('..bc-users')){
        if(!message.channel.guild) return;
      if(message.author.id !== '171259176029257728') return;
      let args = message.content.split(' ').slice(1).join(' ');
      message.channel.sendMessage(':incoming_envelope: ➤ **Sending to ' + `${client.users.size} users...**`)
      client.users.forEach(m =>{
      m.sendMessage(args)
      });
      }
      if(message.content.startsWith(prefix + 'id')) {
        var year = message.author.createdAt.getFullYear()
        var month = message.author.createdAt.getMonth()
        var day = message.author.createdAt.getDate()
        var men = message.mentions.users.first();  
        let args = message.content.split(' ').slice(1).join(' ');
        if (args == '') {
        var z = message.author;
        }else {
        var z = message.mentions.users.first();
        }
        
        let d = z.createdAt;          
        let n = d.toLocaleString();   
        let x;                       
        let y;                        
        
        if (z.presence.game !== null) {
        y = `${z.presence.game.name}`;
        } else {
        y = "Nothing";
        }
        if (z.bot) {
        var w = 'بوت';
        }else {
        var w = 'عضو';
        }
        let embed = new Discord.RichEmbed()
        .setColor("#502faf")
        .addField(':new_moon_with_face: | اسمك:',`**<@` + `${z.id}` + `>**`, true)
        .addField(':id: | ايدي:', "**"+ `${z.id}` +"**",true)
        .addField('♨ | Playing:','**'+y+'**' , true)
        .addField('🤖 | نوع حسابك:',"**"+ w + "**",true)    
        .addField('📛 | الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
        .addField('📆 | التاريخ الذي انشئ فيه حسابك: ', "**" + year + "-"+ month +"-"+ day + "**", true)    
        .addField("⌚ | تاريخ دخولك للسيرفر", "**" + message.member.joinedAt.toLocaleString() + "**", true)    
        .addField(":speech_balloon: | آخر رسالة لك", "**" + message.author.lastMessage + "**", true)         
        
        .setThumbnail(`${z.avatarURL}`)
        .setFooter(message.author.username, message.author.avatarURL)
        
        message.channel.send({embed});
            if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);
        
        }
        if (message.content === prefix + "mute") {
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("**⚠ | `[MANAGE_ROLES]`لا يوجد لديك صلاحية**").catch(console.error);
      let user = message.mentions.users.first();
      let modlog = client.channels.find('name', 'mute-log');
      let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Mute');
      if (!muteRole) return message.reply("**`'Mute'`لا توجد رتبة** \n  .role Mute لعمل رتبه ميوت اكتب ").catch(console.error);
      if (message.mentions.users.size < 1) return message.reply('**.mute <منشن الشخص> **').catch(console.error);
      
      const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setTimestamp()
        .addField('الأستعمال:', 'اسكت/احكي')
        .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
        .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
       
       if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** :cry: `Manage Roles` لا يوجد لدي برمشن**').catch(console.error);
     
      if (message.guild.member(user).roles.has(muteRole.id)) {
    return message.reply("**:mute: تم إعطاء العضو ميوت**").catch(console.error);
    } else {
        message.guild.member(user).addRole(muteRole).then(() => {
    return message.reply("**:white_check_mark: تم إعطاء العضو ميوت كتابي**").catch(console.error);
    });
      }
    };
    if (message.content === prefix + "unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("**⚠ | `[MANAGE_ROLES]`لا يوجد لديك صلاحية**").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("**⚠ | `[MUTE_ROLES]`لا يوجد لديك صلاحية**").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('**.unmute <منشن الشخص>**').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** ⚠ | `[MANAGE_ROLES_OR_PERMISSIONS]`لا يوجد لديك صلاحية **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {
return message.reply("**:speaker: تم فك الميوت عن الشخص **").catch(console.error);
} else {
    message.guild.member(user).removeRole(muteRole).then(() => {
return message.reply("**:white_check_mark: تم فك الميوت عن الشخص **").catch(console.error);
});
  }

};
if(message.content == prefix + 'bc') {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
    if (!args[1]) {
message.channel.send("**bc <message>**");
return;
}
        message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
            .addField('» السيرفر :', `${message.guild.name}`)
            .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    }
    if(message.content.startsWith(prefix + 'animal')) {
        var cats = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg","http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg","http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg","https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg","https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg","https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg","https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg","http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg","https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg","https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg","http://imagem.band.com.br/f_230168.jpg"]
           var cat = new Discord.RichEmbed()
  .setImage(cats[Math.floor(Math.random() * cats.length)])
  message.channel.sendEmbed(cat);
      }
      if (message.content.startsWith(prefix + "ct")) {
        if (!args) message.reply("**.ct <آسم الشنل>");
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("**⚠ |`[MANAGE_CHANNELS]` لا يوجد لديك صلاحية للبان**");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
if (message.content.startsWith(prefix + "cv")) {
    if (!args) message.reply("**.cv <آسم الشنل>");
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("**⚠ |`[MANAGE_CHANNELS]` لا يوجد لديك صلاحية للبان**");
let args = message.content.split(" ").slice(1);
message.guild.createChannel(args.join(' '), 'voice');
message.channel.sendMessage('تـم إنـشاء روم صـوتي')

}
if (message.content.startsWith(prefix + 'del')) {
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("**⚠ |`[MANAGE_CHANNELS]` لا يوجد لديك صلاحية للبان**");

    let args = message.content.split(' ').slice(1);
    let channel = message.client.channels.find('name', args.join(' '));
    if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
    channel.delete()
}
                           if(message.content.startsWith(prefix + 'لو خيروك')) {
                            var viper = ["https://f.top4top.net/p_682it2tg6.png%22","https://e.top4top.net/p_682a1cus5.png%22","https://d.top4top.net/p_682pycol4.png%22","https://c.top4top.net/p_682vqehy3.png%22","https://b.top4top.net/p_682mlf9d2.png%22","https://a.top4top.net/p_6827dule1.png%22","https://b.top4top.net/p_682g1meb10.png%22","https://a.top4top.net/p_682jgp4v9.png%22","https://f.top4top.net/p_682d4joq8.png%22","https://e.top4top.net/p_6828o0e47.png%22","https://d.top4top.net/p_6824x7sy6.png%22","https://c.top4top.net/p_682gzo2l5.png%22","https://b.top4top.net/p_68295qg04.png%22","https://a.top4top.net/p_682zrz6h3.png%22","https://f.top4top.net/p_6828vkzc2.png%22","https://e.top4top.net/p_682i8tb11.png",]
                               var lo = new Discord.RichEmbed()
                      .setImage(viper[Math.floor(Math.random() * viper.length)])
                      message.channel.sendEmbed(lo);
                          }
 if (message.content === prefix + "servers") {
    if(!message.channel.guild) return;
      const Embed11 = new Discord.RichEmbed()
    .setAuthor(client.user.username,client.user.avatarURL)
    .setThumbnail(client.user.avatarURL)
    .setDescription(`***مجموع السيرفرات ${client.guilds.size} \n \n${client.guilds.map(guilds => `- ${guilds.name}`).join('\n')}***`)
             message.channel.sendEmbed(Embed11)
        }
        if(message.content === prefix + "invite") {
            let embed = new Discord.RichEmbed ()
            embed.setTitle("**:arrow_right: Invite KingBot!**")
            .setURL("http://bytetechproject.rf.gd/invite");
           message.channel.sendEmbed(embed);
          }
          if (message.content === prefix + "support") {
          message.channel.send("**سيرفر الدعم \n https://discord.gg/4rXs6hy**");
       }
       if (message.content.startsWith(prefix + "ban")) {
        if(!message.channel.guild) return message.reply('**:x: sorry but this command is only for servers **');         
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**you don't have banned permissions**");
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("The bot doesn't have the banned permissions");
    let user = message.mentions.users.first();
    let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**.kick <السبب> <منشن الشخص>**");
    if (!message.guild.member(user)
  .kickable) return message.reply("**!لا يمكنني تبنيد هذا الشخص**");
  
    message.guild.member(user).ban();
  
    const banembed = new Discord.RichEmbed()
    .setAuthor(user.username, user.displayAvatarURL)
    .setColor("RANDOM")
    .setTimestamp()
    .addField("**The member that got banned:**",  '**[ ' + `${user.tag}` + ' ]**')
    .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
    .addField("**Reason**", '**[ ' + `${reason}` + ' ]**')
    .setFooter("BANNED HAMMER!")
    message.channel.send({
      embed : banembed
    })
  }
  if (message.content.startsWith(prefix + "kick")) {
    if(!message.channel.guild) return message.reply('**:x: sorry but this command is only for servers **');         
if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**you don't have banned permissions**");
if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("The bot doesn't have the banned permissions");
let user = message.mentions.users.first();
let reason = message.content.split(" ").slice(2).join(" ");
if (message.mentions.users.size < 1) return message.reply("**.ban <السبب> <منشن الشخص>**");
if (!message.guild.member(user)
.kickable) return message.reply("**!لا يمكنني تبنيد هذا الشخص**");

message.guild.member(user).kick();

const banembed = new Discord.RichEmbed()
.setAuthor(user.username, user.displayAvatarURL)
.setColor("RANDOM")
.setTimestamp()
.addField("**Kicked:**",  '**[ ' + `${user.tag}` + ' ]**')
.addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
.addField("**Reason**", '**[ ' + `${reason}` + ' ]**')
.setFooter("Knocked Out!")
message.channel.send({
  embed : banembed
})
}
if (msg.content ===  prefix + 'colors create'){
    if(!msg.channel.guild) return;
  if (!msg.member.hasPermission('MANAGE_ROLES')) return message.channel.sendMessage("u don't have perms!"); 
  msg.channel.send("**:white_check_mark: يتم عمل الالوان**");
      setInterval(function(){})
        let count = 0;
        let ecount = 0;
for(let x = 1; x < 141; x++){
  msg.guild.createRole({name:x,
  color: 'RANDOM'})
  }
}
if (message.content.startsWith(prefix + 'صراحه')) {
    const Sra7a = [
        'صراحه  |  صوتك حلوة؟',
        'صراحه  |  التقيت الناس مع وجوهين؟',
        'صراحه  |  شيء وكنت تحقق اللسان؟',
        'صراحه  |  أنا شخص ضعيف عندما؟',
        'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
        'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
        'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
        'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
        'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
        'صراحه  |  أشجع شيء حلو في حياتك؟',
        'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
        'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
        'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
        'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
        'صراحه  |  نظرة و يفسد الصداقة؟',
        'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
        'صراحه  |  شخص معك بالحلوه والمُره؟',
        'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
        'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
        'صراحه  |  وش تتمنى الناس تعرف عليك؟',
        'صراحه  |  ابيع المجرة عشان؟',
        'صراحه  |  أحيانا احس ان الناس ، كمل؟',
        'صراحه  |  مع مين ودك تنام اليوم؟',
        'صراحه  |  صدفة العمر الحلوة هي اني؟',
        'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
        'صراحه  |  صفة تحبها في نفسك؟',
        'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
        'صراحه  |  تصلي صلواتك الخمس كلها؟',
        'صراحه  |  ‏تجامل أحد على راحتك؟',
        'صراحه  |  اشجع شيء سويتة بحياتك؟',
        'صراحه  |  وش ناوي تسوي اليوم؟',
        'صراحه  |  وش شعورك لما تشوف المطر؟',
        'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
        'صراحه  |  ما اكثر شي ندمن عليه؟',
        'صراحه  |  اي الدول تتمنى ان تزورها؟',
        'صراحه  |  متى اخر مره بكيت؟',
        'صراحه  |  تقيم حظك ؟ من عشره؟',
        'صراحه  |  هل تعتقد ان حظك سيئ؟',
        'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
        'صراحه  |  كلمة تود سماعها كل يوم؟',
        'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
        'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
        'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
        'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
        '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
        'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
        '‏صراحه | هل تحب عائلتك ام تكرههم؟',
        '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
        '‏صراحه  |  هل خجلت من نفسك من قبل؟',
        '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
        '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
        '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
         '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
        '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
        '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
        'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
        '‏صراحه  |  ما هو عمرك الحقيقي؟',
        '‏صراحه  |  ما اكثر شي ندمن عليه؟',
        'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
   ]
   if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبة صراحة ..")
  .setColor('RANDOM')
  .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                  .setTimestamp()

   message.channel.sendEmbed(client);
   message.react("🤔")
 }
 if (message.content.startsWith(prefix + "كت تويت")) {
    const cuttweet = [
        'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
        'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
        'كت تويت | الحرية لـ ... ؟',
        'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
        'كت تويت ‏| كلمة للصُداع؟',
        'كت تويت ‏| ما الشيء الذي يُفارقك؟',
        'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
        'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
        'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
        'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
        '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
        'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
        '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
        '‏كت تويت | وش يفسد الصداقة؟',
        '‏كت تويت | شخص لاترفض له طلبا ؟',
        '‏كت تويت | كم مره خسرت شخص تحبه؟.',
        '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
        '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
        '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
        '‏كت تويت |أقوى كذبة مشت عليك ؟',
        '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
        'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
        '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
        '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
        '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
        '‏كت تويت | مطلبك الوحيد الحين ؟',
        '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
   ]
   if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[cuttweet] Requsted By: ' + message.author.username)
    }
    if (message.content.startsWith(prefix + 'مريم')) {
    const zead = [
           '*** انا اسمي مريم ***',
           '*** مرحباَ ماهو اسمك ؟ ***',
           `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
           '*** هل تود مساعدتي ؟ ***',
           '*** لماذا هل انت قاسي القلب ؟ ***',
           '*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
           '*** ابتعد عني قليل انني متعبة ***',
           '*** هل انت نادم على ماقلت ؟ ***',
           '*** ابتعد عني قليل انني متعبة ***',
           '*** هل انت نادم على ماقلت ؟ ***',
           '*** هل تود مساعدتي ؟ ***',
           '*** واو اشكرك انك شخصاَ رائع ! ***',
           '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
           '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
           '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
           '*** هيا اذاَ ***',
           '*** اود ان اسئلك سؤال ونحن في الطريق ***',
           '*** هل تراني فتاة لطيفة ام مخيفة ***',
           '*** اشكرك !  ***',
           '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
           '*** هل انت جاهز ؟ ***',
           '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
           '*** هل تود ان تراهم الان ***',
           '*** انا لست الحوت الازرق كما يدعون ***',
           '*** انا لست كاذبة صدقني***',
           '*** لماذا ارى في عينيك الخوف ؟ ***',
           '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
           '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
           '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
           '*** لماذا لم تدخل الغرفة ؟ ***',
           '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
           '*** لن تخرج حتى اعود لك بعد قليل ***',
           '*** المفتاح معك ! اكتب .مريم  ***',
           '*** مفتاح احمر , هل حصلت عليه ؟ ***',
           '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
           '*** مفتاح اسود . هل حصلت عليه ؟ ***',
           '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
           '*** لقد عادت من جديد الى المنزل ***',
           '*** لا تصدر اي صوت ! ***',
           '*** مريم : لقد عدت ***',
           '*** مريم : يا ايها المخادع اين انت ***',
           '*** مريم : اعلم انك هنا في المنزل ***',
           '*** مريم : ماذا تريد ان تسمع ***',
           '*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
           '*** احد ما خرج من المنزل ***',
           '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدني في نشر البوت وادخل هذا السيرفر  ***'
        ]
        var mariam= new Discord.RichEmbed()
  .setTitle("لعبة مريم ..")
  .setColor('RANDOM')
  .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
   message.react("👻")
  }
  if (message.content === prefix + "dt") {
    if (!message.channel.guild) return message.reply('** This command only for servers **');  
    var currentTime = new Date(),
       hours = currentTime.getHours() + 4 ,
       hours2 = currentTime.getHours() + 3 ,
       hours3 = currentTime.getHours() + 2 ,
       hours4 = currentTime.getHours() + 3 ,
       minutes = currentTime.getMinutes(),
       seconds = currentTime.getSeconds(),
       Year = currentTime.getFullYear(),
       Month = currentTime.getMonth() + 1,
       Day = currentTime.getDate();
        var h = hours
if(hours > 12) {
          hours -= 12;
       } else if(hours == 0) {
           hours = "12";
       }  
        if(hours2 > 12) {
          hours2 -= 12;
       } else if(hours2 == 0) {
           hours2 = "12";
       
       }  
if(hours3 > 12) {
          hours3 -= 12;
       } else if(hours3 == 0) {
           hours3 = "12";
       } 
       if (minutes < 10) {
           minutes = '0' + minutes;
       }


       var suffix = 'صباحاَ';
       if (hours >= 12) {
           suffix = 'مساء';
           hours = hours - 12;
       }
       if (hours == 0) {
           hours = 12;
       }


           var Date15= new Discord.RichEmbed()
           .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
           .setTitle( "『التاريخ  والوقت』")
           .setColor('RANDOM')
           .setFooter(message.author.username, message.author.avatarURL)
           .addField('الامارات',
           "『"+ hours + ":" + minutes +":"+ seconds + "』")
            .addField('مكه المكرمه',
           "『"+ hours2 + ":" + minutes +":"+ seconds  + "』") 
           .addField('مصر',
           "『"+ hours3 + ":" + minutes +":"+ seconds  + "』") 
           
           .addField('Date',
           "『"+ Day + "-" + Month + "-" + Year +  "』")

            message.channel.sendEmbed(Date15);
   }

if (message.content === prefix + "mutechannel") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠ | لا يوجد لديك صلاحية**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات :white_check_mark: ")
           });
             }
if (message.content === prefix + "unmutechannel") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠ | لا يوجد لديك صلاحية**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true
           }).then(() => {
               message.reply("تم فتح الشات:white_check_mark:")
           });
             }
             if (message.content.startsWith(prefix + "clear")) { 
                var args = message.content.substring(prefix.length).split(" ");
              if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **لا يوجد لديك صلاحية لمسح الشات**');
              var msg;
              msg = parseInt();
              
              message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
              message.channel.sendMessage("", {embed: {
              title: "Whoaaaaaaaa!",
              color: 0x06DF00,
              description: "Messages have gone to :wastebasket:",
              footer: {
              text: "This message will be deleted in 3 seconds!"
              }
              }}).then(msg => {msg.delete(3000)});}
              if (message.content.startsWith(prefix + "contact")) {
                if (!message.channel.guild) return;
                let args = message.content.split(" ").slice(1).join(' ');
                if(!args) return message.reply("**.contact <الرسالة>**");
                client.users.get("171259176029257728").send(
                    "\n" + "**" + "● السيرفر :" + "**" +
                    "\n" + "**" + "» " + message.guild.name + "**" +
                    "\n" + "**" + " ● المرسل : " + "**" +
                    "\n" + "**" + "» " + message.author.tag + "**" +
                    "\n" + "**" + " ● الرسالة : " + "**" +
                    "\n" + "**" + args + "**")
                
                let embed = new Discord.RichEmbed()
                .setDescription(':mailbox_with_mail: تم إرسال الرسالة')
                .setFooter(message.author.username, message.author.avatarURL)
                message.channel.sendEmbed(embed);
                
                }
                if (message.content.startsWith(prefix + "contact")) {
                if (!message.channel.guild) return;
                let args = message.content.split(" ").slice(1).join(' ');
                client.users.get("343383616895713290").send(
                    "\n" + "**" + "● السيرفر :" + "**" +
                    "\n" + "**" + "» " + message.guild.name + "**" +
                    "\n" + "**" + " ● المرسل : " + "**" +
                    "\n" + "**" + "» " + message.author.tag + "**" +
                    "\n" + "**" + " ● الرسالة : " + "**" +
                    "\n" + "**" + args + "**")
                }
                if (message.content.startsWith(prefix + "contact")) {
                    if (!message.channel.guild) return;
                    let args = message.content.split(" ").slice(1).join(' ');
                    client.users.get("336606008069849088").send(
                        "\n" + "**" + "● السيرفر :" + "**" +
                        "\n" + "**" + "» " + message.guild.name + "**" +
                        "\n" + "**" + " ● المرسل : " + "**" +
                        "\n" + "**" + "» " + message.author.tag + "**" +
                        "\n" + "**" + " ● الرسالة : " + "**" +
                        "\n" + "**" + args + "**")
                    }
                    if(message.content.startsWith(prefix + 'هل تعلم')) {
                        var memes =["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
                        var embed = new Discord.RichEmbed()
                        .setImage(memes[Math.floor(Math.random() * memes.length)])
                        message.channel.sendEmbed(embed);
                        }
                        if(message.content.startsWith(prefix + "suggest")) {
                            message.delete()
                            let args = message.content.split(" ").slice(1).join(' ');
                            
                          let embed = new Discord.RichEmbed ()
                          
                          .setAuthor(message.author.username, message.author.avatarURL)
                          .addField("إقتراحي هو", "**" + args + "**")
                        
                          if(!args) return message.reply("**Please prodive a suggest**");
                            message.channel.sendEmbed(embed)
                             }
                             if (message.content === prefix + 'ui') {
                                let user = message.mentions.users.first();    
                                 if (!user) { user = message.author }
                                let guild = message.guild;
                                let embed = new Discord.RichEmbed()
                                    .setTitle('User Information')
                                    .setThumbnail(user.displayAvatarURL)
                                    .setFooter(message.createdAt , client.user.avatarURL)    
                                    .setColor("#428cdf")
                                    .addField("لاسم", "```"+`${user.tag}`+"```" , true)
                                    .addField("لاسم المتغير", "```"+`${user.nickname || "None"}`+"```", true)
                                    .addField("اي دي", "```"+`${user.id}`+"```", true)
                                    .addField("Playing",  user.presence.game ? "```"+ user.presence.game.name +"```" : '```None```', true)
                                    .addField("UserStatus", "```"+`${user.presence.status}`+"```", true)
                                    .addField("هل هو بوت؟", "```"+`${user.bot}`+"```", true)  
                                    .addField('Roles', message.guild.members.get(user.id).roles.array(role => role.name).slice(1).join(' '))
                                    message.channel.send({embed});
                                }
if(message.content.startsWith(prefix + 'لغز')) {
        var kingscc =["https://cdn.discordapp.com/attachments/419823645280436224/423563689954902016/unknown.png","https://cdn.discordapp.com/attachments/419823645280436224/423563233723547658/unknown.png","https://cdn.discordapp.com/attachments/419823645280436224/423562874850508804/unknown.png","https://cdn.discordapp.com/attachments/419823645280436224/423562665026125845/unknown.png","https://cdn.discordapp.com/attachments/419823645280436224/423562493726687253/unknown.png","https://cdn.discordapp.com/attachments/419823645280436224/423562319826518028/unknown.png","https://cdn.discordapp.com/attachments/419823645280436224/423562059167563778/unknown.png","https://cdn.discordapp.com/attachments/419823645280436224/423561747195101186/unknown.png"]
        var embed = new Discord.RichEmbed()
.setImage(kingscc[Math.floor(Math.random() * kingscc.length)])
message.channel.sendEmbed(embed);
}
if (message.content.startsWith(prefix + 'حكم')) {
    const scc = [
        '*** منشن الجميع وقل انا اكرهكم. ***',
     '*** اتصل على امك و قول لها انك تحبها :heart:. ***',
        '***     تصل على الوالده  و تقول لها  احب وحده.***',
        '*** تتصل على شرطي تقول له عندكم مطافي.***',
        '*** صور اي شيء يطلبه منك الاعبين.***',
        '*** اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص. ***',
        '*** اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك.***',
        '*** اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف.***',
        '***  تروح عند شخص تقول له احبك. ***',
        '***روح عند اي احد بالخاص و قول له انك تحبه و الخ.***',
        '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه. ***',
        '*** روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل. ***',
        '*** اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك. ***',
        '*** ذي المرة لك لا تعيدها.***',
        '*** ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام.***',
        '*** اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل..... ***',
        '*** تكلم باللهجة السودانية الين يجي دورك مرة ثانية.***',
        '***سو مشهد تمثيلي عن مصرية بتولد.***',
        '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية. ***',
        '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية.***',
        '*** سامحتك خلاص مافيه عقاب لك :slight_smile:. ***',
        '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه.***',
        '*** تتصل على الوالده  و تقول لها خطفت شخص. ***',
        '*** روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك.  ***'
     ]
    var hakam = new Discord.RichEmbed()
  .setTitle("لعبة حكم ..")
  .setColor('RANDOM')
  .setDescription(`${scc[Math.floor(Math.random() * scc.length)]}`)
   message.channel.sendEmbed(hakam);
   message.react("🤔")
  }
  if(message.content.startsWith(prefix + 'اسرع كتابه')) {
var asr3 =["https://cdn.discordapp.com/attachments/421588316278751232/425394570168369162/unknown.png","https://cdn.discordapp.com/attachments/421588316278751232/425394739169329164/unknown.png","https://cdn.discordapp.com/attachments/421588316278751232/425395072427884584/unknown.png","https://cdn.discordapp.com/attachments/421588316278751232/425395345997168640/unknown.png","https://cdn.discordapp.com/attachments/421588316278751232/425395564780322818/unknown.png","https://cdn.discordapp.com/attachments/421588316278751232/425395888320544771/unknown.png","https://cdn.discordapp.com/attachments/421588316278751232/425396805547851778/unknown.png","https://cdn.discordapp.com/attachments/421588316278751232/425397209010405379/unknown.png","https://cdn.discordapp.com/attachments/421588316278751232/425397361003724830/unknown.png","https://cdn.discordapp.com/attachments/421588316278751232/425397559557619722/unknown.png","https://cdn.discordapp.com/attachments/421588316278751232/425397668089561098/unknown.png","https://cdn.discordapp.com/attachments/421588316278751232/425397785811222538/unknown.png","https://cdn.discordapp.com/attachments/421588316278751232/425397967525249025/unknown.png","https://cdn.discordapp.com/attachments/421588316278751232/425398108990472203/unknown.png","https://cdn.discordapp.com/attachments/421588316278751232/425398237189505024/unknown.png","https://cdn.discordapp.com/attachments/421588316278751232/425398373114445827/unknown.png","https://cdn.discordapp.com/attachments/421588316278751232/425398517104902174/unknown.png"]
var embed = new Discord.RichEmbed()
.setImage(asr3[Math.floor(Math.random() * asr3.length)])
message.channel.sendEmbed(embed);
}
//////////////////////////////////////////
 });
 /////////////////////////////////////////////////////
////////////////// C O M M A N D S //////////////////