const Users = require('../code/users');
const axios = require('axios');
jest.mock('axios');

describe('Mock Test', () => {
    test('should fetch users', () => {
        const users = [{name: 'Joker'}];
        const resp = {data: users};

        axios.get.mockResolvedValue(resp);

        return Users.all().then(data => expect(data).toEqual(users));
    })
})
