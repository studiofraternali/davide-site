const stack = document.getElementById("stack");
const sections = Array.from(stack.children);
const total = sections.length;

sections.forEach(sec => stack.appendChild(sec.cloneNode(true)));

let index = 0;
let autoRotate = true;

function showSection(i){

    stack.style.transform = "translateY(-" + (i*100) + "vh)";

    const realIndex = i % total;

    // Nascondi solo l'autore precedente
    const prevIndex = (realIndex - 1 + total) % total;
    const prevSection = stack.children[prevIndex];
    if(prevSection){
        const prevAuthor = prevSection.querySelector(".author");
        if(prevAuthor){
            prevAuthor.classList.remove("visible");
        }
    }

    // Mostra autore corrente
    const visibleSection = stack.children[realIndex];
    if(visibleSection){
        const author = visibleSection.querySelector(".author");
        if(author){
            setTimeout(()=> author.classList.add("visible"),1200);
        }
    }
}

function nextRotation(){

    if(!autoRotate) return;

    index++;
    showSection(index);

    if(index === total){

        setTimeout(()=>{

            stack.style.transition = "none";
            stack.style.transform = "translateY(0)";
            index = 0;

            setTimeout(()=>{
                stack.style.transition = "transform 3.2s cubic-bezier(.4,0,.2,1)";
            },50);

        },2800);
    }

    setTimeout(nextRotation, 5000);
}

setTimeout(nextRotation, 5000);



const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

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