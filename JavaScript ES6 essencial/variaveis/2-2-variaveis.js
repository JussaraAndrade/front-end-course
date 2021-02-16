(() => {
  //Essa linha de código do let irá existir nesse bloco - começo  
  let test = "valor função";
  console.log(`Valor dentro da função "${test}"`);

  if (true) {
    //Let respeitam o escopo de bloco 
    //Dentro quem manda é o let de dentro do if
    let test = "valor if";
    console.log(`Valor dentro do if "${test}"`);
  }
  //Nesse bloco - fim
  console.log(`Valor após a execução do if "${test}"`);
})();
