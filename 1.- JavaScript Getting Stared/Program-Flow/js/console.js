//CONDITIONALS USING IF();
if (5===5){ //True
    console.log('Yes')
}

if (5>10){ //False
    console.log('No')
}

if (5>=5){ //True
    console.log('Yes')
}

let state ="FL";
let taxPercent = 0;

if (state === "FL"){
    taxPercent = 7;
}
if (state !== "FL"){
    taxPercent = 0;
}

console.log(taxPercent); //7

let score = 1000;
if (score===1000){
    score = score + 100;
}
console.log("Score is: ", score)

// IF ... ELSE 
    let state2 ="FL";
    let taxPercent2 = 0;

if (state2 === "FL"){
    taxPercent2 = 7;
} else if (state2 === "NY"){
    taxPercent2 = 8.875;
}
console.log(taxPercent2); //7

//SWITCH AND CASE
let state3 = "TX";
switch(state3){
    case 'NY':
        console.log("New York");
        break;
    case 'TX':
        console.log("Texas");
        break;
    default:
        console.log("Unknown");
        break;
}

//LOOPING WITH FOR();
    for(let i=0;i<3;i++){
        console.log(i);
    }

//LOOPING WITH WHILE();
let count = 1;
while(count<=5){
    console.log(count);
    count++;
}

//Blackjack
//by Mark Zamoyta
// ADDING LOOPS
let suits= ["Hearts",
            "Clubs",
            "Diamonds","Spades"];
let values =["Ace","King","Queen","Jack","Ten","Nine","Eight","Seven","Six","Five","Four","Three","Two"];

let deck = [];

for (let suitsIdx=0; suitsIdx < suits.length; suitsIdx++ ){
 for(let valuesIdx = 0; valuesIdx < values.length; valuesIdx++){
     deck.push(values[valuesIdx]+" of "+ suits[suitsIdx])
 }
}
for(let i=0; i<deck.length;i++){
    console.log(deck[i]);
}


console.log("Welcome to Blackjack!");

console.log("You are dealt: ")
console.log(" "+deck[0]);
console.log(" "+deck[1]);
