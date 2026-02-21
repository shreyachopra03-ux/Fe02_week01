// +++++++++++ object literals +++++++++++++

const blogs = [
    {
        title: 'why mac & cheese rules',
        likes: 30
    },
    {
        title: '10 things to make with marmite' , 
        likes: 50
    }
];
// console.log(blogs);


let user = {
    name: "crystal",
    age: 30,
    email: 'crystal@.com',
    location: 'berlin',
    blogs: [
    {title: 'why mac & cheese rules', likes: 30},
    {title: '10 things to make with marmite' , likes: 50}
    ],
    login(){
        // console.log('the user logged in');
    },
    logout(){
        // console.log('the user logged out');
    },
    logBlogs(){
    console.log(this.blogs);
    console.log('the user has written the following blogs:')
    // yha forEach isliye lgaaya kyuki blogs ek array hai & arr ke hr element pr kaam krna hai toh forEach lgaana pdega 
    this.blogs.forEach(blog => {
        console.log(blog.title + ':-' + blog.likes);
    })
}
};
user.logBlogs();

console.log(user);

// dot notation
console.log(user.age);

user.age = 35;
console.log(user.age);

// square notation
console.log(user['location'])
console.log(user['email']);
user['name'] = 'chum-li';
console.log(user['name']);

console.log(typeof user);

user.login();
user.logout();
user.logBlogs();

// ++++++ method is always defined on an object, unlike a function ++++++++++
const hello = 'mario';
console.log(hello.toUpperCase());


// ++++++++++++ Math Object ++++++++++++++

console.log(Math);
console.log(Math.PI);
console.log(Math.E)

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));  // trunc removes the decimal part


// +++++++++++ random numbers ++++++++++++++

const random = Math.random();
console.log(random);               // random no. will always be a decimal no. b/w 0 & 1 
console.log(Math.round(random * 100));


// ++++++++ primitive values +++++++++++
// ex: numbers, strings, bools, null, undefined, symbols
// these values are stored inside a "stack"
// when we make copies of primitve values, then we make new values on the stack 

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);


// ++++++++++ reference values +++++++++++++++++++
// all types of objs [obj literals, arrays, fn's, dates]
// reference values are stored in a "heap"
// when we try to make a copy of reference type, we only make copy of the pointer on the stack, which points to the same data on the heap
// we don't make copy of the original data, so that aage jaake agr value change bhi krni pde toh copies affect nhi horhi ho

const userOne = {name: 'ryu', age: 30};
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 40;
console.log(userOne, userTwo);
