const {Client, Collection, MessageEmbed} = require('discord.js')

const pastemyst = require('pastemyst-js')

const client = new Client()
const spam = require('spamnya')

const botsettings = require(`./botsettings.json`)

const prefix = '!'

const fs = require('fs')
const { message } = require('spamnya')
client.commands = new Collection()
client.aliases = new Collection();



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

    member.message('Welcome to **Jonas Tyroller\'s** official Discord Server! We hope you have a great time here 😊')
    channel.send(`**Welcome to our Server!**, ${member}!, Make sure to read the <#428189176559828992>, grab some <#615268721199677480>, and feel free to introduce yourself to others here!`)
})

client.on('ready', () => {
    console.log('Bot is updated!')
    client.user.setActivity('Keepin\' it Zimple...')
})

client.on('message', async message => {
    if (!message.content.startsWith(prefix)) return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandFile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(cmd.slice(prefix.length));

    if (commandFile) commandFile.run(client, message, args);
})

client.on('message', message => {

    if (message.content.length > 750 && message.author.id != client.id) {
        pastemyst.createPasteMyst(message, 'never', 'autodetect')
        .then((pasteMystInfo) => {
           message.channel.send(`Codeblock pasted by ${message.author}! - ${pasteMystInfo.link}`);
           message.delete()
        })
    }

    if(message.content == 'prefix') message.reply(`My prefix is ${prefix}`)

    if (message.channel.type === 'dm') {
        
        if (message.content == 'no') message.author.send('yes.')
        
    }

    let blacklisted = ['nigger', 'nigga', 'faggot', 'fagget','fagot', 'faget', 'faggot']

    let foundInText = false;

    for (var i in blacklisted) { 
        if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }

    if (foundInText) {

        if (message.author.id != client.id) {
            message.delete();

            const blacklistedEmbed = new MessageEmbed()
            .setColor('#BF3737')
            .setTitle('Blacklisted word was detected!')
            .addField('**Message**', `${message.content}`)
            .addField('**Author**', `${message.author}`)
            .setTimestamp();

            message.channel.send(blacklistedEmbed);
        }
    }
})

client.on('messageUpdate', (oldMessage, newMessage) => {
    if (!oldMessage.guild) return;

    const oldMessageMention = oldMessage.mentions.members.first()
    const newMessageMention = newMessage.mentions.members.first()

    if (oldMessageMention && !newMessageMention && oldMessage.author.id !== oldMessageMention.id) {
        let embed = new MessageEmbed()
            .setColor('#ff6a6a')
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
        let embed = new MessageEmbed()
            .setColor('#ff6a6a')
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
    // spam.log(message, 50)

    if(spam.tooQuick(3, 1000) && message.author.id != client.id){
        message.delete()
        const serverMessage = new MessageEmbed()
        .setTitle('**Spamming Detected!**')
        .setDescription(`Spam deteced in ${message.channel.name} by ${message.author}`)
        .addField('**Type**', '3 or more messages in a single second.')
        .addField('**Message**', `${message.content}`)
        const messageToDelete = message.channel.send(serverMessage);

        setTimeout(function() {
            messageToDelete.delete()
        }, 1000)

        message.author.send('Talking wayyy to fast bud. Chill out.')
    }
})

client.on('messageReactionAdd', async (reaction, user) => {
    const { message, emoji } = reaction;

    if (message.channel.id == '742510158269120597') {
        const member = await message.guild.members.cache.get(user.id);

        if (!member.hasPermission("MANAGE_CHANNELS")) return;
        else {
            switch(emoji.name) {
                case '✅':
                    message.delete();
                    message.channel.send('Your art was added to the art jam files.')
                break;

                case '🚫':
                    message.delete();
                    message.channel.send('Your art was not added to the art jam files.')
                break;
            }
        }
    }
})

client.login(botsettings.token)