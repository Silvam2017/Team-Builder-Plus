const inquirer = require('inquirer');
const fs = require('fs')
const generatePage = require('./src/template')
let newArray = []

const promptProject = portfolioData => {
   
    if(!portfolioData){
       newArray = [];
    }

 return inquirer
.prompt([
    {
        type: 'input',
        name: 'position',
        message: 'What is your position?',
        validate: positionInput => {
            if (positionInput) {
                return true;
            } else {
                console.log('Please enter your position.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the web address of your GitHub profile?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter the link to your GitHub profile.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address.');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmAddUser',
        message: "Would you like to enter another user?",
        default: false
    }
])
// How to validate with inquirer

/* Example:

validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter your name.');
      return false;
    }
  }

*/
}

    promptProject()
    .then(portfolioData =>{ 
        const pageHTML = generatePage(portfolioData)
    .then(
    fs.writeFile('./index.html', pageHTML, err => {
        if(err) throw new Error(err);
        console.log('Page created! Check out index.html in this directory to see it!');
    }))
    
    
})