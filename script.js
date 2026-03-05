window.addEventListener("load", function(){

    const stack = document.querySelector(".stack");
    const sections = document.querySelectorAll(".section");
    const authors = document.querySelectorAll(".author");

    let index = 0;

    function showSection(i){

        stack.style.transform = "translateY(-" + (i * 100) + "vh)";

        authors.forEach(a => a.classList.remove("visible"));

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

    showSection(0);

});
