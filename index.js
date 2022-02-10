// let firstCard = Math.floor(Math.random() * 13) + 1
// let secondCard = Math.floor(Math.random() * 13) + 1
let firstCard = 12
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

if (sum <= 20) {
  console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
  console.log("Woohoo! You've got BlackJack 🥳")
  hasBlackJack = true
} else {
  console.log("You're out of the game 😭")
  isAlive = false
}
//CASH OUT!
//have a variable that reflects whether or no the user got "blackjack"
console.log(hasBlackJack)
console.log(isAlive)