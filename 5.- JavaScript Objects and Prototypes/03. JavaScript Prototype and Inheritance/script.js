'use strict';

// var arr = ['Red','Green','Yellow','White']
// var last = arr[arr.length-1];
// display(last)

// var arr = ['Red','Green','Yellow','White']
// Object.defineProperty(Array.prototype,"last",{get: function () { 
//     return this[this.length-1]
//  }})
//  var last = arr.last;
// display(last)

// var arr2 = ['one', 'two','three']
// display(arr2.last);

// var Mifuncion = function () { }
//     display(Mifuncion.prototype);
 
// var cat = {name: 'CESAR'}
// display(cat.__proto__) //Object


// function Cat(name,color) {
//     this.name=name;
//     this.color=color;
// }
// var flu = new Cat('Fluffy','Red');
// Cat.prototype.age=5;

// var muf = new Cat("Muffi","Brown")

// display(flu);
// display(muf);

// flu.age = 7;
// display(flu.age);
// display(Cat.prototype);
// display(flu.__proto__);


//FUNCTION WITH CLASSES
class Animal{
    constructor(voice){
        this.voice = voice || 'Grunt'
    }

    speak(){
        display(this.voice);
    }
}

class Cat extends Animal{
    constructor(name,color){
        super ('Meow')
        this.name=name;
        this.color=color;
    }
}
var fluffy = new Cat ('Fluffy', 'White');
display(fluffy);
display(fluffy.constructor);
display(Object.keys(fluffy));