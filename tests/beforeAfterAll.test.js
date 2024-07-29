const setUp = () => console.log("We are setting up the tests");
const tearDown = () => console.log("Test Execution has been completed");

describe("new module checks", () => {
    beforeAll(() => setUp());
    afterAll(() => tearDown());

    for(let i = 0;i < 5; i++){
        test('Setting up account ' + i, () => {
            const account = "Account " + i;
            expect(account).toBe("Account " + i);
        });
    }
});