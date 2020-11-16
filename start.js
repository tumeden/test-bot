const settings = require ('./settings.js')


// Twitch Bot Module
if (settings.twitchBot == true) {
console.log('* Loading Twitch Bot');
const twitchBot = require('./twitchbot/index');
console.log('* Twitch Bot Loaded');
}
else console.log('* Twitch Bot is Disabled');

// Discord Bot Module
if (settings.discordBot == true) {
console.log('* Loading Discord Bot');
const discordBot = require('./discordbot/index');
console.log('* Discord Bot Loaded');
}
else console.log('* Discord Bot is Disabled')

// Web 
if (settings.web == true) {
console.log('* Loading Web')
const web = require ('./web/index.js')
console.log('* Web Loaded')
}
else console.log('* Web is Disabled')


// Electron
//* If TRUE,  must use NPM Start
if (settings.electron == true) {
    console.log('* Loading Client')

const client = require ('./client/index.js')    
console.log('* Client Loaded')
}
else console.log('* Client is Disabled')