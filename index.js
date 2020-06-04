const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
const generateMarkdown = require('./generateMarkdown');

const questions = [
        {
            type: "input",
            message: "What is your Github username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your e-mail?",
            name: "email"
        },

        {
            type: "input",
            message: "What is the name of your project?",
            name: "projectName"

        },
        {
            type: "input",
            message: "Enter a description of your project.",
            name: "description"

        },
        {
            type: "input",
            message: "Who all has contributed to this project?",
            name: "contribute"

        },
        {
            type: "input",
            message: "What command should run the file?",
            name: "runFile"

        }
    ]


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
  
  function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
      writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
    })
  }

init();