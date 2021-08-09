quandoOBolsonaroSai();

function quandoOBolsonaroSai() {
    const diaMilissegundos = 1000 * 60 * 60 * 24;
    const hoje = new Date().getTime();
    const diaMaisEsperado = new Date("12/31/2022").getTime();

    const diferencaEntreDatas = diaMaisEsperado - hoje;

    const diasRestantes = Math.round(diferencaEntreDatas / diaMilissegundos);

    const tempoRestante = `Faltam ${diasRestantes} dias`;

    if (diasRestantes >= 0) {
        document.getElementById('contador').innerHTML = tempoRestante;
        setInterval(quandoOBolsonaroSai, 1000);
    } else {
        document.getElementById('contador').innerHTML = 'Fora Bolsonaro!!';
    }
}