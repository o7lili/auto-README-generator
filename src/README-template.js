module.exports = templateData => {
    // destructure page data by section
    const { readmeBody, gitHub, ...questions } = templateData;

    return `
# ${readmeBody.title}

![GitHub](https://img.shields.io/badge/license-${readmeBody.license}-green)

## Description
${readmeBody.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${readmeBody.installation}

## Usage
${readmeBody.usage}

## License
${readmeBody.license}

## Contributing
${readmeBody.contributing}

## Tests
${readmeBody.tests}

## Questions
*For any questions, please contact me at ${gitHub.githubUser} or ${gitHub.email}.*
    `;
};

