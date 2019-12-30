//TRY - CATCH
console.log('---------  TRY - CATCH ------------');
try {
    let car = newCar;
} catch (error) {
    console.log('error: ', error);
}
finally{
    console.log('this always executes');
}

//DEVELOPER DEFINED ERRORS
console.log('---------  DEVELOPER DEFINED ERRORS ------------');
try {
    throw new Error ('my custom error');
} catch (error) {
    console.log('error: ', error);
}
finally{
    console.log('this always executes');
}

//CREATING A PROMISE
console.log('---------  CREATING A PROMISE ------------');
let promise = new Promise(
    function(resolve,reject){
        setTimeout(resolve,100,'someValue');
    }
);

console.log(promise);

//SETTLING A PROMISE
console.log('---------  SETTLING A PROMISE ------------');
let promise2 = new Promise(
    function(resolve,reject){
        setTimeout(resolve,100,'someValue');
    }
);
promise.then(
    value=>console.log('fulfilled: '+value),
    error => console.log('rejected: '+ error)
);