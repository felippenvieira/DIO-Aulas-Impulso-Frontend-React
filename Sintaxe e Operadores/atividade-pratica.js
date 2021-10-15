function comparaNumeros(numero1, numero2) {
    const primeiraFrase = criaPrimeiraFrase(numero1, numero2);
    const segundaFrase = criaSegundaFrase(numero1, numero2);

    return `${primeiraFrase} ${segundaFrase}`;

}

function criaPrimeiraFrase(numero1, numero2) {
    let primeiraFrase = `Os números ${numero1} e ${numero2}`;
    let simNao = 'não'

    if (numero1 === numero2) {
        simNao = ``;
    }

    return `${primeiraFrase} ${simNao} são iguais.`;
}

function criaSegundaFrase(numero1, numero2) {
    const soma = numero1 + numero2;
    let comparaDez = 'menor';
    let comparaVinte = 'menor';

    if (soma > 10) {
        comparaDez = 'maior'
    }

    if (soma > 20) {
        comparaVinte = 'maior';
    }

    return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

console.log(comparaNumeros(1, 10));