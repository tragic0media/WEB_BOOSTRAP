// <!-- Script para la cuenta regresiva -->

  const countdown = document.getElementById('countdown');

  // Establecer la fecha del evento
  const eventDate = new Date('2024-12-31T00:00:00').getTime();

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
