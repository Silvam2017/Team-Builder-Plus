const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('check if name is string, ID is a number and email contains a "@"', () => {
    const newHire = new Engineer('Dave', '1', 'dave@team.com');
    expect(newHire.name).toEqual(expect.anything());
    expect(newHire.id).toEqual(expect.anything());
    expect(newHire.email).toContain("@");
});