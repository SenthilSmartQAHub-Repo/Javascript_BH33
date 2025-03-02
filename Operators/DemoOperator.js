
//Arithmetic operator (+, -, *, /, %)
let sum=100+2;
console.log(sum)

let sub=10-2;
console.log(sub)

let mul=10*10;
console.log(mul)

let div=10/3;
console.log(Math.floor(div))

let mod=11%2;
console.log(mod)

//Assignment Operator(+=, -=, *=, /=,%=)

let a=10;
let b=20;
a+=b //a=a+b;
console.log(`a value is ${a}`)

// Comparison operator(==,===,>,<,>=,=<,!=)

console.log(10=='10') ;// true
console.log(10==='10') //false
console.log(10===10) //true
console.log(10>2);// true
console.log(10>=10) //true
console.log(10<3); //false
console.log(10<=10); //true
console.log(10!='12')//true
console.log(10!='12')// true


//Logical operator(&&, ||, !)

console.log(10==10 && 10 =='10') //true
console.log(10 ===' 10' && 20 === 20) //false
console.log(10!=10 && 10>=2) ;//false
console.log(false && false)


console.log(10==10 || 10 =='10') //true
console.log(10 ===' 10' || 20 === 20) //true
console.log(10!=10 || 10>=2) ;//true
console.log(false || false)

console.log(!false)


//5. String operator (+)

let tool1="Playwright"
let tool2="Cypress"
console.log(tool1+tool2)

//6. unary operator(++,--)

//++ Increment operator  -> increment value by 1
//-- Decrement operator  -> Decrement value by 1

let value1=10;

++value1;

console.log(value1)

value1--;

console.log(value1)

//Ternary operator

 const output= (10<=2)? "Greater Than" : "Less Than"

 console.log(output)