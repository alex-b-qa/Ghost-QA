Ghost-QA Readme Rough Draft


Overview
This repository documents a QA testing project performed on Ghost CMS Admin, combining manual testing and test automation. The project demonstrates foundational QA skills including test case design, defect tracking, and end-to-end UI automation using Cypress.
The goal of this project is to showcase practical QA experience suitable for a QA role.

Application Under Test
	•	Application: Ghost CMS (Admin interface)
	•	Environment: Local Ghost installation
	•	Access: http://localhost:2368/ghost
	•	Test Type: Black-box functional testing

Testing Scope
In Scope
The following features were tested:
	•	Authentication (login, logout)
	•	Invalid login handling
	•	Post creation (draft)
	•	Auto-save behavior
	•	Previewing posts
	•	Publishing posts
	•	Editing published posts
	•	Deleting draft posts
	•	Navigation within Ghost Admin

Out of Scope
The following areas were intentionally not tested:
	•	Payments and billing
	•	Themes and design customization
	•	Third-party integrations
	•	API testing
	•	Performance testing
	•	Security scanning tools
Defining out-of-scope areas reflects realistic QA project boundaries.

Test Automation
Tooling
	•	Framework: Cypress
	•	Version: 15.15.0
	•	Language: JavaScript
	•	Runtime: Node.js
Automated Coverage
	•	Total automated test cases: 6
Automated flows include:
	•	Successful login
	•	Create draft post
	•	Publish post
	•	Preview post
	•	Edit published post
	•	Logout
Automation focuses on high-value, stable user flows rather than edge-case validation, following best practices for maintainable UI automation.
Notable automation challenges addressed:
	•	Handling duplicate DOM elements in Ghost Admin
	•	Refining selectors to target visible, user-interactable elements
	•	Avoiding brittle assertions tied to UI timing or internal implementation

Manual Testing
Test Case Management
	•	Tool: Zephyr
	•	Total manual test cases: 10
Manual test cases cover:
	•	Validation scenarios
	•	Negative authentication cases
	•	Edge cases not suitable for stable automation

Defect Tracking
	•	Tool: Jira
	•	Total defects logged: 2
Logged Defects
	1	Publish post with no title
	◦	Ghost allows publishing without a required title
	◦	Logged as a validation defect
	2	User enumeration via invalid login message
	◦	Error messaging allows inference of valid user accounts
	◦	Logged as a security-related usability defect
Bug reports include clear reproduction steps, expected vs actual results, and environment details.

Repository Contents
This repository includes:
	•	Cypress automated test scripts
	•	Documented manual test cases
	•	Sample bug reports
	•	Supporting QA documentation
All artifacts are structured to reflect real-world QA workflows and tooling.

Project Focus
This project is framed as a Junior QA portfolio project, emphasizing:
	•	Clear test case design
	•	Appropriate automation decisions
	•	Practical defect identification
	•	Familiarity with common QA tools (Cypress, Jira, Zephyr)
The intent is to demonstrate readiness for an entry-level QA role rather than advanced or specialized testing.



# ==============================================================================
# GHOST CMS LOCAL INSTALLATION SCRIPT / COMMANDS
# ==============================================================================


PREREQUISITES (Must be installed on your system first)
------------------------------------------------------------------------------
1. Node.js (Active LTS version like v20 or v22)
   - Download from: https://nodejs.org/
2. Package Manager (npm)
   - Automatically bundled when you install Node.js.
3. Python (Version 3.12 or newer)
   - Used as the build tool backend for compiling native modules.



# 1. FIX PYTHON 3.12+ COMPATIBILITY FOR SQLITE3
# In a terminal or command prompt, run the command below that matches your operating system:

# For macOS (using Homebrew)
brew install python-setuptools

# For macOS (using standard Python package)
python3 -m pip install setuptools


# For Windows (PowerShell or CMD)
pip install setuptools


# 2. INSTALL GHOST-CLI GLOBALLY
# (Add 'sudo ' to the front of this command if you get permission errors on macOS/Linux)
npm install -g ghost-cli@latest


# 3. CREATE A CLEAN DIRECTORY AND NAVIGATE INTO IT
mkdir ghost-local
cd ghost-local


# 4. RUN THE LOCAL INSTALLER
ghost install local


# ==============================================================================
# WHAT TO DO NEXT:
# 1. Open a web browser and go to: http://localhost:2368/ghost
# 2. Complete the 1-minute onboarding wizard to set up your admin account.
# 3. Note the username and password you use to create an account with. You will need ot put this in the cypress.env.json file before running Cypress


# QUICK MANAGEMENT COMMANDS (Run inside the 'ghost-local' folder):
# - ghost stop    : Shuts down the local server
# - ghost start   : Restarts the server after a computer reboot
# - ghost restart : Reloads the server (useful when building custom themes)
# ==============================================================================

# Edit the cypress.env.json file
# 1. Open "Ghost QA Test" folder and locate the cypress.env.json file. 
# 2. Open the file in a text editor 
# 3. Enter your usernname and password in double quotes like so:

{
"email": "username",
"password": "password"
}

# 4. Save the file.


Ensure Ghost is running locally before executing tests.


How to Run Automated Tests

# Open terminal or command prompt and navigate to the "Ghost QA Test" folder
cd path/to/"Ghost QA Test"

# Run these commands 
npm install (may need to use "sudo npm install" to run this command on a Mac)
npx cypress open


Access Ghost at:
Admin: http://localhost:2368/ghost
Site: http://localhost:2368
This local installation is used as the test environment for all manual and automated QA testing in this project.


Author
Role: QA Engineer
This project was created for portfolio and learning purposes.