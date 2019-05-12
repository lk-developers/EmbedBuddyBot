const DiscordJs = require('discord.js');
const Config = require('./config');
const Permission = require('./permission');
const Embed = require('./embed');
const Commands = require('../config/commands.json');
const Responses = require('../config/responses.json');

const embedBuddy = new DiscordJs.Client();
const settings = Config.getConfigs();

// start the bot
const init = () => {
    registerListeners();
    embedBuddy.login(settings.BOT_TOKEN);
};

// event listeners for bot events 
const registerListeners = () => {
    embedBuddy.on('ready', () => {
        console.log(`Logged in as ${embedBuddy.user.tag}!`);
    });

    embedBuddy.on('message', msg => {
        msgHandler(msg);
    });
};

const msgHandler = (msg) => {
    // ignore bot msgs 
    if (msg.author.bot) return;
    //check msgs not start with trigger
    if (!(msg.content).startsWith(settings.BOT_TRIGGER)) return;
    // check if user has permissions
    if (!Permission.check(msg)) {
        sendResponse(msg, Responses.NO_PERMISSION);
        return;
    }

    // get data from user msg
    let discordData = (msg.content).split(settings.BOT_TRIGGER)[1].trim();

    // check if this is not a custom command
    if (!Commands[discordData]) {
        // get embed data object
        let embedData = Embed.getEmbedData(discordData);
        // create embed
        let customEmbed = Embed.getEmbed(embedData);
        // send custom embed to discord
        sendResponse(msg, customEmbed, embedData.chName);

    } else {
        // send response for the custom command
        sendResponse(msg, Commands[discordData]);
    }

};

// send response back to discord
const sendResponse = (msg, str, chName = "") => {
    if (chName == "") {
        msg.channel.send(str);
    } else {
        const channel = embedBuddy.channels.find(channels => channels.name == chName);
        channel.send(str);
    }

    // delete command msg after 1s if enabled
    if (settings.COMMAND_AUTO_DELETE) {
        msg.delete(1000);
    }
};

module.exports = {
    init
};