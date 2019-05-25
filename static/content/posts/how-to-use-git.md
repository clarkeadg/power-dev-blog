---
layout: post
author: Ghost
title: How to use GIT
date: 2019-05-25T04:22:04.660Z
image: ../img/maxresdefault.jpg
tags:
  - tutorials
---
### Clone repo
```sh
git clone <repo_path> <optional_foldername>
```

### Get branches
```sh
git fetch
```

### Checkout branch
```sh
git checkout <branch_name>
```

### Create branch
```sh
git checkout -b <branch_name>
```

### Delete branch
```sh
git branch -d <branch_name>
```

### Delete remote branch
```sh
git push origin --delete <branch_name>
```

### Pull latest code from git repo
```sh
git pull origin <branch_name>
```

### Check file status for modified and new files
```sh
git status
```

### Add files to commit
```sh
git add .
```

### Commit changes
```sh
git commit -a -m "commit message"
```

### Push Changes
```sh
git push origin <branch_name>
```

### Merge branches
```sh
git merge <branch_name>
```

### Branch comparison
```sh
git diff <branch_name>
```

### Undo all file changes
```sh
git checkout .
```

### Go backwards to undo latest commits
```sh
git checkout <commit_id>
git commit -a -m "undoing all commits past <commit_id>"
git push origin <branch_name>
```


