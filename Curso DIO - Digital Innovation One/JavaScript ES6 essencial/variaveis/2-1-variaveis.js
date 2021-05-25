var test = 'exemplo';

(()=>{
    console.log(`Valor dentro da função "${test}"`);

    if(true){
        var test;
        //Escopo de função ou global, var não entende escopo de bloco.
        test = 'example';
        console.log(`Valor dentro do if "${test}"`);
    }
    console.log(`Valor após a execução do if "${test}"`);
})();