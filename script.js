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
  behavior: "smooth"
      });
    }
  });
});

// Navbar shadow on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (navbar) {
    if (window.scrollY > 30) {
      navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.35)";
    } else {
      navbar.style.boxShadow = "none";
    }
  }
});

// Reveal animation
const cards = document.querySelectorAll(".about-card, .service-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "0.6s";
  observer.observe(card);
});