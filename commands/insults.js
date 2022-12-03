const { SlashCommandBuilder } = require("discord.js");
const getRandomInsult = require('../utils/insultGen')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('insult')
    .setDescription('Replies with an insult.'),
  async execute(interaction) {
    await interaction.reply(getRandomInsult())
  }
}