const give = require('../code/asyncFunction');

test('Async Test', async () => {
    const data = await give("Joker");
    expect(data).toBe("Joker");
});

test('Async test 2 - Null', async () => {
    const data  = await give(null);
    expect(data).toBeNull();
});

test('Async test 3 - Undefined', async () => {  
    const data = await give(undefined);
    expect(data).toBeUndefined();
});

