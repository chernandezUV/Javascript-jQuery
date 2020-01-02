'use strict';

//function Cat(name, color ) {
//  this.name = name
//  this.color = color
//}
//var cat = new Cat('Fluffy', 'White');
//display(window.name);

class Cat {
  constructor(name, color) {
    this.name = name
    this.color = color
  }
  
  speak() {
    display('Meeooow')
  }
}

var cat = new Cat('Fluffy', 'White')

display(cat)
cat.speak()

// var cat = Object.create(Object,prototype,
//   {
//     name:{
//       value:'Fluffy',
//       enumerable:true,
//       writable:true,
//       configurable:true
//     },
//     color:{
//       value:'white',
//       enumerable:true,
//       writable:true,
//       configurable:true
//     }
//   })
//   display(cat)