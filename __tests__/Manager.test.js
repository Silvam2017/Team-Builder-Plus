const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager')

test('check if name is string, ID is a number and email contains a "@",', () => {
    const newHire = new Manager('Dave', '1', 'dave@team.com', '5551234');
    expect(newHire.name).toEqual(expect.anything());
    expect(newHire.id).toEqual(expect.anything());
    expect(newHire.email).toContain("@");
    expect(newHire.officeNumber).toEqual(expect.anything());
});