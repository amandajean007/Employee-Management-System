const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

const PORT = process.env.PORT || 3001;

function runPrompt() {
    prompt([
        {
            type: 'list',
            name: 'directory',
            message: 'What would you like to do?'
            choices: [
                {
                    name: 'View all departments',
                    value: viewAllDepartments()
                },
                {
                    name: 'View all roles',
                    value: viewAllRoles()
                },
                {
                    name: 'View all employees',
                    value: viewAllEmployees()
                },
                {
                    name: 'Add a department',
                    value: addDepartment()
                },
                {
                    name: 'Add a role',
                    value: addRole()
                },
                {
                    name: 'Add an employee',
                    value: addEmployee()
                },
                {
                    name: 'Update employee role',
                    value: updateEmployeeRole()
                },
                {
                    name: 'Quit',
                    value: quit()
                }
            ]
        }
    ])
}

function init() {
    runPrompt();
}
init();

