const idd1 = 18;
const idd2 = 14;
const idd3 = 53;

const idds = [18, 14, 53, 18, 14, 53, 18, 14, 53];

console.log('resultado', idds[0])
//poderia trocar o 0 do argumento acima por 1 ou 2, iria resultar em 14 e 53

for(let i = 0; i<idds.length; i++) {
    console.log('resultado', idds[i])
}

console.log('tamanho do array', idds.length)
