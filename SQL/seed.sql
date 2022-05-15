-- insert values into department

INSERT INTO department (name)
VALUES 
("Human Resources"), 
("Accounting"),
("Marketing"), 
("Sales"), 
("IT"), 
("Reseach and Development"), 
("Customer Service"), 
("Mail Services"), 
("Upper Management"), 
("Board of Directors"),
("Maintenance");

-- insert values into role

INSERT INTO role (title, salary, department_id)
VALUES 
("Recruitor", 25000, 1),
("Payroll Admin", 50000, 1), 
("Accountant", 50000, 2), 
('Copywriter', 75000, 3), 
('Salesman', 50000, 4), 
('IT Specialist', 65000, 5), 
('Software Developer', 85000, 5), 
('Researcher', 55000, 6), 
('Production Designer', 55000, 6),
('Customer Service Representitive', 25000, 7),
('CSR Department Manager', 45000, 7), 
('Mailroom Operator', 25000, 8), 
('Financial Director', 95000, 9), 
('Programs Director', 90000, 9), 
('COO', 100000, 10), 
('CEO', 150000, 10), 
('Custodian', 35000, 11);

-- insert values into employees

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Clementine','Barnes', 1 , 13), 
('Sidney', 'Bateman', 2, 13), 
('Trevor', 'Goodwin', 3, 13), 
('Romario', 'Bravo', 4, 14), 
('Leoni', 'Norris', 5, 13), 
('Abul', 'Hayes', 6, 14), 
('Sharon', 'Flynn', 7, 14), 
('Clay', 'Blackburn', 8, 14), 
('Britany', 'Everett', 9, 14), 
('Mercedes', 'Ryan', 10, 11), 
('Gregory', 'Benton', 11, 14), 
('Rohaan', 'Turner', 12, NULL), 
('Tomi', 'Appleton', 13, 15), 
('Leonard', 'Mansell', 14, 15), 
('Theodora', 'Reese', 15, NULL), 
('Billy-Joel', 'Lennon', 16, NULL), 
('Sadiyah', 'Holland', 17, NULL);

