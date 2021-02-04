const Command = require('../../structs/Command')
const request = require('superagent')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'advice',
			aliases: ['adv', 'advise', 'lifeadv', 'lifeadvice', 'lifeadvise'],
			description: 'Gives valuable life advice.',
			category: ['Fun'],
		})
	}

	run(message, args) {
		request.get('http://api.adviceslip.com/advice').end((err, res) => {
			if (!err && res.status === 200) {
				try {
					JSON.parse(res.text)
				} catch (e) {
					return message.channel.send('An API error has occured!')
				}
				const advice = JSON.parse(res.text)
				message.channel.send(advice.slip.advice)
			} else {
				console.error(
					`🔴 REST call failed: ${err} \n status code: ${res.status}`
				)
			}
		})
	}
}
