const casoteste1 = 'i love you';
const casoteste2 = 'squirtle squirtle squirtle';
const casoteste3 = 'chrondrocranium';
const casoteste4 = 'coal is so dark';
const casoteste5 = 'lacing your dreams';
const casoteste6 = 'te t e te t e te t e te';
const casoteste7 = '0';

//Função que imprime o número de letras em cada uma das variáveis acima separadas por traços (I love you = 1-4-3), e ao final, também imprime qual a maior palavra dentre todas dentro das variáveis

//Método como fazer? Primeiro, vamos separar as palavras de cada variável usando o método split.
//Depois, vamos contar o número de letras de cada palavra usando o método length.
//Já tentei fazer isso individualmente pra cada string, mas não consegui fazer de uma vez só.
//Agora, vamos separar em partes e criar funções auxiliares para cada parte do processo.
// A primeira vai receber uma string e retornar um array com o número de letras de cada palavra separada por traços.

function contarcaracteres(variavel) {
    // Separar as palavras da variável usando split
    const palavras = variavel.split(' ');
    //Contar letras usando length
   console.log(palavras);
    // teste para imprimir o número de letras de cada palavra ainda sem separar por traços só pra ver se está funcionando
   // agora, temos uma resposta ['i', 'love', 'you'] para a variável casoteste1, quero implementar uma função que retorne o número de letras de cada palavra separada por traços, porém sem usar o 'map, há alguma função que faça isso?
   //Qual seria?
    let resultado = '';
    for (let i = 0; i < palavras.length; i++) {
        resultado += palavras[i].length;
        if (i < palavras.length - 1) {
            resultado += '-'; // Adiciona o traço entre os números
        }
    }
    return resultado;
}

console.log(contarcaracteres(casoteste1));
    