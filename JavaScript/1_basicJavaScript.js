//This is an inline comment
/*This is a
musti line comment*/

/*JavaScript provide 8 different types of data 
undefined, null, boolean, string, symbol, bigint, number, and object
This can be stored in a varible.*/
 var myName;

/*Variables are similar to the x and y variables you use in mathematics, 
which means they're a simple name to represent the data we want to refer to.
Variable names can be made up of numbers, letters, and $ or _, 
but may not contain spaces or start with a number.

In JavaScript all variables and function names are case sensitive. This means that capitalization matters.
Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word 
in lowercase and the first letter of each subsequent word is capitalized.
*/

/*It is common to initialize a variable to an initial value in the same line as it is declared.*/

var a=9;
var myFirstName='Cristian';
var myLastName='Lavacude';

/*When JavaScript variables are declared, they have an initial value of undefined. 
If you do a mathematical operation on an undefined variable your result will be NaN 
which means "Not a Number". 

If you concatenate a string with an undefined variable, 
you will get a literal string of undefined.*/

// Only change code below this line
var a=5;
var b=10;
var c='I am a';
a = a + 1;
b = b + 5;
c = c + " String!";

//camelCase
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;

/*-----------------------------------------------*/
//Differences Between the var and let Keywords
/*unlike var, when you use let, a variable with the same name can only be declared once.*/
let catName = "Oliver";
let catSound = "Meow!";
/*const has all the awesome features that let has, with the added bonus that variables declared 
using const are read-only. They are a constant value, which means that once a variable 
is assigned with const, it cannot be reassigned.

A common practice when naming constants is to use all uppercase letters, with words separated 
by an underscore.*/

const FCC_ALL_CAPS = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC_ALL_CAPS, fact); // Change this line

/*In JavaScript, you can escape a quote from considering it as an end of string quote by placing 
a backslash (\) in front of the quote.

const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
This signals to JavaScript that the following quote is not the end of the string, 
but should instead appear inside the string. So if you were to print this to the console, 
you would get:

Alan said, "Peter is learning JavaScript".*/
const myStr = "I am a \"double quoted\" string inside \"double quotes\"";
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
// you can use both quots and skip the \

/*Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed
*/

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; 
/*
FirstLine
    \SecondLine
ThirdLine
*/

let myStr='This is the first sentence.';
myStr +='This is the second setence.';
 /*You can find the length of a String value by writing
  .length after the string variable or string literal.*/
console.log("Alan Peter".length);

/* Use Bracket Notation to Find the First Character in a String
Bracket notation is a way to get a character at a specific index within a string.*/
const firstName = "Charles";
const firstLetter = firstName[0];

/*----------------------------------------------------------------------*/
/*----------------------------------------------------------------------*/
/*Store Multiple Values in one Variable using JavaScript Arrays
With JavaScript array variables, we can store several pieces of data in one place.

You start an array declaration with an opening square bracket
, end it with a closing square bracket, and put a comma between each entry, like this:*/

const sandwich = ["peanut butter", "jelly", "bread"];

/*You can also nest arrays within other arrays, like below:*/
const teams = [["Bulls", 23], ["White Sox", 45]];

/*Manipulate Arrays With push()
An easy way to append data to the end of an array is via the push() function.

.push() takes one or more parameters and "pushes" them onto the end of the array.*/
const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

/*Manipulate Arrays With pop()
Another way to change the data in an array is with the .pop() function.

.pop() is used to pop a value off of the end of an array. 
We can store this popped off value by assigning it to a variable. 
In other words, .pop() removes the last element from an array and returns that element.*/

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

//The first console.log will display the value 6, and the second will display the value [1, 4].

/*Manipulate Arrays With shift()
pop() always removes the last element of an array. What if you want to remove the first?

That's where .shift() comes in. It works just like .pop(), 
except it removes the first element instead of the last. */
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();


/*Manipulate Arrays With unshift()
Not only can you shift elements off of the beginning of an array,
 you can also unshift elements to the beginning of an array i.e. 
 add elements in front of the array.

.unshift() works exactly like .push(), but instead of adding the element at 
the end of the array, unshift() adds the element at the beginning of the array.*/
const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");


