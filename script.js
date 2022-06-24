let name = prompt(`What is your name?`)
let age = prompt(`What is your age?`)
let dead = false
alert(`${name}, click start whenever you are ready.`)

const start = () => {
  alert(
    `Welcome ${name}. You have turn ${age} this year. It is time to leave this village and pursue your destiny.`
  )
  choice()
}
//User select class type
const choice = () => {
  let userClass = 0
  while (isNaN(userClass) || userClass == 0) {
    userClass = parseInt(
      prompt(
        `What class would you like to choose? (enter the number corresponding to your choice) (1) Warrior  (2) Wizard  (3) Archer (4) Knight`
      ),
      10
    )
    if (!(userClass < 5 && userClass > 0)) {
      alert(`That was not a valid choice. Please select a class.`)
      userClass = 0
    }
  }
  //Different case for user's class input
  switch (userClass) {
    case 1:
      warrior('Warrior')
      break
    case 2:
      wizard(`Wizard`)
      break
    case 3:
      archer(`Archer`)
      break
    case 4:
      knight(`Knight`)
      break
    default:
      ''
  }
}
//Different Paths
const warrior = (classTypeOf) => {
  afterChoice(classTypeOf)
  nextMorning(classTypeOf)
  alert(`After a long journey, you see the smoke in the horizon. You smell meat cooking over an open fire. People running around about outside.
  Some sharping their weapons. The gruffiest dude looked up at you and gave you asked who you were. You answer, My name is ${name}, I came to train. They gave you a hearty
  welcome.`)
  replay()
}
const wizard = (classTypeOf) => {
  afterChoice(classTypeOf)
  nextMorning(classTypeOf)
  alert(`After leaving the forest, you see the pointy roof of the wizards' town. You can see fellow witches and wizard flying around on their broomsticks. 
  Excited, you ran up to the drawbridge. The guard ask who you were and you reply "${name}, I'm here to become a wizard." The guard called for someone, and they take you into your new  room.`)
  replay()
}
const archer = (classTypeOf) => {
  afterChoice(classTypeOf)
  nextMorning(classTypeOf)
  alert(`After leaving the forest, you can make sounds of arrow shooting through the air. You get so excited that you ran the rest of the way to the village. As soon as you get there,
  you see some people shooting while others were talking in small group. One of them noticed you, and strike up a conversation. "My name is ${name}, Im here to become an archer!"
  He was entertained by your enthusiam and lead you to the leader of the group.`)
  replay()
}
const knight = (classTypeOf) => {
  afterChoice(classTypeOf)
  nextMorning(classTypeOf)
  alert(`After leaving the forest, you walk down the winding path to the king's castle on the horizon. You reached the gate and the guards ask you who you were and what your business was.
  "My name is ${name}, and I'm ${age} years old. I'm here to train to be a knight." The guards look at each other and call to get someone to guide you to the knight's training ground.`)
  replay()
}

const afterChoice = (classTypeOf) => {
  alert(
    `Good choice ${name}, Prepare to become the strongest ${classTypeOf} possible! Go on now, go get ready, you'll leave first thing in the morning.`
  )
}
const nextMorning = (classTypeOf) => {
  let userStatus = false
  let ate = prompt(
    `Would you like something to eat before you head out? (Yes)  (No)`
  )
  switch (ate.toLowerCase()) {
    case 'yes':
      alert(`${name}, you have recieve a loaf of bread and have gobbled it down. you head out into the 
      dark forest to start your journey to becoming a ${classTypeOf}`)
      break
    case 'no':
      alert(
        `${name}, you decided you will grab a bite to eat from your favorite dumpling shop before you leave.`
      )
      userStatus = true
      break
    default:
      ''
  }
  dead = darkForest(userStatus)
  if (dead) {
    userDead()
  }
}
//Journey into the dark forest
const darkForest = (userStatus) => {
  if (userStatus) {
    alert(
      `Oh no! ${name}, it seems the dumpling shop is closed, it seem like you will have to start your journey without food.`
    )
  }
  alert(
    `You headed into the DARK FOREST. The sunlight starts to dim as you headed down the only path visible. Sounds of soft growls can be heard`
  )
  let investigate = prompt(
    `*hehehehe* "Hello ${name}" You hear your name being called. Do you go towards the voice? (Yes) (No) `
  )
  switch (investigate.toLowerCase()) {
    case `yes`:
      alert(
        `You decided to go towards the voice. *BOOM* An ugly witch appears.`
      )
      witchRun(userStatus)
      break
    case `no`:
      alert('You decided to ignore and continue on your merry way.')
      break
    default:
      ''
  }
  return userStatus
}
const witchRun = (userStatus) => {
  let runOrNot = prompt(`The witch launch at you. Do you run? (Yes) (No)`)
  switch (true) {
    case runOrNot === 1 && userStatus === true:
      alert(
        `You turn to run. You head toward the end of the forest, but your body gives up on you. You haven't ate and have ran out of energy. The witch grabs you.`
      )
      break
    case runOrNot === 1 && userStatus === false:
      alert(
        `You turn to run. You head toward the end of the forest, you made it out and the witch is nowhere to be seen.`
      )
      break
    case runOrNot === 2:
      alert(`The witch grabs you.`)
      userStatus = true
      break
    default:
      ''
  }
  return userStatus
}

const userDead = () => {
  document.getElementById(
    `title`
  ).innerHTML = `You have dead! Would you like to play again?`
  document.getElementById(`start`).style.display = `none`
  document.getElementById(`replay`).style.display = `initial`
}
const replay = () => {
  document.getElementById(`title`).innerHTML = `Would you like to play again?`
  document.getElementById(`start`).style.display = `none`
  document.getElementById(`replay`).style.display = `initial`
}
const restart = () => {
  document.getElementById(`title`).innerHTML = `Choose Your Own Adventure!?`
  document.getElementById(`start`).style.display = `initial`
  document.getElementById(`replay`).style.display = `none`
}
