# Elinvar_Automation_FrontEnd
Technical assignment for Elinvar Automation testing using Cypress + Cucumber

This is a cypress Automation testing framework with cucumber integration.
This framework is built on cypress, with inclusion of Page Object Model.
The framework has the capability to automatically capture screenshot on failure and video recording of the executed tests will be saved.
This has a test to execute an api to set up a test data prior to the execution of the tests

It majorly has 4 folders Integration, Plugin, Support, Fixtures
**Fixtures**
Can be used as a centralized location to maintain the test data, or the default values like URLs.

**Integration** 
This folder has all the Feature files.
Step definition files inside the folders with the names of each Feature files.

**Support Page** 
This folder has the Page objects w.r.t each pages of the Website.

**Plugin **

This folder contains the plugin information for the Cucumber integration with cypress.

**cypress.json **

Includes the default timeout in milliseconds
Number of retries on failures.

**Fixtures**
This has the file where in we can change the URL for the automation.

**Prerequisites before the execution of the tests:**
1. node modules
2. Python as the database is in python
3. flask has to be installed.

**Setting up the local server before the test execution**
1. go inside the website project folder execute `npm start`
2. go inside the api folder and perform `flask run`
This will set up the servers both frontend and backend for the execution.

**Before Execution of the Cypress automation suite**
1. `npm install` --> installs all the dependencies
2. **Reset the local database every time before the execution** --> This will set up the test data before execution. So Reset the database before executing.

**Commands to execute in the terminal**
1. Go to project folder and `npx cypress open`
This command opens the cypress dashboard and can execute the tests from the cypress GUI.
2. Go to project folder and `npx cypress run `
This command executes the tests in the headless mode.
3. For headed mode use `npx cypress run --headed`

**To use Different Browsers**
--browser firefox
--browser chrome
--browser chromium

**To generate the report**
.json files for each spec files will be generated after every complete run from the terminal in the folder cucumber-json
to convert into an html report.
execute the command `node cucumber-html-report.js`
And the reports will be generated in the folder reports which can be opened in any browser.

**Bash File for running the test on the mac**
1. Open Terminal
2. Go to the project path
3.  run the command `sh elinvar_automation.sh`
4.  The downloading of the node module, execution and report generation happens automatically.

