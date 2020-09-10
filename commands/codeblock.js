const { Client, Collection, MessageEmbed} = require('discord.js')

module.exports.config = { 
    name: "codeblock",
    aliases: ['cb', 'block']
}

module.exports.run = async (client, message, args) => {
    message.channel.send("");
}