const Discord = require('discord.js')
const request = require('superagent');

module.exports.config = { 
    name: "ask",
    aliases: []
}

module.exports.run = async (client, message, args) => {
    message.channel.send('Please just ask your question. Don\'t ask to ask. Don\'t ask for topic experts or DMs. Don\'t ping random users. Skip the formalities and ask away! https://dontasktoask.com/')
}