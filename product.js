const myUnalpha = document.getElementById("coffee");
const myAlpha = document.getElementById("doughnuts");
const myBtnAlpha = document.getElementById("dou");
const myBtnUnalpha = document.getElementById("cof");

myBtnAlpha.addEventListener('click', function(){
myAlpha.style.display = 'block';
myUnalpha.style.display = 'none';});

myBtnUnalpha.addEventListener('click', function(){
myUnalpha.style.display = 'block';
myAlpha.style.display = 'none';});