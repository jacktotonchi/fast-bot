const { Client, Collection, MessageEmbed} = require('discord.js')

module.exports.config = { 
    name: "dice",
    aliases: []
}

module.exports.run = async (client, message, args) => {
    let randomDice = Math.floor(Math.random() * Math.floor(6));

    if (randomDice == 1) message.channel.send('I rolled a 1!')
    if (randomDice == 2) message.channel.send('I rolled a 2!')
    if (randomDice == 3) message.channel.send('I rolled a 3!')
    if (randomDice == 4) message.channel.send('I rolled a 4!')
    if (randomDice == 5) message.channel.send('I rolled a 5!')
    if (randomDice == 6) message.channel.send('I rolled a 6!')
}