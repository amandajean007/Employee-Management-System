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
          exit();
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

// function viewAllRoles()

// function viewAllEmployees()

// function addDepartment()

// function addRole()

// function addEmployee()

// function updateEmployeeRole()

// function quit()