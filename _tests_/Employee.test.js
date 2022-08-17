// using Employee constructor
const Employee = require("../lib/Employee");
// creates employee object
test("creates an employee object", () => {
  const employee = new Employee("Garen", 27, "Garendemirdogen1@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});
