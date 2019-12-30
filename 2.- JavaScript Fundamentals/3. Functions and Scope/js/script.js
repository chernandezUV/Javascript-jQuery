//FUNCTIONS SCOPE
console.log("-------------- FUNCTION SCOPE -------------------")

function startCar(carId){
    let message = "Cesar Hernandez ...";
    let startFn = function turnKey(){
        let message = "Tavares";
    };
    startFn();
    console.log(message);

}
startCar(123);

//BLOCK SCOPE
console.log("-------------- BLOCK SCOPE -------------------")
let msj = 'Salida';
if (5===5){
    let msj = 'Entrada';
    console.log(msj);
} console.log(msj);

//IIFE´S
console.log("-------------- IIFE'S -------------------")
let app = (function(){
    let card = 123;
    console.log("En funcion...")
    return{};
})();
console.log(app);

//CLOSURES
console.log("-------------- CLOSURES -------------------")
  let ap = (function(){
      let ca=12345;
      let get =function(){
          return ca;
      };
      return {
          get:get
      };
  })();
  console.log(ap.get());

//KEYWORD
console.log("-------------- KEYWORD -------------------")
let fn = function(){
    console.log(this===window);
};fn();

let o = {
    n1:12345,
    n2: function(){
        return this.n1;
    }
}; console.log(o.n2());

//CALL
console.log("-------------- CALL -------------------")
let ob = {
    carId:123,
    getId: function(){
        return this.carId;
    }
};
let newCar = { carId:456 };
console.log(ob.getId.call(newCar));

let oa = {
    carId:123,
    getId: function(abc){
        return abc+this.carId;
    }
};
let newCa = { carId:456 };
console.log(oa.getId.apply(newCa,['ID: ']));

//BIND
console.log("-------------- BIND -------------------");
let obc = {
    carId:123,
    getId: function(){
        return this.carId;
    }
};
let newC = { carId:456 };
let wa = obc.getId.bind(newC);
console.log(wa());

//ARROW FUNCTIONS
console.log("-------------- ARROW FUNCTIONS ------------------");
let g = () => 123;
console.log(g()); //123

let ga = prefix => prefix + 123;
console.log(ga('ID: ')); //123

let gat = (prefix,suffix,sufb) => prefix + 123 + suffix + sufb;
console.log(gat('ID: ','!',' Extra'));

let ges = (pre,suf) => {
    return pre + 123 + suf;
};

console.log(ges('ID ',' !'));

//DEFAULT PARAMETERS
console.log("----------- DEFAULT PARAMETERS ----------------");

var track = function (num,city='ny'){
    return (`Tracking ${num} in ${city}`);
};
console.log(track(123));
console.log(track(123,'Hola'));
