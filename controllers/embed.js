const DiscordJs = require('discord.js');
const Embeds = require('../embeds/embeds.json');

const getEmbed = (data) => {
    const embed = new DiscordJs.RichEmbed()
        .setColor(data.color)
        .setTitle(data.title)
        .setAuthor(data.author.name, data.author.img, data.author.link)
        .setDescription(data.desc)
        .setThumbnail(data.thumb)

    return embed;
}

// create and return an object with data from discord
const getEmbedData = (discordData) => {
    // split data to a array
    let info = discordData.split("|");

    let embedData = {
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

module.exports = {
    getEmbed,
    getEmbedData
};