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
            message: 'What is your GitHub username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a username');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter an email address');
                    return false;
                }
            }
        }
    ]);
}

const promptProject = projectData => {
    console.log(`
    =================
    Add Project info
    =================
    `);

    if (!projectData.readmeArr) {
        projectData.readmeArr = [];
    }
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'Project Title',
                message: 'What is the title of your project?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the title of your project');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'Project Description',
                message: 'Provide a description of your project:',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a description of your project');
                        return false;
                    }
                }    
            },
            {
                type: 'input',
                name: 'Installation',
                message: 'Steps to install the project:',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please list steps to install your project');
                        return false;
                    }
                }   
            },
            {
                type: 'input',
                name: 'Usage',
                message: 'Instructions and examples for use of your project:',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please provide instructions for use of your project');
                        return false;
                    }
                }    
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
                message: 'Provide guidelines for how other developers can contribute to your project:',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please provide instructions on how to contribute to your project');
                        return false;
                    }
                }    
            },
            {
                type: 'input',
                name: 'Tests',
                message: 'Provide instructions and examples on how to run tests on your project:',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please provide instructions on how to run tests on your project');
                        return false;
                    }
                }    
            }
        ]);
};

promptUser()
.then(promptProject)
.then(projectData => {
    console.log(projectData);
});
