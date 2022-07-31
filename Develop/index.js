// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

const readmeDataArgs = process.argv.slice(2, process.argv.length);
console.log(readmeDataArgs);

const printReadMeData = readmeDataArr => {
    for (let i = 0; i < readmeDataArr.length; i += 1) {
        console.log(readmeDataArr[i]);
    }

    console.log('================');

    readmeDataArr.forEach((readmeItem) => {
        console.log(readmeItem)
    });
};

printReadMeData(readmeDataArgs);