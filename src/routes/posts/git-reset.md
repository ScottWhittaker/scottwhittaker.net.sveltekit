---
date:   2020-02-20
description: How to reset with git
layout: post
slug: git-reset
tags:
- post
- git
title:  Git Reset
---

Some notes on how to reset stuff with git. There is a whole world of resetting with git, see the [git-reset Documentation](https://git-scm.com/docs/git-reset) if you want to go deeper. The following are a few of the common day to day reset commands that I use for various scenarios.

## Reset all local changes

When you have been messing around and want to reset all your local changes that have not yet been committed.

```shell
git reset --hard
```

## Resetting the last local commit

Want to undo your last local commit? Forgot to remove some logging? Realised your commit is horrendous and you cannot bear to push it? Reset it. There is a great explanation in the [Tower documentation](https://www.git-tower.com/learn/git/faq/undo-last-commit) on undoing the last commit.

### Keep changes

Reset the last commit and keep the changes that you made.

```shell
git reset --soft HEAD~1
```

Alternatively you can drop the `1` here as `~` alone is a shortcut for `~1`

```shell
git reset --soft HEAD~
```

Another alternative is to use `HEAD^`. The `^` alone is a shortcut for `^1`.

```shell
git reset HEAD^
```

There is a [good explanation here](http://www.paulboxley.com/blog/2011/06/git-caret-and-tilde) on the meaning and difference between the usage of the caret and tilde symbols.

### Discard the last commit

Just get rid of the last commit entirely. **Make sure you really don't want to lose any changes you made.**

```shell
git reset --hard HEAD~1
```

> **--hard**
Resets the index and working tree. Any changes to tracked files in the working tree since &lt;commit&gt; are discarded.
<cite><a href="https://git-scm.com/docs/git-reset#Documentation/git-reset.txt---hard">git-reset Documentation</a></cite>

## Discard merge

Got into local merge trouble? Then bail out.

```shell
git reset --merge
```

## Reset branch from origin

This one always catches me out for some reason. When someone elses PR you already have checked out has changed, if you pull that branch you may get conflicts. I do not want to have mess with conflicts here as it is none of my business, fetch everything then do a hard reset on the origin branch to get the latest changes.

```shell
git fetch --all
git reset --hard origin/<branch-name>
```
