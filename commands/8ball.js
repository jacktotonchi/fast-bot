const { Client, Collection, MessageEmbed} = require('discord.js')

module.exports.config = { 
    name: "8ball",
    aliases: ['will', '8b']
}

module.exports.run = async (client, message, args) => {
   if(!args[0]) {
      message.react('👎')
      message.channel.send('Please ask me a question.');
   }  else {
      let eightball = [
      'Certainly.',
      'It is decidedly so.',
      'Without a doubt.',
      'Yes definitely.',
      'Probably.',
      'As I see it, yes.',
      'Most likely.',
      'Outlook good.',
      'Yes.',
      'Signs point to yes.',
      'Yes\'nt',
      'No\'nt',
      'Maybe.',
      'My conscience says no.',
      'Yep.',
      'Nah.',
      'My reply is no.',
      'My sources say no.',
      'Outlook not so good.',
      'Very doubtful.',
      'No way.',
      'Maybe',
      'The answer is hiding inside you',
      'No.',
      'Nope.',
      'If it rains today, then yes.',
      'It\'s over',
      'It\'s just the beginning',
      'Probably not.',
      ];
      let index = (Math.floor(Math.random() * Math.floor(eightball.length)));
      message.channel.send(eightball[index]);
   }
}