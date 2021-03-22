# Elinvar_Automation_FrontEnd
Technical assignment for Elinvar Automation testing using Cypress + Cucumber

This is a cypress Automation testing framework with cucumber integration.
This framework is built on cypress, with inclusion of Page Object Model.
The framework has the capability to automatically capture screenshot on failure and video recording of the executed tests will be saved.



**Fixtures Folder**
Can be used as a centralized location to maintain the test data, or the default values like URLs.

**Integration** 
This folder has all the Feature files.
Step definition files inside the folders with the names of each Feature files. 

**Support Page** 
This folder has the Page objects w.r.t each pages of the Website.

**Plugin **

This folder contains the plugin information for the Cucumber integration with cypress.

**cypress.json **

This file can be used to set the configuration, browser size and other settings.
Includes the default timeout in milliseconds
Number of retries on failures.

**Fixtures**
This has the file where in we can change the URL for the automation.


****How to Run******
**Prerequisites before the execution of the tests:**
1. Please make sure that the front end and backend servers of the project are up and running.
2. The URL will be by default pointing to http://localhost:3000
3. If Using a different URL Go to this project folder `/cypress/fixtures/example.json` change the URL in the example.json file.

**Executing the Suite**

**Bash File for running the test on the mac and windows**
1. Open Terminal
2. Go to the project path
3.  run the command `sh elinvar_automation.sh` for mac.
4.  Open the file `elinvar_automation.bat` in power shell to start the execution of the suite.
5.  The downloading of the node module, execution and report generation happens automatically.

**If you want to execute manually**
1. Go to the project folder and perform `npm install` which installs all the dependencies related to cypress and cucumber.
2. Once point 1 is complete execute the command `npx cypress run`
3. To generate the reports after the execution run the command `node cucumber-html-report.js`


**Before Execution of the Cypress automation suite**
1. `npm install` --> installs all the dependencies
2. **Reset the local database, if a rerun of the suite is to be done** --> This will set up the test data before execution. So Reset the database before re executing suite.

**Commands to execute in the terminal**
1. Go to project folder and `npx cypress open`
This command opens the cypress dashboard and can execute the tests from the cypress GUI.
2. Go to project folder and `npx cypress run `
This command executes the tests in the headless mode.
3. For headed mode use `npx cypress run --headed`

**To use Different Browsers**
1. --browser firefox
2. --browser chrome
3. --browser chromium

**To generate the report**
.json files for each spec files will be generated after every complete run from the terminal in the folder cucumber-json
to convert into an html report.
execute the command `node cucumber-html-report.js`
And the reports will be generated in the folder reports which can be opened in any browser.



