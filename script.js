window.addEventListener("load", function(){

    const stack = document.querySelector(".stack");
    let sections = document.querySelectorAll(".section");

    // duplica la prima sezione per creare il loop invisibile
    const firstClone = sections[0].cloneNode(true);
    stack.appendChild(firstClone);

    sections = document.querySelectorAll(".section");

    const authors = document.querySelectorAll(".author");

    let index = 0;

    function showSection(i){

        stack.style.transform = "translateY(-" + (i * 100) + "vh)";

        // nasconde tutti gli autori
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

        stack.style.transform = "translateY(-" + (index * 100) + "vh)";

        // quando arriviamo alla sezione clonata
        if(index === sections.length - 1){

            setTimeout(()=>{

                stack.style.transition = "none";
                stack.style.transform = "translateY(0)";
                index = 0;

                setTimeout(()=>{
                    stack.style.transition = "transform 3.2s cubic-bezier(.4,0,.2,1)";
                },50);

            },3200);

        }

        // gestione autore
        authors.forEach(a => a.classList.remove("visible"));

        const author = sections[index].querySelector(".author");

        if(author){
            setTimeout(()=>{
                author.classList.add("visible");
            },800);
        }

    }

    setInterval(rotate, 5000);

    showSection(0);

});
