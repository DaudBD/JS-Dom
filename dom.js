/*
const element = document.getElementsByTagName("p");

document.getElementById("demo").innerHTML='Learning More and More:' + element[0].innerHTML;

const x = document.getElementsByClassName('intro');

document.getElementById("intro").innerHTML= 'Class id', x[0].innerHTML;

// Css Selector 

const x2 = document.querySelector('.demo1');
x2.innerHTML ='Hello World !'

const x3 = document.querySelectorAll('.demo2');

x3[1].innerHTML ='Second';

const x4 = document.forms['login'];
let text = "";
for (let i =0; i < x4.length; i++) {
    text += x4.elements[i].value + "<br>";
}
document.getElementById('demo').innerHTML = text; */

document.getElementById("demo").innerHTML = " Date: " + Date();
document.getElementsByClassName('intro')[0].style.color = 'red';
document.getElementById('intro').style.color = 'blue';
document.getElementById('intro').style.fontFamily = 'Arial';
document.getElementById('intro').style.fontSize = '30px';

document.getElementById('colorButton').addEventListener('click', function () {
  document.getElementById('dom').style.color = 'red';
});

