import { calculate } from '../src/main/calculate'

describe("When input is empty", () => {
  it("should return undefined", () => {
    const response = calculate
    expect(response).toEqual(undefined);
  });
});

describe.only("when number is out of range", () => {
  it.each`
    invalidInput
    ${"1000 + 11"}
    ${"-1 + 2"}
    ${"one thousand plus thirty-five"}
    ${"minus one plus eleven"}
  `("should return an error message for input '$invalidInput'", async ({invalidInput}) => {
    const response = calculate(invalidInput)
    expect(response.message).toEqual(
      expect.stringContaining("Please use only numbers between 0 and 999.")
    );
  });
});

// describe("When input string is invalid", () => {
//   it.each`
//     invalidInput
//     ${"onehundred"}
//     ${"fortyfour"}
//     ${"cincuenta uno"}
//   `(
//     "should return an error message for '$invalidInput'",
//     async invalidInput => {
//       const { stdout } = await exec(`./calculate "${invalidInput}"`);
//       expect(stdout).toEqual(expect.stringContaining("invalid string"));
//     }
//   );
// });

// describe("when input is valid", () => {
//   it.each`
//     input                                   | result
//     ${"5"}                                  | ${"5"}
//     ${"0 + 1"}                              | ${"1"}
//     ${"five"}                               | ${"five"}
//     ${"zero plus one"}                      | ${"one"}
//     ${"nine hundred ninety-eight plus one"} | ${"nine hundred ninety-nine"}
//     ${"cinco"}                              | ${"cinco"}
//     ${"cero mas uno"}                       | ${"uno"}
//     ${"novecientos noventa y ocho mas uno"} | ${"novecientos noventa y nueve"}
//   `("should return '$result' for '$input'", async ({ input, result }) => {
//     const { stdout } = await exec(`./calculate "${input}"`);
//     expect(stdout).toEqual(expect.stringContaining(result));
//   });
// });
