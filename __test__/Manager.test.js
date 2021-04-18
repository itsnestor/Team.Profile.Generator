const Manager = require("../lib/Manager");

describe("Manager class", () => {
    describe("getOfficeNumber method", () => {
        it("would return user's office number", () => {
            let manager = new Manager("nestor", "28", "nestor@gmail.com", "13");
            expect(manager.getOfficeNumber()).toBe("13");
        })
    });

    describe("getRole method", () => {
        it("would return the user's role", () => {
            let manager = new Manager("nestor", "28", "nestor@gmail.com", "13");
            expect(manager.getOfficeNumber()).toBe("Manager");
        })
    });
})