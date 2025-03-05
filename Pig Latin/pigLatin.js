let i = 2;
const array = [];
while (i < process.argv.length) {
  array.push(process.argv[i]);
  i++;
}

function isVowel(char) {
  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(char.toLowerCase())) {
    return true;
  }
}

function isConsonant(char) {
  const consonants = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  if (consonants.includes(char.toLowerCase())) {
    return true;
  }
}
//console.log(array);
newArray = "";
array.forEach((word) => {
  let text = word.split("");
  newWord = "";
  let flag = false;
  if (text[0] !== text[0].toLowerCase()) {
    flag = true;
  }
  //   console.log(text);
  //   console.log(text[0]);
  if (isVowel(text[1]) && isConsonant(text[0])) {
    firstLetter = text.shift().toLowerCase();
    //console.log(text);
    text.forEach((letter) => (newWord = newWord + letter));
    newWord = newWord + firstLetter + "ay";
  } else if (isConsonant(text[0]) && isConsonant(text[1])) {
    firstLetter = text.shift().toLowerCase();
    secondLetter = text.shift().toLowerCase();
    console.log(text);
    text.forEach((letter) => (newWord = newWord + letter));
    newWord = newWord + firstLetter + secondLetter + "ay";
  } else {
    newWord = word + "way";
  }
  if (flag) {
    newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
  }
  newArray = newArray + " " + newWord;
});
console.log(newArray);
