---
date:   2018-11-23
layout: post
slug: git-tags
tags:
    - post
    - git
    - tags
title:  git - tags
---

## List tags

```bash
git tag
```

## Remove all local tags

```bash
git tag -d $(git tag -l)
```

## Remove local and remote tags

In order to remove all local and remote tags you can do the following as referenced in the following articles...

- [Remove all git tags](https://gist.github.com/okunishinishi/9424779#gistcomment-2058357)
- [How to remove all git origin and local tags?](https://stackoverflow.com/questions/44702757/how-to-remove-all-git-origin-and-local-tags)


```bash
# Delete local tags
git tag -d $(git tag -l)

# Fetch remote tags
git fetch

# Delete remote tags
git push origin --delete $(git tag -l) # Pushing once should be faster than multiple times

# Delete local tags
git tag -d $(git tag -l)
```
