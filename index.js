const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/template');
let newArray = [];
const Employee = require('../Team-Builder-Plus/lib/Employee');
const Engineer = require('../Team-Builder-Plus/lib/Engineer');
const Intern = require('../Team-Builder-Plus/lib/Intern');
const Manager = require('../Team-Builder-Plus/lib/Manager');

let portfolioData = [];

let jobPrompt  = () => {
   inquirer.prompt([
    {
      type: 'checkbox',
      name: 'role',
      message: 'Would you like to add another employee to your team?',
      choices: ['Engineer', 'Intern', 'My team is complete.']
    },
    // cycle through each role or write to index.html file in dist folder
  ]).then((answer) => {
     if(answer.role == 'Engineer'){
      Engineer.prototype.PromptEngineer();
    } else if(answer.role == 'Intern'){
      Intern.prototype.PromptIntern();
    } else{
       const pageHTML = generatePage(portfolioData)
       fs.writeFile('./dist/index.html', pageHTML, err => {
         if(err) throw new Error(err);
       })
        console.log("Your HTML page was created in the 'dist' folder.");
      }
  })
}

Engineer.prototype.PromptEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please try entering your name again.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your ID number?:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address',
      
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your github username.',
    },
    
  ])
    // Move answers to portfolioData
  .then((answers) => {
    let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
    portfolioData.push(engineer)
    jobPrompt();
  })
}

Intern.prototype.PromptIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please try entering your name again.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your ID number?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address.',
      
    },
    {
      type: 'input',
      name: 'university',
      message: 'What University do you attend?',
    },
  ])
  // Move answers to portfolioData
  .then((answers) => {
    let intern = new Intern(answers.name, answers.id, answers.email, answers.university)
    portfolioData.push(intern)
    jobPrompt();
  })
}

Manager.prototype.PromptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please try entering your name again.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your ID number?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address.',
      
    },
    {
     type: 'input',
     name: 'officeNumber',
     message: 'Please enter your phone number.',
    }
  ])
    // Move answers to portfolioData
  .then((answers) => {
    let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    portfolioData.push(manager)
    jobPrompt();
  })
}

Manager.prototype.PromptUser()

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