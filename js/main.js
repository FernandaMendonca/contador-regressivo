quandoOBolsonaroSai();

function quandoOBolsonaroSai() {
    var hoje = new Date().getTime();
    var diaMaisEsperado = new Date("december 31, 2022 24:00").getTime();

    var segundos = parseInt((diaMaisEsperado - hoje) / 1000);

    var dias = parseInt(segundos / 86400);
    segundos = segundos % 86400;

    var horas = parseInt(segundos / 3600);
    segundos = segundos % 3600;

    var minutos = parseInt(segundos / 60);
    segundos = parseInt(segundos % 60);

    var tempoRestante = ('Faltam ' + dias + ' dias e ' + horas + ':' + minutos + ':' + segundos);
    if (dias >= 0) {
        document.getElementById('contador').innerHTML = tempoRestante;
        setInterval(quandoOBolsonaroSai, 1000);
    } else {
        document.getElementById('contador').innerHTML = 'Terminou';
    }
}