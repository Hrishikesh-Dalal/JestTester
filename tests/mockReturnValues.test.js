const mockFn = jest.fn();

console.log(mockFn()); // should return undefined as we have not defined

mockFn.mockReturnValueOnce("Joker");
mockFn.mockReturnValueOnce("Batman").mockReturnValue("Kung Fu Panda");
console.log(mockFn(), mockFn(), mockFn());

test("Sample Mock Test", () => {
    const sample = jest.fn();
    sample.mockReturnValueOnce("Spider Man").mockReturnValue("Iron Man");

    expect(sample()).toBe("Spider Man");
    expect(sample()).toBe("Iron Man");
    expect(sample()).toBe("Iron Man");
    
});

test("Mock Return Values", () => {
    const filterTestFn = jest.fn();

    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValue(true);

    const result = [11, 12, 13].filter(num => filterTestFn(num));

    expect(result).toEqual(expect.arrayContaining([11, 13]));

    expect(filterTestFn.mock.calls[0][0]).toBe(11);
    expect(filterTestFn.mock.calls[1][0]).toBe(12); 
    expect(filterTestFn.mock.calls[2][0]).toBe(13); 
    expect(filterTestFn.mock.calls.length).toBe(3); 
    expect(filterTestFn.mock.calls[0][1]).toBe(undefined); 

});