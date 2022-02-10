let firstCard = Math.floor(Math.random() * 13) + 1
let secondCard = Math.floor(Math.random() * 13) + 1

let sum = firstCard + secondCard

if (sum < 21) {
  console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
  console.log("Woohoo! You've got BlackJack 🥳")
} else {
  console.log("You're out of the game 😭")
}