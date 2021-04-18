// require dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

let newTeamMembers = [];

function init() {
    startHtml();
    getMemberInfo();
}

// prompt for user about team members
function getMemberInfo() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is your team member's name?",
            },
            {
                type: "list",
                name: "role",
                message: "What is your team member's role?"
                choices: ["Engineer", "Intern", "Manager"],
            },
            {
                type: "input",
                name: "email",
                message: "What is your team member's email address?",
            },
            {
                type: "input",
                name: "id",
                message: "What is your team member's ID?"
            },
        ])

        .then(function ({
            name,
            role,
            id,
            email
        }) {
            let roleInfo;
            if (role === "Engineer") {
                roleInfo = "Github Username";
            } 
            else if (role === "Intern") {
                roleInfo = "School Name";
            }
            else {
                roleInfo = "Office Number"
            }

            inquirer
                .prompt([
                    {
                        type: "input",
                        name: "roleInfo",
                        message: `Enter team member's ${roleInfo}`,
                    },
                    {
                        type: "list",
                        name: "moreMembers",
                        message: "Would you like to add more members to the team?",
                        choices: ["yes", "no"],
                    },
                ])
                .then(function ({
                    roleInfo,
                    moreMembers,
                }) {
                    let newMember;
                    if (role === "Engineer") {
                        newMember = new Engineer(name, id, email, roleInfo);
                    }
                    else if (role === "Intern") {
                        newMember = new Intern(name, id, email, roleInfo);
                    }
                    else {
                        newMember = new Manager(name, id, email, roleInfo);
                    }
                    newTeamMembers.push(newMember);
                    addHtml(newMember).then(function () {
                        if (moreMembers === "yes") {
                            getMemberInfo();
                        }
                        else {
                            finishHtml();
                        }
                    });
                    
                });
        });
}