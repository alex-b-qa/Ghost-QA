# Ghost QA Testing Project Rough Draft

## Overview
This repository documents a QA testing project performed on **Ghost CMS Admin**, combining manual testing and UI test automation. The project demonstrates foundational QA skills including test case design, defect tracking, and end-to-end automation using Cypress.

The goal of this project is to showcase practical QA experience suitable for a QA role.

---

## Application Under Test
- **Application:** Ghost CMS (Admin interface)
- **Environment:** Local Ghost installation
- **Access:** http://localhost:2368/ghost
- **Test Type:** Black-box functional testing

---

## Testing Scope

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

Defining out-of-scope areas reflects realistic QA project boundaries.

---

## Test Automation

### Tooling
- Framework: Cypress
- Version: 15.15.0
- Language: JavaScript
- Runtime: Node.js

### Automated Coverage
- Total automated test cases: 6

Automated flows include:
- Successful login
- Create draft post
- Publish post
- Preview post
- Edit published post
- Logout

Automation focuses on high-value, stable user flows rather than edge-case validation, following best practices for maintainable UI automation.

Notable automation challenges addressed:
- Handling duplicate DOM elements in Ghost Admin
- Refining selectors to target visible, user-interactable elements
- Avoiding brittle assertions tied to UI timing or internal implementation

---

## Manual Testing

### Test Case Management
- Tool: Zephyr
- Total manual test cases: 10

Manual test cases cover:
- Validation scenarios
- Negative authentication cases
- Edge cases not suitable for stable automation

---

## Defect Tracking
- Tool: Jira
- Total defects logged: 2

Logged defects:
1. Publish post with no title  
   - Ghost allows publishing without a required title  
   - Logged as a validation defect

2. User enumeration via invalid login message  
   - Error messaging allows inference of valid user accounts  
   - Logged as a security-related usability defect

Bug reports include clear reproduction steps, expected vs actual results, and environment details.

---

## Repository Contents
This repository includes:
- Cypress automated test scripts
- Documented manual test cases
- Sample bug reports
- Supporting QA documentation

All artifacts are structured to reflect real-world QA workflows and tooling.

---

## Project Focus
This project is framed as a Junior QA portfolio project, emphasizing:
- Clear test case design
- Appropriate automation decisions
- Practical defect identification
- Familiarity with common QA tools (Cypress, Jira, Zephyr)

The intent is to demonstrate readiness for an entry-level QA role rather than advanced or specialized testing.

---


## Ghost CMS Local Installation Guide

### Prerequisites
1. Node.js (Active LTS version such as v20 or v22)  
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

## Fix Python 3.12+ Compatibility for SQLite3

Run this command in terminal / command prompt

macOS (Homebrew):
brew install python-setuptools

macOS (standard Python):
python3 -m pip install setuptools

Windows (PowerShell or CMD):
pip install setuptools

---

## Install Ghost CLI
(Add sudo on macOS if permission errors occur)

npm install -g ghost-cli@latest

---

## Create Local Ghost Environment
mkdir ghost-local  
cd ghost-local  
ghost install local

---

## Post-Installation Steps
1. Open a browser and go to: http://localhost:2368/ghost  
2. Complete the onboarding wizard to create an admin account  
3. Save the username and password you signed up with for Cypress tests  

---

## Ghost Management Commands
Run inside the ghost-local directory:
- ghost stop
- ghost start
- ghost restart

---

## Configure Cypress Environment Variables

In Finder (mac) or File Explorer (Windows), navigate to the "Ghost QA Test" folder and find the cypress.env.json file

Edit the cypress.env.json file and enter your credentials in double quotes like so:

{
  "email": "username",
  "password": "password"
}


--- 

Ensure Ghost is running locally before executing tests

---

## How to Run Automated Tests

## Navigate to the "Ghost QA Test" folder in a terminal or command prompt and run these commands
cd path/to/"Ghost QA Test"  
npm install  (may need to run with "sudo npm install" for Mac)
npx cypress open

---

## Access URLs
Admin: http://localhost:2368/ghost  
Site: http://localhost:2368  

This local installation is used as the test environment for all manual and automated testing in this project.

---

## Author
Role: QA Engineer  

This project was created for portfolio and learning purposes.
