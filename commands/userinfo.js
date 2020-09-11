const Discord = require('discord.js')

module.exports.config = { 
    name: "userinfo",
    aliases: ['user-info', 'useri']
}

module.exports.run = async (client, message, args) => {
   const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
   const user = message.author;

   const embed = new Discord.MessageEmbed()
        .setColor('#41FF7D')
       .setTitle(`${user}`)
       .setThumbnail(user.displayAvatarURL)
       .addField('Username', user.username, true)
       .addField('ID', user.id, true)
       .addField('Account Created', user.createdAt.toDateString(), true)
       .addField('Joined Server', member.joinedAt.toDateString(), true)
       .setFooter('User Info', user.displayAvatarURL);

   message.channel.send(embed);

   if (!args[0]) message.channel.send('Please specify a user!')
}