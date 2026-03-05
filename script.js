document.addEventListener("DOMContentLoaded", function(){

    const authors = document.querySelectorAll(".author");

    authors.forEach((author) => {

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    setTimeout(()=>{
                        author.classList.add("visible");
                    }, 800);

                }

            });

        },{
            threshold:0.5
        });

        observer.observe(author);

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

});
