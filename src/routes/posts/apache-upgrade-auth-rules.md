---
date: 2015-12-12
layout: post
permalink: apache/2015/12/12/apache-upgrade-auth-rules.html
redirect: posts/apache-upgrade-auth-rules.html
slug: apache-upgrade-auth-rules
tags: post
title: Apache 2.4 Upgrade - Authorisation Rules
---

When did Mac upgrade to use Apache 2.4, Yosemite, El Capitan? I only realised when my local web server returned a [403 Forbidden](https://en.wikipedia.org/wiki/HTTP_403) HTTP status code for an [alias](https://httpd.apache.org/docs/2.2/mod/mod_alias.html#alias) that I had not accessed for some time.

It turns out that the [authorisation](http://httpd.apache.org/docs/trunk/upgrading.html) rules have changed.

## Before

```xml
Alias /somedir "/Users/username/somedir/"
<Directory "/Users/username/somedir/">
        Options Indexes MultiViews
        AllowOverride None
        Order allow,deny
        Allow from all
</Directory>
```

## After

```xml
Alias /somedir "/Users/username/somedir/"
<Directory "/Users/username/somedir/">
        Options Indexes MultiViews
        AllowOverride None
        Require all granted
</Directory>
```
