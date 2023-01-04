import { calculate} from './main/calculate';
const prompts = require('prompt');
const colors = require("@colors/colors/safe");

export const cliInterface = (() => {
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
    const response = calculate(userInput.sum)

    if (response?.error) {
      console.log(`${colors.red(response.message)}`);
    } else {
       console.log(`${colors.cyan("The Result is: ")} ${colors.white(response.result)}`);
    }

  });

})()
