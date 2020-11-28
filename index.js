const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/md-generator.js");

//Question List

const questions = () =>
    inquirer.prompt([

        {
            type: "input",
            name: "github_username",
            message: "Please enter a github username."
        },
        {
            type: "input",
            name: "title",
            message: "Please enter a Project title."
        },
        {
            type: "input",
            name: "description",
            message: "Please enter a Project decription."
        },
        {
            type: "input",
            name: "installation",
            message: "Please enter any specific packages to install."
        },
        {
            type: "input",
            name: "usage",
            message: "Please enter instructions on how to use your project."
        },
        {
            type: "input",
            name: "license",
            message: "Please enter license details."
        },
        {
            type: "input",
            name: "link",
            message: "Please enter the link to your repo."
        },
        {
            type: "input",
            name: "contributors",
            message: "Please enter contributors to the project."
        }
    ]);

//Write to ReadMe

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, "utf8", function(err) {
        if (err) {
            throw err;
        }
    })
}

async function init() {
    try {
        const response = await questions();
        generateMarkdown(response);
        writeToFile("readme.md", generateMarkdown(response));

    } catch (err) {
        console.log(err);
    }
};

init();