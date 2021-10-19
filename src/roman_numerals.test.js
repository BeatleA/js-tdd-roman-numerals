const getRomanNumeral = require("./roman_numerals.js");

test("throws an error if incorrect input", () => {
    expect(() => {
        getRomanNumeral(-2);
    }).toThrow("Number must be in the range 1 - 3000");

    expect(() => {
        getRomanNumeral(0);
    }).toThrow("Number must be in the range 1 - 3000");

    expect(() => {
        getRomanNumeral(3001);
    }).toThrow("Number must be in the range 1 - 3000");

    expect(() => {
        getRomanNumeral(3500);
    }).toThrow("Number must be in the range 1 - 3000");
});

test("throws an error if input not an Integer", () => {
    expect(() => {
        getRomanNumeral(2.5);
    }).toThrow("Number must be an Integer");

    expect(() => {
        getRomanNumeral("200");
    }).toThrow("Number must be an Integer");

    expect(() => {
        getRomanNumeral(true);
    }).toThrow("Number must be an Integer");
});

// 1 - 3 I - III
// 4 - 8 IV - VIII
// 9 - 13 IX - XIII
// 14 - 18 XIV - XVIII
// 10 - 30 X - XXX
// 40 - 80 XL - LXXX
// 90 - 130 XC - CXXX
// 140 -180 CXL - CLXXX
// 100 - 300 C - CCC
// 400 - 800 CD - DCCC
// 900 - 1300 CM - MCCC
// 1400 - 1800 MCD - MDCCC
// 1000 - 3000 M - MMM

test("returns I - III if input 1 - 3", () => {
    expect(getRomanNumeral(1)).toBe("I");
    expect(getRomanNumeral(3)).toBe("III");
});

test("returns IV - VIII if input 4 - 8", () => {
    expect(getRomanNumeral(4)).toBe("IV");
    expect(getRomanNumeral(6)).toBe("VI");
    expect(getRomanNumeral(8)).toBe("VIII");
});

test("returns IX - XIII if input 9 - 13", () => {
    expect(getRomanNumeral(9)).toBe("IX");
    expect(getRomanNumeral(13)).toBe("XIII");
});