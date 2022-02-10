let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard] // array - ordered list of items
// let firstCard = 11
// let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard(){
  return Math.floor(Math.random() * 13 ) + 1
}

function startGame() {
  renderGame()
}


function renderGame(){
  cardsEl.textContent = "Cards: "
  // Create a for loop that renders out all the cards instead of just two
  for (let i = 0; i < cards.length; i ++){
    cardsEl.textContent += cards[i] + " "
  }
  
   //pushing sum to the html
    sumEl.textContent = "Sum: " + sum
    //If statement that relays a message back to the user 
    if (sum <= 20) {
      message = "Do you want to draw a new card?"
    } else if (sum === 21) {
      message = "Woohoo! You've got BlackJack"
      hasBlackJack = true
    } else {
      message = "You're out of the game"
      isAlive = false
    }
    //Pushing the message into the html
    messageEl.textContent = message
  }

//New cards function
function newCard() {
  console.log("drawing a new card from the deck")
  let card = getRandomCard()
  sum += card
  cards.push(card)
  console.log(cards)
  renderGame()
}

console.log(hasBlackJack)
console.log(isAlive)
