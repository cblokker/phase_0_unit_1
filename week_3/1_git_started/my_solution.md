## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
<!-- Your defnition here -->
Add file contents to the index

#### branch
<!-- Your defnition here -->
List, create, or delete branches

#### checkout
<!-- Your defnition here -->
Checkout a branch or paths to the working tree

#### clone
<!-- Your defnition here -->
Clone a repository into a new directory

#### commit
<!-- Your defnition here -->
Record changes to the repository

#### fetch
<!-- Your defnition here -->
Download objects and refs from another repository

#### log
<!-- Your defnition here -->
Show commit logs

#### merge
<!-- Your defnition here -->
Join two or more development histories together

#### pull
<!-- Your defnition here -->
Fetch from and integrate with another repository or a local branch

#### push
<!-- Your defnition here -->
Update remote refs along with associated objects

#### reset
<!-- Your defnition here -->
Reset current HEAD to the specified state


#### rm
<!-- Your defnition here -->
Remove files from the working tree and from the index

#### status
Show the working tree status


## Release 4: Git Workflow

- Push files to a remote repository:
   * git add [file_to_add]
   * git commit -m "the change I made to the file"
   * git push origin master
   
- Fetch changes:
   * git remote -v //check current remote
   * git remote add upstream [https://github.com/[user_name]/[repo_name]] //add new remote if necessary
   * git remote -v //verify new remote
   * git fetch upstream //fetch the changes
   * git branch -va //branch the changes
   * git branch  //verify
   * git merge upstream/maste //merge the changes
   * git commit -m "message"
- Commit locally
   * git add [file]
   * git commit -m "message"

## Release 5: Errors you encountered
1. Error

I encountered a merge conflict

2. Solution

When I looked at the files that had the merge conflicts, I noticed that there were <<<<<, =====, and >>>>>> markers.  I researched that those were markers to show where the conflict was, the top one is your version, the bottom one is the other version.  Therefore, I deleted the markers and chose which version I wanted for the final commit/push for my repo.

3. Cause (explain the error)

I'm not sure how that happened with only those two files!  It seems like it should have happened to all files if they were different.

## Release 6: Reflection

I'm trying to get the hang of git and GitHub.  I have experience with clone, add, commit, and push, but I've never dealt with branches, merges, and everything else in git.  I had some merge conflicts.  I believe I fixed them, but I don't feel confident that I did it the correct way.  Anyway, I guess it's something I need to practice and discuss with my peers.

I think my git schedule will be to add/commit/push to my repos on a daily basis, and then on a weekly basis I will merge the Dev Bootcamp repo if there are changes.
