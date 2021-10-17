const Engineer = require('../lib/Engineer');

describe('Test Engineer class', () => {
    const name = 'Joe';
    const id = 3;
    const email = 'joe@test.com';
    const github = 'Joe456123';

    const engineer = new Engineer(name, id, email, github);

    it('Should return true if a new Engineer is made', () => {
        expect(engineer instanceof Engineer).toEqual(true);
    })

    it('Engineer name should match the name provided', () => {
        expect(engineer.getName()).toEqual(name);
    })

    it('Engineer ID should match the ID provided', () => {
        expect(engineer.getId()).toEqual(id);
    })

    it('Engineer email should match the email provided', () => {
        expect(engineer.getEmail()).toEqual(email);
    })

    it('Engineer github should match the github provided', () => {
        expect(engineer.getGithub()).toEqual(github);
    })

    it('Engineer role should return Engineer', () => {
        expect(engineer.getRole()).toEqual('Engineer');
    })
})