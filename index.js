//object "Player" that stores name and chips
let player = {
  name: "Michael",
  chips:  200,
  sayHello: function() {
    console.log("howdy")
  }
}

player.sayHello();

let cards = [] 
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")


playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
  let randomNumber = Math.floor(Math.random() * 13 ) + 1
  if (randomNumber > 10){
    return 10
  } else if (randomNumber === 1){
    return 11
  } else {
    return randomNumber
  }
  
}

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  isAlive = true
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
  if ( isAlive === true && hasBlackJack === false) {
    console.log("drawing a new card from the deck")
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
  }
}

console.log(hasBlackJack)
console.log(isAlive)
