//CHANGING TEXT
let paragraph = document.getElementById('text-area');

paragraph.innerHTML='This is a paragraph text...';

//HANDLING A BUTTON CLICK
let okButton = document.getElementById('ok-button');
okButton.addEventListener('click',function(){
    paragraph.innerText="Button Cliked";
});

//REMOVING AND ADDING ELEMENTS
let okButton2 = document.getElementById('ok-button2');
okButton2.addEventListener('click',function(){
    paragraph.style.display='none';//block
});


//Blackjack
//by Mark Zamoyta
//ADDING A USER INTERFACE TO BLACKJACK

let suits= ["Hearts",
            "Clubs",
            "Diamonds","Spades"];
let values =["Ace","King","Queen","Jack","Ten","Nine","Eight","Seven","Six","Five","Four","Three","Two"];

    let textArea2 = document.getElementById('text-area2');
    let newGameButton= document.getElementById('new-game-button');
    let hitButton= document.getElementById('hit-button');
    let stayButton= document.getElementById('stay-button');    

    hitButton.style.display='none';
    stayButton.style.display='none';

    newGameButton.addEventListener('click', function(){
        textArea2.innerHTML='Stared...';
        newGameButton.style.display='none';
        hitButton.style.display='inline';
        stayButton.style.display='inline';
    })


function createDeck(){
    let deck=[];
    for (let suitsIdx=0; suitsIdx < suits.length; suitsIdx++ ){
        for(let valuesIdx = 0; valuesIdx < values.length; valuesIdx++){
            let cards3 = {
                suits:suits[suitsIdx],
                value:values[valuesIdx]
            }
            deck.push(cards3);
        }
       }
       return deck;
}
function getCardString(card){
    return card.value+' of '+ card.suit;
}

function getNextCard(){
    return deck.shift();
}

let deck = createDeck();
let playersCards = [getNextCard(),getNextCard()]
console.log("Welcome to Blackjack!");
console.log("You are dealt: ")
console.log(" "+ getCardString(playersCards[0]));
console.log(" "+ getCardString(playersCards[1]));