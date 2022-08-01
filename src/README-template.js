const generateReadMe = (projectTitle, projectDesc) => {
    return `
# ${projectTitle}

## Description
${projectDesc}

## Table of Contents (optional)
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

    `;
};


module.exports = generateReadMe;