const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/cucumber-json",
  reportPath: "./report/Elivnar-TestAutomationReport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "89.0.4389.90",
    },
    device: "Local test machine",
    platform: {
      name: "macOS BIG SUR",
      version: "11.2.3",
    },
  },
  displayReportTime: true,
  durationInMS: true,
  displayDuration: true,
  pageTitle: "Elinvar Test Automation Assignment",
});

document
  .querySelector("p.navbar-text")
  .setAttribute("Elinvar Test Automation Assignment");
