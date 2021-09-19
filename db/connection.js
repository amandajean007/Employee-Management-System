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
    
  }
  
module.exports = new DB(connect);