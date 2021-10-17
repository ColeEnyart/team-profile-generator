const Employee = require('../lib/Employee');

describe('Test Employee class', () => {
    const name = 'Joe';
    const id = 3;
    const email = 'joe@test.com';

    const employee = new Employee(name, id, email);

    it('Should return true if a new Employee is made', () => {
        expect(employee instanceof Employee).toEqual(true);
    })

    it('Employee name should match the name provided', () => {
        expect(employee.getName()).toEqual(name);
    })

    it('Employee ID should match the ID provided', () => {
        expect(employee.getId()).toEqual(id);
    })

    it('Employee email should match the email provided', () => {
        expect(employee.getEmail()).toEqual(email);
    })

    it('Employee role should return Employee', () => {
        expect(employee.getRole()).toEqual('Employee');
    })
})