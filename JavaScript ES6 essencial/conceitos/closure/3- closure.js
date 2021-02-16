function init() {
  const exemplo = "Essa variável";

  return function () {
    console.log(`1 - O valor de variável exemplo é:  ${exemplo}.`);

    return function () {
      console.log(`2 - O valor de variável exemplo é:  ${exemplo}.`);

      return function () {
        console.log(`3 - O valor de variável exemplo é:  ${exemplo}.`);
      }
    }
  }
}

init()()()();
