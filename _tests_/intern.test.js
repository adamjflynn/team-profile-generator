const Employee = require('../lib/employee');
const Intern = require('../lib/intern');

test('creates intern object', () => {
    const intern = new Intern('');

    expect(intern.school).toEqual(expect.any(String));
});

test('gets school value', () => {
    const intern = new Intern('');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('');

    expect(intern.getRole()).toEqual("Intern");
});


