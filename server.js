// Required Imports
const inquirer = require('inquirer');
const db = require('./db/connection');
require('console.table');


// Use inquirer to prompt questions
  // function runPrompt() {
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
      if (answers.choice === 'View all departments') {
          viewAllDepartments();
      } else if (answers.choice === 'View all roles') {
          viewAllRoles();
      } else if (answers.choice === 'View all employees') {
          viewAllEmployees();
      } else if (answers.choice === 'Add a department') {
          addDepartment();
      } else if (answers.choice === 'Add a role') {
          addRole();
      } else if (answers.choice === 'Add an employee') {
          addEmployee();
      } else if (answers.choice === 'Update Employee Role') {
          updateEmployeeRole();
      } else if (answers.choice === 'Quit') {
          exit();
      }
  })

// Use db query to collect answers from inquirer
// db.query('')

function viewAllDepartments() {
  db.findAllDepartment().then(([row]) => {
      console.table(row);
  }).then(() => {
    console.log('Success!');
  });
}

// function viewAllRoles()

// function viewAllEmployees()

// function addDepartment()

// function addRole()

// function addEmployee()

// function updateEmployeeRole()

// function quit()