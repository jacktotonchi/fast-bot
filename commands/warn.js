const { Client, Collection, MessageEmbed} = require('discord.js')

module.exports.config = { 
    name: "warn",
    aliases: []
}

module.exports.run = async (client, message, args) => {
    const target = message.mentions.users.first()

    if (!target) {
       message.reply('User not found.')
       return;
    }

    args.shift()

    const guildId = message.guild.id;
    const userId = message.member.userId;
    const reason = args.join(' ')
}