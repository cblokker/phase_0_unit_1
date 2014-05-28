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
   * git branch  //verify you're on the master branch
   * git merge upstream/master  //merge the changes
   * git commit -m "comment"  //commit the changes
 
- Commit locally:
   * git add [file]
   * git commit -m "Maeken demz changes"

## Release 5: Reflection
Well, I'm trying to get the hang of this.  I've been exposed to working with git for single projects, but have never done merges and branches before.
