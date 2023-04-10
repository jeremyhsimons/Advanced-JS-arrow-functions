// no spread operator
let array = [1, 3, 4];
let arr2 = array;
arr2.push(6)
console.log("second array: ", arr2);
console.log("first array: ", array);


// copying an array
let arr3 = [7, 8, 9];
let arr4 = [...arr3].push(100);
arr4.push(10);
console.log(arr3);
console.log(arr4);

// copying an object
let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { ...obj1, d: 4};
let obj3 = { ...obj1, b: 5};
console.log("first object: ", obj1);
console.log("second object: ", obj2);
console.log("third object: ", obj3);

// copying only part of an array/object
let arr5 = [...array, { ...obj1}, ...arr3, "X", "Y", "Z"];
console.log("Fifth array: ", arr5)