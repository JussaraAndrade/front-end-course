//Tipo primitivo não consegue alterar, se for um objeto consegue muda.
//Mas não consegue mudar onde está apontando.

const name = 'Jussara';

//Não podemos alterar o valor 
//name = 'Jussara';

user = {
    name: 'Jussara'
};

//Mas se for um objeto, podemos trocar suas propriedades
user.name = 'Outro nome';

//Não podemos fazer o objeto "apontar" para outro lugar
//user ={
//   name: 'Jussara'
//};

const persons = ['Jussara', 'Pedro', 'Jennifer'];

//Podemos adicionar novos itens
persons.push('João');
//['Jussara', 'Pedro', 'Jennifer', 'João']

//Podemos remover algum item
persons.shift();
//['Pedro', 'Jennifer', 'João']

//Podemos alterar diretamente
persons[1] = 'James';

console.log('\nArray após as alterações: ', persons);