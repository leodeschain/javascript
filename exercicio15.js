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