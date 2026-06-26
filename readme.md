# Ghost QA Testing

## Overview
This repository documents a QA testing project performed on **Ghost CMS Admin**, combining manual testing and UI test automation. The project demonstrates foundational QA skills including test case design, defect tracking, and end-to-end automation using Cypress.

The goal of this project is to showcase practical QA experience suitable for a QA role.

---

## Application Under Test
- **Application:** Ghost CMS (Admin interface)
- **Environment:** Local Ghost installation
- **URL:** http://localhost:2368/ghost
- **Testing Types:** Black-box functional testing, manual testing, automated tesing (Cypress)
- **Purpose:** Demonstrate practical QA skills including test case design, execution, defect tracking, and basic automation

---

## Scope of Testing

### In Scope
- Authentication (login, logout)
- Invalid login handling
- Post creation (draft)
- Auto-save behavior
- Previewing posts
- Publishing posts
- Editing published posts
- Deleting draft posts
- Navigation within Ghost Admin

### Out of Scope
- Payments and billing
- Themes and design customization
- Third-party integrations
- API testing
- Performance testing
- Security scanning tools

---

## Test Automation

### Tooling
- Framework: Cypress
- Version: 15.15.0
- Language: JavaScript
- Runtime: Node.js

### Automated Coverage
- Total automated test cases: 6

### Automated flows include:
- Successful login
- Create draft post
- Publish post
- Preview post
- Edit published post
- Logout

**Location:**  
`/Ghost QA Test/cypress/e2e/`

Notable automation challenges addressed:
- Handling duplicate DOM elements in Ghost Admin
- Refining selectors to target visible, user-interactable elements
- Avoiding brittle assertions tied to UI timing or internal implementation

---

## Manual Testing

### Test Case Management
- Tool: Zephyr
- Total manual test cases: 10

### Manual test cases cover:
- Validation scenarios
- Negative authentication cases
- Edge cases


**Location:**  
`/manual-tests/`

---

## Defect Tracking
- Tool: Jira
- Total defects logged: 2

Bug reports include clear reproduction steps, expected vs actual results, and environment details.

**Location:**  
`/bug_reports/`

---

## Project Focus
This project is framed as a QA portfolio project, emphasizing:
- Clear test case design
- Appropriate automation decisions
- Practical defect identification
- Familiarity with common QA tools (Cypress, Jira, Zephyr)

---

## Ghost CMS Local Installation Guide

### Prerequisites
1. Node.js (v22 is recommended)  
   https://nodejs.org/
2. npm (bundled with Node.js)
3. Python (version 3.12 or newer)

---
## Repository Setup

### 1. Download the Repository

1. Go to the GitHub repository URL in your browser:  
   https://github.com/alex-b-qa/Ghost-QA

2. Click the green **Code** button

3. Select **Download ZIP**

4. Extract the ZIP file to a location on your computer

After extracting the ZIP, you will have a folder:

Ghost QA Test/

This will be the project folder.

--- 

### Note: To avoid any permission errors while running commands in macOS, you'll need to prefix any install commands with "sudo".

---

## Fix Python 3.12+ Compatibility for SQLite3

Run this command in terminal / command prompt

- macOS (Homebrew):
     brew install python-setuptools

- macOS (standard Python):
     python3 -m pip install setuptools

- Windows (PowerShell or CMD):
     pip install setuptools

---

## Install Ghost CLI

Run this command in terminal / command prompt

npm install -g ghost-cli@latest

---

## Create Local Ghost Environment

Run these commands in terminal / command prompt

mkdir ghost-local  
cd ghost-local  
ghost install local 

---

## Post-Installation Steps
1. Open a browser and go to: http://localhost:2368/ghost  
2. Complete the onboarding wizard to create an admin account  
3. Save the email and password you signed up with. (You will need it for running tests)

---

## Ghost Management Commands
If needed, run inside the ghost-local directory to stop, start, or restart Ghost:
- ghost stop
- ghost start
- ghost restart

---

## Access URLs
Admin: http://localhost:2368/ghost  
Site: http://localhost:2368  

This local installation is used as the test environment for all manual and automated testing in this project.

---

## Install Cypress dependencies 

In the Terminal / Command Prompt, run this command inside the "Ghost QA Test" folder:

npm install


## Note on npm warnings

After running `npm install`, you may see vulnerability warnings. These are common in Cypress projects and are related to dependencies, not the test code.

They do not prevent the tests from running.

---

## Configure Cypress Environment Variables

In Finder (macOS) or File Explorer (Windows), navigate to the "Ghost QA Test" folder and find the cypress.env.json file

Edit the cypress.env.json file and enter your login credentials in double quotes like so:

{
  "email": "your_email",

  
  "password": "your_password"
}

--- 

Ensure Ghost is running locally before executing tests

---

## Running Cypress Tests

### Option 1: Open Cypress Test Runner (UI Mode)

## Navigate to the "Ghost QA Test" folder in a terminal or command prompt and run this command

npx cypress open

Steps after running:
1. Cypress Test Runner opens
2. Select **E2E Testing**
3. Choose a browser
4. Click 'Start E2E Testing'
5. Click a test file inside cypress/e2e
6. Tests run interactively in the browser
7. Click 'Specs' in the far left menu to go back to the list of tests


---

### Option 2: Run Tests in Headless Mode

Run this command in the same terminal:

npx cypress run

This runs all tests in the terminal without opening the Cypress UI.


---

## Author
Role: QA Engineer  

This project was created for purposes of this portfolio.
