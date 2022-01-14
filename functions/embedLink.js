const { MessageEmbed } = require('discord.js');

module.exports.embedLink = (message) => {
  let textArr = message.content.split(' ');

  const heroes = [
    'Lucifer',
    'Iset',
    'Typhon',
    'Lilith',
    'Nuwa',
    'Zeus',
    'Athena',
    'Susanoo',
    'Artemis',
    'Dionysus',
    'Thor',
    'Persephone',
    'Izanami',
    'Hades',
    'Medusa',
    'Anubis',
    'Hela',
    'Hercules',
    'Lu-Bu',
    'Ganjiang-&-Moye',
    'Joan-of-Arc',
    'Cleopatra',
    'Cassandra',
    'Archimedes',
    'Nagakanya',
    'Tamamo-no-Mae',
    'Idun',
    'Gaia',
    'Oberon',
    'Flora',
  ];

  textArr.forEach((word, index) => {
    if (word.includes('https://enesceylan.github.io/mythic-companion/#/hero-list')) {
      const heroLinkArr = word.split('/');
      if (heroes.includes(heroLinkArr[heroLinkArr.length - 1])) {
        textArr[index] = `[${heroLinkArr[heroLinkArr.length - 1].split('-').join(' ')}](${word})`;
      } else {
        textArr[index] = '[BROKEN LINK]';
      }
    } else if (word.includes('https://enesceylan.github.io/mythic-companion/#/team-builder')) {
      textArr[index] = '[Mythic Companion team builder](' + word + ')';
    } else if (word.includes('https://enesceylan.github.io/mythic-companion/#/cube')) {
      textArr[index] = '[Mythic Companion cube of truth](' + word + ')';
    } else if (word.includes('https://enesceylan.github.io/mythic-companion/#/tierlist')) {
      textArr[index] = '[Mythic Companion tierlist](' + word + ')';
    } else if (
      word === 'https://enesceylan.github.io/mythic-companion' ||
      word === 'https://enesceylan.github.io/mythic-companion/' ||
      word === 'https://enesceylan.github.io/mythic-companion//' ||
      word === 'https://enesceylan.github.io/mythic-companion/#' ||
      word === 'https://enesceylan.github.io/mythic-companion/#/'
    ) {
      textArr[index] = '[Mythic Companion homepage](' + word + ')';
    } else {
      textArr[index] = '[BROKEN LINK]';
    }
  });

  const text = textArr.join(' ');

  const websiteEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setAuthor({ name: message.author.tag, iconURL: message.author.avatarURL() })
    .setDescription('**' + text + '**')
    .setFooter({
      text: 'by Mythic Companion',
      iconURL: 'https://media.discordapp.net/attachments/923331169263702107/930238589256744990/logo192.png',
    });

  message.channel.send({ embeds: [websiteEmbed] });
  message.delete({ timeout: 500 });
};
