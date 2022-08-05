module.exports = templateData => {
    // destructure page data by section
    const { readmeBody, username, email } = templateData;
    const { title, description, installation, usage, license,contributing, tests} = readmeBody[0];

    return `
# ${title}

![GitHub](https://img.shields.io/badge/license-${license}-green)

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contributing
${contributing}

## Tests
${tests}

## Questions
*For any questions, please contact me at https://github.com/${username} or ${email}.*
    `;
};

