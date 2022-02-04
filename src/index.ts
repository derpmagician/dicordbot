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

  const guildId = '606190074086031360';
  const guild = client.guilds.cache.get(guildId);
  let commands

  if (guild) commands = guild.commands;
  else commands = client.application?.commands;

  commands?.create({
    name: 'itstime',
    description: 'Simple response',
  });

  commands?.create({
    name: 'add',
    description: 'Adds 2 numbers',
    options: [
      {
        name: 'number1',
        description: 'The first number.',
        required: true,
        type: DiscordJS.Constants.ApplicationCommandOptionTypes.INTEGER,
      },
      {
        name: 'number2',
        description: 'The second number.',
        required: true,
        type: DiscordJS.Constants.ApplicationCommandOptionTypes.INTEGER,
      },
  ],
  })

})

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName, options } = interaction;

  if (commandName === 'itstime') {
    interaction.reply(
      {
      content: 'TO D-D-D-D-DUEL',
      ephemeral: true,
      }
    )
  } else if (commandName === 'add') {
    // ! in typescript means that it wont be null (required: true) above,
    const num1 = options.getInteger('number1')!
    const num2 = options.getInteger('number2')!
    const sum = `The sum is ${num1 + num2}`

    await interaction.deferReply({
      ephemeral: true,
    });

    await interaction.editReply({
      content: sum,
    })
  }
});




client.login(process.env.TOKEN);