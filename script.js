// menu garis 3
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.onclick = function(){
    menu.classList.toggle("show");
};


// animasi scroll
const faders = document.querySelectorAll(".fade");

function showOnScroll(){
    const trigger = window.innerHeight * 0.8;

    faders.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if(top < trigger){
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);