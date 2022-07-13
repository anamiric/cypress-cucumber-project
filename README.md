# CYPRESS-CUCUMBER PROJECT
Project contains automated tests examples done in Cucumber and Cypress framework, and represents final exam project of finished course for Cypress.

## Setup

For opening and running the project [VS Code](https://code.visualstudio.com/) or some other IDE is recommended.\
Install [Node.js](https://nodejs.org/en/download/) or you can check if it's already insalled with:
```
node -v
```
The instructions for installing Cypress is on this [link](https://docs.cypress.io/guides/getting-started/installing-cypress#What-you-ll-learn). This project is done in Cypress version 10.1.0.
Next the **cypress-cucumber-preproccesor** plugin needs to be installed. Install the plugin by running:
```
npm install --save-dev cypress-cucumber-preprocessor
```
For generating report install next plugins:
```
npm i -D @shelex/cypress-allure-plugin
```

```
npm install --save-dev mocha-allure-reporter allure-commandline
```

## Run the project

Open project in chosen IDE. To open Cypress app run the npm script ***cy:open*** or type command in terminal:
```
npx cypress open
```
The Launchpad will be displayed. Choose *E2E Testing* and in next step the browser in which tests will be executed. All available feature files will be listed. To run feature file just choose one.\
To run all tests run the npm script ***test:run*** or type command in terminal:
```
cypress run --config video=false --env allure=true
```
This command will run all feature files in headless mode. To generate report after the tests are executed run npm script ***report:allure*** or type command in terminal:
```
npx allure generate ./allure-results --clean && npx allure open ./allure-report
```
After the report is generated it will be opened automatically in browser.
