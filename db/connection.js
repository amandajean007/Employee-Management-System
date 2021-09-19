const mysql = require('mysql2');



//database connection 
const connect = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Leah&Maya104618',
      database: 'employee_db'
      },
      console.log(`Connected to the employee_db database.`)
  ); 
  
  connect.connect(function (err){
      if (err)throw err;
  });

  class DB {
    constructor(connect) {
        this.connect = connect;
    }
    // view all departments 
    findAllDepartments() {
         return this.connect.promise().query('SELECT * FROM departments');
    }
    // view all roles
    findAllRoles() {
        return this.connect.promise().query('SELECT * FROM roles');
    }
    // view all employees
    findAllEmployees() {
        return this.connect.promise().query('SELECT * FROM employees');
    }
    // add a department
    createDepartment(department) {
        return this.connect.promise().query('INSERT INTO departments SET ?', department);
    }
    // create a role
    createRole(role) {
        return this.connect.promise().query('INSERT INTO roles SET ?', role);
    }
    // create employee
    createEmployee(employee) {
        return this.connect.promise().query('INSERT INTO employees SET ?', employee);
    }
    // manager query
    findAllManagers() {
        return this.connect.promise().query('SELECT id, first_name, last_name FROM employees WHERE role_id = 1')
    }
  }
  
module.exports = new DB(connect);