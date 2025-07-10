const idade = 12;
//Iniciando conceito de escopo léxico
//escopo léxico é o escopo onde a variável foi definida, ou seja, o escopo onde a variável foi criada
//no caso da variável idade, ela foi definida no escopo global, então ela é uma variável global
//e pode ser acessada em qualquer lugar do código, desde que esteja dentro do escopo global
const exibirIdade = ()=> { //forma de declarar uma função usando arrow function
    console.log(idade) ;
    //se tivesse um const idade = 20, ele iria processar a variável interna da função, que é a variável idade, 
    //e iria imprimir 20, mas como não tem uma variável idade dentro da função, ele vai pegar a variável idade do escopo global, que é 12
    }
//escopo léxico, a função const é filha do escopo global
// e pode acessar a variável idade que está no escopo global
    exibirIdade();
    // aconselhável para código limpo, sempre criar variáveis com nomes diferentes das que estão declaradas no escopo global, para evitar confusão e problemas de escopo

    //já a parte léxica de uma função, ela tem um escopo local, que é o escopo onde a variável foi criada, e um escopo global, que é o escopo onde a variável foi definida, por exemplo:
    //se não tivéssemos uma variável global 'altura', a próxima função iria imprimir a variável altura do escopo local, 
    //porém, um console.log fora da função não iria conseguir acessar a variável altura, pois ela está dentro do escopo local da função. Exemplo:
    const exibirAltura = ()=> {
const altura = 1.80; //variável local, que só pode ser acessada dentro da função
        console.log(altura); //imprime a variável altura do escopo local, que é 1.80
    }
exibirAltura(); //chama a função exibirAltura, que imprime a variável altura do escopo local
   // console.log(altura); //aqui iria dar erro, pois a variável altura não está definida no escopo global, então não pode ser acessada aqui