const DiscordJs = require('discord.js');
// const Embeds = require('../embeds/embeds.json');

const getEmbed = (data) => {
    const embed = new DiscordJs.RichEmbed()
        .setColor(data.color)
        .setTitle(data.title)
        .setAuthor(data.author.name, data.author.img, data.author.link)
        .setDescription(data.desc)
        .setThumbnail(data.thumb);

    return embed;
};

// create and return an object with data from discord
const getEmbedData = (discordData) => {
    let embedData;

    // check this data has key value pairs (rich bot commands) 
    if (/[\w]+~[\w]+/.test(discordData)) {
        embedData = getRichEmbedData(discordData);
    } else {
        embedData = getBasicEmbedData(discordData);
    }

    return embedData;
};

const getBasicEmbedData = (discordData) => {
    // split data to a array
    let info = discordData.split("|");

    let embedData = getEmbedDataTemplate();

    if (info[0]) embedData.title = info[0].trim();
    if (info[1]) embedData.desc = info[1].trim();
    if (info[2]) embedData.chName = info[2].trim();
    if (info[3]) embedData.color = info[3].trim();
    if (info[4]) embedData.thumb = info[4].trim();
    if (info[5]) embedData.author.name = info[5].trim();
    if (info[6]) embedData.author.img = info[6].trim();
    if (info[7]) embedData.author.link = info[7].trim();

    return embedData;
};

const getRichEmbedData = (discordData) => {
    // split data to a array
    let info = discordData.split("|");

    let embedData = getEmbedDataTemplate();

    try {
        info.forEach(item => {
            let key = item.split("~")[0].trim();
            let value = item.split("~")[1].trim();

            switch (key) {
                case "ti":
                    embedData.title = value;
                    break;
                case "de":
                    embedData.desc = value;
                    break;
                case "ch":
                    embedData.chName = value;
                    break;
                case "co":
                    embedData.color = value;
                    break;
                case "th":
                    embedData.thumb = value;
                    break;
                case "an":
                    embedData.author.name = value;
                    break;
                case "ai":
                    embedData.author.img = value;
                    break;
                case "al":
                    embedData.author.link = value.trim();
                    break;
            }
        });
    } catch (e) {
        embedData.title = "Unable to parse the input data!.";
        embedData.color = "#ff0000";
    }

    return embedData;
};

const getEmbedDataTemplate = () => {
    return {
        "title": "",
        "desc": "",
        "chName": "",
        "color": "",
        "thumb": "",
        "author": {
            "name": "",
            "img": "",
            "link": ""
        }
    };
};

module.exports = {
    getEmbed,
    getEmbedData
};