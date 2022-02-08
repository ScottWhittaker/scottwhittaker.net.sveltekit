---
date: 2020-08-11
description: Describes the recommended approach for setting custom aliases with oh my zhs
layout: post
slug: oh-my-zsh-custom-aliases
tags:
- post
- ohmyzsh
title: Oh My Zsh Custom Aliases
---

I recently installed [Oh My Zsh](https://ohmyz.sh/) on a new machine which is not something you do often.  I actually read the `~/.zshrc` file this time before I added an alias and found the following which recommends you add your custom aliases in the `ZSH_CUSTOM` folder.

```shell
# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
```

Note that you can find the location of your custom folder using `echo $ZSH_CUSTOM`. On a mac that would like this...

```shell
echo $ZSH_CUSTOM
/Users/<username>/.oh-my-zsh/custom
```

You can call the file anything you like as long as the file extension is `.zsh` and the file is immediatley under the `.oh-my-zsh/custom` directory, for example `.oh-my-zsh/custom/my-aliases.zsh`. I found the answer to this [in this thread](https://github.com/ohmyzsh/ohmyzsh/issues/4865).

You can create as many files as you like here providing a nice approach to organising your aliases on a per-project basis for example.

```shell
project-1.zsh
project-2.zsh
project-3.zsh
```

Also note that in the `custom` directory there is a handy `examples.zsh` file which reads as follows...

```shell
# You can put files here to add functionality separated per file, which
# will be ignored by git.
# Files on the custom/ directory will be automatically loaded by the init
# script, in alphabetical order.

# For example: add yourself some shortcuts to projects you often work on.
#
# brainstormr=~/Projects/development/planetargon/brainstormr
# cd $brainstormr
#
```

I am going to be far more organised as far as aliases are concerned from now on.
