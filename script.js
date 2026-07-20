document.addEventListener("DOMContentLoaded", () => {

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
card.addEventListener("mouseenter", () => {
card.style.transform = "translateY(-10px) scale(1.03)";
});

card.addEventListener("mouseleave", () => {
card.style.transform = "translateY(0) scale(1)";
});
});

const form = document.querySelector("form");

form.addEventListener("submit", function(e){
e.preventDefault();
alert("Thank you! Your message has been received. YoviX will contact you soon.");
form.reset();
});

});