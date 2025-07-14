//assynchronous function example exercise
const sleep = (ms) => {
    return new Promise (resolve => setTimeout(resolve, ms)) //promessa, que é uma forma de lidar com operações assíncronas em JavaScript que podem demorar um pouco para serem concluidas. O setTimeout cria uma promessa que resolve depois de um certo tempo.
} 

const aguardarComRetorno = async () => {
    await sleep(3000); 
    return 30;
}
const aguardar = async () => {
    console.log('Passado', 2**2);
    const resultado = await aguardarComRetorno(); //aqui estamos chamando a função aguardarComRetorno.
   console.log('resultado', resultado);
    //await sleep(3000); // assim, diferentemente da opção antes tentada com set timeout, usando await, faz com que o código espere 3 segundos antes de continuar a execução com o await dentro do bloco de código
    console.log('Passado', 3**3);
    console.log('Passado', 4**4);
}
   aguardar();

   //obs: antes foi feito com set timeout e deu certo, porém visto que o await pode trabalhar com função assíncrona, vira uma boa prática usar o await com uma função assíncrona, que é o caso da função aguardarComRetorno, que retorna uma promessa, e o await faz com que o código espere a promessa ser resolvida antes de continuar a execução. Assim, o código fica mais legível e fácil de entender.