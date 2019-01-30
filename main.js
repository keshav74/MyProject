console.log('THis is main FIle');

var myObj = {
    name: "lokesh",
    age: 20
};

console.log('This is addition ::: ', addition(20));
console.log('This is addition ::: ' + myObj);
console.log('This is addition ::: ', myObj);

var a = 10;


setInterval(function () {
    var b = addition(a, 10);
    console.log(b);
    a += 10;
}, 1000);

setTimeout(() => {
    console.log('sdfsdfsdfsdfsdfsdfsdf');
}, 5000);

function addition(a, b) {
    return a + b;
}