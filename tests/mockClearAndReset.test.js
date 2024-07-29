// Deletes the history
const mockFnClear = jest.fn().mockImplementation((num) => num);
// Doesnt delete the history but all the return values and implementation
const mockFnReset = jest.fn().mockImplementation((num) => num);

describe("Mock Clear & Reset", () => {
    test('Mock Clear', () => {
        expect(mockFnClear(2)).toBe(2);
        expect(mockFnClear("there")).toBe("there");
        expect(mockFnClear.mock.calls.length).toBe(2);
        mockFnClear.mockClear();
        expect(mockFnClear.mock.calls.length).toBe(0);
        expect(mockFnClear("hi")).toBe("hi"); // we can see that the implemenataion still remains
    });

    test('Mock Reset', () => {
        expect(mockFnReset(2)).toBe(2);
        expect(mockFnReset("there")).toBe("there");
        expect(mockFnReset.mock.calls.length).toBe(2);
        mockFnReset.mockReset();
        expect(mockFnReset.mock.calls.length).toBe(0);
        expect(mockFnReset("hi")).toBe(undefined); // we can see that the implemenataion is deleted
    });
});

