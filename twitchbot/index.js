const irc = require('tmi.js'),
      config = require('./config/settings.js');
var   _ = require ('underscore'),
      channels    = [];

_(config.botSettings.channels).each(function(channel){
  channels.push('#' + channel);
});



// Define configuration options
const options = {
    connection:{
      secure: true,
      reconnect: true
    },
    options:{
      debug:false
    },
    identity: {
    username: config.botSettings.username,
    password: config.botSettings.password
  },
  channels: channels
};

// Connect bot using what's inside our config
const bot = new irc.client(options)

bot.connect().then(function(){
})
console.log('* Connecting to Twitch Servers');

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();
}
// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}