const discord = require('discord.js');
const bot = new discord.Client();

const prefix = "!";

bot.on("ready", async () => {
    console.log(`${bot.user.username} is onlone!`);
    bot.user.setActivity("Brother’S ", {typr: "WELCOME"});
});

bot.on("message", async message => {
    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    var messageArray = message.content.split(" ");
    var command = messageArray[0];
    var args = messageArray.slice(1);

    if (command === `${prefix}rules`) {
        return message.channel.send(" seban memnou3 chwiya dyal htiram khososan m3a bnadam ma kat 3arfouch Li dkhel l channel dyal stream ykhli lhedra 9lila  mli ykoun stream ON, mli ikon OFF stream li 3ndo chi slouguia ytle9ha Merhb Thad’s all:heart: ")   
    }

    if (command === `${prefix}userinfo`) {
        let user = message.mentions.users.first();
        if(!user) user = message.author;
        let color = message.member.displayHexColor;
        if(color == `#2ecc71`) color = message.member.hoistRole.hexColor;
        const userinfoEmbed = new discord.RichEmbed()
            .setColor("#2ecc71")
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setThumbnail(message.author.displayAvatarURL)
            .addField("ID", message.author.id, true)
            .addField("status", message.author.presence.status, true)
            .addField("Account Created", message.author.createdAt)
            .addField("Join Date", message.member.joinedAt);
        message.channel.send(userinfoEmbed);
    }
 });
 bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
      return channel.send('Marhbaa biik M3ana bro ' + member.displayName)
    }).catch(console.error)
}); 
 

 bot.login("NjgxNTg4MTQ4MzkxOTAzMjc5.Xll16g.iN2geG_67HNE8H36Cjoq-ZvZ_Ao");