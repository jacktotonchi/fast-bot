const Discord = require('discord.js')

module.exports.config = { 
    name: "avatar",
    aliases: ['av', 'pfp']
}

module.exports.run = async (client, message, args) => {
    if (!args[0]) {
        message.react('👎')
        return message.channel.send('Please specify a user!')
    }
    const member = message.mentions.members.last();

    if (!member) {
        message.react('👎')
        return message.channel.send('User not found!')
    }

    const userInfoEmbed = new Discord.MessageEmbed()
    .setColor('#00B6FF')
    .setThumbnail(`${member.user.displayAvatarURL()}`)
    .setTitle(`${member.user.username}'s avatar!`)

    message.channel.send(userInfoEmbed);
}