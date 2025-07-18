//ALGORITMO SOMA RECURSIVA, RESOLVI NO TRABALHO MAS NÃO SALVEI, FAZENDO DE NOVO COM LOOP DIFERENTE DE FUNÇÃO SOMA
process.stdin.setEncoding('utf8');
const soma = (valor) => {
    if (valor < 0 || valor > 100) {
        throw new Error('Valor fora do intervalo permitido (0 a 100), programa encerrado'); // verifica se o valor está dentro do intervalo permitido
    }
    if (valor === 0) {
        return 0; // caso base, se o valor for 0, a soma é 0
            }
return valor + soma(valor - 1); // chamada recursiva, somando o valor com a soma do valor - 1
        }
//antes eu tinha feito com for recursivo somando a cada numero até o numero especificado, mas aqui estou fazendo com while recursivo
        process.stdin.on('data', function(data) {//lógica pra receber dado do usuário
           try { 
            console.log('soma:',soma(Number(data))); // chama a função soma com o valor recebido do usuário, com o'number' para converter a entrada em número
           } catch (error) { 
            console.error('Erro:', error.message); // exibe mensagem de erro caso ocorra
           }
        });
    