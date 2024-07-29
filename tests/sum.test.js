const sum = require('../code/sum');

describe('Sum Scenarios', () => {
    test('add 1 + 2 to equal 3', () => {
        expect(sum(1,2)).toBe(3);
        expect(sum(1,2)).toBeGreaterThan(2);
        expect(sum(1,2)).toBeGreaterThanOrEqual(3);
        expect(sum(1,2)).toBeLessThan(4);
        expect(sum(1,2)).toBeLessThanOrEqual(3);
    });
    test('adding 5 + 5 = 10', () => {
        expect(sum(5,5)).toBe(10);
    })
});
describe('Sum Scenarios 2', () => {
    test('add 10 + -10 to equal 0', () => {
        expect(sum(10,-10)).toBe(0);
    });
    test('add -10 + -10 to equal -20', () => {
        expect(sum(-10,-10)).toBe(-20);
    });
    test('add 0 + 0 to equal 0', () => {
        expect(sum(0,0)).toBe(0);
    });
});
// toBe checks for strict equality (===)
test('Object assignment', () => {
    const data = {first : 5};
    data['second'] = 10;
    expect(data).toEqual({first:5, second : 10});
})