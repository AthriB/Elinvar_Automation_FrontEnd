#!/bin/bash

npm install
npx cypress run
node cucumber-html-report.js