// FUNCTIONS BASICS
function showMesage(){
    console.log('in a function');
}
showMesage();
showMesage();//the message is shown twice

//PASSING INFORMATION TO FUNCTIONS
function showMesage(message){
    console.log(message);
}
showMesage("First Message");
showMesage("Second Message");

//FUNCTIONS RETURN VALUES
function triplePlus(value){
    let newValue = value + value + value;
    return newValue;
}
console.log(triplePlus(3));
 
/*
//FUNCTION SCOPE
function triplePlus(value){
    let newValue = value+value+value;
    return newValue;
}
triplePlus(3);
console.log(newValue);//Reference Error: newValue is undefined
*/
//Blackjack
//by Mark Zamoyta
// ADDING FUNCTIONS
let suits= ["Hearts",
            "Clubs",
            "Diamonds","Spades"];
let values =["Ace","King","Queen","Jack","Ten","Nine","Eight","Seven","Six","Five","Four","Three","Two"];


function createDeck(){
    let deck=[];
    for (let suitsIdx=0; suitsIdx < suits.length; suitsIdx++ ){
        for(let valuesIdx = 0; valuesIdx < values.length; valuesIdx++){
            deck.push(values[valuesIdx]+" of "+ suits[suitsIdx])
        }
       }
       return deck;
}

function getNextCard(){
    return deck.shift();
}

let deck = createDeck();

for(let i=0; i < deck.length;i++){
    console.log(deck[i]);
}

let playersCards = [getNextCard(),getNextCard()]


console.log("Welcome to Blackjack!");

console.log("You are dealt: ")
console.log(" "+deck[0]);
console.log(" "+deck[1]);