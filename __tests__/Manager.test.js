require('../lib/Employee');
require('../lib/Manager')

test('check if name is string, phone number is a number, and email contains a "@"'), () => {
    expect(employee.name).toBe(string);
    expect(employee.number).toEqual(expect.any(Number));
    expect(employee.email).includes("@");
};