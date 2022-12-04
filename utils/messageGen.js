require('dotenv').config()
const { ownerId, botId } = process.env
const getRandomInsult = require('./utils/insultGen')

const messageGen = async (message) => {
  const randomInt = Math.floor(Math.random() * 1000)
  const content = message.content.toLowerCase()

  // bot can not responds to itself
  if(message.author.id === botId){
    return
  }

  // 10% chance of responding to someone's message with a insult
  if (message.author.id !== ownerId && randomInt > 900){
    return await message.reply(getRandomInsult())
  }

  // @bot or replys back
  if (message.mentions?.repliedUser?.id === botId || message.mentions.users.has(botId)){
    return await message.reply({ files: [{
        attachment:`images/campRock.jpg`,
        name: 'campRock.jpg',
        description: 'loud bitch from camp rock',
      }]
    })
  }

  // Mention of substring 'gob'
  if (content.includes('gob')){
    return await message.reply('Are you talking about me?')
  }

  // Mention of substring 'league'
  if (content.includes('league') || content.includes('aram')){
    if (randomInt > 600){
      return await message.reply('Fuck League')
    }
    else if (randomInt > 300){
      return await message.reply('Worst game ever made')
    }
    else {
      return await message.reply('League is fucking toxic')
    }
  }
}

module.exports = messageGen