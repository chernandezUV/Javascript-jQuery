'use strict';

// var cat = {
//   name:"Fluffy",
//   color:"Print this property"
// }
// display(Object.getOwnPropertyDescriptor(cat,"color"));


// var cat = {
//   name:{first:"Fluffy" , last:"LaBeouf"},
//   color:"Green"
// }

// Object.defineProperty(cat,"name",{writable:false});
// cat.name.first="Perro";
// display(Object.getOwnPropertyDescriptor(cat,"name"));
// display(cat)

// var cat = {
//   name:{first:"Fluffy" , last:"LaBeouf"},
//   color:"Green",
//   age:12
// }

// for (var propertyName in cat){
//   display(propertyName + " -> "+cat[propertyName]);
// }

var cat = {
name:{first:"Fluffy" , last:"LaBeouf"},
color:"Green",
age:12
}

Object.defineProperty(cat,"fullName",{
  get: function () {
    return "First---" + this.name.first + " Second ---" + this.name.last;
  },
  set: function (value) {
    var nameParts = value.split(" ")
    this.name.first = nameParts[0]
    this.name.last = nameParts[1]
  }
});

display(cat.fullName)
cat.fullName = "Nuevo Nombre";
display(cat.fullName);
display(cat.name.first)
display(cat.name.last)

























