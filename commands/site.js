const { MessageEmbed } = require('discord.js');
const { destroyEmbedReply } = require('../functions/destroyEmbedReply');

module.exports.site = (message) => {
  const homepage = new MessageEmbed()
    .setColor('#0099ff')
    .setDescription(
      'Click **[here](https://enesceylan.github.io/mythic-companion/#/)** for Mythic Companion homepage. '
    )
    .setFooter({
      text: 'by Mythic Companion',
      iconURL: 'https://media.discordapp.net/attachments/923331169263702107/930238589256744990/logo192.png',
    });

  destroyEmbedReply(message, homepage, 10000);
};
