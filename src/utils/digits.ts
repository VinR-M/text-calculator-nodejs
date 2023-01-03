export const digits = (userInput: String, colors) => {
    const inputItems = userInput.split(' ')
    const result = parseInt(inputItems[0]) + parseInt(inputItems[2])

    console.log(`${colors.cyan("The Result is: ")} ${colors.white(result)}`);
}