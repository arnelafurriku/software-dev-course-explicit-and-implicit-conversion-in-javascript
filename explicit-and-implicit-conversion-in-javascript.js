/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


// Task 1: Debugging 

let result = "5" - 2; // "5" → number → 3
console.log("The result is:", result);

let isValid = Boolean("false"); // non-empty string → true
if (isValid) console.log("This is valid!");

let age = "25";
let totalAge = Number(age) + 5; // convert to number before adding
console.log("Total Age:", totalAge);

// Task 2: Conversion Example

let implicit = "10" * 2; // "10" → 10
console.log("Implicit:", implicit, "| Type:", typeof implicit);

let input = "123";
console.log("Before:", input, "|", typeof input);
let converted = Number(input);
console.log("After:", converted, "|", typeof converted);

// Edge Case: NaN
let bad = Number("abc");
console.log("NaN case:", bad, "| Type:", typeof bad);

// Edge Case: undefined → NaN
let notSet;
console.log("Undefined to number:", Number(notSet));


