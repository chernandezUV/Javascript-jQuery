//TYPES AND ARRAYS
let value = "apple";
console.log(typeof(value));
let value2 = 9;
console.log(typeof(value2));
let value3 = 9;
console.log(value3+value3);
let value4 = 10/0; //Infinity
console.log(value4);
let value5 = 0/0; //NaN
console.log(value5);

//BOOLEAN TYPES
let bol = false; //False
console.log(bol,typeof(bol));

//UNDEFINED AND NULL
let unde; // Undefined
//let unde = null; //Null
console.log(unde);

//STORING MULTIPLE VALUES IN ARRAYS
let cards = ["Ace","King","Queen","Jack"];
console.log(cards[0]);
console.log(cards[2]);
console.log(cards[3]);

//ARRAY FEATURES
let fe = [1,2,3,4,5];
fe.push(100);
fe.pop();
fe.shift();
fe.splice(0,1);
fe.splice(0,3,11,12,13,14,15);
console.log(fe.length);
console.log(fe[5]);
console.log(fe);


//Blackjack
//by Mark Zamoyta
// ADDING ARRAYS
let deck = ["Ace of Spades",
            "Two of Spades",
            "Three of Spades"];

let playersCards = [deck[0],deck[2]];

console.log("Welcome to Blackjack!");

console.log("You are dealt: ")
console.log(" "+playersCards[0]);
console.log(" "+playersCards[1]);
