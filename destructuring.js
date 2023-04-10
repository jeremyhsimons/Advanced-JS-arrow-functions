// Destructuring arrays
let ages = [30, 26, 27];
// let John = ages[0];
// let Mary = ages[1];
// let Joe = ages[2];
let [John, Mary, Joe] = ages;
console.log(John, Mary, Joe)

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
};
let { firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favourite, secondFavourite, ...others] = fruits
console.log(favourite)
console.log(secondFavourite)
console.log(others)

let favFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "steak",
    andrea: "veg",
}
let { brian, anna, ...rest} = favFoods;
console.log(brian)
console.log(anna)
console.log(rest)