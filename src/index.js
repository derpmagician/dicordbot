const { Client } = require('discord');
const client = new Client();

client.on('message', (msg) => {
	if (msg.content === '$ping') {
		msg.reply('Pong')
	}
});


client.login(process.env.DISCORD_BOT_KEY);
