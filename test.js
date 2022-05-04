// Test 1

const stringLength = require("./stringLength.js");

test("hi to be 2", () => {
  expect(stringLength("hi")).toEqual(2);
});

test("X to be 1", () => {
  expect(stringLength("X")).toEqual(1);
});

test("helloworld to be 10", () => {
  expect(stringLength("helloworld")).toEqual(10);
});

test("over ten characters goes as expected", () => {
  expect(() => stringLength("overtencharacters")).toThrow(Error);
});

test("no word goes as expected", () => {
  expect(() => stringLength("")).toThrow(Error);
});

// Test 2

const reverseString = require("./reverseString.js");

test("Backwards to be sdrawkcaB", () => {
  expect(reverseString("Backwards")).toEqual("sdrawkcaB");
});

test("Long sentence with spaces to be secaps htiw ecnetnes gnoL", () => {
  expect(reverseString("Long sentence with spaces")).toEqual(
    "secaps htiw ecnetnes gnoL"
  );
});

test("Num3er5 and $ymb°ls to be sl°bmy$ dna 5re3muN", () => {
  expect(reverseString("Num3er5 and $ymb°ls")).toEqual("sl°bmy$ dna 5re3muN");
});

// Test 3

const calculator = require("./calculator.js");

describe("add", () => {
  test("1+1 to be 2", () => {
    expect(new calculator().add(1, 1)).toBe(2);
  });

  test("0+5 to be 5", () => {
    expect(new calculator().add(0, 5)).toBe(5);
  });

  test("35+65 to be 100", () => {
    expect(new calculator().add(35, 65)).toBe(100);
  });

  test("1.5+3.14 to be 4.64", () => {
    expect(new calculator().add(1.5, 3.14)).toBeCloseTo(4.64);
  });
});

describe("substract", () => {
  test("2-2 to be 0", () => {
    expect(new calculator().substract(2, 2)).toBe(0);
  });

  test("6-2 to be 4", () => {
    expect(new calculator().substract(6, 2)).toBe(4);
  });

  test("0-5 to be -5", () => {
    expect(new calculator().substract(0, 5)).toBe(-5);
  });

  test("4-20 to be -16", () => {
    expect(new calculator().substract(4, 20)).toBe(-16);
  });
});

describe("multiply", () => {
  test("7*4 to be 2", () => {
    expect(new calculator().multiply(7, 4)).toBe(28);
  });

  test("10*9021 to be 90210", () => {
    expect(new calculator().multiply(10, 9021)).toBe(90210);
  });

  test("0*4000 to be 0", () => {
    expect(new calculator().multiply(0, 4000)).toBe(0);
  });

  test("-8*-4 to be 32", () => {
    expect(new calculator().multiply(-8, -4)).toBe(32);
  });
});

describe("divide", () => {
  test("25/25 to be 1", () => {
    expect(new calculator().divide(25, 25)).toBe(1);
  });

  test("84/35 to be 2.4", () => {
    expect(new calculator().divide(84, 35)).toBe(2.4);
  });

  test("-5/5 to be -1", () => {
    expect(new calculator().divide(-5, 5)).toBe(-1);
  });

  test("5167/4825 to be 1.07", () => {
    expect(new calculator().divide(5167, 4825)).toBeCloseTo(1.07);
  });
});

// Task 4

const capitalize = require("./capitalize.js");

describe("Capitalizer", () => {
  test("capital to be Capital", () => {
    expect(capitalize("capital")).toEqual("Capital");
  });

  test("low to be Low", () => {
    expect(capitalize("low")).toEqual("Low");
  });

  test("zz to be Zz", () => {
    expect(capitalize("zz")).toEqual("Zz");
  });

  test("x to be X", () => {
    expect(capitalize("x")).toEqual("X");
  });
});
