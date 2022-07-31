const readmeDataArgs = process.argv.slice(2, process.argv.length);
const [projectTitle, projectDesc] = readmeDataArgs;

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

const generateReadMe = (projectTitle, projectDesc) => {
    return `
    # ${projectTitle}

    ## Description
    ${projectDesc}

    ## Table of Contents (optional)

    ## Installation

    ## Usage

    ## License

    ## Contributing

    ## Tests

    ## Questions

    `;
};

FileSystem.writeFile('README.md', generateReadMe(projectTitle, projectDesc), err => {
    if (err) throw err;

    console.log('README complete, check out README.md to see the output.');
});