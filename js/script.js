// <!-- Script para la cuenta regresiva -->

  const countdown = document.getElementById('countdown');

  // Establecer la fecha del evento
  const eventDate = new Date('2025-08-31T00:00:00').getTime();

  // Actualizar la cuenta regresiva
  const updateCountdown = () => {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    // Cálculos de tiempo
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


  // Función que ajusta los delays de AOS para pantallas pequeñas
function adjustAOSDelay() {
  var cards = document.querySelectorAll('.col-md-4'); // Selecciona los cards

  if (window.innerWidth <= 768) {  // Si la pantalla es móvil (<=768px)
    cards.forEach(function(card) {
      card.setAttribute('data-aos-delay', '200');  // Asigna un delay de 200 a todos
    });
  } else {  // Pantallas grandes
    cards[0].setAttribute('data-aos-delay', '200');
    cards[1].setAttribute('data-aos-delay', '400');
    cards[2].setAttribute('data-aos-delay', '600');
  }

  // Forzar que AOS se vuelva a inicializar para aplicar los cambios
  AOS.refresh();
}

// Ejecuta la función al cargar la página y al redimensionar la ventana
window.addEventListener('load', adjustAOSDelay);
window.addEventListener('resize', adjustAOSDelay);

document.addEventListener('DOMContentLoaded', function () {
  const newsletterForm = document.getElementById('newsletterForm');
  const emailInput = document.getElementById('email');
  const successMessage = document.getElementById('successMessage');

  //Validación y el envío del formulario
  newsletterForm.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();

      // Reinicia la clase de validación
      newsletterForm.classList.remove('was-validated');

      // Verifica si el formulario es válido
      if (newsletterForm.checkValidity()) {
          // Si el formulario es válido, muestra el mensaje de éxito
          successMessage.classList.remove('d-none');
          successMessage.classList.add('d-block');

          // Limpia el formulario 
          newsletterForm.reset();
          newsletterForm.classList.remove('was-validated');

      } else {
          // Si el formulario no es válido
          newsletterForm.classList.add('was-validated');
      }
  });

  // Ocultar el mensaje de éxito cuando el usuario comienza a escribir nuevamente
  emailInput.addEventListener('input', function () {
      successMessage.classList.add('d-none');
  });
});

const productInfo = [
  { price: "$19.99", description: "Bandera Riverland" },
  { price: "$14.99", description: "Camiseta Riverland" },
  { price: "$34.99", description: "Sudadera Riverland" }
];

const carousel = document.querySelector("#productCarousel");
const priceText = document.querySelector("#productPrice h6");
const descriptionText = document.querySelector("#productDescription h6");

carousel.addEventListener("slide.bs.carousel", function(event) {
  const nextIndex = event.to;
  const { price, description } = productInfo[nextIndex];
  
  // Actualiza solo el contenido de texto interno, sin reemplazar los elementos h6
  priceText.innerText = price;
  descriptionText.innerText = description;
});
