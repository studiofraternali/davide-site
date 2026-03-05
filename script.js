window.addEventListener("load", function(){

    const stack = document.querySelector(".stack");
    const sections = document.querySelectorAll(".section");
    const authors = document.querySelectorAll(".author");

    let index = 0;

    function showSection(i){

        stack.style.transform = "translateY(-" + (i * 100) + "vh)";

        // nasconde tutti gli autori
        authors.forEach(a => a.classList.remove("visible"));

        // mostra autore della sezione attiva
        const author = sections[i].querySelector(".author");

        if(author){
            setTimeout(()=>{
                author.classList.add("visible");
            },800);
        }

    }

    function rotate(){

        index++;

        if(index >= sections.length){
            index = 0;
        }

        showSection(index);

    }

    setInterval(rotate, 5000);

    // mostra autore della prima sezione
    setTimeout(()=>{
        const firstAuthor = sections[0].querySelector(".author");
        if(firstAuthor) firstAuthor.classList.add("visible");
    },800);


    // MENU MOBILE

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

});
