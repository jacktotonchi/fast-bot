const { Client, Collection, MessageEmbed} = require('discord.js')

module.exports.config = { 
    name: "search",
    aliases: ['internet', 's']
}

module.exports.run = async (client, message, args) => {
   if(!args[0]) {
        message.react('👎');
        message.channel.send('Please specify a search engine! (current options are google, duckduckgo, ecosia, bing and yahoo)')
   }
   else {
        if(args == 'google') message.channel.send('Looks like something <https://www.google.com/> would know!');
        else if (args == 'ddg' || args == 'duckduckgo') message.channel.send('Looks like something <https://duckduckgo.com/> would know!');
        else if (args == 'eco' || args == 'ecosia') message.channel.send('Looks like something <https://www.ecosia.org/> would know!');
        else if (args == 'bing') message.channel.send('Looks like something <https://www.bing.com/> would know!');
        else if (args == 'yah' || args == 'yahoo') message.channel.send('Looks like something <https://www.yahoo.com/> would know!');
   }
}