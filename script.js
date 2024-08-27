const arabicToRoman = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I",
};

const arabicToRomanNumberal = (arabicInput) => {
  let romanNumberalArr = [];

  let arabicNumber = arabicInput;

  console.log("initial number: ", arabicNumber);

  const arabicArr = Object.keys(arabicToRoman).reverse();
  console.log(arabicArr);

  for (let i = 0; i < arabicArr.length; i++) {
    console.log("arabicArr: ", arabicArr[i]);
    while (arabicNumber >= arabicArr[i] && arabicNumber > 0) {
      arabicNumber = arabicNumber - arabicArr[i];
      romanNumberalArr.push(arabicArr[i]);
      console.log("current romanNumeralArr: ", romanNumberalArr);
    }
  }

  console.log(romanNumberalArr);
};

console.log(arabicToRomanNumberal(2572));
