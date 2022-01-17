const { MessageEmbed } = require('discord.js');
const { destroyEmbedConversation } = require('../functions/destroyEmbedConversation');

module.exports.discord = (message) => {
  const discordEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setDescription('Click **[here](https://discord.gg/ZW9JpnNX8Z)** to join Mythic Companion Discord Server. ')
    .setFooter({
      text: 'by Mythic Companion',
      iconURL: 'https://media.discordapp.net/attachments/923331169263702107/930238589256744990/logo192.png',
    });

  destroyEmbedConversation(message, discordEmbed, 10000);
};
