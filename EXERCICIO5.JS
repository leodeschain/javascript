//RECURSIVIDADE
//vamos exemplificar através do fatorial de um número

const fatorial = (valor) => {
    if(valor === 0 || valor === 1) {
        return 1; // caso base, se o valor for 0 ou 1, o fatorial é 1
    }

    return valor*fatorial(valor-1); // chamada recursiva, multiplicando o valor pelo fatorial do valor - 1
}

console.log(fatorial(4));