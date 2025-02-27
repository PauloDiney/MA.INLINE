// This file contains the JavaScript code for the carousel component functionality.

let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carrosel');
const totalItems = carouselItems.length;
const intervalTime = 3000; // Tempo em milissegundos para trocar automaticamente

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
});

function updateCarousel() {
    carouselItems.forEach((item, index) => {
        item.style.display = index === currentIndex ? 'block' : 'none';
    });
}

// Initialize the carousel by displaying the first item
updateCarousel();

// Set interval to automatically change the carousel item
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}, intervalTime);