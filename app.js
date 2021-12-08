const inquirer = require("inquirer")
const { initQuestions } = require("./initQuestions")
const { pet } = require("./pet")

let myPet

const init = () => {
  inquirer
    .prompt(initQuestions)
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers)
      myPet = new pet(answers.name, answers.type)
    })
    .then(() => gameLoop())
    .catch((error) => {
      console.log(error)
    })
}

const gameLoop = () => {
  //   console.log(myPet)

  if (myPet.health <= 0) {
    console.log("your pet is dead")
    return // if condition is met the function will end here
  }

  //   myPet.degradeValues()

  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What do you want to do?",
        choices: ["feed", "drink", "play", "sleep"],
      },
    ])
    .then((answer) => {
      if (answer.action === "feed") {
        myPet.feed()
      }
    })
    .then(() => gameLoop())
}

init()