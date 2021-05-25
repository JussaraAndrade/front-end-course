const user ={
    name: 'Jussara',
    lastName: 'Andrade'
}

//Recupera as chaves do objeto
//console.log('Propriedades do objeto user: ', Object.keys(user));

//Recupera os valores das chaves do objeto
//console.log('\nValores da propriedades do objeto user: ', Object.values(user));

//Retorna um array de arrays contendo [ nome_prop, valor_prop ]
//console.log('\nLista de propriedades e valores: ', Object.entries(user));

//Mergear propriedades de objetos
//assign; ele recebe um objeto por parametro, primeiro o target onde ele vai mergear.
//user está concatenando com com fullName
//Esse modelo não é recomendavel, a ideia que gera um novo: 
Object.assign(user, {fullName: 'Jussara de Jesus Andrade'});
console.log('\nAdiciona a propriedade fullName no objetos', user);
//{}: um novo array vazio/ user, {age: 26}: faz um merge                    
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age: 26}));

//Previne todas as alterações em um objeto
const newObj = {foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObj após as alterações: ', newObj);

//Permite apenas a alteração de propriedades existentes em um objeto
const person = {name: 'Guilherme'};
Object.seal(person);