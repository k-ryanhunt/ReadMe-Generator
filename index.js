const fs = require("fs");
const inquirer = require("inquirer");

const generateREADME = (input) => `
# ${input.title}
​
${badge}
​
## Description
${input.description} 
​
​
## Table of Contents
${input.table} 
​
​
## Installations
${input.installation} 
​
​
## Usages
${input.usage} 
​
​
## Licenses
${input.license} 
​
​
## Contributors
${input.contribution} 
​
​
## Testing the Application
${input.tests} 
​
​
## Any questions?
"You can contact me, ${input.username}, through email at ${input.email} if you have any questions."`
    
    
    const questions = [{
        type: 'input',
        message: 'Enter your project title:',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Describe your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What would you like to include in your Table of Contents?',
        name: 'table',
    },
    {
        type: 'input',
        message: 'What Installations were used?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter your Usage information here:',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What License did you use?',
        name: 'license',
        choices: ['MIT License', 'GNU General Public License v3.0', 'Apache License 2.0']
    },
    {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'How did you test your project?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'GitHub email address for any questions:',
        name: 'email'
    }];

    function license() {
        inquirer.prompt(questions)
            .then((input) => {
                switch (input.license) {
                    case 'MIT License':
                        badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
                        break;
    
                    case 'GNU General Public License v3.0':
                        badge = '![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)'
                        break;
    
                    case 'Apache License 2.0':
                        badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
                        break;
    
                    default:
                        break;
                }
                fs.writeFile("README2.md", generateREADME({ ...input }), (error) =>
                    error ? console.error(error) : console.log('Thank you!'))
            })
    }

    license();