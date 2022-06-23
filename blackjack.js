let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
console.log(messageEl);

let sumEl = document.querySelector("#sum-el")
// console.log(sumEl)

let cardsEl = document.getElementById("cards-el")



function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard

    sumEl.textContent = "Sum: " + sum

let cardsEl = document.getElementById
    if (sum <= 20) {
        message = "Do you want to draw a new card?"; 
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true
        
    } else {
        message = "You're out of the game!";
        isAlive = false
    } 
    messageEl.textContent = message
}


   
console.log(message)

// console.log(hasBlackJack)

// let age = 20

// if (age < 21) {
//     console.log("you can not enter the club!")

// } else {
//     console.log("Welcome!");
// }

// let age = 150

// if (age <100) {
//     console.log ("Not elegible")
// } else if (age ===100) {
//     console.log ("Here is your birthday card from the king!")
// } else {
//     console.log("Not elegible, you have already gotten one");
// }