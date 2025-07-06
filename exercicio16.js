//Escreva um algoritmo que leia 2 valores inteiros X e Y calcule a soma dos números que não são múltiplos de 13 entre X e Y, incluindo ambos.

function somaNaoMultiplosDe13(x, y) {
    let soma = 0;
    for (let i = x; i <= y; i++) {
        if (i % 13 !== 0) {
            soma += i;
                }
    }
    return soma;
}
console.log(somaNaoMultiplosDe13(100,200)); // Exemplo de uso