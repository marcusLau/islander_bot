const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

client.commands = new Discord.Collection();
client.events = new Discord.Collection(); 

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.login('ODIyMDM5MzMzMjgwMTUzNjEw.YFMdyQ.GFjLdLPraW7vSEu3bSofcW2nAns'); // bot token, need to hide this