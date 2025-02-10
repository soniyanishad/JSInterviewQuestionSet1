// //Q1.difference between == and === operators
// //Ans: == operator is used to compaire two value and it can't check data type where === operator is strict equality operator  ,it check data type of values.

// let x=9;
// let y=6; 
// let ans=x==y;
// console.log(ans); // it return the result "false" as 9 is not equal to 6 .

// let x1=8, y1="8", ans1=x1==y1;
// console.log(ans1); //  it return result "true" as it does not check data type of both variable as one is integer and other is string

// let x2=9, y2="9", ans2=x2===y2;
// console.log(ans2); //It return result "false" as this operators strictly check the data type of variable and here one variable is integer type and other one is string type.

// //Q2.
//  //var can be reassign and redeclaire.It has global scope
//  // let cannot be reassign but redeclaire. It has block scope.
//  // const cannot be reassign and cannot be redeclaire.It has block scope.


//  var x3=89;
//  console.log(x3);
//  var x3=89;
//  console.log(x3); // It gives result 89 as it is reassign 
  
 
//  let b=4, b=8;
//  console.log(b);//  It gives result : b has already declaire
 
//  const c=9;
//  c = 10;
//  console.log(c); // it gives an error assignment to constant  variable.

//  //Q3. What is the execution context
//  //Ans:Execution context is the enviorment in which Javascript code is executed.
// //     It has two phase creation phase and execution phase.

//  //Q4.What is creation phase and execution phase
// //Ans: In Creation phase Javascript setup memory for variables and functions.
// // In Execution phase Javascript execute the code line by line.

//  //Q.5 What is hoisting?
//  //Ans: Hoisting means all the variable and functions must be declaire on the top.

//  console.log(a); // undefined
//   var a=10;
 

//  //Q6. Difference between undefined vs not defined vs NaN
// //Ans:  Undefined represents any value that has not been defined anywhere in the program. 
// //      Ex.
//  let a11;
//  console.log(a11); // it gives result "undefined"
 
// // If any variable or operation isn't able to produce a meaningful value, it returns undefined. NaN - NaN stands for Not a Number. 
// // You get this value when you try to do some operation that can't yield a meaningful result.
// // Ex.
console.log(Math.sqrt(-1));  // gives result NaN


 //In JavaScript, “not defined” refers to a reference error that occurs when attempting to access variables or identifiers 
 // that are not declared or do not exist within the current scope
 //Ex.
 console.log(b11); // it gives  result "not defined"

 let y=10;
 console.log(Y);  // it gives result not defined because of missplled variable
 
 

 //Q.7 How many operators do we have in js?
 //Ans: There are 7 operators in js, Arithmetic,Assignment,Comparison,Logical,Ternary,typeof and bitwise operators.
 //Assignment Operators: assigns value to variables
 //Arithmetic Operators:perfoem arithmetic on numbers.
 //Comparison Operators: Comparison operators are used in logical statements to determine equality or difference between variables or values.
  //(==, ===, !=, !==, <, <=, >, >=)
// Logical Operators: are used to determine the logic between variables or values.
//( &&, ||, !)
// Conditional or Ternary Operators: assigns value to variable based on some condition.
//syntax:variablename = (condition) ? value1:value2 
//typeof operator: returns the data type of javascript variable(string,number,boolean,null,undefined,symbol,bignit etc.)
// Bitwise Operators: To perform a bit-operation, JavaScript converts the number into a 32-bit binary number (signed) and performs the operation and converts back the result to a 64-bit number.
//( Bitwies &, |, ^, ~, <<, >>, >>>)


 //Q8.Explain Local Scope,Block Scope,Functional Scope and Scope chain in javascript
 //Ans:In JavaScript, the scope chain is a crucial concept that governs the accessibility and visibility of variables and functions within a program.
 //Ans: Block Scope:Variables declared in a specific block like loops,if-else,or functions,these variables will not be accessible ouside the blocks.
 //It will be only accessible in the block where they have been declared.
 // Local Scope: Variables declared within a JavaScript function, are LOCAL to the function.
//  function myFunction() {
//     let carName = "Volvo";
//     // code here CAN use carName
//   }

// Functional Scope: JavaScript has function scope: Each function creates a new scope.

// Variables defined inside a function are not accessible (visible) from outside the function.

// Variables declared with var, let and const are quite similar when declared inside a function.




       
 
