const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: "input",
      message: 'Enter a project name...',
      name: 'project title'
    },
    {
      type: "input",
      message: 'What is your GitHub username?',
      name: 'username'
    },
    {
      type: 'input',
      message: "What is your email address?",
      name: "email"
    },
    {
      type: 'input',
      message: "What is your project description?",
      name: 'description'
    },
    {
      type: 'confirm',
      message: "Is all your information correct?",
      name: 'confirmation'
  }
  ])
  .then((data) => {
    const filename = 'README.md';

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    err ? console.log(err) : console.log('Success!')
  );
  });
