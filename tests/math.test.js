const {
  calculateTip,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  add
} = require("../src/math");

test("should calculate total with tip", () => {
  const total = calculateTip(10, 0.3);

  expect(total).toBe(13);
});

test("should calculate ttal with default tip", () => {
  const total = calculateTip(10);

  expect(total).toBe(12.5);
});

test("should convert 32 F to 0 C", () => {
  const result = fahrenheitToCelsius(32);

  expect(result).toBe(0);
});

test("should convert 0 C to 32 F", () => {
  const result = celsiusToFahrenheit(0);

  expect(result).toBe(32);
});

// test("async test demo", done => {
//   setTimeout(() => {
//     expect(1).toBe(2);
//     done();
//   }, 2000);
// });

// test("should add two numbers", done => {
//   add(2, 3).then(sum => {
//     expect(sum).toBe(5);
//     done();
//   });
// });

test("should add two numbers async/await", async () => {
  const result = await add(2, 3);
  expect(result).toBe(5);
});
