console.log("Script started");

// Guesses variable
let guesses = 0;

//Variable to store the first choice ID (empty to start)
let firstCardId = "";

//Var to store second choice id
let secondCardId = "";



function flipCard(cardId) {
    //test taht our click is hooked up
    console.log("click");
    let card = document.getElementById(cardId);
    //change text/hg color to reveal text
    card.style.color = "white";
    card.style.backgroundColor = "cardFlowerblue";

    //check which choice it is 
    if(firstCardId == "") {
        //Remember their first click 
        firstCardId = cardId;
        //console.log(firstCardId);
    }
    else {
        //Remember their second choice
        secondCardId = cardId;
        //count a guess after second choice 
        guesses = guesses + 1;
        //console.log(secondCardId);+
        //console.log("guesses = " + guesses);
        let guessDisplay = document.getElementById("guesses");
        guessDisplay.innerText = "Guesses: " + 
        //checkForMatch();
        setTimeout(checkForMatch, 1000)
    }
    
    

}

function checkForMatch() {
    //get HTML card elements taht were clicked 
    let card1 = document.getElementById(firstCardId);
    let card2 = document.getElementById(secondCardId);

    // Check if the card text matches
    if (card1.innerText == card2.innerText) {
        card1.style.backgroundColor = "lightgreen";
        card2.style.backgroundColor = "Lightgreen";
    }

    else {
        card1.style.color = "yellow";
        card1.style.backgroundColor = "yellow"
        card2.style.color = "yellow";
        card2.style.backgroundColor = "yellow"
    }
    firstCardId = "";
    secondCardId = "";

}