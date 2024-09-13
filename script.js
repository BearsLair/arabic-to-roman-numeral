const inputNumber = document.getElementById("number");
const submitBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

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
  if (arabicInput === "") {
    return "Please enter a valid number";
  } else if (arabicInput > 3999) {
    return "Please enter a number less than or equal to 3999";
  } else if (arabicInput < 1) {
    return "Please enter a number greater than or equal to 1";
  } else {
    let arabicNumeralArr = [];
    let romanNumberalArr = [];

    let arabicNumber = arabicInput;

    const arabicArr = Object.keys(arabicToRoman).reverse();

    for (let i = 0; i < arabicArr.length; i++) {
      console.log("Current location in RN array: ", arabicArr[i]);

      while (arabicNumber >= arabicArr[i] && arabicNumber > arabicArr[i] - 1) {
        console.log("Arabic # before: ", arabicNumber);
        arabicNumber = arabicNumber - arabicArr[i];
        console.log("Arabic # after: ", arabicNumber);
        arabicNumeralArr.push(arabicArr[i]);
        console.log("Current Arabic array...", arabicNumeralArr);
      }
    }

    arabicNumeralArr.map((num) => {
      romanNumberalArr.push(arabicToRoman[num]);
    });

    return romanNumberalArr.join("");
  }
};

submitBtn.addEventListener("click", () => {
  output.textContent = arabicToRomanNumeral(inputNumber.value);
  inputNumber.value = "";
});
