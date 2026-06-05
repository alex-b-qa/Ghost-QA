# Test: Post creation is blocked when title field is empty

## Objective
Verify that Ghost prevents publishing a post without a title.

## Precondition
- User is logged into Ghost Admin

## Steps
1. In the navigation menu, click the "+" sign beside "Post"
2. Leave the title field empty
3. Enter post content
4. ​Click "publish"

## Expected Results
- New blank post is created
- Title field keeps placeholder "Post Title"
- Post content text is visible
- Publish action is blocked
- Validation message is displayed

## Priority
Normal

## Linked Bug: GQ-2 User can publish a post with an empty title