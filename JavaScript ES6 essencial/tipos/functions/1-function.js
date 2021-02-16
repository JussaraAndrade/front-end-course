function fn(){
    return 'Code here';
}
//Arrow Function
//Function e arrays; são objetos
//Funções são objetos que permitem ser chamados;
const arrowFn = () => 'Code here';
const arrowFn2 = () => {
    //Mais de uma expressão
    return 'Code here';
}

//Funções também são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

//Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

//Receber e retornar funções
//Uma função que chama "controlFnExec", recebe o primeiro parâmetro "fnParam", retorna uma outra função "allowed"
const controlFnExec = fnParam => allowed => {
    //Recebe uma fleque
    if(allowed){
        fnParam();
    }
}

//Criação de variável, vai retornar outra função
const handleFnExecution = controlFnExec(fn);

handleFnExecution(true);//Executará a função fn
handleFnExecution();//Não executará a função fn

//controlFnExec como função
//Função normal
function controlFnExec(fnParam){
    return function(allowed){
        if(allowed){
            fnParam();
        }
    }
}

