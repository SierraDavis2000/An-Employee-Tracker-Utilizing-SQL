# An-Employee-Tracker-Utilizing-SQL

## Description

 A command-line application that can be used to manage a company's employee database, using Node.js, Inquirer, and MySQL.

## Usage

**AS A business owner**
I WANT to be able to view and manage the departments, roles, and employees in my company SO THAT I can organize and plan my business

**User Story**
GIVEN a command-line application that accepts user input
1. WHEN I start the application
- THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
2. WHEN I choose to view all departments
- THEN I am presented with a formatted table showing department names and department ids
3. WHEN I choose to view all roles
- THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
4. WHEN I choose to view all employees
- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
5. WHEN I choose to add a department
- THEN I am prompted to enter the name of the department and that department is added to the database
6. WHEN I choose to add a role
- THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
7. WHEN I choose to add an employee
- THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
8. WHEN I choose to update an employee role
- THEN I am prompted to select an employee to update and their new role and this information is updated in the database

### User Notes

- To run this application, please use server.js
- Please hit the down arrow on your keyboard when you are finished with one part of the application and which to select another action from the main list. 
- Please note that all new employees entered into the database must have a manager attached to them. 
- Please follow the .env.EXAMPLE file to connect your own MySQL workbench to the application.

## Screenshots 
*Image of selection menu when application is first deployed*
![image](https://user-images.githubusercontent.com/99284604/168486064-62669650-58f3-4d1f-b6f3-490cdf5ccab8.png)

*Example table of employees within the database, similar set up for both roles and department tables*
![image](https://user-images.githubusercontent.com/99284604/168486109-e075e9fb-21a5-4d36-b31e-13ff79a14ed8.png)

*Example of function to update new employees to the database*
![image](https://user-images.githubusercontent.com/99284604/168486164-15bd3f52-7775-436f-971f-71682eb72b69.png)

**Note the database schema was designed using the following structure:**
![image](https://user-images.githubusercontent.com/99284604/168486215-a5f23af7-3321-4169-b7f5-c0253d3c35be.png)


## Walkthrough Video 

Here is a link to a walkthrough video of the application: https://drive.google.com/file/d/1jdBYi9SBhlEBv-o09rFCvA0SfRSA8p9t/view

