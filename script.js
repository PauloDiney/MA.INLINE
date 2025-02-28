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

document.getElementById('btn-prudente').addEventListener('click', function() {
    document.getElementById('day').innerText = 'TERÇA-FEIRA';
    document.getElementById('time').innerText = 'HORÁRIO - 18:30H ÁS 19:30H';
    document.getElementById('description').innerText = 'Para crianças iniciantes até 07 anos';
    document.getElementById('remove-p').innerText = '*obs - por enquanto só temos turma na terça'
    toggleSection(true);
    toggleActiveButton('btn-prudente');
    updateClassItems('R$ 30,00', 'R$ 30 x 4 = R$ 120', 'R$ 35 x 4 = R$ 140');
});

document.getElementById('btn-feijo').addEventListener('click', function() {
    document.getElementById('day').innerText = 'SEXTA-FEIRA';
    document.getElementById('time').innerText = 'HORÁRIO - 17:00H ÁS 18:00H  18:00H ÁS 19:00H';
    document.getElementById('remove-p').innerText = '';
    toggleSection(false);
    toggleActiveButton('btn-feijo');
    updateClassItems('R$ 25,00', 'R$ 25 x 4 = R$ 100', '');
});

function toggleSection(add) {
    var section = document.getElementById('remove');
    if (add) {
        if (!section) {
            const newSection = document.createElement('section');
            newSection.id = 'remove';
            newSection.className = 'clas-itens-1';
            newSection.innerHTML = `
                <h2>INDIVIDUAL</h2>
                <p>R$ 35,00</p>
                <button>Contato</button>
            `;
            document.querySelector('.clas-align').appendChild(newSection);
        }
    } else {
        if (section) {
            section.remove();
        }
    }
}

function toggleActiveButton(activeButtonId) {
    document.getElementById('btn-prudente').classList.remove('active');
    document.getElementById('btn-feijo').classList.remove('active');
    document.getElementById(activeButtonId).classList.add('active');
}

function updateClassItems(groupPrice, monthlyPrice1, monthlyPrice2) {
    document.getElementById('mud-1').innerText = groupPrice;
    document.querySelector('.mud-2').innerText = monthlyPrice1;
    document.querySelector('.mud-3').innerText = monthlyPrice2;
}