const Intern = require('../lib/Intern');

describe('Test Intern class', () => {
    const name = 'Joe';
    const id = 3;
    const email = 'joe@test.com';
    const school = 'University of Minnesota';

    const intern = new Intern(name, id, email, school);

    it('Should return true if a new Intern is made', () => {
        expect(intern instanceof Intern).toEqual(true);
    })

    it('Intern name should match the name provided', () => {
        expect(intern.getName()).toEqual(name);
    })

    it('Intern ID should match the ID provided', () => {
        expect(intern.getId()).toEqual(id);
    })

    it('Intern email should match the email provided', () => {
        expect(intern.getEmail()).toEqual(email);
    })

    it('Intern school should match the school provided', () => {
        expect(intern.getSchool()).toEqual(school);
    })

    it('Intern role should return Intern', () => {
        expect(intern.getRole()).toEqual('Intern');
    })
})