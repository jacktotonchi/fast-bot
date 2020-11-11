# fast-bot
 
 Fast Bot is a Discord Bot made as a two-week project. This bot has dozens of fun commands insuring a better user experience overall. 
 
![License](https://img.shields.io/github/license/harshhhdev/fast-bot?style=for-the-badge)

![Discord](https://img.shields.io/discord/742510158269120594?style=for-the-badge)

![Stars](https://img.shields.io/github/stars/harshhhdev/fast-bot?style=for-the-badge)

![Activity](https://img.shields.io/github/commit-activity/m/harshhhdev/fast-bot?style=for-the-badge)
 
 # Important 
 
 -  [Code of Conduct]
 
 -  [Contributing]
 
 [Code of Conduct]: https://github.com/harshhhdev/fast-bot/blob/master/CODE_OF_CONDUCT.md
 [Contributing]: https://github.com/harshhhdev/fast-bot/blob/master/commands/CONTRIBUTING.md
 
# Building 

 - `git clone https://github.com/harshhhdev/fast-bot.git`
 - `npm install` to install the modules.
 - Go to `botsettings.json` and fill the the required things. You can get your bot token [here]
 ```json
 { 
   "token": "",
   "prefix": "!",
   "cooldown": "3",
   "welcomechannel": "welcome channel name",
   "welcomemessage": "insert a welcome message here!",
   "welcomemessagedm": "insert a welcome messsage which gets sent to the user's DM here!",
   "blacklisted":["bad", "words"]
}
```
- Go to `/commands/json/rules.json` and add your rules. If you don't have 10 rules, just simply delete it. Make sure it does not end with a "," 
```json
{
    "rule1": "rule one goes here",
    "rule2": "rule two goes here",
    "rule3": "rule three goes here",
    "rule4": "rule four goes here",
    "rule5": "rule five goes here",
    "rule6": "rule six goes here",
    "rule7": "rule seven goes here",
    "rule8": "rule eight goes here",
    "rule9": "rule nine goes here",
    "rule10": "rule ten goes here"
}
```
- Go to `/commands/json/social.json` and add in your socials. If you don't have all of them, just delete them.
- Invite the bot to your server.
- Run the bot using `node .`, or download `nodemon` and run it.

[here]: https://discord.com/developers
