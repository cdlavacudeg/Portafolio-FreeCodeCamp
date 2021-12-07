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

  /*Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.*/
function repeatStringNumTimes(str, num) {
  let rString="";
  for(let i=1;i<=num;i++){
    rString+=str;
  }
  return rString;
}

function repeatStringNumTimes(str, num) {
  var accumulatedStr = "";
  while (num > 0) {
    accumulatedStr += str;
    num--;
  }
  return accumulatedStr;
}

function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}

repeatStringNumTimes("abc", 3);

/*Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.*/

function truncateString(str, num) {
  return str.length>num ? str.slice(0,num)+'...' : str;
}

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);

/*Finders Keepers
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.*/

function findElement(arr, func) {
  let num = undefined;
  for (let i=0;i<arr.length;i++){
    if(func(arr[i])) return arr[i];
  }
  return num;
}

function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}
/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find */
function findElement(arr, func) {
  return arr.find(func);
}

function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}

function findElement(arr, func) {
  return arr.length && !func(arr[0]) 
    ? findElement(arr.slice(1), func)
    : arr[0];
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

/*Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.*/

function booWho(bool) {
  return bool===true| bool===false? true : false;
}

function booWho(bool) {
  return typeof bool === "boolean";
}
booWho(null);

/*Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.*/


function titleCase(str) {
  let arr=str.split(" ");
  for(let i=0;i<arr.length;i++){
    arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].toLowerCase().slice(1)
  }
  return arr.join(" ");
}

String.prototype.replaceAt = function(index, character) {
  return (
    this.substr(0, index) + character + this.substr(index + character.length)
  );
};

function titleCase(str) {
  var newTitle = str.split(" ");
  var updatedTitle = [];
  for (var st in newTitle) {
    updatedTitle[st] = newTitle[st]
      .toLowerCase()
      .replaceAt(0, newTitle[st].charAt(0).toUpperCase());
  }
  return updatedTitle.join(" ");
}

function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}

console.log(titleCase("I'm a little tea pot"));

/*Slice and Splice
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.*/

function frankenSplice(arr1, arr2, n) {
  let arr3 =arr2.slice(0);
  arr3.splice(n,0,...arr1)
  return arr3;
}

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

/*Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.*/

function bouncer(arr) {
  return arr.filter(Boolean);
}

function bouncer(arr) {
  var falsy=[]
  for(let i=0;i<arr.length;i++){
    if(arr[i]) falsy.push(arr[i]);
  }
  return falsy;
}

bouncer([7, "ate", "", false, 9]);



/*Where do I Belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
console.log(getIndexToIns([2,5,10], 15));*/

function getIndexToIns(arr, num) {
  var arrSort=arr.sort((a,b)=>a-b);
  var index=0;
  for (let i=0;i<arrSort.length;i++){
    if(arrSort[i]>=num){
      index=i;
      return index;
    }else{
      index=arrSort.length;
    }
  }
  return index;
}
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num)
      return i;
  }

  return arr.length;
}

function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}

function getIndexToIns(arr, num) {
  // sort and find right index
  let index = arr
    .sort((curr, next) => curr - next)
    .findIndex(currNum => num <= currNum);
  // Returns index or total length of arr
  return index === -1 ? arr.length : index;
}

function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}


console.log(getIndexToIns([2,5,10], 15));
/*Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.*/

function mutation(arr) {
  var arrSplit=arr[1].toLowerCase().split('');
  for(let i=0;i<arrSplit.length;i++){
    if(arr[0].toLowerCase().indexOf(arrSplit[i])==-1) return false;
  }
  return true;
}

function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}
/*https://forum.freecodecamp.org/t/how-to-use-javascript-array-prototype-every-explained-with-examples/14287 */
function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
}

function mutation([ target, test ], i = 0) {
  target = target.toLowerCase();
  test = test.toLowerCase();
  return i >= test.length
    ? true
    : !target.includes(test[i])
      ? false
      : mutation([ target, test ], i + 1);
}
console.log(mutation(["Mary", "Army"]));

/*Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.*/

function chunkArrayInGroups(arr, size) {
  let array=[];
  let copy=arr.slice(0);
  for(let i=0;i<arr.length;i+=size){
    array.push(copy.splice(i,size));
    copy=arr.slice(0);
    console.log(array);
  }
  return array;
}

function chunkArrayInGroups(arr, size) {
  let temp = [];
  let result = [];

  for (let a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;
}

function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}
function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr = [];
  let i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
}

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

function chunkArrayInGroups(arr, size) {
  if (arr.length <= size) {
    return [arr];
  } else {
    return [arr.slice(0, size)].concat(
      chunkArrayInGroups(arr.slice(size), size)
    );
  }
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));