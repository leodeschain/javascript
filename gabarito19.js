process.stdin.setEncoding('utf8');
// Desafio 19 - Contagem de caracteres
// Dado uma string, retorne a quantidade de caracteres de cada palavra separada por hífen e a maior palavra encontrada.
let resultado = [];
let maiorString = '';

function contarCaracters(valor) {
    let retorno = '';
    const removeEnter = valor.replace('\n', ''); //remove o enter no final da string para não atrapalhar a contagem de caracteres
    const separarEmArray = removeEnter.split(' ');

    for(let i = 0; i < separarEmArray.length; i++) {
        if (i === 0) {
            retorno = `${separarEmArray[i].length}` //usar o i entre colchetes significa que estamos acessando o elemento do array em específico para determinar o tamanho da string
        } else {
            retorno = `${retorno}-${separarEmArray[i].length}` //usando o $ para interpolar a string, podemos concatenar o tamanho de cada palavra separada por hífen
        }

        if (separarEmArray[i].length >= maiorString.length) { //checa para ver se a string atual dentro do loop é maior que a última string armazenada
            maiorString = separarEmArray[i];
        }
    }
    
    return retorno;
}

process.stdin.on('data', function(data) { //função usada para receber os dados do usuário via terminal
    if(data == 0) { //checa se é o usuário inseriu 0 (condição pré-determinada pelo exercício para encerrar o programa), se for, não executa a função contarCaracters
            for(let i = 0; i < resultado.length; i++) { //de i=0 até o tamanho do array resultado, imprime cada elemento do array
            console.log(resultado[i])
        }
              console.log(`A maior string é: ${maiorString}`); //imprime a maior string encontrada 
        process.stdin.pause();
    } else {
        resultado.push(contarCaracters(data)); //adiciona o retorno da função contarCaracters no array resultado
    }

});
