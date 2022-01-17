const { MessageEmbed } = require('discord.js');
const { destroyEmbedConversation } = require('../functions/destroyEmbedConversation');

module.exports.help = (message) => {
  const helpEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('List of Commands')
    .addFields(
      { name: '$help', value: 'Lists of commands.' },
      { name: '$site', value: 'Mythic Companion homepage.' },
      { name: '$discord', value: 'Mythic Companion Discord Server.' }
    )
    .setFooter({
      text: 'by Mythic Companion',
      iconURL: 'https://media.discordapp.net/attachments/923331169263702107/930238589256744990/logo192.png',
    });

  destroyEmbedConversation(message, helpEmbed, 30000);
};