/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/
/*Exercises*/
const myList = [['Milk',1],
                ['Apple',4],
                ['Cookies',5],
                ['Cheese',4],
                ['Potatoes',10]];


/*Write Reusable JavaScript with Functions
In JavaScript, we can divide up our code into reusable parts called functions.

Here's an example of a function:*/

function functionName() {
  console.log("Hello World");
}

function functionWithArgs(x,y){
    console.log(x+y);
}

functionWithArgs(5,5);

function timesFive(x){
    return x*5;
}

t=timesFive(10);


/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&/*
/*Global Scope and Functions
In JavaScript, scope refers to the visibility of variables. 
Variables which are defined outside of a function block have Global scope. 
This means, they can be seen everywhere in your JavaScript code.

Variables which are declared without the let or const keywords are automatically 
created in the global scope. This can create unintended consequences 
elsewhere in your code or when running a function again. 
You should always declare your variables with let or const.*/

/*
Variables which are declared within a function, as well as the function parameters
, have local scope. That means they are only visible within that function.
*/


/*Stand in Line
In Computer Science a queue is an abstract Data Structure where items are kept in order. 
New items can be added at the back of the queue and old items are taken off from the 
front of the queue.*/

/*Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed.

 */
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  var remove=arr.shift();
  return remove;
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


/*In order for JavaScript to compare two different data types 
(for example, numbers and strings), it must convert one type to another. 
This is known as Type Coercion. Once it does, however, it can compare terms as follows:

1   ==  1
1   ==  2
1   == '1'
"3" ==  3
In order, these expressions would evaluate to true, false, true, and true.

Strict equality (===) is the counterpart to the equality operator (==). 
However, unlike the equality operator, which attempts to convert both 
values being compared to a common type, the strict equality operator 
does not perform a type conversion.*/


/*In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:

typeof 3
typeof '3'
typeof 3 returns the string number, and typeof '3' returns the string string.*/

/*If you have multiple conditions that need to be addressed, 
you can chain if statements together with else if statements.
Order is important in if, else if statements.

The function is executed from top to bottom 
so you will want to be careful of what statement comes first.*/

if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}


/*GOLF GAME*/

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if(strokes==1){
    return names[0];
  }else if(strokes<=(par-2)){
    return names[1];
  }else if(strokes==(par-1)){
    return names[2];
  }else if(strokes==par){
    return names[3];
  }else if(strokes<=(par+1)){
    return names[4];
  }else if(strokes<=(par+2)){
    return names[5];
  }else{
    return names[6];
  }


  // Only change code above this line
}

golfScore(5, 4);

/*If you have many options to choose from, use a switch statement. 
A switch statement tests a value and can have many case statements 
which define various possible values. Statements are executed from 
the first matched case value until a break is encountered.

case values are tested with strict equality (===). The break tells 
JavaScript to stop executing statements. 
If the break is omitted, the next statement will be executed.

In a switch statement you may not be able to specify all possible 
values as case statements. Instead, you can add the default statement 
which will be executed if no matching case statements are found. 
Think of it like the final else statement in an if/else chain.

Here is an example of a switch statement:*/

switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
  default:
    defaultStatent;
    break;
}

/*If the break statement is omitted from a switch statement's case, 
the following case statement(s) are executed until a break is encountered. 
If you have multiple inputs with the same output, you can represent them 
in a switch statement like this:*/

let result = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch(val){
    case 1:
      answer="alpha";
      break;
    case 2:
      answer="beta";
      break;
    case 3:
      answer="gamma";
      break;
    case 4:
      answer="delta";
      break;
    
  }


  // Only change code above this line
  return answer;
}

caseInSwitch(1);

switch(val){
  case 1:
  case 2:
  case 3:
    answer="Low";
    break;
  case 4:
  case 5:
  case 6:
    answer="Mid";
    break;
  case 7:
  case 8:
  case 9:
    answer="High";
    break;
}
/*You may recall from Comparison with the Equality Operator that all comparison 
operators return a boolean true or false value.

Sometimes people use an if/else statement to do a comparison, like this:*/

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
/*But there's a better way to do this. Since === returns true or false, 
we can return the result of the comparison:*/

function isEqual(a, b) {
  return a === b;
}
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
/*When a return statement is reached, the execution of the current function stops 
and control returns to the calling location.*/
