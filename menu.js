document.addEventListener("DOMContentLoaded", function(){

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const mobileClose = document.getElementById("mobileClose");

if(!hamburger || !mobileMenu) return;

hamburger.addEventListener("click", function(){
mobileMenu.classList.add("active");
});

if(mobileClose){
mobileClose.addEventListener("click", function(){
mobileMenu.classList.remove("active");
});
}

});