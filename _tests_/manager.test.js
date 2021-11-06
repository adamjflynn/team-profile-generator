const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
  
test('creates an Manager object', () => {
    const manager = new Manager('');
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets office number', () => {
    const testValue = 100;
    const manager = new Manager('');

    expect(manager.getOfficeNumber()).toBe(testValue);
})

test('gets role of employee', () => {
    const manager = new Manager('');

    expect(manager.getRole()).toEqual("Manager");
}); 

