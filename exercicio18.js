const mensagem = "Teste de string"
const mensagem2 = "Leia a documentação do JavaScript para mais informações."

console.log(mensagem.length); // Exibe o tamanho da string
console.log(mensagem.toUpperCase()); // Converte a string para maiúsculas
console.log(mensagem.toLowerCase()); // Converte a string para minúsculas
console.log(mensagem.indexOf("Teste")); // Encontra a posição da substring "Teste"
console.log(mensagem.concat(mensagem2)); // Concatena duas strings, poderia ser usado console.log(mensagem1 + mensagem2);
console.log(mensagem.replace("Teste", "Exemplo")); // Substitui "Teste"
console.log(mensagem.replace("Teste",mensagem2)); // Substitui "Teste" por mensagem2

//outras funções importantes de string

console.log(mensagem.substring(5)); // Extrai uma substring a partir do índice 5 - relacionado a posição dos caracteres  
console.log(mensagem.substring(0, 4)); // Extrai uma substring do índice 0 ao 4 - relacionado a posição dos caracteres             
console.log(mensagem.split(' ')); // Divide a string em um array de substrings usando o espaço como delimitador    
console.log(mensagem2.split('L')); // Divide a string em um array de substrings usando o "L" como delimitador                

//MAIS TESTES

console.log('tamanho', mensagem.length); // Exibe o tamanho da string
console.log('Concat', mensagem.concat(mensagem2)); // Concatena duas strings
console.log('concat', mensagem + mensagem2); // Concatena duas strings usando o operador +
console.log('ES:', `asdas ${mensagem} ${mensagem2}`); // Concatena duas strings usando template literals (mais legível do que ficar observando o +)  
console.log('Dividir em array', mensagem.split(' ')); // Divide a string em um array de substrings usando o espaço como delimitador, se não especificar o espaço, divide em cada letra
console.log('UP:',mensagem2.toUpperCase()); // Converte a string para maiúsculas
console.log('LOW:',mensagem2.toLowerCase()); // Converte a string para minúsculas
console.log('Substituir', mensagem.replace("Teste", "Exemplo")); // Substitui "Teste" por "Exemplo"