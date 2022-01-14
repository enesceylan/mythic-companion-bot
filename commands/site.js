const { MessageEmbed } = require('discord.js');

module.exports.site = (message) => {
  const homepage = new MessageEmbed()
    .setColor('#0099ff')
    .setAuthor({ name: message.author.tag, iconURL: message.author.avatarURL() })
    .setDescription('Click **[here](https://enesceylan.github.io/mythic-companion/#/)** for Mythic Companion homepage.')
    .setFooter({
      text: 'by Mythic Companion',
      iconURL: 'https://media.discordapp.net/attachments/923331169263702107/930238589256744990/logo192.png',
    });

  message
    .reply({
      embeds: [homepage],
    })
    .then((msg) => {
      setTimeout(() => {
        msg.delete();
      }, 5000);
    })
    .catch(console.error);

  setTimeout(() => {
    message.delete();
  }, 5000);
};
