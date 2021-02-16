globalThis.name = 'Nome no contexto de criação';

const getNameArrowfn = () => this.name;

function getName(){
    return this.name;
}

const user = {
    name: 'Nome do objeto de execução ',
    getNameArrowfn,
    getName
}

console.log(user.getNameArrowfn());
console.log(user.getName());

