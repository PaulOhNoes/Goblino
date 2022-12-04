require('dotenv').config()
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits, Attachment} = require('discord.js')
const { token, ownerId, botId, hostChannelId, dev } = process.env

const getRandomInsult = require('./utils/insultGen')
const messageGen = require('./utils/messageGen')

// create a new client isntance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]})

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

// notifies me when the client is ready
client.once(Events.ClientReady, c => {
  try {
    console.log(`Ready! Logged in as ${c.user.tag}`)
    console.log(`Chat Log:`)
    console.log(`------------------------------------`)
    c.channels.cache.get(hostChannelId)
      .send(!!dev ? 'TESTING' : 'IM ALIVE BITCHES')
  }
  catch(error){
    console.error(error)
  }
})

// command listener
client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return

  const command = interaction.client.commands.get(interaction.commandName)

  if (!command){
    console.error(`No command matching ${interaction.commandName} was found.`)
    return
  }

  try {
    await command.execute(interaction)
  } catch(error){
    console.error('there was an error', error)
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true})
  }
})

// listens to messages and replies to them
client.on(Events.MessageCreate, async message => {
  messageGen(message)
  console.log(`${message.author.username} in #${message.channel.name}: ${message.content}`)
})

// log in to discord with token
client.login(token)