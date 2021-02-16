/*
hoisting; significa levantar ou suspender algo.

Comportamento no JavaScript nas declarações de variáveis.

Escopo:
bloco, função ou global.

*/
function fn(){
    ///undefined; a variavel existe só que não foi definida ainda
    console.log(text);
    var text = 'Exemplo';

    console.log(text);
}

fn();
/** 
1 - Como definir, em qual momento a gente sabe o tipo da variavel script?
Resposta: no momento de sua atribuição
Ex:
text = 'Exemplo';   
 
function fn(){
    var text;
    console.log(text);

    text = 'Exemplo';

    console.log(text);
}
*/
 
 