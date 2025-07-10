// Define a codificação de caracteres para a entrada padrão (stdin) como UTF-8.
// Isso garante que os caracteres inseridos pelo usuário sejam lidos corretamente.
process.stdin.setEncoding('utf8');

// Cria um array vazio para armazenar os resultados do processamento de cada linha de entrada.
let resultado = [];

/**
 * Processa uma única linha de texto para contar os caracteres de cada palavra
 * e encontrar a maior palavra na linha.
 * @param {string} valor - A string de entrada para ser processada.
 * @returns {{contagem: string, maiorPalavra: string}} - Um objeto contendo a contagem de caracteres de cada palavra
 *                                                     e a maior palavra encontrada na linha.
 */
function processarLinha(valor) {
    // Remove o caractere de nova linha ('\n') do final da string.
    // Isso é importante para garantir que a contagem de caracteres não seja afetada pelo "Enter".
    const removeEnter = valor.replace('\n', '');

    // Divide a string em um array de palavras, usando o espaço como delimitador.
    const separarEmArray = removeEnter.split(' ');

    // Inicializa as variáveis para armazenar a contagem de caracteres e a maior palavra.
    let contagemFormatada = '';
    let maiorPalavra = '';

    // Itera sobre cada palavra no array de palavras.
    for (let i = 0; i < separarEmArray.length; i++) {
        const palavraAtual = separarEmArray[i];

        // Constrói a string de contagem de caracteres.
        // Se for a primeira palavra, apenas adiciona o número de caracteres.
        // Caso contrário, adiciona um hífen antes do número de caracteres.
        if (i === 0) {
            contagemFormatada = `${palavraAtual.length}`;
        } else {
            contagemFormatada = `${contagemFormatada}-${palavraAtual.length}`;
        }

        // Verifica se a palavra atual é a maior encontrada até agora nesta linha.
        if (palavraAtual.length >= maiorPalavra.length) {
            maiorPalavra = palavraAtual;
        }
    }

    // Retorna um objeto com a contagem formatada e a maior palavra da linha.
    return { contagem: contagemFormatada, maiorPalavra: maiorPalavra };
}

// Adiciona um "ouvinte" para o evento 'data' no stdin.
// Esta função será chamada toda vez que o usuário inserir dados e pressionar Enter.
process.stdin.on('data', function(data) {
    // Remove espaços em branco e novas linhas da entrada e verifica se é "0".
    if (data.trim() === '0') {
        // Se a entrada for "0", o programa para de receber novas entradas.

        // Imprime os resultados armazenados.
        for (let i = 0; i < resultado.length; i++) {
            console.log(resultado[i].contagem);
        }

        // Encontra a maior palavra de todas as linhas processadas.
        let maiorPalavraGlobal = '';
        for (let i = 0; i < resultado.length; i++) {
            if (resultado[i].maiorPalavra.length >= maiorPalavraGlobal.length) {
                maiorPalavraGlobal = resultado[i].maiorPalavra;
            }
        }

        // Imprime a maior palavra encontrada em todas as entradas.
        console.log(`The biggest word: ${maiorPalavraGlobal}`);

        // Pausa o stdin, efetivamente encerrando o programa.
        process.stdin.pause();
    } else {
        // Se a entrada não for "0", processa a linha.
        const processado = processarLinha(data);
        // Adiciona o objeto de resultado (contagem e maior palavra da linha) ao array de resultados.
        resultado.push(processado);
    }
});
