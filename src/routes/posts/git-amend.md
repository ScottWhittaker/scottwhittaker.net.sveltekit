---
date:   2020-02-21
description: How to amend a commit with git
layout: post
slug: git-amend
tags:
- post
- git
title:  Git Amend
---

Some `amend` snippets that are worth remembering. See [the documentation](https://git-scm.com/docs/git-commit) for all the commit joy.

## Amend last local commit message

```shell
git commit --amend -m  'amended commit message'
```

You can also do the following which will open an editor allowing you to modify the message.

```shell
git commit --amend
```

## Amend with `--no-edit`

This allows you to amend the last commit with any changes you have made without changing the commit message.

```shell
git commit --amend --no-edit
```

> **--no-edit**
Use the selected commit message without launching an editor. For example, git commit --amend --no-edit amends a commit without changing its commit message.
<cite>[git-commit Documentation](https://git-scm.com/docs/git-commit#Documentation/git-commit.txt---no-edit)</cite>
