const { MessageEmbed } = require('discord.js');

module.exports.welcome = (member) => {
  const welcomeMessage = new MessageEmbed()
    .setColor('#0099ff')
    .setDescription('Welcome to Mythic Companion!')
    .setFields(
      {
        name: 'Website',
        value:
          'Click **[here](https://enesceylan.github.io/mythic-companion/#/)** for Mythic Companion homepage.',
      },
      { name: '$help', value: 'To see list of commands.' }
    )
    .setFooter({
      text: 'by Mythic Companion',
      iconURL:
        'https://media.discordapp.net/attachments/923331169263702107/930238589256744990/logo192.png',
    });

  member
    .send({
      embeds: [welcomeMessage],
    })
    .catch((err) => {
      console.log(
        "Cannot send message to the user, user either blocked the bot or has DM's closed."
      );
    });
};
