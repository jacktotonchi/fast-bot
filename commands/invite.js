const { Client, Collection, MessageEmbed} = require('discord.js')

module.exports.config = { 
    name: "invite",
    aliases: ["inv", "invit"]
}

module.exports.run = async (client, message, args) => {
    message.channel.send('Here is an permanent invite to this server! https://discord.gg/yourcodehere!')
}