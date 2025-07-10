const salario = 100.53453;
const salariostring = '103,53543'

console.log('salario', salario)
console.log('salario:', salario.toFixed(2))
//ponto flutuante do javascript tem infinitas casas decimais, por isso fixamos quantas casas queremos ver
//toFixed converte de numero pra string, number converte de string pra numero.
console.log('salario string', Number(salario).toFixed(2))
//aplicando o tofixed após conerter de string pra numero