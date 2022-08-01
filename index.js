const inquirer = require('inquirer');
// const fs = require('fs');
// const generateReadMe = require('./src/README-template');

// // TODO: Create an array of questions for user input
// const pageREADME = generateReadMe(projectTitle, projectDesc);


// fs.writeFile('./README.md', pageREADME, err => {
//     if (err) throw err;

//     console.log('README complete, check out README.md to see the output.');
// });

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }
    ]);
}

const promptProject = () => {
    console.log(`
    =================
    Add Project info
    =================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Project Title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'Project Description',
            message: 'Provide a description of your project:'
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Steps to install the project:'
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Instructions and examples for use of your project:'
        },
        {
            type: 'list',
            name: 'License',
            message: 'Choose a license for your project:',
            choices: ['MIT', 'Apache', 'BSD', 'GNU', 'Mozilla']
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'Provide guidelines for how other developers can contribute to your project:'
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'Provide instructions and examples on how to run tests on your project:'
        }
    ]);
};

promptUser()
.then(answers => console.log(answers))
.then(promptProject)
.then(projectAnswers => console.log(projectAnswers));
