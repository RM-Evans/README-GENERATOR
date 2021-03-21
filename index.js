// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of the project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation procedure?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage info'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license',
        choices: ['MIT', 'ISC', 'MPL 2.0', 'GNU GPL v3','NONE']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Add contributing guidelines'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Add tests for your application'
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Provide Github Username in case the user has a question'
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'Provide email address in case the user has questions.'
    }
];


// console.log(inquirer.prompt(data))





// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    
    fs.writeFile(`./dist/${fileName}.md`, generateMarkdown(data), (err) => {
        if (err) throw err;
        console.log('The file has been saved!'); 
    })
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data){
        // console.log(data)
        //arguement : README
        writeToFile('README', data)
    }) 
    
}

// Function call to initialize app
init();
