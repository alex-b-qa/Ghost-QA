Title: [Authentication] User Enumeration via explicit login error message 

ID: GQ-1


Severity: High
 

Environment: 

*  Browser: Safari 26.2 
*  MacOS: Tahoe 26.2


Preconditions: 


* A valid user account exists in the database
* User is on the Ghost login page


Steps to Reproduce:

* Step 1: Navigate to "/ghost/#/signin"
* Step 2: Enter a known valid email address 
* Step 3: Enter an incorrect password
* Step 4: Click "Sign in"


Expected Result: 

* Error message displays a generic notification: "Invalid email or password."
* Login is blocked



Actual Result: 

* Error message displays: "Password is invalid." (Confirms email exists in system)


## Related Test Case: GQ-T2 Login fails with invalid password