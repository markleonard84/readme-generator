function generateMarkDown(data) {
    return `
  # ${data.title}

  ## Table of Contents

  - [Descrition] (#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Link](#link)
  - [License](#licence)
  - [Contributors](#contributors)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Link
  This project can here accessed using the following link: ${data.link}

  ## License
  ![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg "License Badge")
  [License](https://opensource.org/licenses/${data.license})

  ## Contributors
  ${data.contributor}
  `
};

module.exports = generateMarkDown;