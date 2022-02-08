---
date:   2020-09-01
description: How to create a branch from a tag using git
layout: post
slug: create-a-branch-from-a-tag-using-git
tags:
- post
- git
title:  Create a branch from a tag in git
---

A one liner to create a new branch from a point in time using a tag.

```shell
git checkout -b <branch-name> <tag-name>
```

For example, here we create new branch called `hotfix/critical-bug` from a point in time tagged as `v1.1.1`.

```shell
git checkout -b hotfix/critical-bug v1.1.1
```
