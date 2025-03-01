
//- Hoisted----> Variable declaration will be moved to top of scope

//our code
console.log(a)
var a;//Variable declaration
a=10;
console.log(a)

//background
var a=undefined;//Variable declaration
console.log(a)
a=10;
console.log(a)


