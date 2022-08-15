function findShort(s) {
    myArray = s.split(" ");
    let sort = myArray.sort((a, b) => a.length - b.length)[0];
    return sort.length;
    // let myNum = myArray[0];
    // for (let i = 0; i < myArray.length; i++) {
    //     if (myArray[i].length < myNum.length) {
    //         myNum = myArray[i];
    //     }
    // }
    // return myNum.length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps")); // 3
console.log(findShort("turns out random test cases are easier than writing out basic ones")); // 3
console.log(findShort("Let's travel abroad shall we")); // 2