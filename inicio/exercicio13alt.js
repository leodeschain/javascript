const rendimento = 12;

function calculo_distancia(velocidade,tempo) {
    calculoDistancia = velocidade * tempo
    gastoFinal = calculoDistancia/rendimento;
    return gastoFinal.toFixed(2)
}

console.log('combustivel gasto em litros:', (calculo_distancia(6,70)))
console.log('combustivel gasto em litros:', (calculo_distancia(10,70)))
console.log('combustivel gasto em litros:', (calculo_distancia(22,67)))