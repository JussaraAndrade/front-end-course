let loggedIn = false;

function callIfAuhenticated(fn){
    return !!loggedIn && fn();
}

function sum(a, b){
    return a + b;
}

console.log(callIfAuhenticated(()=> sum(2, 3)));
loggedIn = true;
console.log(callIfAuhenticated(()=> sum(2, 3)));
loggedIn = false;
console.log(callIfAuhenticated(()=> sum(2, 3)));
