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