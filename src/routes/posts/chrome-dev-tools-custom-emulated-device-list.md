---
date: 2022-06-07
description: How to get the list of custom emulated devices added via chrome developer tools.
layout: post
slug: chrome-dev-tools-custom-emulated-device-list
tags:
- post
- chrome
- dev-tools
title: Access Chrome developer tools custom emulated device list 
---

In the current day job I often need to test applications in the browser that require a custom User Agent string. In Chrome, these can be added via the [Device Toolbar](https://developer.chrome.com/docs/devtools/device-mode/#viewport). See [add a custom device](https://developer.chrome.com/docs/devtools/device-mode/#custom).

I wanted to save the list of custom User Agent strings that I had added to Chrome, I couldn't find an export utility and I could of course have just copied and pasted them somewhere but I was curious where these values were stored. A quick [search result](https://stackoverflow.com/questions/39587659/get-emulator-list-from-chrome) suggested that the data is saved on disk in Chrome preferences.

### Chrome preferences location on disk on a mac

On a mac the `Preferences` file can be found here...

```
/Users/<username>/Library/Application Support/Google/Chrome/Default/Preferences
```

Preferences are saved as a JSON object and the custom emulated devices are saved as a JSON string on the following property... 

```
devtools.preferences.customEmulatedDeviceList
```

### Emulated device list

Here is the parsed list of emulated devices that I currently have added to Chrome.

<script>
import CustomEmulatedDeviceList from '$lib/custom-emulated-device-list/CustomEmulatedDeviceList.svelte';
</script>
<CustomEmulatedDeviceList/>
