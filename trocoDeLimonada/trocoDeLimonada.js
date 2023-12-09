function verificarTransacao(notas) {
    let index = notas.length;
    let levantamento = [];
    let troco5;
    let troco10;
    let caixaFinal = [];
    let resposta;
    levantamento.push(0);
    levantamento.push(0);
    levantamento.push(0);
    let caixa = [];

    for(let c = 0; c < index; c++){
        levantamento[0] = 0;
        levantamento[1] = 0;
        levantamento[2] = 0;

        caixa.forEach(nota => {
            if(nota == 5) {
                levantamento[0] = levantamento[0] + 1; 
            } else if(nota == 10) {
                levantamento[1] = levantamento[1] + 1;
            } else if(nota == 20) {
                levantamento[2] = levantamento[2] + 1;
            }
        });


        if(notas[c] == 5) {
            caixa[c] = 5;
        } else if (notas[c] == 10 && levantamento[0] >= 1) {
            caixa[c] = 10;
               
            if(caixa.find((nota) => nota == 5) != undefined) {
                resposta = true;
                caixa.splice(caixa.indexOf(5), 1);
            }

        } else if (notas[c] == 20 && (levantamento[1] >= 1 && levantamento[0] >= 1) || levantamento[0] >= 3) {
            caixa[c] = 20;
            troco5 = 0;
            troco10 = 0;
            
            for(let n = 0; n <= index; n++) {
                if (levantamento[0] >= 3){
                    
                    if(caixa.find((nota) => nota == 5) != undefined) {
                        
                        troco5++;
                        caixa.splice(caixa.indexOf(5), 1);
                    }
                    
                    if(troco5 == 3) {
                        resposta = true;
                        break;
                    } else {
                        resposta = false;
                    }
                } else if(levantamento[0] >= 1 && levantamento[1] >= 1) {
                    if(caixa.find((nota) => nota == 5) != undefined && troco5 < 1) {
                        troco5++;
                        caixa.splice(caixa.indexOf(5), 1);
                    } else if(caixa.find((nota) => nota == 10) != undefined && troco10 < 1) {
                        troco10++;
                        caixa.splice(caixa.indexOf(10), 1);
                    }

                    if(troco5 == 1 && troco10 == 1) {
                        resposta = true;
                        break;
                    } else {
                        resposta = false;
                    }
                }   
            }
        } else {
            resposta = false;
        }
    }
    if(levantamento[1] == 0 && levantamento[2] == 0) {
        resposta = true;
    }
    
    caixa.forEach(n => {
        if(typeof n === "number"){
            caixaFinal.push(n);
        }
    });
    
    return (`A resposta para saber se é possível fornecer todos os trocos corretamente das transações [${notas}], é: "${resposta}" e o caixa final é: [${caixaFinal}]`);
}
let notas = [];

notas.push(5);
notas.push(5);
notas.push(5);
notas.push(10);
notas.push(20);
console.log(verificarTransacao(notas));