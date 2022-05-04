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
  expect(() => stringLength('overtencharacters')).toThrow(Error);
})

test("no word goes as expected", () => {
  expect(() => stringLength('')).toThrow(Error);
});

// Test 2

const reverseString = require("./reverseString.js");

test('Backwards to be sdrawkcaB', () => {
  expect(reverseString("Backwards")).toEqual('sdrawkcaB');
});

test("Long sentence with spaces to be secaps htiw ecnetnes gnoL", () => {
  expect(reverseString("Long sentence with spaces")).toEqual(
    "secaps htiw ecnetnes gnoL"
  );
});

test("Num3er5 and $ymb°ls to be sl°bmy$ dna 5re3muN", () => {
  expect(reverseString("Num3er5 and $ymb°ls")).toEqual(
    "sl°bmy$ dna 5re3muN"
  );
});