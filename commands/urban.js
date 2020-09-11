const urban = require('urban');

const { Client, Collection, MessageEmbed} = require('discord.js')

module.exports.config = { 
    name: "urban",
    aliases: []
}

module.exports.run = async (client, message, args) => {
   if (args.length < 1) return message.channel.send('Please enter a word');
   
   let word = args.join(' ');
   console.log(word);

   urban(word).first(json => {
      if (!json) return message.channel.send('No such word exist!');

      console.log(json);
      const def = new MessageEmbed()
          .setColor('#FBFF00')
          .setTitle(json.word)
          .setDescription(json.definition)
          .addField('Upvotes', json.thumbs_up, true)
          .addField('Downvotes', json.thumb_down, true)
          .setTimestamp(new Date())

      message.channel.send(def);
   })
}