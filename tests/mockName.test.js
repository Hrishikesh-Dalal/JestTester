const mockFn = jest.fn().mockName('myMockFunction');
const mockFn2 = jest.fn();
test("Mock Name Test", () => {
    expect(mockFn.getMockName()).toBe('myMockFunction');
    expect(mockFn2.getMockName()).toBe('jest.fn()'); // default name
}) // 'myMockFunction'