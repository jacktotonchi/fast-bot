const { Client, Collection, MessageEmbed} = require('discord.js')

module.exports.config = { 
    name: "help",
    aliases: ['commands', 'cmds']
}

module.exports.run = async (client, message, args) => {
   const helpMessage = new MessageEmbed()
   .addField('!8ball', 'Gives a random result to your questions')
   .addField('!adivce', 'Get some much needed advice.')
   .addField('!bam', 'Fake \"Bams\" a user.')
   .addField('!catfact', 'Get a fact about cats.')
   .addField('!channelinfo', 'Get information about a certain channel.')
   .addField('!coinflip', 'Flip a coin!')
   .addField('!diceroll', 'Roll a dice!')
   .addField('!dogfact', 'Get a fact about dogs')
   .addField('!f', 'f in chat.')
   .addField('!help', 'Get the list of commands for the bot.')
   .addField('!joke', 'Get a joke to make you chuckle')
   .addField('!questions', 'The format for asking questions in help channels!')
   .addField('!rule', 'Pull up specific rules!')
   .addField('!search', 'Get links to search engines to remind people that they exist.')
   .addField('!urban', 'Get the urban dictionary definition of a word.')
   .addField('!userinfo', 'Get info about a user.')
   .addField('!weather', 'Get the weather for a certain place');

   message.channel.send(helpMessage)
}