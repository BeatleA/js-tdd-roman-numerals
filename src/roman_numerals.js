const getRomanNumeral = number => {
    if (number < 1 || number > 3000) throw new Error("Number must be in the range 1 - 3000");
    if (!Number.isInteger(number)) throw new Error("Number must be an Integer");
    let romanNumeral = "";

    const addI = start => {
        for (let i = start; i < number; i++) {
            romanNumeral += "I";
        }
    };

    if (number < 4) {
        addI(0);
    } else if (number === 4) {
        romanNumeral = "IV";
    } else if (number < 9) {
        romanNumeral = "V";
        addI(5);
    } else if (number === 9) {
        romanNumeral = "IX";
    } else if (number < 14) {
        romanNumeral = "X";
        addI(10);
    }

    return romanNumeral;
}

module.exports = getRomanNumeral;