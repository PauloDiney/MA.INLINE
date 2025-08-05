document.addEventListener('DOMContentLoaded', () => {
    // Lógica de navegação
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    navMenu.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    
    // Lógica dos botões de cidade
    const btnPrudente = document.getElementById('btn-prudente');
    const btnFeijo = document.getElementById('btn-feijo');
    const dayText = document.getElementById('day-text');
    const timeText = document.getElementById('time-text');

    if (btnPrudente && btnFeijo && dayText && timeText) {
        btnPrudente.addEventListener('click', () => {
            dayText.innerText = 'SEGUNDA A QUINTA-FEIRA';
    
            btnPrudente.classList.add('active');
            btnFeijo.classList.remove('active');
        });

        btnFeijo.addEventListener('click', () => {
            dayText.innerText = 'SEXTA-FEIRA';
            btnFeijo.classList.add('active');
            btnPrudente.classList.remove('active');
        });

        btnPrudente.classList.add('active'); // Inicia com Prudente ativo
    }
});
