// link to page creation
const generateHTML = require("./src/generateHTML");

// team profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// node modules
const fs = require("fs");
const inquirer = require("inquirer");

// team array
const teamArray = [];

// start of manager prompts
const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Who is the manager of this team?",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the manager's ID.",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the manager's email.",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter the manager's office number",
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      teamArray.push(manager);
      console.log(manager);
    });
};
