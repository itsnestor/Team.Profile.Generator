const Intern = require("../lib/Intern");

describe("Intern class", () => {
    describe("getSchool method", () => {
        it("would return the user's school name", () => {
            let intern = new Intern("nestor", "28", "nestor@gmail.com", "Rutger's University");
            expect(intern.getSchool()).toBe("Rutger's University");
        })
    });

    describe("getRole method", () => {
        it("would return the user's role", () => {
            let intern = new Intern("nestor", "28", "nestor@gmail.com", "Rutger's University");
            expect(intern.getRole()).toBe("Intern");
        })
    });
})