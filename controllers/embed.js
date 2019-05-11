const DiscordJs = require('discord.js');
const Embeds = require('../embeds/embeds.json');

const getEmbed = (data) => {
    const embed = new DiscordJs.RichEmbed()
	.setColor(data.color)
	.setTitle(data.title)
	.setAuthor(data.author.name , data.author.img , data.author.link)
	.setDescription(data.desc)
    .setThumbnail(data.thumb)
    
    return embed;
}

module.exports = {
    getEmbed
};