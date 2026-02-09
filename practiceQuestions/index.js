// FILTER PRACTICE QUES

// const arr = [1,4,8,0,10];

// filter out even no's from give array

// const evenNumber = arr.filter((x) => x % 2 === 0)
// console.log(evenNumber);

// From an array of ages, return only ages greater than 18.

// const ages = [20,25,80,75];
// const greater18 = ages.filter((x) => x > 18);
// console.log(greater18);

// From an array of strings, filter words that have length > 5.

// const words = ["hgfydd" , "ram", "shreya", "helooossss"];

// const length5 = words.filter((x) => x.length > 5);
// console.log(length5);

// Given an array of numbers, remove all negative numbers.

// const numbers = [1, -9, 5, -44, 10];

// const removeNegative = numbers.filter((x) => x > 0)
// console.log(removeNegative);

// From an array of names, return names starting with “A”.

// const names = ['shreya', 'Askshay', 'Aman'];

// function startsA(name) {
//     return name.startsWith('A');
// }

// const data = names.filter(startsA)
// console.log(data)

// MAP PRACTICE QUESTIONS

// Given an array of numbers, multiply every number by 2.
// const arr = [1,5,7,8,-2];
// const multiply2 = arr.map((x) => x * 2);
// console.log(multiply2);

// From an array of names, convert all names to uppercase.
// const names = ['shreya', 'hi', 'noor'];
// const upperCase = names.map((x) => x.toLocaleUpperCase());
// console.log(upperCase);

// Given prices array, add 18% GST to each price.
// const prices = [200, 700, 70, 765];

// const addGST = prices.map((x) => x = x + x * 0.18);
// console.log(addGST);

// From an array of numbers, convert all numbers to strings.
// const nums = [200, 700, 70, 765];
// const convertToString = nums.map((x) => x.toString());
// console.log(convertToString);

// Given an array of ages, return an array saying “Adult” or “Minor”.
// const ages = [17, 56, 89, 66];
// const ageGroup = function(ages) {
//     if(ages > 18) {
//         console.log('adult')
//     } else{
//         console.log('minor')
//     }
// }
// const output = ages.filter(ageGroup)

// From an array of numbers, filter even numbers and then square them.

// const nums = [22, 67, 99, 100];
// const numbers = nums.filter((x) => x % 2 === 0).map((x) => x * x);
// console.log(numbers);

// From an array of prices, filter prices > 1000 and apply 10% discount.
// const prices = [500, 88, 1001, 8388];
// const discount = prices.filter((x) => x > 1000).map((x) => x = x - (x * 0.1));
// console.log(discount);

// From an array of names, filter names longer than 4 characters and uppercase them.
// const names = ['hahhhahha', 'shreya', 'hi'];

// const upperCase = names.filter((x) => x.length > 4).map((x) => x.toLocaleUpperCase());
// console.log(upperCase);

// Given ages array, filter adults and add +1 year to each.
// const ages = [19, 22, 25, 17];
// const age = ages.filter((x) => x > 18).map((x) => x + 1);
// console.log(age);

// From marks array, filter marks ≥ 40 and add “PASS” text to them.
// const marks = [33, 41, 79, 45];
// const passed = marks.filter((x) => x > 40).map((x) => x + ' '  + 'pass')
// console.log(passed);

// REDUCE PRACTICE QUES

// sum of all the no's in array
// const nums = [10, 25, 40, 55, 60];
 
// const sum = nums.reduce(function (acc, curr) {
//     acc = acc + curr;
//     return acc;
// }, 0);
// console.log(sum);

