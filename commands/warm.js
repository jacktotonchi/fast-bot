const { Client, Collection, MessageEmbed} = require('discord.js')


module.exports.config = { 
    name: "warm",
    aliases: []
}

module.exports.run = async (client, message, args) => {
    message.channel.send('Warmed em\' in the microwave.')
}