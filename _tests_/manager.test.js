const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
  
test('creates an Manager object', () => {
    const manager = new Manager('Adam', 123, 'fake@gmail.com', 1, 'manager');
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets office number', () => {
    const manager = new Manager('');
    manager.officeNumber = 100;

    expect(manager.getOfficeNumber()).toBe(100);
});

test('gets role of employee', () => {
    const manager = new Manager('');
    manager.role = ('Manager')

    expect(manager.getRole()).toEqual("Manager");
}); 
