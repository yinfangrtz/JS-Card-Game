let ask = document.getElementById("ask");
let cards = document.getElementById("cards");
let sum = document.getElementById("sum");
let chips = document.getElementById("chips");
let jackState = false;
// let aliveState = true; make it true when start game
let aliveState = false;
let card1 = randomCard();
let card2 = randomCard();
let cardSet = [];
let sumNumber = 0;
let cardAll = "Card : ";
let playerInfo = {
    name: "Yang - ",
    clips: "500 clips"
}

function randomCard() {
    // cardNumber = Math.floor(Math.random() * 12) + 1; let and 13
    let cardNumber = Math.floor(Math.random() * 13) + 1;
    if (cardNumber > 10) {
        return 10
    } else if (cardNumber === 1) {
        return 11
    } else {
        return cardNumber
    }
}

function startGame() {
    // no need for ;
    aliveState = true
    cardSet = [card1, card2]
    sumNumber = card1 + card2
    judgement()
    // cards.textContent = cardAll + card1 + " " + card2;
    // sum.textContent = "Sum : " + sumNumber;
    // return sumNumber
    // combine in judegment, no need for return
}    

function judgement() { 
   cards.textContent = cardAll 
   for (i = 0; i < cardSet.length; i++) {
       cards.textContent += cardSet[i] + " "
   }    
   
   sum.textContent = "Sum : " + sumNumber;
   
   if (sumNumber < 21) {
        ask.textContent = "Wanna get a new card?"
    } else if (sumNumber === 21) {
        ask.textContent = "Win! you got black jack!"
        jackState = true;
    } else {
        ask.textContent = "You are out of the game!"
        aliveState = false;
    }
}

function newCard() {
    // dead rule
    if (aliveState === true && jackState === false) {
        let cardNew = randomCard();
        cardSet.push(cardNew);
        sumNumber += cardNew;
        judgement();
        // let cardFinal = "";
        // for (i = 0; i < cardSet.length; i++) {
        // cardFinal += cardSet[i] + " "
        // }  
        // cards.textContent = cardAll + cardFinal
        // sum.textContent = "Sum : " + sumNumber;
    }
}

chips.textContent = playerInfo.name + playerInfo.clips








