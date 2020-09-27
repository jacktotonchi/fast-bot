const { Client, Collection, MessageEmbed} = require('discord.js')

module.exports.config = { 
    name: "kick",
    aliases: []
}

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Access Denied.')
    else {
        const user = message.mentions.users.first()
        if (!user) return message.channel.send('Please tell me who you\'d like to softban!')

        user.send(`You have been kicked from ${message.guild.name}`)
        message.guild.members.kick(user)
    }
}