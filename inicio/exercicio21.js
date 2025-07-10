//aprendendo sobre exceção, try, catch e finally
//o que acontece se der erro num cálculo ou no código? como vamos devolver o erro?+

function calcular(x) {
    if (x === 0) {
        throw new Error('Não pode dividir por 0');
    }
    return 2/x;
}

try {
    const resultado = calcular(0); //aqui estamos chamando a função calcular com o parâmetro 0, que vai gerar um erro
    //se não der erro, o resultado vai ser impresso no console
    //se der erro, o código vai pular para o catch
    console.log('resultado:', resultado);   
    
} catch (error) {
    console.log(error.message)
} finally { //sempre vai ser executado, mesmo que ocorra erro
    //aqui podemos fazer algo que sempre vai acontecer, como fechar uma conexão com o banco de dados
    console.log('Chegou no finally')
}

console.log('continua')