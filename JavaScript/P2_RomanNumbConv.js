/*Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.*/
function convertToRoman(num) {
    let romanSimbols={
      'M':1000,
      'CM':900,
      'D':500,
      'CD':400,
      'C':100,
      'XC':90,
      'L':50,
      'XL':40,
      'X':10,
      'IX':9,
      'V':5,
      'IV':4,
      'I':1,
    };
    let roman='';

    for(let i in romanSimbols){
        if(num % romanSimbols[i]!=num){
            let div=Math.floor(num/romanSimbols[i]);
            roman+=i.repeat(div);
            num-=div*romanSimbols[i];
        }
    }
    return roman;
  }
console.log(convertToRoman(12));
  