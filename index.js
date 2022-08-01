
const fs = require('fs');
const generateReadMe = require('./src/README-template');

// TODO: Create an array of questions for user input
const readmeDataArgs = process.argv.slice(2);

const [projectTitle, projectDesc] = readmeDataArgs;

// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

fs.writeFile('./README.md', generateReadMe(projectTitle, projectDesc), err => {
    if (err) throw err;

    console.log('README complete, check out README.md to see the output.');
});