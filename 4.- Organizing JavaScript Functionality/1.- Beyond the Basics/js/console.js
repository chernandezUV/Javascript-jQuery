// function foo(){
//     var a = 1;

//     function bar() {
//         var b = 2;

//         function baz(){
//             var c = 3;

//             console.log(a,b,c)//123
//         }

//         baz();
//         console.log(a,b)//12
        
//     }

//     bar();
//     console.log(a)//1
// }
// foo();


// function makeAdder(x){
//     function add(y) {
//         return y + x;        
//     };
//     return add;
// }

// var fn = makeAdder(5);
// fn(10);
// fn(20);

// function Hello(name) {

//     function speak(lastName){
//         console.log(name,lastName);
//     }

//     function changeName(newName){
//         name=newName;
//     }

//     return {
//         say:speak,
//         changeName:changeName,
//         name:name
//     };
// }

// var fn = Hello("Hernandez");
// fn.changeName("Marc");
// fn.name;

// fn.say("Tavares");

// var o = {
//     awesome: "cool",
//     surprise: "Cute"
// };
// console.log(o.surprise);


// PRIVATE AND PUBLIC 
// function Hello(name) {

//     var id = Math.random();
//     //UPPERCASE
//     function upperFirstName(){
//         return name.toUpperCase();
//     }

//     function speak(lastName){
//         console.log(upperFirstName(),lastName);
//     }

//     var public_api = {
//         say:speak
//     };

//     return public_api;
// }

// var fn = Hello("Hernandez");
// fn.say("Tavares");

//CALLBACKS
function bar() {
    console.log("Hello World");
}
setTimeout(bar,1000);

function resp(content){
    console.log(content);
}
ajax("http://some.url.1",resp);