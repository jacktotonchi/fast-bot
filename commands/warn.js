const { Client, Collection, MessageEmbed} = require('discord.js')
const fs = require('fs')
const ms = require('ms')


module.exports.config = { 
    name: "warn",
    aliases: []
}

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) message.channel.send('Acess denied');

    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);

    if (!wUser) return message.channel.send('User invalid!')

    let reason = args.join(" ").slice(22);
    if (!reason) return message.channel.send('Please provide a reason!')
}