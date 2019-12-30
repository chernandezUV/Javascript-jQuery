//EQUALITY OPERATORS
console.log('--------- EQUALITY OPERATORS ----------');
let var1='55';
let var2=55;
if (var1 == var2){
    console.log('Ambos son 55  ! PERO NO ¡ mismo tipo de dato')
}
if (var1 === var2){
    console.log('Ambos son 55 Y mismo tipo de dato')
}
//UNARY OPERATORS
console.log('--------- UNARY OPERATORS ----------');
let year = 1996;
let year2 = 1998;
let year3 = '2000';

console.log("1.- ",++year+" Aumento 1");
console.log("2.- ",year2+++" No aumento - Next line");
console.log("1.- ",--year+" Disminuyo 1");
console.log("2.- ",year2--+" No Disminuyo- Next line");

//LOGICAL (BOOLEAN) OPERATORS
console.log('--------- LOGICAL (BOOLEAN) OPERATORS ----------');
if (5===5 && 6===7){
    console.log(true);
}else{
    console.log(false);   
}
let user = null;
let user2 = {Lastname:'Hernandez'};
let user3 = {name:'Cesar'};
console.log(user2  || user3);

//RELATIONAL OPERATORS
console.log('--------- RELATIONAL OPERATORS ----------');
let s1 = 'Zoo';
let s2 = 'alphabet';

if (s1<s2){
    console.log(true);
}else{
    console.log(false);
}

//CONDITIONAL OPERATORS
console.log('--------- CONDITIONAL OPERATORS ----------');
var result = (3>5) ? true :false;
console.log(result);
console.log((5>4) ? 'yes':'no');

//ASSIGNMENT OPERATORS
console.log('--------- ASSIGNMENT OPERATORS ----------');
let a1 =1996;
let a2 =1996;
let a3 =1996;
let a4 =1996;
let a5 =1996;
let a6 =1996;
let a7 =1996;
let a8 =1996;
a1 += 10;
console.log(a1);
a2 -= 10;
console.log(a2);
a3 /= 10;
console.log(a3);
a4 *= 10;
console.log(a4);
a5 %= 10;
console.log(a5);
a6 <<= 10;
console.log(a6);
a7 >>= 10;
console.log(a7);
a8 >>>= 10;
console.log(a8);

