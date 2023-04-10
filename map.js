// using for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
    results.push(num * 2);
}
console.log(results);

// using map()
const multBy2 = function (num) {
    return num * 2;
}

const mapResults = nums.map(multBy2);
console.log(mapResults);

// simplified w/ map
let newMapResults = nums.map(function (num) { return num * 2});
console.log(newMapResults);

// simplified w/ map + arrow function
let newerMapResults = nums.map(num => num * 2);
console.log(newerMapResults);

// with objects

