const { Client, Collection, MessageEmbed} = require('discord.js')



module.exports.config = {
    name: "warn",
    aliases: []
}

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send('Access Denied!')  
    else {
        const user = message.mentions.users.first()
        let reason = args.slice(1).join(' ')
        if (!reason) return message.channel.send('Please specify a reason!')

        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

        if (warnings === null) {
            db.set(`warnings_${message.guild.id}_${user.id}`, 1)
        }
        else if (warnings !== null) {
            db.add(`warnings_${message.guild.id}_${user.id}`, 1)
        }
    }
}