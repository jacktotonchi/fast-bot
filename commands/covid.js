let covidapi = require('covidapi')
const Discord = require('discord.js')

module.exports.config = { 
    name: "covid",
    aliases: ['corona', 'cov']
}

module.exports.run = async (client, message, args) => {

    if (!args[0]) {
        message.react('👎')
        message.channel.send('Please tell me which country\'s covid information you would like! For worldwide stats please type "global"')
    }
    else if (args == 'global' || args == 'glo') {
        const data = await covidapi.all();

        const globalCovid = new Discord.MessageEmbed()
        .setColor('#ff6a6a')
        .setTitle('Global Covid Stats', )
        .addField('Cases', data.cases, true)
        .addField('Active Cases', data.active, true)
        .addField('Cases Today', data.todayCases, true)
        .addField('Critical Cases', data.critical, true)
        .addField('Deaths', data.deaths, true)
        .addField('Recovered', data.recovered, true)
    }
    else {
        const countrycovid = args.join(' ')
        const data = await covidapi.countries({country: countrycovid})

        const countryCovidEmbed = new Discord.MessageEmbed()
        .setColor('#ff6a6a')
        .setTitle(`Covid-19 stats for "${countrycovid}"`)
        .addField('Cases', data.cases, true)
        .addField('Active Cases', data.active, true)
        .addField('Cases Today', data.todayCases, true)
        .addField('Critical Cases', data.critical, true)
        .addField('Deaths', data.deaths, true)
        .addField('Recovered', data.recovered, true)

        message.channel.send(countryCovidEmbed)
    }
}