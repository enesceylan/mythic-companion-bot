const { Client, Intents } = require('discord.js');
const { embedLink } = require('./functions/embedLink');
const { site } = require('./commands/site');
const { help } = require('./commands/help');
const { discord } = require('./commands/discord');

const { welcome } = require('./functions/welcomeMessage');

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
  ],
});

client.once('ready', (c) => {
  console.log('Client is ready as:', c.user.tag);
});

client.on('guildMemberAdd', (member) => {
  if (member.guild.id === '929296192268042250') {
    welcome(member);
  }
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  if (
    message.content.includes('https://enesceylan.github.io/mythic-companion')
  ) {
    embedLink(message);
  }

  if (message.content === '$site') {
    site(message);
  }
  if (message.content === '$help') {
    help(message);
  }
  if (message.content === '$discord') {
    discord(message);
  }
  if (message.content === '$servers') {
    if (
      message.author.id === '269583445649391626' ||
      message.author.id === '464487985602363403'
    ) {
      message.reply({
        content: `Bot is active in ${client.guilds.cache.size} servers.`,
      });
    }
  }
});

client.login(process.env.token);
