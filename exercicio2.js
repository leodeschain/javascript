
const x = 1;
const y = 3;

console.log('resultado',x+y);
// Deve imprimir 4 no console (1 + 3)
//Acima, fiz um outro teste inicial:
//Abaixo, implementando a função de soma como variável
const soma = x+y;
console.log('soma',soma);
//agora, por função
function somar(a, b) {
    return a + b;
}
console.log('resultado',somar(x,y));
//pendência pós aula, pushar diretório de aprendizado para o GitHub