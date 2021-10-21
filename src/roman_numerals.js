const getRomanNumeral = number => {
    if (number < 1 || number > 3000) throw new Error("Number must be in the range 1 - 3000");
    if (!Number.isInteger(number)) throw new Error("Number must be an Integer");
    
    let arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let index = 0;
    let romanNumeral = "";
    while (number > 0) {
        let quotient = Math.floor(number / arabic[index]);
        number = number % arabic[index];
        for (let i = 0; i < quotient; i++) {
            romanNumeral += roman[index];
        }
        index++;
    }
    return romanNumeral;
}

module.exports = getRomanNumeral;