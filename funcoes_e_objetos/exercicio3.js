//Callback - explicando o que é e como funciona
// Callback é uma função que é passada como parâmetro para outra função, e é executada

const teste1 = () => {
    setTimeout(() => { // Simulando uma operação assíncrona, para demonstrar o conceito de callback)
        console.log("Teste 1");
    }, 200); // A função teste1 será executada após 1 segundo (1000ms)
    // Aqui você pode colocar qualquer lógica que queira executar após o timeout
        
}
const teste2 = () => {
    setTimeout(() => { // Simulando uma operação assíncrona, para demonstrar o conceito de callback)
        console.log("Teste 2");
    }, 600);
   
}
const teste3 = () => {
    setTimeout(() => { // Simulando uma operação assíncrona, para demonstrar o conceito de callback)
        console.log("Teste 3");
    }, 300);
    
}
const teste4 = () => {
    setTimeout(() => { // Simulando uma operação assíncrona, para demonstrar o conceito de callback)
        console.log("Teste 4");
    }, 1);
   
}

teste1();
console.log(1 + 1); // Exemplo de operação simples
teste2();    
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