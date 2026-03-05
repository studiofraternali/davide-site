document.addEventListener("DOMContentLoaded", function(){

    const authors = document.querySelectorAll(".author");

    authors.forEach((author, index) => {

        setTimeout(()=>{
            author.classList.add("visible");
        }, 800 + (index * 200));

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
