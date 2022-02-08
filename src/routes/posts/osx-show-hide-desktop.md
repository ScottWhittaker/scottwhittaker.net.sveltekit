---
date:   2019-08-06
description: Show or hide the icons on OSX desktop from the command line using an alias
layout: post
slug: osx-show-hide-desktop
tags: post
title:  Show or Hide Desktop on OSX
---


Useful tip [found here](https://twitter.com/tweetsbymichiel/status/1150782371358289920) allowing you to hide all the icons on the desktop from the command line.


```shell
# Desktop
# -----------------------------------------------------
alias hide-desktop="defaults write com.apple.finder CreateDesktop false; killall Finder"
alias show-desktop="defaults write com.apple.finder CreateDesktop true; killall Finder"
```

You could of course just not put any files in the desktop folder but then where do you put all that old stuff you don't care about but are afraid to delete? Hiding them makes me feel better.
