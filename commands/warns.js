const Discord  = require('discord.js')
const fs = require('fs')
const ms = require('ms')
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));


module.exports.config = { 
    name: "warns",
    aliases: []
}

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send('Access Denied!');
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])
    if (!wUser) return message.reply('User not found!')


    if (!warns[wUser.id]) warns[wUser.id] = {
        warns: 0
    };
    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err)
    })

    let warnEmbed = new Discord.MessageEmbed()
    .setAuthor(`${message.author.username} warned <@${wUser.id}>`)
    .setColor('#8C0000')
    .addField('**Number of Warnings**', warns[wUser.id].warns)
    .setTimestamp()

    message.channel.send(warnEmbed);
}