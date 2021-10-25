const tempoHTML = document.querySelector('.tempo')
let tempoTotal = 1500;
let tempoRestante = 1500;
let pausa = 300;


clockTimer = setInterval(() => {
    tempoRestante--;
}, 1000);