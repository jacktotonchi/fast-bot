const Discord = require('discord.js')

const client = new Discord.Client()
const spam = require('spamnya')

const botsettings = require(`./botsettings.json`)

const prefix = '!'

const fs = require('fs')
client.commands = new Discord.Collection()
client.aliases = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === 'js');

    if (jsfile.length <= 0) return console.log("No commands found");

    jsfile.forEach((file, i) => { 
        let pullcmd = require(`./commands/${file}`);
        client.commands.set(pullcmd.config.name, pullcmd);
        pullcmd.config.aliases.forEach(alias => {
            client.aliases.set(alias, pullcmd.config.aliases);
        })
    })
})

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === "tests");

    if (!channel) return;

    channel.send(`**Welcome to our Server!**, ${member}!, Make sure to read the **rules** (#rules), grab some **roles** from #roles, and feel free to **introduce yourself!**`)
})

client.on('ready', () => {
    console.log('Bot is updated!')
})

client.on('message', async message => {
    if (!message.content.startsWith(prefix)) return;

    if (message.channel.type === 'dm') {
        message.author.send('Imagine being so lonely that you have to DM a bot.')
    }

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandFile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(cmd.slice(prefix.length));

    if (commandFile) commandFile.run(client, message, args);
})

client.on('message', message => {
    let blacklisted = ['nigger', 'nigga', 'faggot', 'fagget','fagot', 'faget', 'faggot']

    let foundInText = false;

    for (var i in blacklisted) { 
        if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }

    if (foundInText) {

        if (message.author.id != 717935267868180501) {
            message.delete();
            message.channel.send(`A blacklisted word was detected by ${message.author}! The message was \"${message.content}\"`)
        }
    }
})

client.on('messageUpdate', (oldMessage, newMessage) => {
    if (!oldMessage.guild) return;

    const oldMessageMention = oldMessage.mentions.members.first()
    const newMessageMention = newMessage.mentions.members.first()

    if (oldMessageMention && !newMessageMention && oldMessage.author.id !== oldMessageMention.id) {
        let embed = new Discord.MessageEmbed()
            .setTitle("Ghost ping detected!")
            .addField('**Author**', oldMessage.author)
            .addField("**Origional Message**", oldMessage, true)
            .addField("**New Message**", newMessage, true)
            .addField('**Type**', 'Sender sent a message. Then proceeded to edit the ping out of the message.')
            .setTimestamp();
        oldMessage.channel.send(embed)
    }
})

client.on('messageDelete', message => {
    if (!message.guild) return;

    if (message.mentions.members.first() && message.mentions.members.first().id != message.author.id) {
        let embed = new Discord.MessageEmbed()
            .setTitle("Ghost ping detected!")
            .addField('**Sender**', message.author)
            .addField("**Message**", message.content)
            .addField('**Type**', 'Sender sent a message, and then proceeded to delete it thereafter.')
            .setTimestamp();
        message.channel.send(embed)
    }
})

client.on('message', (message) => {
    //initiate the detector and log the chats with max 50 logged chats
    spam.log(message, 50)

    if(spam.tooQuick(3, 1000) && message.author.id != 717935267868180501){
        message.delete()
        const serverMessage = new Discord.MessageEmbed()
        .setTitle('**Spamming Detected!**')
        .setDescription(`Spam deteced in ${message.channel.name} by ${message.author}`)
        .addField('**Message**', `${message.content}`)
        const messageToDelete = message.channel.send(serverMessage);
        message.author.send('Talking wayyy to fast bud. Chill out.')
    }
})


client.login(botsettings.token)