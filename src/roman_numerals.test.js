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
    expect(getRomanNumeral(11)).toBe("XI");
    expect(getRomanNumeral(13)).toBe("XIII");
});

test("returns XIV - XVIII if input 14 - 18", () => {
    expect(getRomanNumeral(14)).toBe("XIV");
    expect(getRomanNumeral(15)).toBe("XV");
    expect(getRomanNumeral(18)).toBe("XVIII");
});

test("returns X, XX or XXX if input 10, 20 or 30", () => {
    expect(getRomanNumeral(10)).toBe("X");
    expect(getRomanNumeral(20)).toBe("XX");
    expect(getRomanNumeral(25)).toBe("XXV");
});

test("returns XL - LXXX if input 40 - 80", () => {
    expect(getRomanNumeral(40)).toBe("XL");
    expect(getRomanNumeral(70)).toBe("LXX");
    expect(getRomanNumeral(80)).toBe("LXXX");
});

test("returns XC - CXXX if input 90 - 130", () => {
    expect(getRomanNumeral(90)).toBe("XC");
    expect(getRomanNumeral(110)).toBe("CX");
    expect(getRomanNumeral(130)).toBe("CXXX");
});

test("returns CXL - CLXXX if input 140 - 180", () => {
    expect(getRomanNumeral(140)).toBe("CXL");
    expect(getRomanNumeral(150)).toBe("CL");
    expect(getRomanNumeral(180)).toBe("CLXXX");
});

test("returns C, CC or CCC if input 100, 200 or 300", () => {
    expect(getRomanNumeral(140)).toBe("CXL");
    expect(getRomanNumeral(150)).toBe("CL");
    expect(getRomanNumeral(180)).toBe("CLXXX");
});

test("returns CD - DCCC if input 400 - 800", () => {
    expect(getRomanNumeral(400)).toBe("CD");
    expect(getRomanNumeral(700)).toBe("DCC");
    expect(getRomanNumeral(800)).toBe("DCCC");
});

test("returns CM - MCCC if input 900 - 1300", () => {
    expect(getRomanNumeral(900)).toBe("CM");
    expect(getRomanNumeral(1200)).toBe("MCC");
    expect(getRomanNumeral(1300)).toBe("MCCC");
});

test("returns MCD - MDCCC if input 1400 - 1800", () => {
    expect(getRomanNumeral(1400)).toBe("MCD");
    expect(getRomanNumeral(1600)).toBe("MDC");
    expect(getRomanNumeral(1800)).toBe("MDCCC");
});

test("returns M, MM or MMM if input 1000, 2000 or 3000", () => {
    expect(getRomanNumeral(1000)).toBe("M");
    expect(getRomanNumeral(2000)).toBe("MM");
    expect(getRomanNumeral(3000)).toBe("MMM");
});

test("returns more complicated numerals correctly", () => {
    expect(getRomanNumeral(34)).toBe("XXXIV");
    expect(getRomanNumeral(53)).toBe("LIII");
    expect(getRomanNumeral(27)).toBe("XXVII");
    expect(getRomanNumeral(89)).toBe("LXXXIX");
    expect(getRomanNumeral(99)).toBe("XCIX");
    expect(getRomanNumeral(377)).toBe("CCCLXXVII");
    expect(getRomanNumeral(531)).toBe("DXXXI");
    expect(getRomanNumeral(1349)).toBe("MCCCXLIX");
    expect(getRomanNumeral(2999)).toBe("MMCMXCIX");
});