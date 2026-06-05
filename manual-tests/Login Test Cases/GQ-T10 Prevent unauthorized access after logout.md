# Test: Prevent unauthorized access after logout

## Objective
Verify that a logged-out user cannot access Ghost Admin pages.

## Precondition
- User has logged out of Ghost Admin

## Steps
1. Manually navigate to the Ghost Admin URL
2. Refresh the page

## Expected Results
- Login page appears
- User is redirected to the login page
- Access to admin pages is denied

## Priority
High
