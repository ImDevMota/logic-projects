function DevolverNumero(numero) {
    let digitos = [];
    let numeroFinal = 0;
    let index;
    digitos = numero.split('');
    
    
    for(let c = 0; c < digitos.length; c++){
    
    if(digitos[c] == 'M' && digitos[c - 1] != 'C') {
        numeroFinal = numeroFinal + 1000;
    } else if(digitos[c] == 'C' && digitos[c + 1] == 'M') {
        numeroFinal = numeroFinal + 900;
    } else if(digitos[c] == 'D' && digitos[c - 1] != 'C') {
        numeroFinal = numeroFinal + 500;
    } else if(digitos[c] == 'C' && digitos[c + 1] == 'D') {
        numeroFinal = numeroFinal + 400;
    } else if(digitos[c] == 'C' && digitos[c + 1] != 'M' && digitos[c + 1] != 'D' && digitos[c - 1] != 'X') {
        numeroFinal = numeroFinal + 100;
    } else if(digitos[c] == 'X' && digitos[c + 1] == 'C') {
        numeroFinal = numeroFinal + 90;
    } else if(digitos[c] == 'L' && digitos[c - 1] != 'X') {
        numeroFinal = numeroFinal + 50;
    } else if(digitos[c] == 'X' && digitos[c + 1] == 'L') {
        numeroFinal = numeroFinal + 40;
    } else if(digitos[c] == 'X' && digitos[c + 1] != 'L' && digitos[c + 1] != 'C' && digitos[c - 1] != 'I') {
        numeroFinal = numeroFinal + 10;
    } else if(digitos[c] == 'I' && digitos[c + 1] == 'X') {
        numeroFinal = numeroFinal + 9;
    } else if(digitos[c] == 'V' && digitos[c - 1] != 'I') {
        numeroFinal = numeroFinal + 5;
    } else if(digitos[c] == 'I' && digitos[c + 1] == 'V') {
        numeroFinal = numeroFinal + 4;
    } else if(digitos[c] == 'I' && digitos[c + 1] != 'X' && digitos[c + 1] != 'V') {
        numeroFinal = numeroFinal + 1;
    } 
    }

    return(`o número referente ao algarismo romano ${numero} é: ${numeroFinal}`);
}

console.log(DevolverNumero('MMXXIV'));