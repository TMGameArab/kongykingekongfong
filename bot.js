const config = require("./config.json");
const Discord = require("discord.js");
const fs = require('fs');
const client = new Discord.Client({disableEveryone: true});
const devs = ['336606008069849088' , '315477177028050945' , '171259176029257728' , '343383616895713290'];
const Music = require('discord.js-musicbot-addon');
client.login(process.env.BOT_TOKEN);

client.on('ready', ()  => {
    client.user.setActivity("V2 is HERE!", {type: "LISTENING"});
   console.log('KingBot V2 [Loading..]');
});
/////////// A D M I N - C O M M A N D S [PREFIX DOESN'T WORK HERE !!!!!!!!!!!!!!!!!!]/
client.on('message', message => {
if (message.content === '.' + 'globalbc' ){
if(!message.channel.guild) return;
if(!devs.includes(message.author.id)) return; 
let args = message.content.split(' ').slice(1).join(' ');
  message.channel.sendMessage(':incoming_envelope: ➤ **Sending to ' + `${client.users.size} users...**`);
  client.users.forEach(m =>{
  m.sendMessage(args)
  });
  }
});
client.on('message', message => {
    if(!devs.includes(message.author.id)) return; 
    var args = message.content.split(` `).slice(1);
    var argresult = args.join(` `);
  if (message.content === '.' + 'ply') {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content === '.' + 'wt') {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content === '.' + '.ls') {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content === '.' + '.st') {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
  
  });
/////////// A D M I N - C O M M A N D S [PREFIX DOESN'T WORK HERE !!!!!!!!!!!!!!!!!!]/


/////////// G U I L D - C O M M A N D S /////////////////////////////
client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':new_moon_with_face: | name :  ',`${member}`)
        .addField(':loudspeaker: |  نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
          .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
                   
    });
/////////// G U I L D - C O M M A N D S /////////////////////////////

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
if (message.content.startsWith(prefix + 'ping')) {
    if(!message.channel.guild) return;
message.channel.sendMessage("**Pinging...**").then((message)=> {

message.edit(`**Time Taken :ping_pong:** \`${Date.now() - message.createdTimestamp} ms\`` + `\n **Discord API :heartpulse:** \`${client.pings[1]} ms\``);

})
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
 if(message.content.startsWith(prefix + 'v2min')) {
    let args = message.content.split(" ").slice(1);
      var nam = args.join(' ');
   
     if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('`**⚠ | `[ADMINISTRATOR]` لا يوجد لديك صلاحية**').then(msg => msg.delete(6000))
     if (!nam) return message.reply(`**.v2min <أسم الروم>`).then(msg => msg.delete(10000))
     message.guild.createChannel(nam, 'voice').then(c => setTimeout(() => c.delete(), 120000)) // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
     message.channel.send(`:ballot_box_with_check: TemporarySound : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> :stopwatch:  انتهى وقت الروم الصوتي`), 120000))  // 120000 دقيقتان
   
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
        if(message.content.split(' ')[0] == prefix + 'bc') {
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
        if (!args[1]) {
    message.channel.send("**bc <message>**");
    return;
    message.channel.send("**:loudspeaker: | يتم إرسال البرودكسات")
    }
            message.guild.members.forEach(m => {
                var bc = new Discord.RichEmbed()
                .setThumbnail(message.guild.iconURL)
                .setFooter(`» مرسلة من قبل: ${message.author.username}#${message.author.discriminator}`)
                .setDescription(args)
                .setColor('RANDOM')
                // m.send(`[${m}]`);
                m.send({embed: bc});
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
          var embed = new Discord.RichEmbed()
          .setTitle("لعبة صراحة ..")
          .setColor('RANDOM')
          .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
          .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                          .setTimestamp()
        
           message.channel.sendEmbed(embed);
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
//////////////////////////////////////////
 });
 /////////////////////////////////////////////////////
////////////////// C O M M A N D S //////////////////