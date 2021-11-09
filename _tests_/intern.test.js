const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Adam', 123, 'fake@gmail.com', 'Intern');

    expect(intern.school).toEqual(expect.any(String));
});

test('gets school value', () => {
    const intern = new Intern('Adam', 123, 'fake@gmail.com', 'Intern');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('');
    intern.role = ('Intern');

    expect(intern.getRole()).toEqual("Intern");
});


