const rendimento = 12;
const tempo = 5;
const velocidade = 100;

function calculo_distancia(item1,item2) {
    return velocidade * tempo
}

console.log('combustivel gasto em litros:', (calculo_distancia(velocidade,tempo)/rendimento).toFixed(3))
//

