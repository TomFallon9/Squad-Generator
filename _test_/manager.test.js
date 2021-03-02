const { TestScheduler } = require('jest');
const Manager = require('../lib/Manager');

test('can set Role', () => {

    
    const manager = new Manager(); 

    expect(manager.getRole()).toBe('Manager');
})

test('can set an office number', () => {
   const officeNumber  = 1212;
   const manager = new Manager("", "" , "", officeNumber);

   expect(manager.officeNumber).toBe(1212); 
});