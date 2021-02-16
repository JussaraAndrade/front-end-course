/**
//Caso essa condição não seja válida, pula para próximo if
if(condition) {
    //code
}else if (condition){
    //code
}
 */

const array = [2, 3, 4, 5, 6, 8, 10, 15];

console.log('\nelse if');
//ler cada item do array, e verificar cada um if até cair em verdadeiro...
//Informação importante: Caia em outra condição então não usa o else if
array.forEach(item =>{
    if(item % 2 === 0){
        console.log(`O número ${item} é divisível por 2.`);
    }else if(item % 3 === 0){
        console.log(`O número ${item} é divisível por 3.`);
    }else if(item % 5 === 0){
        console.log(`O número ${item} é divisível por 5.`);
    }
});


console.log('\nif');
array.forEach(item =>{
    if(item % 2 === 0){
        console.log(`O número ${item} é divisível por 2.`);
    }
    if(item % 3 === 0){
        console.log(`O número ${item} é divisível por 3.`);
    }
    if(item % 5 === 0){
        console.log(`O número ${item} é divisível por 5.`);
    }
})