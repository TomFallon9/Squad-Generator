const Employee = require("./Employee");

// Engineer class extends the class of Employee
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // super is calling the Employee.js
    super(name, id, email);
    // getGithub();
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  //getRole() = Engineer;
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
