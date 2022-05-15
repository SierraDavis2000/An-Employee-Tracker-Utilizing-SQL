//dependancies 
const inquirer = require('inquirer'); 
const mysql = require('mysql2');
const consoleTable = require('console.table'); 
const util = require('util'); 
require('dotenv').config();

//connection to mysql 
const connection = mysql.createConnection(
    {
      host: 'localhost',
      port: 3306, 
      // MySQL username,
      user:  process.env.DB_USER,
      // MySQL password
      password: process.env.DB_PASSWORD,
      // MySQL database name
      database: process.env.DB_NAME
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

// selection functions: 

// viewEmployees()

const viewEmployees = () => {
    const query = 'SELECT * FROM employee';
    connection.query(query, (err,res) => {
        if (err) throw err;
        console.table(res);
    })

    openProgram();
};

// openDepartments()

const openDepartments = () => {
    const query = 'SELECT * FROM department';
    connection.query(query, (err,res) => {
        if (err) throw err;
        console.table(res);
    })

    openProgram();
};

// openRoles()

const openRoles = () => {
    const query = 'SELECT * FROM role';
    connection.query(query, (err,res) => {
        if (err) throw err;
        console.table(res);
    })

    openProgram();
}; 

//updateEmployees()
const updateEmployees = () => {
    connection.query('SELECT * FROM role', (err, roles) => {
        if (err) console.log(err);
        roles = roles.map((role) => {
            return {
                name: role.title,
                value: role.id,
            };
        });
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'firstName',
                    message: "What is your employee's first name?"
                },
                {
                    type: 'input',
                    name: 'lastName',
                    message: "What is your employee's last name?"
                },
                {
                    type: 'list',
                    name: 'role',
                    message: "What is the role of your new employee?",
                    choices: roles,
                },
                {
                    type: 'list',
                    name: 'managerId',
                    message: 'What is the id of their manager? (If applicable)',
                    choices: [13,14,15,null]
                }
            ])
            .then((data) => {
                console.log(data.role);
                connection.query(
                    'INSERT INTO employee SET ?',
                    {
                        first_name: data.firstName,
                        last_name: data.lastName,
                        role_id: data.role,
                        manager_id: data.managerId
                    },
                    (err) => {
                        if (err) throw err;
                        console.log('Employee List Updated');
                        viewEmployees();

                    }
                );
            });

    });

};

// updateDepartments()

const updateDepartments = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'updateDepartments',
            message: 'Please enter the name of your new department:'
        },
    ])
    .then((data) => {
        connection.query('INSERT INTO department SET ?',
            {
                name: data.updateDepartments,
            },
            function (err) {
                if (err) throw err;
            }
        );
        console.log('The database has been updated with your new department')
        openDepartments();
    });
};


//updateRoles()

const updateRoles = () => {
    connection.query('SELECT * FROM department', (err, departments) => {
        if (err) console.log(err);
        departments = departments.map((department) => {
            return {
                name: department.name,
                value: department.id,
            };
        });
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'updateRole',
                    message: 'Please enter the title of your new role:'
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: 'Please enter the salary of your new role:',
                },
                {
                    type: 'list',
                    name: 'departmentId',
                    message: 'Please enter the department your new role is in:',
                    choices: departments,
                },
            ])
            .then((data) => {
                connection.query(
                    'INSERT INTO role SET ?',
                    {
                        title: data.updateRole,
                        salary: data.salary,
                        department_id: data.departmentId,
                    },
                    function (err) {
                        if (err) throw err;
                    }
                );
                console.log('Your database has been updated with your new employee role')
                openRoles();
            });

    });

};

//updateEmployeeRoles()

const updateEmployeeRoles = () => {
    connection.query('SELECT * FROM employee', (err, employees) => {
        if (err) console.log(err);
        employees = employees.map((employee) => {
            return {
                name: `${employee.first_name} ${employee.last_name}`,
                value: employee.id,
            };
        });
        connection.query('SELECT * FROM role', (err, roles) => {
            if (err) console.log(err);
            roles = roles.map((role) => {
                return {
                    name: role.title,
                    value: role.id,
                }
            });
            inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'selectEmployee',
                        message: "Which employee's role would you like to update:",
                        choices: employees,
                    },
                    {
                        type: 'list',
                        name: 'updateNewRole',
                        message: 'Please select the new role you would like to assign to the employee:',
                        choices: roles,
                    },
                ])
                .then((data) => {
                    connection.query('UPDATE employee SET ? WHERE ?',
                        [
                            {
                                role_id: data.updateNewRole,
                            },
                            {
                                id: data.selectEmployee,
                            },
                        ],
                        function (err) {
                            if (err) throw err;
                        }
                    );
                    console.log('The role of this employee has been updated');
                    openRoles();
                });

        });
    });
};
