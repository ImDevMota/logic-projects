function duasSomas (numeros, numeroAlvo) {
    let indexs = [];

    console.log(`Números do Array: ${numeros}`);
    console.log(`Número Alvo: ${numeroAlvo}`)
    for(let c = 0; c < numeros.length; c++) {
        numeros.forEach(n => {
            if(numeros[c] + n == numeroAlvo && indexs.length < 1) {
                indexs.push(numeros.indexOf(numeros[c]), numeros.indexOf(n));
            }
        });
    }
    return indexs;
}

let numeros = [];
let numeroAlvo = 10;

numeros.push(1);
numeros.push(7);
numeros.push(11);
numeros.push(9);
numeros.push(23);
numeros.push(8);
numeros.push(0);

console.log(`indices dos dois números do array, que quando somados o resultado é igual ao valor do número alvo: `, duasSomas(numeros, numeroAlvo));