// CONSTRUCTOR FUNCTIONS
console.log('-------  CONSTRUCTOR FUNCTIONS  ----------------');
function Car(id){
    this.caId = id;
}
let car = new Car(123);
console.log(car.caId);

//METHODS
function sa(id){
    this.ce = id;
    this.start = function(){
        console.log('Start: '+this.ce);
    };
}
let c = new sa(123);
c.start();

// PROTOTYPES
console.log('-------  PROTOTYPES  ----------------');

// WITHOUT PROTOTYPES
function re (id){
    this.ci = id;
    this.st=function(){
        console.log('Start: ' + this.ci);
    };
}
let cw = new re(12345);
cw.st();

// WITH PROTOTYPES
function sd(oi){
    this.cd=oi;
}
sd.prototype.st=function(){
    console.log('Start '+ this.cd);
};
let wq = new sd(1234);
wq.st();

String.prototype.hello = function (){
    return this.toString() + 'Hello ';
};
console.log('Foo '.hello()); // FOO HELLO

// JSON - JAVASCRIPT OBJECT NOTATION
console.log('----  OBJECT / JSON - JAVASCRIPT  --------');
let pa = {
    id:1234567890,
    style: 'Convertible'
};
console.log(JSON.stringify(pa));
console.log(pa);

let pe = [
    {cr:123},
    {cr:456},
    {cr:789}
]
console.log(JSON.stringify(pe));

let jsonIn = `
            [
    {"rd":"abc"}, 
    {"rd":"def"},  
    {"rd":"ghi"}  ]`;

let caIds = JSON.parse(jsonIn);
console.log((caIds));

// ARRAY ITERATION
console.log('----  ARRAY ITERATION  --------');
let ab = [
    {as:987, style: 'Sedan'},
    {as:654, style: 'Covertible'},
    {as:321, style: 'Sedan'}
];
ab.forEach(cae => console.log(cae));
ab.forEach((cae,index) => console.log(cae,index));
console.log('------ Array Filtering Style------');
let ac = [
    {sa1 : 567, style:'Sedan'},
    {sa1 : 890, style:'Convertible'},
    {sa1 : 112, style:'Sedan'}
];
let convertible = ac.filter(
    se=>se.style==='Convertible'
);
console.log(convertible);

console.log('------ Array Filtering Sa1------');
let ae = [
    {se1 : 567, styl:'Sedan'},
    {se1 : 890, styl:'Convertible'},
    {se1 : 112, styl:'Sedan'}
];
let res = ae.filter(
    si=>si.se1>500
);
console.log(res);