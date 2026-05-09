// Función para desplazar los carruseles
function moveCarousel(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    const scrollAmount = 300;
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

// Validación y envío del formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('¡Gracias por tu opinión! Mensaje enviado con éxito.');
    this.reset();
});