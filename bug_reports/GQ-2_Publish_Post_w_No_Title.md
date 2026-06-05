Title: [Posts] User can publish a post with an empty title

ID: GQ-2

Severity: Medium

Environment: 

* Browser: Safari 26.5
* MacOS: Tahoe 26.5

Preconditions: 

* User is logged into Ghost admin

Steps to Reproduce:

* Step 1: In the navigation menu, click the "+" sign beside "Post"
* Step 2: Leave the title field empty
* Step 3: Enter post content
* Step 4: Click "publish" 

Expected Result: 

* Publish action is blocked
* Validation message is displayed

Actual Result: 

* Ghost allows draft to be published with no title 
* No validation error message appears


## Related Test Case: GQ-T8 Post creation is blocked when title field is empty