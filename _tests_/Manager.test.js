// using Manager constructor
const Manager = require("../lib/Manager");
// creating manager object
test("creates an Manager object", () => {
  const manager = new Manager("Jaylen Brown", 7, "jaylenbrown7@gmail", 4);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test("gets role of employee", () => {
  const manager = new Manager("Jaylen Brown", 7, "jaylenbrown7@gmail.com");

  expect(manager.getRole()).toEqual("Manager");
});
