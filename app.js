const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const continueQuestions = {
    type: 'input',
    name: 'continue',
    message: "Do you wish to add another employee?",
    default: 'yes'
}

// first set of question necessary for all employees
const questionBank = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the employee\'s name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employee\'s id?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employee\'s email?'
    },
    {
        type: 'list',
        name: 'role',
        message: 'What is the employee\'s role?',
        choices: ['Intern', 'Engineer', 'Manager']
    },
];

// follow up question for specific types of employees
const followUpQuestions = [
    {
        type: 'input',
        name: 'info',
        message: 'What is the intern\'s school?'
    },
    {
        type: 'input',
        name: 'info',
        message: 'What is the engineer\'s github?'
    },
    {
        type: 'input',
        name: 'info',
        message: 'What is the manager\'s office number?'
    }
];

// empty array where entered employee data is pushed to
const employees = [];


// function to render the HTML file 
writeOutput =() => {
    if(!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(employees), "utf-8")
}


    // function that produces the questions 
    async function askQuestions() {
        let continueAsking = true;
        while(continueAsking){
            // prompts inital questions for all employees
            let answers = await inquirer.prompt(questionBank);
            // prompts followup questions based on selected employee role
            switch (answers.role) {
                case 'Intern':
                    {
                        const followUp = await inquirer.prompt(followUpQuestions[0]);
                        var intern = new Intern (answers.name, answers.id, answers.email, answers.role, followUp.info);
                        employees.push(intern);
                    }
                    break;
                case 'Engineer': 
                    {
                        const followUp = await inquirer.prompt(followUpQuestions[1]);
                        var engineer = new Engineer (answers.name, answers.id, answers.email, answers.role, followUp.info);
                        employees.push(engineer);
                    }
                    break;
                case 'Manager':
                    {
                        const followUp = await inquirer.prompt(followUpQuestions[2]);
                        var manager = new Manager (answers.name, answers.id, answers.email, answers.role, followUp.info);
                        employees.push(manager);
                }
                break;
        }
        // asks user if they would like to keep adding employees
        let continueAnswer = await inquirer.prompt(continueQuestions);
        continueAsking = continueAnswer.continue.toLowerCase() === 'yes';
    }
    // rendering to html
    writeOutput();
}

// calling of the askQuestions function
askQuestions();



