const stringhLength = require("./stringLength");



test("hi to be 2", () => {
  expect(stringhLength("hi")).toEqual(2);
});

test("X to be 1", () => {
  expect(stringhLength("X")).toEqual(1);
});

test("helloworld to be 10", () => {
  expect(stringhLength("helloworld")).toEqual(10);
}); 

test("overtencharacters goes as expected", () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);
})

test("none goes as expected", () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);
});
