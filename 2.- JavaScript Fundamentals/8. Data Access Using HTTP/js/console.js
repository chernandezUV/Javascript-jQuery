//HTTP REQUESTS USING XHR
console.log('- HTTP REQUESTS USING XHR -');
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        console.log(this.responseText);
    }
};
xhttp.open("GET", "http://myid.mockapi.io/api/v1/users",true);
xhttp.send();

//HTTP REQUESTS USING JQUERY
console.log('----- HTTP REQUESTS USING JQUERY -----');
import $ from 'jquery';
let promise = $.get("http://5b32a4fd82407e001413");

promise.then(
    data => console.log('success: ', data),
    error => console.log('error: ',error)
);

//JQuery and HTTP POST
console.log('----- JQuery and HTTP POST -----');

import $ from 'jquery';

let user = {
    name: 'Cesar Hernandez',
    avatar: 'cesar.png',
};

let promise = $.post(
    "http://myid.mockapi.io/api/v1/users",user
);
promise .then(
    data => console.log('data: ',data),
    error => console.log('error: ', error)
);