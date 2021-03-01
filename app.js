  //Entry Point 
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const managerCard = require('./src/managerCard');
const engineerCard = require('./src/engineerCard');
const internCard = require('./src/internCard');
const resultsPage = require('./src/resultsPage');

const teamArray = [];
let teamName = "";

const startPrompt = () => {

  inquirer.prompt([{
    type: 'input',
    message: 'What is the name of your team?',
    name: 'teamName',
    
  }
  ])
    .then((data) => {
      teamName = data.teamName;
      addManager()
    })
}

const addManager = () => {
  inquirer.prompt([{
    type: 'input',
    message: 'What is the manager\'s name?',
    name: 'name',
   
  },
  {
    type: 'input',
    message: 'What is the manager ID #?',
    name: 'id',
   
  },
  {
    type: 'input',
    message: 'What is the manager\'s email address?',
    name: 'email',
   
  },
  {
    type: 'input',
    message: 'What is the manager\'s office number?',
    name: 'officeNumber',
    
  },

  ]).then(function ({ name, id, email, officeNumber }) {
    let newManager;
    newManager = new Manager(name, id, email, officeNumber);
    teamArray.push(newManager);
    addEmployee();


  });

}

const addEmployee = () => {
  inquirer.prompt([{
    type: 'list',
    message: 'Do you need to add more members to the squad?',
    name: 'addFinish',
    choices: ['Yes, lets add an engineer',
      'Yes, I want to add an intern',
      'No thanks, all finished. This team will be perfect.']
  }

  ]).then(function (choices) {
    const addFinish = choices.addFinish;
    if (addFinish.includes('intern')) {
      addIntern()
    }
    if (addFinish.includes('engineer')) {
      addEngineer()
    }
    if (addFinish.includes('finished')) {

      const resultHtml = resultsPage(teamName, addEmployeeCard());
      fs.writeFileSync('./team.html', resultHtml);
    };
  });
}

const addEngineer = () => {
  inquirer.prompt([{
    type: 'input',
    message: 'What is the engineer\'s name?',
    name: 'name',
   
  },
  {
    type: 'input',
    message: 'What is the employee ID?',
    name: 'id',
   
  },
  {
    type: 'input',
    message: 'What is the engineer\'s email address?',
    name: 'email',
   
  },
  {
    type: 'input',
    message: 'What is the engineers\'s Github username?',
    name: 'github',
   
  },

  ]).then(function ({ name, id, email, github }) {
    let newEngineer;
    newEngineer = new Engineer(name, id, email, github);
    teamArray.push(newEngineer);

    addEmployee();
  });

}

const addIntern = () => {
  inquirer.prompt([{
    type: 'input',
    message: 'What is the intern\'s name?',
    name: 'name',
  
  },
  {
    type: 'input',
    message: 'What is the intern\'s employee ID?',
    name: 'id',
    
  },
  {
    type: 'input',
    message: 'What is the intern\'s email address?',
    name: 'email',
   
  },
  {
    type: 'input',
    message: 'What school does the intern attend currently?',
    name: 'school',
    
  },

  ]).then(function ({ name, id, email, school }) {
    let newIntern;
    newIntern = new Intern(name, id, email, school);
    teamArray.push(newIntern);
    addEmployee();

  });

}

const addEmployeeCard = () => {

  let cards = "";
  teamArray.forEach(member => {

    if (member.getRole() === 'Manager') {
      cards += managerCard(member)
    }
    if (member.getRole() === 'Engineer') {
      cards += engineerCard(member)
    }
    if (member.getRole() === 'Intern') {
      cards += internCard(member)
    }
  })
  return cards;
}

function init() {
  startPrompt();
}
init()