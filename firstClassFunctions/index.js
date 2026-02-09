// function statement or n declaration 
function a() {
    console.log('a called');
}

// fn expression
var b = function() {
    console.log('b called');
}
a();
b();
 
// anonymous fn [jb khaali fn ho bs koi declaration ya kuch ni & ye fn expression mei use hota hai]
// function() {

// }


// named fn expresion [fn ko var m store krdiya h but fir bhi usko xyz naming kri hai]
var c = function xyz() {
    console.log('c called');
}
c();

// parameters vs arguments
var h = function(parameter1, parameter2) {
    console.log('h called');
}

h(1,2);
// 1 & 2 are the arguments !


// Fist class fn's or First class citizens :
// The ability of fn's to be used as values, passed as argument & be returned from another fn's

// arrow fn's [introduced in es6]
// arrow fn mei 'function' keyword use nhi hota
const data = () => {
    console.log(data)
}