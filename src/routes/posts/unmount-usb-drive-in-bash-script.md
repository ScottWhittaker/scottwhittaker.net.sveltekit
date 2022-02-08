---
date: 2020-08-26
description: How to unmount a USB drive from a bash script.
layout: post
slug: unmount-usb-drive-in-bash-script
tags:
- post
- bash
title:  Unmount a USB drive from a bash script
---

Another 30 minutes lost looking for a script on an old machine that shows how to unmount a USB disc from a bash script. I have no idea where I found the answer originally but this is one solution.

```shell
#!/bin/bash

VOLUME='/Volumes/My-USB'

echo 'Ejecting disk...'
diskutil umount $VOLUME
```

