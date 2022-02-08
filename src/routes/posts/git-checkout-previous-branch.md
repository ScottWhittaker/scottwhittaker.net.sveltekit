---
date: 2016-10-10
layout: post
permalink: git/2016/10/10/git-checkout-previous-branch.html
slug: git-checkout-previous-branch
tags: post
title:  git - checkout previous branch
---

Just discovered this little trick to checkout the previous branch you were working on. It allows you to toggle quickly between your last 2 branches...

```bash
git checkout -
```

For example, lets say you are working on `master` and you create a new feature branch `feature/foo`...

```bash
git:(master) git checkout -b feature/foo
Switched to a new branch 'feature/foo'
git:(feature/foo)
```

To quickly switch back to `master`...

```bash
git:(feature/foo) git checkout -
Switched to branch 'master'
git:(master)
```

And again back to `feature/foo`...

```bash
git:(master) git checkout -
Switched to branch 'feature/foo'
git:(feature/foo)
```
