//calcular(); //chama a função calcular, indiferente se é colocado antes ou depois da declaração da função, pois o JavaScript faz o hoisting, que é a elevação das declarações de funções para o topo do escopo
function calcular() {
    console.log('aprovado')
    console.log(arguments); //aqui estamos imprimindo os argumentos passados para a função calcular, que são os parâmetros que podem ser passados para a função, mas não são obrigatórios, é uma prática ruim para o código porque a função tem que passar os dados para a função calcular, mas não é obrigatório, então pode ser que a função não receba nenhum parâmetro, mas se receber, vai imprimir os argumentos passados
}

const calcular2 = function() {
    console.log('calcular2')
    return 52424
}

const calcular3 = () => {
return 'gfasaseedqw' //aqui estamos usando uma arrow function, que é uma função anônima atribuída a uma variável, e estamos retornando uma string
}// é a mesma coisa que a função calcular2, estamos criando uma função e devolvendo ela mas usando a sintaxe de arrow function, que é uma função anônima atribuída a uma variável

const calcular4 = () => console.log('teste calcular4'); //aqui estamos usando uma arrow function, que é uma função anônima atribuída a uma variável, e estamos imprimindo uma string no console, similar ao que teve em calcular3 mas sem o return, pois não estamos retornando nada, apenas imprimindo no console
calcular()
calcular2(); //chama a função calcular2, que é uma função anônima atribuída a uma variável, por isso não pode ser chamada antes da declaração
calcular3(); //chama a função calcular3, que é uma arrow function, por isso não pode ser chamada antes da declaração
calcular4(); //chama a função calcular4, que é uma arrow function, por isso não pode ser chamada antes da declaração
//lembrando que sem return, a arrow function retorna undefined, ou seja, não retorna nada, apenas executa o código dentro da função que é um console.log
//a diferença entre as funções é que a função calcular é uma função declarada, enquanto as outras são funções anônimas atribuídas a variáveis, e a função calcular3 é uma arrow function, que é uma função anônima atribuída a uma variável, mas com uma sintaxe diferente

//exemplo usando return:
function calcular5() {
    return 'retorno da função calcular5';
}
console.log(calcular5()); //imprime o retorno da função calcular5();

//também é possível usar funções dentro de funções, como por exemplo:
const calcular6 = (funcao) => {
    console.log('calcular6 executada');
    return funcao(); //aqui estamos chamando a função passada como parâmetro para a função
}

calcular6(calcular2)
console.log('resultado', calcular3(calcular2));