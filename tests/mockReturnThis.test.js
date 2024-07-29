const mockFn = jest.fn().mockReturnThis();
const obj = { mockFn };
test('Return Testing', () => {
    expect(obj.mockFn()).toBe(obj);
})