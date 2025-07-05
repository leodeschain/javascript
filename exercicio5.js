const idade = 8; //feito teste com 18 e 19 e deu certo
let podeEntrar = false;
const nome = 'Julio'; //adicionado após teste de idade para aprender integração de operador || na função if como OU, feito teste com julio e com nome diferente e deu certo
if(idade>=18 || nome === 'Julio') {
    podeEntrar = true;
} else {
    console.log('nao pode entrar');
}

console.log('usuario pode entrar', podeEntrar);

// Este é o primeiro programa em JavaScript que verifica se um usuário pode entrar com base na idade ou no nome.
//aprendizado sobre as diferentes formas de usar o if, o else, o console.log, revisão de variáveis const e let além de operadores lógicos como || (OU) e && (E)

//obs: uso dos 3 iguais faz javascript interpretar o valor e o tipo, enquanto o uso de apenas 2 iguais faz javascript interpretar apenas o valor, independente do tipo. Exemplo: 1 === '1' é false, enquanto 1 == '1' é true.
//poderia ser aplicado no programa acima por exemplo com if idade === 18, mas como o valor é numérico, não há necessidade de usar os 3 iguais, poderia ser usado apenas 2 iguais, porém
//na situação inversa, se fosse com aspas idade === '18', aí sim seria necessário usar os 3 iguais, pois o valor é uma string e não um número, então o tipo é diferente, se não usasse os 3 iguais, o javascript interpretaria como true, pois o valor é o mesmo, mas o tipo é diferente, então seria false, e o usuário não poderia entrar.