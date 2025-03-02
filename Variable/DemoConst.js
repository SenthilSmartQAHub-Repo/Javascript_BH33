//- Hoisted----> Variable declaration will be moved to top of scope


console.log(studentMark)
const studentMark=100;
console.log(studentMark)


//background code
const studentMark; //ReferenceError: (TDZ- Temporal Dead zone)
console.log(studentMark)
studentMark=100;
console.log(studentMark)