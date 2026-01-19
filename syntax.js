
document.getElementById("num").innerHTML = 123456789;
document.getElementById("deci").innerHTML = 12.3456;

document.getElementById("doubleq").innerHTML = "This is a string with double quotes.";
document.getElementById("singleq").innerHTML = 'This is a string with single quotes.';

let greeting = "welcome to javascript syntax";
const pi = 3.14159;
var isactive = true;

document.getElementById("vlet").innerHTML = greeting;
document.getElementById("vconst").innerHTML = pi;
document.getElementById("vvar").innerHTML = isactive;

let aa = 10;
const bb = 20;
var cc = 30;

document.getElementById("a").innerHTML = aa;
document.getElementById("b").innerHTML = bb;
document.getElementById("c").innerHTML = cc;

function changevalue() {
    aa = 100;
   // bb = 200;  This will cause an error
    cc = 300
document.getElementById("a").innerHTML = aa;
document.getElementById("b").innerHTML = bb;
document.getElementById("c").innerHTML = cc;
}