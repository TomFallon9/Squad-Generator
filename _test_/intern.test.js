  
const { TestScheduler } = require('jest');
const Intern = require('../lib/Intern');

test('can set an school number', () => {
    const school  = "Duke U";
    const intern = new Intern("", "" , "", school);

    expect(intern.school).toBe("Duke U"); 
});

test('can set Role', () => {

    
    const intern = new Intern(); 

    expect(intern.getRole()).toBe('Intern');
})