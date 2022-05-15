//dependancies 
const inquirer = require('inquirer'); 
const mysql = require('mysql2');
const consoleTable = require('console.table'); 
const util = require('util'); 

//connection to mysql 
const connection = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'Greenvale1744',
      database: 'employeetracking_db'
    },
    console.log(`Connected to the employeetracking_db database.`)
);

connection.query = util.promisify(connection.query);

//code to begin the openProgram function
connection.connect(function (err){
    if (err) throw err;
    openProgram();
});

//prompts to direction the application
console.table(
    "\n ------ Now Begining the Employee Tracking Application ------ \n"
);

const openProgram = async () => {
    try {
        let selection = await inquirer.prompt({
            name: 'action',
            type: 'list',
            message: 'Please select one of the following options to proceed:',
            choices: [
                'Open Employees',
                'Open Departments',
                'Open Roles',
                'Update Employees',
                'Update Departments',
                'Update Roles',
                'Update Employee Roles',
                'End Application'
            ]
        });

        switch (selection.action) {
            case 'Open Employees':
                viewEmployees();
                break;

            case 'Open Departments':
                openDepartments();
                break;

            case 'Open Roles':
                openRoles();
                break;

            case 'Update Employees':
                updateEmployees();
                break

            case 'Update Departments':
                updateDepartments();
                break

            case 'Update Roles':
                updateRoles();
                break

            case 'Update Employee Roles':
                updateEmployeeRoles();
                break

            case 'End Application':
                connection.end();
                break;
        };

    } 
    catch (err) {
        console.log(err);
        openProgram();
    };
};