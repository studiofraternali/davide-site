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

  const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const author = entry.target.querySelector(".author");

            if(author){

                setTimeout(()=>{
                    author.classList.add("visible");
                }, 800);

            }

        }

    });

},{
    threshold:0.6
});

sections.forEach(section=>{
    observer.observe(section);
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
