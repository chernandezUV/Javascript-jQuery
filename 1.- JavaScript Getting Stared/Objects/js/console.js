//OBJECTS BASICS
let person = {
    name: "John",
    age:32,
    partTime:false
};

console.log(person.name);      //John
console.log(person.age);       //32
console.log(person.partTime);  //False
console.log("------------------------------------------------------------------------------------")
//PASSING OBJECTS TO FUNCTIONS
function changeCard(card){
 card.suit = "Cubs";
}

let card = {
    suit: "Hearts",
    value: "Queen"
};

changeCard(card);
console.log(card.suit);
console.log("------------------------------------------------------------------------------------")
//ARRAYS OF OBJECTS
let cards = [
    {
        suit:"Hearts",
        value:"Queen"
    },
    {
        suit:"Clubs",
        value:"King"
    }
];

console.log(cards[1].suit)
console.log("------------------------------------------------------------------------------------")
//JAVASCRIPT BUILT-IN OBJECTS
let result = Math.random()*52;
result=Math.trunc(result); //Delete Fractions Number
console.log(result);

let result2 = new Date().toDateString();//ChangeFormat
console.log(result2);

let result3 = "Hello World!";
result3=result3.toUpperCase();
console.log(result3);
result3=result3.toLowerCase();
console.log(result3);
console.log("------------------------------------------------------------------------------------")

//Blackjack
//by Mark Zamoyta
// ADDING OBJECTS

let suits= ["Hearts",
            "Clubs",
            "Diamonds","Spades"];
let values =["Ace","King","Queen","Jack","Ten","Nine","Eight","Seven","Six","Five","Four","Three","Two"];


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