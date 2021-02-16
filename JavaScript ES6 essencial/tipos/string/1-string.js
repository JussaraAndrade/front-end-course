/*
String; representa os textos
*/

//Retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

//Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log(`\nArray com as posições separadas pelo delimitador: `, splittedText);

//Busca por um valor e substitui por outro
//Aceita também Regex
const replacedText = 'Texto'.replace('Text', 'txeT');
console.log(`\nSubstituição de valor: `, replacedText);

//Retorna a "fatia" de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\nÚltima letra de uma string: ', lastChar);

//Start:0 "começo" e end "fim": -1 = slice(0, -1);
const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log(`\nValor da string da primeira letra menos a última: `, allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log(`\nValor da string da segunda letra até a última: `, secondToEnd);

//Retorna N caracters a partir de uma posição
//Start: 0 "começo" e Amount: 1 "quantidade" = substr(0 , 2)
const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log(`\nAs duas letras primeiras letras são: `, twoCharsBeforeFirstPos);

