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

const arabicToRomanNumeral = (arabicInput) => {
  if (arabicInput > 3999) {
    return "Please enter a number less than or equal to 3999";
  } else if (arabicInput < 1) {
    return "Please enter a number greater than or equal to 1";
  } else {
    let arabicNumeralArr = [];
    let romanNumberalArr = [];

    let arabicNumber = arabicInput;

    const arabicArr = Object.keys(arabicToRoman).reverse();

    for (let i = 0; i < arabicArr.length; i++) {
      while (arabicNumber >= arabicArr[i] && arabicNumber > 0) {
        arabicNumber = arabicNumber - arabicArr[i];
        arabicNumeralArr.push(arabicArr[i]);
      }
    }

    arabicNumeralArr.map((num) => {
      romanNumberalArr.push(arabicToRoman[num]);
    });

    return romanNumberalArr.join("");
  }
};
