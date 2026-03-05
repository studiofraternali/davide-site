// ===== ANIMAZIONE AUTORE ALLO SCROLL =====

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }

    });

},{
    threshold:0.6
});

sections.forEach(section => {
    observer.observe(section);
});



// ===== MENU MOBILE =====

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

if (hamburger && mobileMenu) {

    hamburger.addEventListener("click", function (e) {
        e.stopPropagation();
        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });

    document.addEventListener("click", function (e) {
        if(!mobileMenu.contains(e.target) && !hamburger.contains(e.target)){
            mobileMenu.classList.remove("active");
            hamburger.classList.remove("active");
        }
    });

}
