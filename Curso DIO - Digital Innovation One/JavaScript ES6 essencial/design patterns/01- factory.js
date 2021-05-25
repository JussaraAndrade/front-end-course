/*function Pessoa(name){
    return{
        name,
        lastName: 'Pinheiro'
    }
}

const p = Pessoa('Thomaz');
console.log(p);*/

//Sobrescreve
function Pessoa(customProperties){
    return{
        name: 'Thomaz',
        lastName: 'Pinheiro',
        ...customProperties
    }
}
//Adiciona um campo a mais
const p = Pessoa({name: 'Custom Name', age: 27});
console.log(p);