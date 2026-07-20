document.addEventListener("DOMContentLoaded", function () {

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
card.addEventListener("mouseenter", () => {
card.style.transform = "translateY(-10px)";
});

card.addEventListener("mouseleave", () => {
card.style.transform = "translateY(0)";
});
});

window.addEventListener("scroll", () => {

document.querySelectorAll("section").forEach(section=>{

const top = section.getBoundingClientRect().top;

if(top < window.innerHeight-100){
section.style.opacity="1";
section.style.transform="translateY(0)";
}

});

});

});
section{
opacity:0;
transform:translateY(50px);
transition:1s;
}

html{
scroll-behavior:smooth;
}