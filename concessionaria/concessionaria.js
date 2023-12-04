let modelos = [];
let anos = [];
let valores = [];
let index;
let carroMaisBarato;
let valorMaisBarato;
let carroMaisCaro;
let valorMaisCaro;
let valorCaro;
let modelo;
let ano;
let valor; 
let somaValores;
let media;

for (let c = 0; c < 3; c++) {
    modelo = window.prompt('insira o modelo do carro: ');
    modelos.push(modelo);
    ano = window.prompt('insira o ano do carro: ');
    anos.push(ano);
    valor = window.prompt('insira o valor do carro: ');
    valores.push(valor);
}

valorMaisBarato = valores[0];
carroMaisBarato = modelos[0];
valorMaisCaro = valores[1];
carroMaisCaro = modelos[1];
somaValores = 0;

valores.forEach(v => {
    somaValores = somaValores + Number(v);
    index = valores.indexOf(v);
    
    if(v < valorMaisBarato) {
        carroMaisBarato = modelos[index];
        valorMaisBarato = v;
    } 

    if(v > valorMaisCaro) {
        carroMaisCaro = modelos[index];
        valorMaisCaro = v;
    } 
});

media = somaValores / 3;


console.log(`o carro mais barato é: ${carroMaisBarato} que vale ${valorMaisBarato}, o carro mais caro é: ${carroMaisCaro} que vale ${valorMaisCaro}`)
console.log(`a média dos valores dos carros é: ${media.toFixed(2)}`)