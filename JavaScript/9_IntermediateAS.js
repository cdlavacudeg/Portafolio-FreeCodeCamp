/*Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.*/

function sumAll(arr) {
    let count=0;
    for(let i=Math.min(...arr);i<=Math.max(...arr);i++){
      count+=i;
    }
    return count;
  }

function sumAll(arr) {
let max = Math.max(arr[0], arr[1]);
let min = Math.min(arr[0], arr[1]);
let sumBetween = 0;
for (let i = min; i <= max; i++) {
    sumBetween += i;
}
return sumBetween;
}

const sumAll = arr => {
    // Buckle up everything to one!
    const startNum = arr[0];
    const endNum = arr[1];
  
    // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
    // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
    const numCount = Math.abs(startNum - endNum) + 1;
  
    // Using Arithmetic Progression summing formula
    const sum = ((startNum + endNum) * numCount) / 2;
    return sum;
  };

function sumAll(arr) {
let sumBetween = 0;
for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sumBetween += i;
}
return sumBetween;
}
  

function sumAll(arr) {
    const [first, last] = [...arr].sort((a, b) => a - b);
    return first !== last
      ? first + sumAll([first + 1, last])
      : first;
}

  
  console.log(sumAll([1, 4]));

/*Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.*/

function diffArray(arr1, arr2) {
    const newArr=arr1.concat(arr2)
    const probe = newArr.filter(value=> !arr2.includes(value)|| !arr1.includes(value));
    
    return probe;
  }

function diffArray(arr1, arr2) {
const probe = arr1.filter(value=> !arr2.includes(value))
        .concat(arr2.filter(value=> !arr1.includes(value)));

return probe;
}

function diffArray(arr1, arr2) {
    var newArr = [];
  
    function onlyInFirst(first, second) {
      // Looping through an array to find elements that don't exist in another array
      for (var i = 0; i < first.length; i++) {
        if (second.indexOf(first[i]) === -1) {
          // Pushing the elements unique to first to newArr
          newArr.push(first[i]);
        }
      }
    }
  
    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);
  
    return newArr;
  }
  
  function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
  }

  function diffArray(arr1, arr2) {
    return [...diff(arr1, arr2), ...diff(arr2, arr1)];
  
    function diff(a, b) {
      return a.filter(item => b.indexOf(item) === -1);
    }
  }

    
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
/*Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.*/

function destroyer(arr,...args) {
    return arr.filter((value)=> !args.includes(value));
  }

function destroyer(arr) {
let valsToRemove = Object.values(arguments).slice(1);

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < valsToRemove.length; j++) {
    if (arr[i] === valsToRemove[j]) {
        delete arr[i];
    }
    }
}
    return arr.filter(item => item !== null);
  }

function destroyer(arr) {
var valsToRemove = Array.from(arguments).slice(1);
return arr.filter(function(val) {
    return !valsToRemove.includes(val);
});
}

  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

/*Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.*/
  

  function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    return myConsonants !== null
      ? str
          .replace(consonantRegex, "")
          .concat(myConsonants)
          .concat("ay")
      : str.concat("way");
  }
  
  function translatePigLatin(str) {
    // Create variables to be used
    var pigLatin = "";
    var regex = /[aeiou]/gi;
  
    // Check if the first character is a vowel
    if (str[0].match(regex)) {
      pigLatin = str + "way";
    } else if (str.match(regex) === null) {
      // Check if the string contains only consonants
      pigLatin = str + "ay";
    } else {
      // Find how many consonants before the first vowel.
      var vowelIndice = str.indexOf(str.match(regex)[0]);
  
      // Take the string from the first vowel to the last char
      // then add the consonants that were previously omitted and add the ending.
      pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
    }

    function translatePigLatin(str) {
      if (str.match(/^[aeiou]/)) return str + "way";
    
      const consonantCluster = str.match(/^[^aeiou]+/)[0];
      return str.substring(consonantCluster.length) + consonantCluster + "ay";
    }
    
    function translatePigLatin(str) {
      return str
        .replace(/^[aeiou]\w*/, "$&way")
        .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
    }

    function translatePigLatin(str, charPos = 0) {
      return ['a', 'e', 'i', 'o', 'u'].includes(str[0])
        ? str + (charPos === 0 ? 'way' : 'ay')
        : charPos === str.length
          ? str + 'ay'
          : translatePigLatin(str.slice(1) + str[0], charPos + 1);
    }
  
    return pigLatin;
  }
  translatePigLatin("consonant"); 
