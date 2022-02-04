import DiscordJS, { Intents } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();


const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ],
})

// Listen for when the bot is ready
client.on('ready', () => {
  console.log('The bot is ready!')
})
// Listen for new messages
client.on('messageCreate', (msg) => {
  // Was the message "ping"?
  if (msg.content === 'ping') {
    // Reply with "pong"
    msg.reply({
      content: 'pong',
    })
  }
})


client.login(process.env.TOKEN);