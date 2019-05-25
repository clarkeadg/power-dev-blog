---
layout: post
author: Ghost
title: How to use GIT
date: 2019-05-25T04:22:04.660Z
image: ../img/maxresdefault.jpg
tags:
  - tutorials
---
#### Clone repo
```
git clone <repo_path> <optional_foldername>
```

#### Get branches
```
git fetch
```

#### Checkout branch
```
git checkout <branch_name>
```

#### Create branch
```
git checkout -b <branch_name>
```

#### Delete branch
```
git branch -d <branch_name>
```

#### Delete remote branch
```
git push origin --delete <branch_name>
```

#### Pull latest code from git repo
```
git pull origin <branch_name>
```

#### Check file status for modified and new files
```
git status
```

#### Add files to commit
```
git add .
```

#### Commit changes
```
git commit -a -m "commit message"
```

#### Push Changes
```
git push origin <branch_name>
```

#### Merge branches
```
git merge <branch_name>
```

#### Branch comparison
```
git diff <branch_name>
```

#### Undo all file changes
```
git checkout .
```

#### Go backwards to undo latest commits
```
git checkout <commit_id>
git commit -a -m "undoing all commits past <commit_id>"
git push origin <branch_name>
```


