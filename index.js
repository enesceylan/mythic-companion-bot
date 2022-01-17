const { Client, Intents } = require('discord.js');
const { embedLink } = require('./functions/embedLink');
const { site } = require('./commands/site');
const { help } = require('./commands/help');
const { discord } = require('./commands/discord');

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.once('ready', (c) => {
  console.log('Client is ready as:', c.user.tag);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  if (message.content.includes('https://enesceylan.github.io/mythic-companion')) {
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
});

client.login(process.env.token);
