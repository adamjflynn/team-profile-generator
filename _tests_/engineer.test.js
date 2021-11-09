const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

test('creates engineer object', () => {
    const engineer = new Engineer('Adam', 123, 'fake@gmail.com', 'Engineer');

    expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer github value', () => {
    const engineer = new Engineer('Adam', 123, 'fake@gmail.com', 'Engineer');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const engineer = new Engineer('');
    engineer.role = ('Engineer');

    expect(engineer.getRole()).toEqual("Engineer");
});
