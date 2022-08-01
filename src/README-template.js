const generateReadMe = (projectTitle, projectDesc) => {
    return `
# ${projectTitle}

![GitHub](https://img.shields.io/badge/license-${license}-green)

## Description
${projectDesc}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

## Usage

## License

## Contributing

## Tests

## Questions
*For any questions, please contact me at ${githubUser} or ${email}.*
    `;
};


module.exports = generateReadMe;