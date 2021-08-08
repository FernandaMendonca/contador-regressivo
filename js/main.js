quandoOBolsonaroSai();

function quandoOBolsonaroSai() {
    let hoje = new Date().getTime();
    let diaMaisEsperado = new Date("december 31, 2022 24:00").getTime();
    let segundos = parseInt((diaMaisEsperado - hoje) / 1000);

    let dias = parseInt(segundos / 86400);
    segundos = segundos % 86400;

    let horas = parseInt(segundos / 3600);
    segundos = segundos % 3600;

    let minutos = parseInt(segundos / 60);
    segundos = parseInt(segundos % 60);

    let tempoRestante = `Faltam ${dias} dias e ${horas}: ${minutos}: ${segundos} horas`;
    
    if (dias >= 0) {
        document.getElementById('contador').innerHTML = tempoRestante;
        setInterval(quandoOBolsonaroSai, 1000);
    } else {
        document.getElementById('contador').innerHTML = 'Fora Bolsonaro!!';
    }
}