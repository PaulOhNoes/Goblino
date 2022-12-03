const insults = [
  "Shut up you fucking bronze 2 shitter",
  "You look like a fucking twonk",
  "You smeel like my dookie",
  "Fucking loot goblin that can't aim",
  "Must be a yuumi main",
  "You play like your monitor is turned off",
  "Small bean energy",
  "Your parents had you for tax benefits",
  "If your eyes were any further apart, you'd be an herbivore",
  "If the Catholic Church saw you, they would start promoting abortions",
  "My man running on incel core i9",
]

const getRandomInsult = () => {
  return insults[Math.floor(Math.random() * insults.length)]
} 

module.exports = getRandomInsult