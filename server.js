// Required Imports
const inquirer = require('inquirer');
const db = require('./db/connection');
require('console.table');
// const { updateE } = require('./db/connection');


// Use inquirer to prompt questions
   function runPrompt() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'directory',
            message: 'What would you like to do?',
            choices: [
              'View all departments',
              'View all roles',
              'View all employees',
              'Add a department',
              'Add a role',
              'Add an employee',
              'Update employee role',
              'Quit'
            ]
        }
    ])
    .then((answers) => {
      if (answers.directory === 'View all departments') {
          viewAllDepartments();
      } else if (answers.directory === 'View all roles') {
          viewAllRoles();
      } else if (answers.directory === 'View all employees') {
          viewAllEmployees();
      } else if (answers.directory === 'Add a department') {
          addDepartment();
      } else if (answers.directory === 'Add a role') {
          addRole();
      } else if (answers.directory === 'Add an employee') {
          addEmployee();
      } else if (answers.directory === 'Update Employee Role') {
          updateEmployeeRole();
      } else if (answers.directory === 'Quit') {
          quit();
      }
  })
}

runPrompt();

function viewAllDepartments() {
  db.findAllDepartments().then(([row]) => {
    console.table(row);
  }).then(() => {
    runPrompt();
  });
}

function viewAllRoles() {
  db.findAllRoles().then(([row]) => {
    console.table(row);
  }).then(() => {
    runPrompt();
  });
}

function viewAllEmployees() {
  db.findAllEmployees().then(([row]) => {
    console.table(row);
  }).then(() => {
    runPrompt();
  });
}

function addDepartment() {
  inquirer.prompt([{
    name: 'name',
    message: "What is the department's name?"
  }]).then((response) => {
    db.createDepartment(response).then(() => {
      runPrompt();
    });
  });
}

// function addRole() {
//   inquirer.prompt([{
//     name: 'title',
//     message: "What is the new role?"
//   }]).then((response) => {
//     db.createDepartment(response).then(() => {
//       runPrompt();
//     });
//   });
// }

// function addEmployee()

// function updateEmployeeRole()

function quit() {
  console.log('Bye');
  process.exit();
}