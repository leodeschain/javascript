


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
//para acessar dados especificos do objeto, console.log('Nome',pessoa.nome); etc, daria pra colocar tudo na 'exibirInformacoes' e ao inves de passar o objeto inteiro, podemos passar apenas as propriedades que queremos exibir

//também podemos fazer

const exibirInformacao2 = (pessoa, qualInformacao) => {
    console.log(`${qualInformacao} do(a) ${pessoa.nome} é: ${pessoa[qualInformacao]}`);
}
exibirInformacao2(joaquim, 'nome');
exibirInformacao2(joaquim, 'idade');
exibirInformacao2(joaquim, 'peso');

