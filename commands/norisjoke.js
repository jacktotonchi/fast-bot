const Discord = require('discord.js')
const jokes = require('discord-jokes')

module.exports.config = { 
    name: "norisjoke",
    aliases: ['chucknorisjoke', 'cnjoke']
}

module.exports.run = async (client, message, args) => {
    jokes.getRandomCNJoke(function (joke) {
        message.channel.send(joke);
    })
}