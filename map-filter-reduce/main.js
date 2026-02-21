// +++++++++++ MAP FUNCTION +++++++++++++
// map fn hr element pr kaam krta hai array ki or ek new array return krta hai !

const ar = [5, 1, 3, 2, 4];

Double - [10, 2, 6, 4, 12]

Triple - [15, 3, 9, 6, 18]

Binary - ["101", "1", "11", "10", "110"]

function double(x){
    return x * 2;
}

function triple(x){
    return x * 3;
}

function binary(x){
    return x.toString(2);
}

// 1st way of mapping
const opp = arr.map(binary);
console.log(opp);

// 2nd way of mapping
const oppp = arr.map(function binary(x){
    return x.toString(2);
});
console.log(oppp)

// 3rd way of mapping
const oppo = arr.map((x) => x.toString(2));
console.log(oppo)

const output = arr.map(double);
console.log(output);

const op = arr.map(triple);
console.log(op);

// +++++++++++++++ FILTER FUNCTION ++++++++++++++++++++++
// as the name suggests, values ko filter out krta hai

 const array = [5,1,3,2,6];

// 1sy way using fn statement
// filter odd values
function isOdd(x) {
    return x % 2 === 1;
}

// filter even values
function isEven(x){
    return x % 2 === 0;
}

//  const output = arr.filter(isOdd);
//  console.log(output);

//  const op = arr.filter(isEven);
//  console.log(op)

// 2nd way using arrow fn
 const odd = arr.filter((x) => x % 2 === 1);
 console.log(odd)

 const even = arr.filter((y) => y % 2 === 0)
 console.log(even)


// ++++++++++++++ Reduce Function ++++++++++++
// reduce fn is used jaha we take all the values of elements of an arr & come up w/ a single value
// basically jb bhi ek single value mei ans dena ho -> use reduce fn
// used when hr value pr iterate krna hota hai & return a single value
// fn takes 2 parameters -> acc[accumulator] & curr[current]
// acc saare values ko ek trh se apne andar accumulate krta hai same as the sum in the below case
// curr -> poore arr mei current value which is represented in the particular array
// agr neeche waale case se compare kre toh -> acc = sum & curr = arr[i]
// reduce ke 2 callback fn hote hai -> acc & curr

const arr = [5,1,3,2,6];

// sum or max [traditional way]
 function findSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log(findSum(arr));

// same above fn using reduce fn
const outputs = arr.reduce(function (acc, curr){
    acc = acc + curr;
    return acc;
}, 0);
console.log(outputs);


function findMax(arr) {
    let max = 0;
    for(let i =0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log(findMax(arr));

const ops = arr.reduce(function (acc, curr) {
    if(curr > acc) {
        acc = curr;
     
    }
     return acc;
}, 0)

// console.log(ops);


// +++++++++ practice quessss ++++++++++++

const users = [
    { firstName: "akshay", lastName: "saini", age: 26},
    { firstName: "donald", lastName: "trump", age: 75},
    { firstName: "elon", lastName: "musk", age: 50},
    { firstName: "deepika", lastName: "padukone", age: 26},
]
    
// list of full names
// const output = users.map(x => x.firstName + ' ' + x.lastName);
// console.log(output);

// { 26 : 2, 75: 1, 50: 1} How many people are of the particular age ?

// const output = users.reduce(function (acc, curr){
//     if(acc[curr.age]) {
//         acc[curr.age] = ++acc[curr.age];
//     } else {
//         acc[curr.age] = 1;
//     }
//     return acc;
// }, {});
// console.log(output);

// filter out  name of all the people who's age is less than 30

// const output = users.filter((x) => x.age < 30).map((x) => x.firstName + ' ' + x.lastName);
// console.log(output)

// const output = users.reduce(function(acc, curr){
//     if(curr.age < 30) {
//         acc.push(curr.firstName)
//     }
//     return acc
// }, []);

// console.log(output)