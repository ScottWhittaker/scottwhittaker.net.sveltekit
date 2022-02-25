---
date: 2020-08-24
description: How to assign the result of a command to a variable in a bash script.
layout: post
slug: assign-result-of-command-to-a-variable-in-bash-script
tags:
  - post
  - bash
title: Assign the result of a command to a variable in a bash script
---

I do not write bash scripts anywhere near often enough to recall the basics so I inevitably lose time searching for answers. In this case I failed to understand how to assign the result of a command to a variable.

All I wanted to do was assign a random number to a variable like so...

```shell
#!/bin/bash

RANDOM_NUMBER=jot -r 1 2000 65000
echo $RANDOM_NUMBER
```

This results in the following output when you run this script...

```shell
$ ./my-script.sh
./my-script.sh: line 3: -r: command not found
```

To assign the result of the command to the variable `RANDOM_NUMBER` there are 2 approaches...

## Wrap the command in $()

```shell
#!/bin/bash

RANDOM_NUMBER=$(jot -r 1 2000 65000)
echo $RANDOM_NUMBER
```

## Wrap the command in backticks

```shell
#!/bin/bash

RANDOM_NUMBER=`jot -r 1 2000 65000`
echo $RANDOM_NUMBER
```

Everyday I feel like a beginner. I [found the answer here](https://www.cyberciti.biz/faq/unix-linux-bsd-appleosx-bash-assign-variable-command-output/) should you want to explore further.
