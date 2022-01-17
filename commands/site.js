const { MessageEmbed } = require('discord.js');
const { destroyEmbedConversation } = require('../functions/destroyEmbedConversation');

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

  destroyEmbedConversation(message, homepage, 5000);
};
