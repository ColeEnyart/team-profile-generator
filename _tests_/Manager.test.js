const Manager = require('../lib/Manager');

describe('Test Employee class', () => {
    const name = 'Joe';
    const id = 3;
    const email = 'joe@test.com';
    const officeNumber = 5;

    const manager = new Manager(name, id, email, officeNumber);

    it('Should return true if a new Manager is made', () => {
        expect(manager instanceof Manager).toEqual(true);
    })

    it('Manager name should match the name provided', () => {
        expect(manager.getName()).toEqual(name);
    })

    it('Manager ID should match the ID provided', () => {
        expect(manager.getId()).toEqual(id);
    })

    it('Manager email should match the email provided', () => {
        expect(manager.getEmail()).toEqual(email);
    })

    it('Manager office number should match the office number provided', () => {
        expect(manager.getOfficeNumber()).toEqual(officeNumber);
    })

    it('Manager role should return Manager', () => {
        expect(manager.getRole()).toEqual('Manager');
    })
})