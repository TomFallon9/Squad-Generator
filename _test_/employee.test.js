const { TestScheduler } = require('jest');
const Employee = require('../lib/Employee');

test('can set an employee name', () => {
    const name  = 'Tom F';
    const employee = new Employee(name, "", "");

    expect(employee.name).toBe('Tom F'); 
});

test('can set an employee id', () => {
    const id = 12;
    const employee = new Employee("", id, ""); 

    expect(employee.getId()).toBe(12); 
})

test('can set employee email', () => {
    const email = 'tomfallon9@gmail.com';
    const employee = new Employee("", "" , email);
    
    expect(employee.getEmail()).toBe('tomfallon9@gmail.com'); 
})
