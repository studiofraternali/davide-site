window.addEventListener("load", function(){

/* ===== HOMEPAGE ROTATION ===== */

const stack = document.querySelector(".stack");

if(stack){

const authors = document.querySelectorAll(".author");

function showAuthor(section){

authors.forEach(a => a.classList.remove("visible"));

const author = section.querySelector(".author");

if(author){
setTimeout(()=>{
author.classList.add("visible");
},800);
}

}

function rotate(){

const first = stack.children[0];

stack.style.transition = "transform 3.2s cubic-bezier(.4,0,.2,1)";
stack.style.transform = "translateY(-100vh)";

showAuthor(stack.children[1]);

setTimeout(()=>{

stack.style.transition = "none";
stack.style.transform = "translateY(0)";

stack.appendChild(first);

},3200);

}

function scheduleRotation(){

const randomDelay = 5200 + Math.random()*1200;

setTimeout(()=>{
rotate();
scheduleRotation();
},randomDelay);

}

scheduleRotation();

show

/* ===== MOBILE MENU ===== */

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const mobileClose = document.getElementById("mobileClose");

if(hamburger && mobileMenu){

hamburger.addEventListener("click", function(){
mobileMenu.classList.add("active");
});

}

if(mobileClose && mobileMenu){

mobileClose.addEventListener("click", function(){
mobileMenu.classList.remove("active");
});

}
