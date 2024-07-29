test('there is bai in Mumbai', () =>{
    expect('Mumbai').toMatch(/bai/);
});

const sum = require('../code/sum');
test('add 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
    expect(sum(1,2)).toBeGreaterThan(2);
    expect(sum(1,2)).toBeGreaterThanOrEqual(3);
    expect(sum(1,2)).toBeLessThan(4);
    expect(sum(1,2)).toBeLessThanOrEqual(3);
});


test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

const cars = ['BMW', 'Audi', 'Mercedes', 'Toyota', 'Ford', 'Chevrolet'];

test('car names', () => {
    expect(cars).toContain('Audi');
    expect(cars).not.toContain('Ferrari');
});

test('drink returns twice', () => {
    const drink = jest.fn(() => true);
  
    drink();
    drink();
  
    expect(drink).toHaveReturnedTimes(2);
});

test('Array Contains', () => {
    const arr = ['a', 'b', 'c'];
    expect(['a', 'b', 'c', 'd', 'e']).toEqual(expect.arrayContaining(arr));
})