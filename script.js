window.addEventListener("load", function(){

    const stack = document.querySelector(".stack");
    const authors = document.querySelectorAll(".author");

    function showAuthor(section){

        authors.forEach(a => a.classList.remove("visible"));

        const author = section.querySelector(".author");

        if(author){
            setTimeout(()=>{
                author.classList.add("visible");
            },800);
        }

    }

    function rotate(){

        const first = stack.children[0];

        stack.style.transition = "transform 3.2s cubic-bezier(.4,0,.2,1)";
        stack.style.transform = "translateY(-100vh)";

        showAuthor(stack.children[1]);

        setTimeout(()=>{

            stack.style.transition = "none";
            stack.style.transform = "translateY(0)";

            stack.appendChild(first);

        },3200);

    }

    setInterval(rotate, 5600);

    showAuthor(stack.children[0]);

});
