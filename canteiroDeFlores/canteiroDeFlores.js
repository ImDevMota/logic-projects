function verificarCanteiro (canteiro, n) {
    let result = [];
    let resultFinal = true;
    let contador = 0;
    for(let i = 0; i < canteiro.length; i++) {
            if(canteiro[i] == 1) {
                continue;
            } else if(i == 0 && canteiro[i] == 0 && canteiro[i + 1] == 0) {
                result.push(true);
                canteiro.splice(i, 1, 1);
            }else if (i == canteiro.length - 1 && canteiro[i] == 0 && canteiro[i - 1] == 0){
                result.push(true);
                canteiro.splice(i, 1, 1);
            } else if(canteiro[i] == 0 && canteiro[i - 1] == 0 && canteiro [i + 1] == 0){
                result.push(true);
                canteiro.splice(i, 1, 1);
            } else {
                result.push(false);
            }
    
    }
    
    result.forEach(r => {
        if(r == true) {
            contador++;
        }
    });

    
    if(contador >= n) {
        resultFinal = true;
    } else {
        resultFinal = false;
    }

    return (`a resposta para se é possível adicionar essa quantidade de flor(es) nova(s): ${n}, no canteiro é: ${resultFinal}`);
}

let canteiro = [];
canteiro.push(1);
canteiro.push(0);
canteiro.push(0);
canteiro.push(0);
canteiro.push(1);
let n = 1;
console.log(verificarCanteiro(canteiro, n))