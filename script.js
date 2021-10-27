const go = document.querySelector('.go')
const pause = document.querySelector('.pause')
const tempo = document.querySelector('.tempo')
var tempoEmMinutos = 25;
var expiracao = new Date(new Date().getTime() + tempoEmMinutos * 60000);



function callback() {
    // Função a ser executada a cada 1 segundo
    faltam = expiracao - new Date();
    if (faltam <= 0) {
        window.clearInerval(contador);
        console.log("Prazo expirado");
    }
    minutos = Math.floor(faltam / 60000);
    segundos = faltam % 60000;
    tempoRestante = `${minutos}:${segundos.toString().substring(0,2)}`;
    tempo.innerHTML = tempoRestante;
}

// Variável com o intervalo do setInterval()
function intervalo() {
    var intervalo = setInterval(callback, 1000)
}
go.addEventListener('click', intervalo)


// Parando o intervalo
pause.addEventListener('click', function() {
    tempo.innerHTML = 'Pausado'
    clearInterval(intervalo);

})