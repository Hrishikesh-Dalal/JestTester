const mockFn = jest.fn().mockImplementationOnce((num) => num*2).mockImplementation((str) => "hi " + str);

test('Mock Implementation', () => {
    expect(mockFn(2)).toBe(4);
    expect(mockFn("there")).toBe("hi there");
    expect(mockFn("there")).toBe("hi there");
}); 