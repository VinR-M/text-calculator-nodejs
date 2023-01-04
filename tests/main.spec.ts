import { calculate } from '../src/main/calculate'

describe("When input is empty", () => {
  it("should return an empty string", () => {
    const response = calculate('')
    expect(response.result).toEqual('');
  });
});

describe("when number is out of range", () => {
  it.each`
    invalidInput
    ${"1100 + 11"}
    ${"-1 + 2"}
    ${"eleven hundred plus eleven"}
    ${"minus one plus two"}
  `("should return an error message for input '$invalidInput'", async ({invalidInput}) => {
    const response = calculate(invalidInput)
    expect(response.message).toEqual(
      expect.stringContaining("Please use only numbers between 0 and 999.")
    );
  });
});

describe("When input string is invalid", () => {
  it.each`
    invalidInput
    ${"onehundred plus one"}
    ${"fortyfour plus two"}
  `(
    "should return an error message for '$invalidInput'",
    async ({invalidInput}) => {
      const response = calculate(invalidInput)
      expect(response.message).toEqual(expect.stringContaining('Please only include Numbers (e.g., "52" or "Fifty-Two" ) and Operator ("+" or "plus").'));
    }
  );
});

describe("when input is valid", () => {
  it.each`
    input                                   | result
    ${"0 + 1"}                              | ${1}
    ${"zero plus one"}                      | ${"One"}
    ${"nine hundred ninety-eight plus one"} | ${"Nine Hundred Ninety Nine"}
  `("should return '$result' for '$input'", async ({ input, result }) => {
    const response = calculate(input)
    expect(response.result).toEqual(result);
  });
});
