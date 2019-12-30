//CONSTANST
console.log("--------------------CONSTANST--------------------");

const carId = 100; // the value not change
console.log(carId);

//LET AND VAR
console.log("---------------LET AND VAR-------------------");
let carId2 = 12;
console.log(carId2);

if (true){
  var foo = 9;
}
console.log(foo);

// REST PARAMETERS
console.log("----------------REST PARAMETERS---------------");
function sendCars(...allCarIds) { 
    allCarIds.forEach(id=>console.log(id));
 }
sendCars('Monday',100,200,555,'Sunday');


//DESCTRUCTURING ARRAYS
console.log("--------------DESCTRUCTURING ARRAYS--------------");
let carIds = [1,2,3];
let [car1, car2, car3] = carIds;
console.log(car1,car2,car3);

let carIds2 = [7,2,3,4,5];
let car12,remainigCars;
[car12,...remainigCars] = carIds2;
console.log(car12,remainigCars);

//DESCTRUCTURING OBJECTS
console.log("-------------DESCTRUCTURING OBJECTS-------------");
let car = {id:400 , style:'chevrolet'};
let {id,style} = car
console.log(car);
console.log(id,style);

let cars = {ide:763 , styl:'Nissan'};
let ide,styl;
({ide,styl} = cars);
console.log(cars);
console.log(ide,styl);

//SPREAD SYNTAX
console.log("-------------SPREAD SYNTAX-------------");

function startCars (ca1,ca2,ca3,...rest){
  console.log(ca1,ca2,ca3);
  console.log(rest);
}

let caId=([100,200,300,500,599,533]); //abc
startCars(...caId);

//TYPEOF
console.log("-------------TYPEOF-------------");
console.log(typeof(1));
console.log(typeof(2.2376));
console.log(typeof(true));
console.log(typeof('Hola'));
console.log(typeof(function(){}));
console.log(typeof({}));
console.log(typeof(null));
console.log(typeof(undefined));
console.log(typeof(NaN))

//COMMON TYPE CONVERSIONS
console.log("-------------COMMON TYPE CONVERSIONS-------------");
foo.toString(); // Convert to String
Number.parseInt('55'); // Convert to Int
Number.parseFloat('55.76');

console.log(Number.parseInt('12JHG12jgfDS'));

//COMMON TYPE CONVERSIONS
console.log("-------------COMMON TYPE CONVERSIONS-------------");
for (let i=0; i<5; i++) { 
  if (i === 3 ||  i===2) {
    continue;
  }
  console.log(i);
}
