# Test: Login fails with invalid password

## Objective
Verify that Ghost prevents login when an invalid password is entered.

## Precondition
- Ghost Admin is accessible
- A valid user email exists
- User is on Ghost admin login page

## Steps
1. Enter a valid email address
2. Enter an invalid password
3. Click the Sign in button

## Expected Results
- ​Email address displays in email field
- Password displays in password field as masked characters
- Error message is displayed
- User remains on the login page

## Priority
High

## Linked Bug: GQ-1 User Enumeration via explicit login error message 