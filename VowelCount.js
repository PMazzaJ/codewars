/**
 * 
  Challenge Url: https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
  Return the number (count) of vowels in the given string.
  We will consider a, e, i, o, and u as vowels for this Kata.
  The input string will only consist of lower case letters and/or spaces.
 *
 */
 
getCount(str) {
    let vowelsCount = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < str.length; i++) {
        let letter = str.charAt(i);
        (vowels.includes(letter)) ? vowelsCount ++ : console.log('nope');
    }

    return vowelsCount;
},
