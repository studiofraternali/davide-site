const stack = document.getElementById("stack");
const sections = Array.from(stack.children);
const total = sections.length;

let index = 0;

// Assicuriamoci che lo stack abbia transizione
stack.style.transition = "transform 3.2s cubic-bezier(.4,0,.2,1)";

// Mostra prima sezione
stack.style.transform = "translateY(0)";

// Rotazione automatica
function nextRotation(){

    index++;

    if(index >= total){
        // Se siamo oltre l'ultima sezione
        index = 0;
    }

    stack.style.transform = "translateY(-" + (index * 100) + "vh)";
}

setInterval(nextRotation, 5000);


// ===== MENU =====

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

if(hamburger && mobileMenu){

    hamburger.addEventListener("click",function(e){
        e.stopPropagation();
        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });

    document.addEventListener("click",function(e){
        if(!mobileMenu.contains(e.target) && !hamburger.contains(e.target)){
            mobileMenu.classList.remove("active");
            hamburger.classList.remove("active");
        }
    });

}
