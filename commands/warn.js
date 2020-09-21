const { Client, Collection, MessageEmbed} = require('discord.js')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Warnings')
// const fs = require('fs')
// let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));


module.exports.config = { 
    name: "warn",
    aliases: []
}

// module.exports = mongoose.model("Warn", warnSchema);

module.exports.run = async (client, message, args) => {
    console.log('test')
    // if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send('Access Denied!');

    // let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])
    // if (!wUser) return message.reply('User not found!')
    
    // let reason = args.join(" ").slice(22);

    // if (!warns[wUser.id]) warns[wUser.id] = {
    //     warns: 0
    // };

    // warns[wUser.id].warns++;

    // fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    //     if (err) console.log(err)
    // })

    // let warnEmbed = new MessageEmbed()
    // .setAuthor(`${message.author.username} warned <@${wUser.id}>`)
    // .setColor('#8C0000')
    // .addField('**Warned User**', `<@${wUser.id}>`)
    // .addField('**Warned in**', message.channel)
    // .addField('**Number of Warnings**', warns[wUser.id].warns)
    // .addField('**Reason**', reason)
    // .setTimestamp()

    // message.channel.send(warnEmbed);
}