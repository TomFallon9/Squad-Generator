  
const { TestScheduler } = require('jest');
const Engineer = require('../lib/Engineer');

test('can set a github user name ', () => {
    const github  = "tomfallon9";
    const engineer = new Engineer("", "" , "", github);

    expect(engineer.github).toBe("tomfallon9"); 
});

test('can set Role', () => {

    
    const engineer = new Engineer(); 

    expect(engineer.getRole()).toBe('Engineer');
})