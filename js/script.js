// CUENTA ATRAS 

const countdown = document.getElementById('countdown');

  
const eventDate = new Date('2025-08-31T00:00:00').getTime();


const updateCountdown = () => {
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    countdown.innerHTML = "¡El evento ha comenzado!";
  }
};

const countdownInterval = setInterval(updateCountdown, 1000);


//  AOS  


function adjustAOSDelay() {
var cards = document.querySelectorAll('.col-md-4'); 

if (window.innerWidth <= 768) {  
  cards.forEach(function(card) {
    card.setAttribute('data-aos-delay', '200');  
  });
} else {  
  cards[0].setAttribute('data-aos-delay', '200');
  cards[1].setAttribute('data-aos-delay', '400');
  cards[2].setAttribute('data-aos-delay', '600');
}


AOS.refresh();
}


window.addEventListener('load', adjustAOSDelay);
window.addEventListener('resize', adjustAOSDelay);





// MERCH 



const productInfo = [
{ price: "19.99€", description: "Bandera Riverland" },
{ price: "14.99€", description: "Camiseta Riverland" },
{ price: "34.99€", description: "Sudadera Riverland" }
];

const carousel = document.querySelector("#productCarousel");
const priceText = document.querySelector("#productPrice h6");
const descriptionText = document.querySelector("#productDescription h6");

carousel.addEventListener("slide.bs.carousel", function(event) {
const nextIndex = event.to;
const { price, description } = productInfo[nextIndex];


priceText.innerText = price;
descriptionText.innerText = description;
});





//  EDAD FORMULARIO
function updateAgeValue(value) {
document.getElementById('ageValue').textContent = value;
}




