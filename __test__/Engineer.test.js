const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
    describe("getGithub method", () => {
        it("would return the user's github username", () => {
            let engineer = new Engineer("nestor", "28", "nestor@gmail.com", "itsnestor");
            expect(engineer.getGithub()).toBe("itsnestor");
        })
    });

    describe("getRole method", () => {
        it("would return the user's role", () => {
            let engineer = new Engineer("nestor", "28", "nestor@gmail.com", "itsnestor");
            expect(engineer.getRole()).toBe("Engineer");
        })
    });
})