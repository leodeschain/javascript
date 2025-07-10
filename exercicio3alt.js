//Callback - mesmo exercício 3, mas agora colocando callback
const teste1 = (callback) => {
    setTimeout(() => { // Simulando uma operação assíncrona, para demonstrar o conceito de callback)
        console.log("Teste 1");
    }, 200); // A função teste1 será executada após 1 segundo (1000ms)
    // Aqui você pode colocar qualquer lógica que queira executar após o timeout
        
}
const teste2 = (callback) => {
    setTimeout(() => { // Simulando uma operação assíncrona, para demonstrar o conceito de callback)
        console.log("Teste 2");
        callback(); // Chama a função de callback após a execução do teste2, ou seja, após 600ms
    }, 600);
   
}
const teste3 = (callback) => {
    setTimeout(() => { // Simulando uma operação assíncrona, para demonstrar o conceito de callback)
        console.log("Teste 3");
    }, 300);
    
}
const teste4 = (callback) => {
    setTimeout(() => { // Simulando uma operação assíncrona, para demonstrar o conceito de callback)
        console.log("Teste 4");
    }, 1);
   
}

const funcaoCallBack = () => {
    console.log('Salvo')
}

teste1();
console.log(1 + 1); // Exemplo de operação simples
teste2(funcaoCallBack);    //passa a função dentro da função, fazendo executar a função de callback após a execução do teste2
teste3();
console.log(2 + 2);
teste4();


//saída após execução:2
//2
//4
//Teste 4
//Teste 1
//Teste 3
//Teste 2
//