const { Client, Collection, MessageEmbed} = require('discord.js')

module.exports.config = { 
    name: "diceroll",
    aliases: []
}

module.exports.run = async (client, message, args) => {
    let randomDice = Math.floor(Math.random() * Math.floor(6));

    if (randomDice == 0) randomDice = 1;
    
    let response = `I rolled a ${randomDice}!`

    message.channel.send(response);
}