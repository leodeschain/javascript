


const joaquim = {
    nome: 'Joaquim',
    idade: 36,
    peso: 85,
    genero: 'Masculino',
    nacionalidade: 'Brasileiro',
    endereco:'rua das flores, 123',
    numero: 234,
    pais:'Brasil',
    temFilhos: true,
}

const exibirInformacoes = (pessoa) => {
console.log('dados',pessoa);
}

exibirInformacoes(joaquim);

//ao inves de passar o objeto inteiro, podemos passar apenas as propriedades que queremos exibir
// ao inves de colocar no script 'nome, idade, peso, genero, nacionalidade, endereco, numero, pais, temFilhos', podemos passar apenas as propriedades que queremos exibir