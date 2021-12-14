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
/*Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog*/

function myReplace(str, before, after) {
  if(/^[A-Z]/.test(before)) {
    var arr=after.split('')
    arr[0]=arr[0].toUpperCase();
    after=arr.join('');
    }else{after=after.toLowerCase()};
  
  let regex =new RegExp(before);
  let result=str.replace(regex,after);
  return result;
}

console.log(myReplace("I think we should look up there", "up", "Down"));

function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    // Change the after word to be uncapitalized before we use it.
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);

  return str;
}

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/substring
function myReplace(str, before, after) {
  // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1)
  } else {
    after = after[0].toLowerCase() + after.substring(1)
  }

  // return string with argument "before" replaced by argument "after" (with correct case)
  return str.replace(before, after);
}

function myReplace(str, before, after) {
  // create a function that will change the casing of any number of letter in parameter "target"
  // matching parameter "source"
  function applyCasing(source, target) {
    // split the source and target strings to array of letters
    var targetArr = target.split("");
    var sourceArr = source.split("");
    // iterate through all the items of sourceArr and targetArr arrays till loop hits the end of shortest array
    for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++) {
      // find out the casing of every letter from sourceArr using regular expression
      // if sourceArr[i] is upper case then convert targetArr[i] to upper case
      if (/[A-Z]/.test(sourceArr[i])) {
        targetArr[i] = targetArr[i].toUpperCase();
      }
      // if sourceArr[i] is not upper case then convert targetArr[i] to lower case
      else targetArr[i] = targetArr[i].toLowerCase();
    }
    // join modified targetArr to string and return
    return targetArr.join("");
  }

  // replace "before" with "after" with "before"-casing
  return str.replace(before, applyCasing(before, after));
}


// Add new method to the String object, not overriding it if one exists already
String.prototype.capitalize =
  String.prototype.capitalize ||
  function() {
    return this[0].toUpperCase() + this.slice(1);
  };

const Util = (function() {
  // Create utility module to hold helper functions
  function textCase(str, tCase) {
    // Depending if the tCase argument is passed we either set the case of the
    // given string or we get it.
    // Those functions can be expanded for other text cases.

    if (tCase) {
      return setCase(str, tCase);
    } else {
      return getCase(str);
    }

    function setCase(str, tCase) {
      switch (tCase) {
        case "uppercase":
          return str.toUpperCase();
        case "lowercase":
          return str.toLowerCase();
        case "capitalized":
          return str.capitalize();
        default:
          return str;
      }
    }

    function getCase(str) {
      if (str === str.toUpperCase()) {
        return "uppercase";
      }
      if (str === str.toLowerCase()) {
        return "lowercase";
      }
      if (str === str.capitalize()) {
        return "capitalized";
      }
      return "normal";
    }
  }

  return {
    textCase
  };
})();

function myReplace(str, before, after) {
  const { textCase } = Util;
  const regex = new RegExp(before, "gi");
  const replacingStr = textCase(after, textCase(before));

  return str.replace(regex, replacingStr);
}

function myReplace(str, before, after) {
  const myArr = str.split(" ");
  const [wordToReplace] = myArr.filter(item => item === before);
  return wordToReplace[0].toUpperCase() !== wordToReplace[0]
    ? myArr.map(item => (item === before ? after : item)).join(" ")
    : myArr
        .map(item =>
          item === before ? after[0].toUpperCase() + after.slice(1) : item
        )
        .join(" ");
}


/*DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.*/

function pairElement(str) {
  let arr=[];
  let strSplit=str.split('');
  for(let i=0;i<strSplit.length;i++){
    switch(strSplit[i]){
        case "A": arr.push(['A','T']);
                  break;
        case "T": arr.push(['T','A']);
                  break;
        case "G": arr.push(['G','C']);
                  break;
        case "C": arr.push(['C','G']);
                  break;
      };
  }
  return arr;
}

function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];

  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };

  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}

function pairElement(str) {
  //create object for pair lookup
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  //split string into array of characters
  var arr = str.split("");
  //map character to array of character and matching pair
  return arr.map(x => [x, pairs[x]]);
}

console.log(pairElement("AAA"));


/*Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.*/