---
date:   2018-11-18
layout: post
slug: git-create-new-branch
tags:
    - post
    - git
title:  git - create new branch
---

Everything has fallen out of my mind including git basics, I need to write this down.

```bash
$ git branch my-new-branch
$ git checkout my-new-branch
```

Or shorthand...

> To create a new branch and switch to it at the same time, you can run the git checkout command with the -b switch.
<cite><a href="https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging">Git Branching - Basic Branching and Merging</a></cite>

```bash
$ git checkout -b my-new-branch
Switched to a new branch "my-new-branch"
```
