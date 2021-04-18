const Employee = require("../lib/Employee");

describe("Employee class", () => {
    describe("getName method", () => {
        it("would return nestor", () => {
            let employee = new Employee("nestor", "28", "nestor@gmail.com");
            expect(employee.getName()).toBe("nestor");
        })
    });

    describe("getId method", () => {
        it("would return the user's id", () => {
            let employee = new Employee("nestor", "28", "nestor@gmail.com");
            expect(employee.getId()).toBe("28");
        })
    });

    describe("getEmail method", () => {
        it("would return the user's email", () => {
            let employee = new Employee("nestor", "28", "nestor@gmail.com");
            expect(employee.getEmail()).toBe("nestor@gmail.com");
        })
    });

    describe("getRole method", () => {
        it("would return the user's role", () => {
            let employee = new Employee("nestor", "28", "nestor@gmail.com");
            expect(employee.getRole()).toBe("Employee");
        })
    });
})
