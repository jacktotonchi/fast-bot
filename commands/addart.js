const Discord = require('discord.js')
const fs = require('fs')

module.exports.config = { 
    name: "addart",
    aliases: []
}

module.exports.run = async (client, message, args) => {
    let attachments = message.attachments; 
    let title = args.join(' ') 

    if (!title && !attachments) return message.channel.send('Please tell me the name of your art piece, and a picture of it! Eg. !addart [artimagegoeshere] [art title goes here]')

    if (!title) return message.channel.send('Please tell me the title of your art piece!')
    if (!attachments) return message.channel.send('Please give me your art piece!') 

    fs.writeFile('./json/art.json', JSON.stringify (client.message, null, 4), err => {
        if (err) console.log(err);

        let _message = client.message[message.author.username].message;
        message.channel.send(_message)
    });
}