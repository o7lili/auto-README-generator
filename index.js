const inquirer = require('inquirer');
// const fs = require('fs');
// const generateReadMe = require('./src/README-template');

// // TODO: Create an array of questions for user input
// const pageREADME = generateReadMe(projectTitle, projectDesc);


// fs.writeFile('./README.md', pageREADME, err => {
//     if (err) throw err;

//     console.log('README complete, check out README.md to see the output.');
// });

inquirer
  .prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));
