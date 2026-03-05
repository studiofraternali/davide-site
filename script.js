window.addEventListener("load", function(){

    const stack = document.querySelector(".stack");
    const sections = document.querySelectorAll(".section");
    const authors = document.querySelectorAll(".author");

    let index = 0;

    function rotateSections(){

        index++;

        if(index >= sections.length){
            index = 0;
        }

        stack.style.transform = "translateY(-" + (index * 100) + "vh)";
    }

    setInterval(rotateSections, 5000);


    // AUTORE ANIMATO

    authors.forEach((author, i) => {

        setTimeout(()=>{
            author.classList.add("visible");
        }, 900 + (i * 200));

    });


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
