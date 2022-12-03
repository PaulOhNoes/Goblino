const { SlashCommandBuilder } = require("discord.js");

const trivia = [
  "Have you ever heard about spooked.mov? https://drive.google.com/file/d/0B4yPeT1c9mvoZVFrYnpLVHpYWlE/view?usp=sharing&resourcekey=0--ko1bKD_yTgRa-7rzTTKag",
  "I was born on November 28th, 2022",
  "Before discord there was the teamspeak. Paul didn't want to keep paying $7 a month for 10 users so he made a discord",
  "The OG creamers have been here since the beginning. Fucking weirdos.",
  "We all cream so we all are creamers :creamer:",
  "Warriors of Light discord group is og ffxiv gamers",
  "There is no context why the general chat is called nsfw.",
  "The server was made in 2016!",
  "Users from HouseParty5v5: Paul, Brian, Sajeel, Benito, Wilson, Meshari, Omero, Billy(Wumple), Matt(Prez), Kristen",
  "Fun fact! Paul, Brian, Meshari and Sajeel were on the same team in season 2 of HouseParty5v5. The team was called breaking bard and won the league!",
  "Paris Patrol is a reference to Omar saluting the Paris Las Vegas hotel and hilter marching back and forth in front of Paul and Bernie",
  "Cash Rules Everything Around Me. C.R.E.A.M! GET THE MONEY. DOLLA DOLLA BILL Y'ALL",
  "Cheesy Potatos is a reference to this: https://youtu.be/7krGDcdXM6Q",
  "Chicken Nuggers Club is a reference to this: https://youtu.be/_PH4E2zx8gg",
  "During a pictonary game with the og creamers Paul said `Star of Joseph` instead of `Star of David`",
  "Paul has known Bernie since the 4th grade.",
  "Bernie has known Chris since the 2nd grade.",
  "Bernie hit Illijah's car while reversing in his own drive way :joy:",
  "Paul become friends with Jacob when he put his minecraft bed next to his and then blew up half the house",
  "Chris has a cool Demon Slayer Tattoo!",
  "Paul has the elric brothers tatted on his right arm!",
  "Watch out! Angie laces her homemade cocktails",
  "Erin is a massive alcoholic",
  "Jacob is on his husband arc. Ask him about his baking!",
  "Bernie is the worst at giving directions :pensive:",
  "Space Age Wizards either means jedi's or toliet.",
  "Almost every one here has played League of Legends. Fuck that game.",
  "Erin and Esther are great artists!",
  "Brian is an ARAM god.",
  "Benito was challenger mmr in ARAM.",
  "Jay is actually the worst detective in the world. Don't listen to her lies.",
  "Bibs has never spoken a word. Ever.",
  "Ask Bernie about his Korean harem",
  "Sajeel is a terrible Muslim",
  "Sajeel can speak 5 languages",
  "Paul let Benito join his team as the midlaner if he gave him access to the Brazzer's account. The account was deactivated 3 months later...",
  "Kelsea has the best hentai",
  "Canadian drivers almost killed Paul twice",
  "The bookclub failed.",
  "Jacob was a toxic awper in cs:go",
  "Paul threw a match in csgo because he missed the backstab twice instead of shooting the enemy.",
  "Wilson has a beautiful smile",
  "Brian likes to save all his money in tft",
  "One time Leo the cat bit Paul's toe while he was sleeping",
  "Mari has been in the grips of a battle with crippling autism since 1997",
  "Young Sebastian hates being alone in phasmophobia",
  "Mari will get everyone killed if she's sees a cursed possession",
]

const getRandomTriva = () => {
  return trivia[Math.floor(Math.random() * trivia.length)]
} 

module.exports = {
  data: new SlashCommandBuilder()
    .setName('trivia')
    .setDescription('random stuff about the discord and the users.'),
  async execute(interaction) {
    await interaction.reply(getRandomTriva())
  }
}