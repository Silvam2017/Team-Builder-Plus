const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('check if name is string, ID is a number and email contains a "@",', () => {
    const newHire = new Intern('Dave', '1', 'dave@team.com',);
    expect(newHire.name).toEqual(expect.anything());
    expect(newHire.id).toEqual(expect.anything());
    expect(newHire.email).toContain("@");

});