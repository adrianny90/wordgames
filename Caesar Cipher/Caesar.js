const plain = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const Cipher = [
  "X",
  "Y",
  "Z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
];
const howBig = process.argv.length - 2;
const shift = process.argv[howBig + 1];
//check if last parameter for shift is a number
const check = Number(shift);
// if (Number.isInteger(check)) {
//   console.log("OK");
// } else {
//   console.log("NOT");
// }
//console.log(typeof plain[2]);
//building proper array only with text
let i = 2;
const array = [];
while (i < howBig + 1) {
  array.push(process.argv[i].toLowerCase());
  i++;
}
//console.log(array);
const newArray = [];
array.forEach((element) => {
  word = "";
  element.split("").forEach((letter) => {
    let index1 = 0;
    plain.forEach((item) => {
      if (letter === item.toLowerCase()) {
        indexPlain = index1;
      } else {
        index1++;
      }
    });
    let move = indexPlain + Number(shift);
    if (move >= 0 && move < plain.length) {
      word = word + plain[move];
    } else if (move < 0) {
      move = move + plain.length;
      word = word + plain[move];
    } else {
      move = move - plain.length;
      word = word + plain[move];
    }
  });
  newArray.push(word.toLowerCase());
});
const consoleOutput = newArray.join(" ");
console.log(consoleOutput);

//It translate Plain into Cipher
// array.forEach((element) => {
//     word = "";
//     element.split("").forEach((letter) => {
//       let index1 = 0;
//       plain.forEach((item) => {
//         if (letter === item.toLowerCase()) {
//           indexPlain = index1;
//         } else {
//           index1++;
//         }
//       });
//       let move = indexPlain + Number(shift);
//       if (move >= 0 && move < Cipher.length) {
//         word = word + Cipher[move];
//       } else if (move < 0) {
//         move = move + Cipher.length;
//         word = word + Cipher[move];
//       } else {
//         move = move - Cipher.length;
//         word = word + Cipher[move];
//       }
//     });
//     newArray.push(word.toLowerCase());
//   });
//   console.log(newArray);
