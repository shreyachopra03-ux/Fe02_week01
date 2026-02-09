// agr proper function hoga tbhi javascript use call kregii
// arrow function ke case mei js ise bhi as a variable maanti hai so execution context mei ye bhi undefined dega
// or agr var se declare krdiya fn ko tb bhi vo undefined hi maana jaaega 
// agr for ex: 'x' kahi bhi js mei intialise hi nhi hua and you are trying to access it so vo undefined waala error dega kyuki vo defined hi nhi hai or hum use call kr rhe hai


var x =   7;

function getName() {
    console.log("namaste javascript");
}

 getName();
console.log(x);
console.log(getName);

var getName2 = function() {

}

var getName3 = () => {
    console.log("namaste javascript");
}
