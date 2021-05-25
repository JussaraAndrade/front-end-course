let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) { //logs "0", "1", "2", "foo"
    console.log(i);
}

for (let i in arr) {//logs "3", "5", "7"
    console.log(i);
}

