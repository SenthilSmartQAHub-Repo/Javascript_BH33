//  var, let , const

// var --> ES1
//let , const ---> ES6

//========================Var- Re-Declaration allowed===================================

var empId=123;
var empId=345; //Re-Declaration

console.log(empId)

//======================Let========Re-Declaration not allowed====================
// let empSalary=10000;
// let empSalary=12345;
//====================Const ========Re-Declaration not allowed====================
// const empHRA=123453;
// const empHRA=123453;

//===================var ---> Re-Initialization Allowed==============================

var a=10;

    a=20;

    console.log(a)
//=================== let ---> Re-Initialization Allowed==============================

let b=100;
    b=200;
    console.log(b)

//=================== const  ---> Re-Initialization Not Allowed=======================

const c=300;

    //  c=400;//TypeError: Assignment to constant variable.
    console.log(c)

//====================================================================================

{
var x=20;
let y=30;
let z=40;
console.log(y) //scoped
console.log(z) //scoped
}
console.log(x) // not scoped
