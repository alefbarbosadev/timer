function getTimeFromSeconds(second) {
    const data = new Date (second * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone: 'UTC'
    });
}


const relogio = document.querySelector('.relogio');
const iniciarButton = document.querySelector('.iniciar');
const pausarButton = document.querySelector('.pausar');
const zerarButton = document.querySelector('.zerar');

let segundos = 0;
let timer;

function iniciaRelogio() {
     timer = setInterval (function() {
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
}

iniciarButton.addEventListener('click', function(event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
});

pausarButton.addEventListener('click', function(event) {
    relogio.classList.add('pausado');
    clearInterval(timer);
});

zerarButton.addEventListener('click', function(event) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
    relogio.classList.remove('pausado');

});

