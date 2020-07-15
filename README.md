# Team-Profile-Generator Overview

This team profile generator CLI allows the user to efficiently generate the profiles of all involved team members

The user will first open up the app.js folder in the terminal and then run "node app.js"

They will then be prompted with a series of questions pertaining to the employee 

Once the user is done answering the questions, they will be asked if they wish to add another employee

When the user is done entering all necessary employees, all the entered data will be organized and neatly populated in an HTML file

---------------------------------------------

# Pseudo Code

The user will first open up the terminal at the app.js folder and run "node app.js"

The askQuestions function will then prompt them with the first 3 initial questions for all employes from the questionBank array

The 4th and last question in the questionBank array will identify what type of employee the user is entering and the following switch statement will prompt the proper follow up question for that position from the followUpQuestions array

The continueAnswer let variable below that will allow the user to keep adding as many employees as they would like

Once the user is finished adding all the employees they would like, the writeOutput function is called and organizes/renders all the entered data in the team HTML file with the help of the htmlRenderer JS file

---------------------------------------------

NPM Package: Inquierer 

The project consists of: 

4 JS files containing the different classes - Employee, Engineer, Intern, Manager

4 JS test files - Employee, Engineer, Intern, Manager

1 JS file containing the htmlRenderer code

1 JS file with the code for the application - app.js

1 HTML file where all the entered data is populated - team.html

4 HTML templates - Employee, Engineer, Intern, Manager

3 JSON files - package, package-lock, settings











