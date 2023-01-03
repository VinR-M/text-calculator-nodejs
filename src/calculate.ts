import { calculateNumbers } from './main/calculateNumbers';

const prompts = require('prompt');
const colors = require("@colors/colors/safe");

prompts.message = colors.magenta("Calculator");
prompts.start();

const promptProps = {
  properties: {
    sum: {
      description: colors.grey("Type in Two Numbers with Operator to see the Result")
    }
  }
}

prompts.get(promptProps, (err, userInput) => {
  const result = calculateNumbers(userInput.sum)
  console.log(`${colors.cyan("The Result is: ")} ${colors.white(result)}`);
});
