const Discord = require('discord.js')
const social = require('./json/social.json')

module.exports.config = { 
    name: "social",
    aliases: ['prof', 'media']
}

module.exports.run = async (client, message, args) => {
    if (!args[0]) {
        message.react('👎');
        message.channel.reply('Please tell me which social account you would like a link to!')
    } else {
        switch (args[0]) {
            case 'youtube' :
                message.channel.send(social.youtube)
            break;
            case 'twitter' :
                message.channel.send(social.twitter);
            break;
            case 'instagram' :
                message.channel.send(social.instagram)
            break;
            case 'snapchat' :
                message.channel.send(social.snapchat)
            break;
            case 'pintrest' :
                message.channel.send(social.pintrest)
            break;
            case 'tiktok' :
                message.channel.send(social.tiktok)
            break;
            case 'facebook':
                message.channel.send(social.facebook)
            break;
            case 'github' :
                message.channel.send(social.github)
            break;
            case 'reddit' :
                message.channel.send(social.reddit)
            break;
            case 'spotify' : 
                message.channel.send(social.spotify)
            break;
            case 'twitch' :
                message.channel.send(social.twitter)
            break;
            case 'xbox' :
                message.channel.send(social.xbox)
            break;
            case 'steam' :
                message.channel.send(social.steam)
            break;
        }
    }

}