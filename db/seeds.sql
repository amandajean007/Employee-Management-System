USE employee_db;

INSERT INTO departments (name)
VALUES ('Production'),
       ('Research_and_Development'),
       ('Purchasing'),
       ('Marketing'),
       ('Human_Resources');

INSERT INTO roles (title, salary, departments_id)
VALUES ('Manager', 100000, 1),
       ('Assistant_Manager', 75000, 3),
       ('Engineer', 60000, 1),
       ('Employee', 50000, 4),
       ('Intern', 0, 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Barry', 'Allen', 1, 2),
       ('Selina', 'Kyle', 2, NULL),
       ('Wally', 'West', 3, NULL),
       ('Hal', 'Jordan', 4, NULL),
       ('Diana', 'Prince', 5, NULL);
