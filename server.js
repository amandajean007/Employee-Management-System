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
    message: "Enter new department's name:"
  }]).then((response) => {
    db.createDepartment(response).then(() => {
      runPrompt();
    });
  });
}

function addRole() {
  inquirer.prompt([
      {
          name: 'title',
          message: "Enter new role's name:"
      },
      {
          name: 'salary',
          message: "Enter new role's salary:"
      }
      ]).then((response) => {
          const newRoleTitle = response.title;
          const newRoleSalary = response.salary;
          db.findAllDepartments().then(([row]) => {
              const department = row;
              const departmentList = department.map(({ name, id }) => ({
                  name: name,
                  value: id
              }));
              inquirer.prompt([
                  {
                      type: 'list',
                      name: 'name',
                      message: 'Choose a department:',
                      choices: departmentList
                  }
              ]).then((res) => {
                  const newRole = {
                      department_id:  res.name,
                      title: newRoleTitle,
                      salary: newRoleSalary
                  };
                  db.createRole(newRole);
              }).then(() => runPrompt());
          });
      });
  }

function addEmployee() {
  inquirer.prompt([
    {
      name: 'first_name',
      message: "Enter employee's first name:"
    },
    {
      name: 'last_name',
      message: "Enter employee's last name:"
    }
  ]).then((response) => {
    const newEmployeeFirstName = response.first_name;
    const newEmployeeLastName = response.last_name;
    db.findAllRoles().then(([row]) => {
      const roles = row;
      const roleList = roles.map(({ title, id }) => ({
        name: title,
        value: id
      }));
      inquirer.prompt([
        {
            type: 'list',
            name: 'title',
            message: 'Choose a role:',
            choices: roleList
        }
      ]).then((respo) => {
        db.findAllManagers().then(([row]) => {
          const managers = row;
          const managerList = managers.map(({ first_name, last_name, id }) => ({
            name: first_name + ' ' + last_name,
            value: id
          }));
          inquirer.prompt([
            {
              type: 'list',
              name: 'managers',
              message: "Select employee's manager:",
              choices: managerList
            }
          ])
        })
        const newEmployee = {
            role_id:  respo.title,
            first_name: newEmployeeFirstName,
            last_name: newEmployeeLastName,
            manager_id: respo.managers
        };
        db.createEmployee(newEmployee);
      })
      .then(() => runPrompt());
    })
  })
}

// function updateEmployeeRole()

function quit() {
  console.log('Bye');
  process.exit();
}