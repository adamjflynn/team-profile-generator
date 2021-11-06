const Employee = require('../lib/employee');

test('creates employee object', () => {
    const employee = new Employee('');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

test('gets employee name', () => {
    const employee = new Employee('');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee ID', () => {
    const employee = new Employee('');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets role of employee', () => {
    const employee = new Employee('');

    expect(employee.getRole()).toEqual("Employee");
}); 