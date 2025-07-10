const contagem = 6;

function impares(valor) {
    let i = 0;
    let novoValor= valor;

    while(i<contagem) {
        if (novoValor%2 !==0){
            console.log(novoValor);
            i++
        }
        novoValor++;
    }
    }
 impares(5986);

 //outra forma de fazer: 
// const quantidade = 6;
// function numerosImpares(valor) {
//    let contar = 0;
//    let novoValor = Valor
//    while(contar<6) {
//        if (valor%2!==0){
//            console.log(novoValor);
//            contar++
//        }
//        novoValor++;
//    }
//    }
//numerosImpares(1); // Exemplo de uso