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
    ${"mil mas dos"}
    ${"menos uno mas cuatro"}
  `("should return an error message for input '$invalidInput'", async ({invalidInput}) => {
    const response = calculate(invalidInput)
    expect(response.message).toEqual(
      expect.stringContaining("Please use only numbers between 0 and 999.")
    );
  });
});

describe("When English input string is invalid", () => {
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

describe("When Spanish input string is invalid", () => {
  it.each`
    invalidInput
    ${"cincuentauno mas dos"}
  `(
    "should return an error message for '$invalidInput'",
    async ({invalidInput}) => {
      const response = calculate(invalidInput)
      expect(response.message).toEqual(expect.stringContaining('Please only include Numbers (e.g., "52" or "Cincuenta y Dos" ) and Operator ("+" or "mas").'));
    }
  );
});

describe("When input does not include operator", () => {
  it.each`
    invalidInput
    ${"two"}
    ${"2"}
    ${"dos"}
  `(
    "should return an error message for '$invalidInput'",
    async ({invalidInput}) => {
      const response = calculate(invalidInput)
      expect(response.message).toEqual(expect.stringContaining('Please include Operator ("+" or "plus").'));
    }
  );
});

describe("when input is valid", () => {
  it.each`
    input                                   | result
    ${"0 + 1"}                              | ${1}
    ${"zero plus one"}                      | ${"One"}
    ${"ninety five plus one hundred eight"} | ${"Two Hundred Three"}
    ${"nine hundred ninety-eight plus one"} | ${"Nine Hundred Ninety Nine"}
    ${"cero mas uno"}                       | ${"uno"}
    ${"novecientos noventa y ocho mas uno"} | ${"novecientos noventa y nueve"}
  `("should return '$result' for '$input'", async ({ input, result }) => {
    const response = calculate(input)
    expect(response.result).toEqual(result);
  });
});
