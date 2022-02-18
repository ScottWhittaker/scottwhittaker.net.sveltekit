---
date: 2021-12-09
description: How to tell git to ignore files in a repository without adding to .gitignore
layout: post
slug: ignore-a-file-in-git-without-adding-to-gitignore
tags:
- post
- git
title:  Ignore a file in git without adding to .gitignore
---

A small thing that I do so rarely and always forget how to do when I start a new project is how to ignore any files that are specific to your local setup.

This can sometimes be necessary for example if you are working on a repo that you do not control and you do not want to add to the `.gitignore` file and push that to the repo. In my case, I was using WebStorm as my IDE that has an `.idea` file, which contains project configuration data, and I want git to ignore it.

One option is to add the filename to the `exclude` file. 

```bash
vi .git/info/exclude
```

This is what I see when I initially opened `.git/info/exclude` in my current project.

```bash
# git ls-files --others --exclude-from=.git/info/exclude
# Lines that start with '#' are comments.
# For a project mostly in C, the following would be a good set of
# exclude patterns (uncomment them if you want to use them):
# *.[oa]
# *~
```

Add `.idea` in this file and it will be ignored by git.

```bash
# git ls-files --others --exclude-from=.git/info/exclude
# Lines that start with '#' are comments.
# For a project mostly in C, the following would be a good set of
# exclude patterns (uncomment them if you want to use them):
# *.[oa]
# *~
.idea
```

Atlassian describe them as Personal Git ignore rules and define it far better than I can.

> You can also define personal ignore patterns for a particular repository in a special file at .git/info/exclude. These are not versioned, and not distributed with your repository, so it's an appropriate place to include patterns that will likely only benefit you. For example if you have a custom logging setup, or special development tools that produce files in your repository's working directory, you could consider adding them to .git/info/exclude to prevent them from being accidentally committed to your repository.
<cite><a href="https://www.atlassian.com/git/tutorials/saving-changes/gitignore">Atlassian</a></cite>
