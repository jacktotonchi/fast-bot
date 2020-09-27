const { Client, Collection, MessageEmbed} = require('discord.js')
const rules = require('./json/rules.json')

module.exports.config = { 
    name: "rule",
    aliases: ['r', 'rl']
}

module.exports.run = async (client, message, args) => {
   if(!args[0]) {
        message.react('👎');
        message.reply('Please specify a rule!');
   } else {
       switch(args[0]) {
           case "1" :
                message.channel.send(rules.rule1)
            break;
            case "2":
                message.channel.send(rules.rule2)
            break;
            case "3":
                message.channel.send(rules.rule3)
            break;
            case "4":
                message.channel.send(rules.rule4)
            break;
            case "5":
                message.channel.send(rules.rule5)
            break;
            case "6":
                message.channel.send(rules.rule6)
            break;
            case "7":
                message.channel.send(rules.rule7)
            break;
            case "8":
                message.channel.send(rules.rule8)
            break;
            case "9":
                message.channel.send(rules.rule9)
            break;
            case "10":
                message.channel.send(rules.rule10)
            break;
       }
   }

}