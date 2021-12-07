/*Reverse a String
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.*/
function reverseString(str) {
    return str
      .split("")
      .reverse()
      .join("");
  }
  function reverseString(str) {
    for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }

  function reverseString(str) {
    var rStr="";
    for(let i=str.length-1;i>=0;i--){
      rStr+=str[i];
    }
    return rStr;
  }
  console.log(reverseString("hello"));

  /*Factorialize a Number
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.*/
  
function factorialize(num) {
    if(num==0)return 1;
    else return factorialize(num-1)*num;
  }
  

  function factorialize(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
      product *= i;
    }
    return product;
  }

/*Solution using tail recursion https://stackoverflow.com/questions/33923/what-is-tail-recursion*/
  function factorialize(num, factorial = 1) {
    if (num === 0) {
      return factorial;
    } else {
      return factorialize(num - 1, factorial * num);
    }
  }
  
  function factorialize(num) {
    return num < 0 ? 1 :
      new Array(num)
        .fill(undefined)
        .reduce((product, _, index) => product * (index + 1), 1);
  }
  factorialize(5);

/*Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.*/

function findLongestWordLength(str) {
    let splitStr=str.split(' ');
    var longestWord="";
    for(var i=0;i<splitStr.length;i++){
      if(splitStr[i].length>longestWord.length){
        longestWord=splitStr[i];
      }
    }
    return longestWord.length;
  }

  function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
  
    return maxLength;
  }
  /*Re https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce*/
  function findLongestWordLength(s) {
    return s.split(' ')
      .reduce(function(longest, word) {
        return Math.max(longest, word.length)
      }, 0);
  }

  function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(word => word.length));
  }

  /*We provide Math.max with the length of each word as argument, and it will simply return the highest of all.Let’s analyze everything inside the Math.max parenthesees to understand how we do that.
  str.split(" ") splits the string into an array, taking spaces as separators. It returns this array: [“The”,"quick,“brown”,“fox”,“jumped”,“over”,“the”,“lazy”,“dog”].

  Then, we will make another array, made from the lengths of each element of the str.split(" ") array with map().

  str.split(" ").map(word => word.length) returns [3, 5, 5, 3, 6, 4, 3, 4, 3]

  Finally, we pass the array as argument for the Math.max function with the spread operator ...*/

  function findLongestWordLength(str) {
    // split the string into individual words
    const words = str.split(" ");
  
    // words only has 1 element left that is the longest element
    if (words.length == 1) {
      return words[0].length;
    }
  
    // if words has multiple elements, remove the first element
    // and recursively call the function
    return Math.max(
      words[0].length,
      findLongestWordLength(words.slice(1).join(" "))
    );
  }
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));


/*Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].*/

function largestOfFour(arr) {
    var maxArray=[];
    for(let i=0;i<arr.length;i++){
      maxArray.push(Math.max(...arr[i]))
    }
    return maxArray;
  }

function largestOfFour(arr) {
    let results = [];
    for (let i = 0; i < arr.length; i++) {
      let largestNumber = arr[i][0];
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
        }
      }
      results[i] = largestNumber;
    }
  
    return results;
  }
  
function largestOfFour(arr) {
    return arr.map(function(group) {
      return group.reduce(function(prev, current) {
        return current > prev ? current : prev;
      });
    });
  }

function largestOfFour(arr) {
    return arr.map(Function.apply.bind(Math.max, null));
  }

function largestOfFour(arr, finalArr = []) {
return !arr.length
    ? finalArr
    : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
}


  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

/*Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.*/

function confirmEnding(str, target) {
    let regex=new RegExp(target+"$","i");
    return regex.test(str);
  }

function confirmEnding(str, target) {
// "Never give up and good luck will find you."
// -- Falcor

return str.slice(str.length - target.length) === target;
}

function confirmEnding(str, target) {
    return str.slice(-target.length) === target;
  }
  
  
  confirmEnding("Bastian", "n");