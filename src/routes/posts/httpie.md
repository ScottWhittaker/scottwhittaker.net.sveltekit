---
date: 2016-02-25
layout: post
permalink: httpie/2016/02/25/httpie.html
redirect: posts/httpie
slug: httpie
tags: post
title: HTTPie
---

For those moments when you are asked to integrate a new API into an application and you want to take a look around before any code is written, then [HTTPie](https://github.com/jkbrzt/httpie) is a great tool.

> HTTPie can be used for testing, debugging, and generally interacting with HTTP servers.

I discovered it via [SWAPI](https://swapi.co) which uses HTTPie for examples in their [documentation](https://swapi.co/documentation).

```bash
http swapi.co/api/planets/1/
{
    "climate": "arid",
    "created": "2014-12-09T13:50:49.641000Z",
    "diameter": "10465",
    "edited": "2014-12-21T20:48:04.175778Z",
    "films": [
        "http://swapi.co/api/films/5/",
        "http://swapi.co/api/films/4/",
        "http://swapi.co/api/films/6/",
        "http://swapi.co/api/films/3/",
        "http://swapi.co/api/films/1/"
    ],
    "gravity": "1 standard",
    "name": "Tatooine",
    "orbital_period": "304",
    "population": "200000",
    "residents": [
        "http://swapi.co/api/people/1/",
        "http://swapi.co/api/people/2/",
        "http://swapi.co/api/people/4/",
        "http://swapi.co/api/people/6/",
        "http://swapi.co/api/people/7/",
        "http://swapi.co/api/people/8/",
        "http://swapi.co/api/people/9/",
        "http://swapi.co/api/people/11/",
        "http://swapi.co/api/people/43/",
        "http://swapi.co/api/people/62/"
    ],
    "rotation_period": "23",
    "surface_water": "1",
    "terrain": "desert",
    "url": "http://swapi.co/api/planets/1/"
}
```

Couple it with [jq](https://stedolan.github.io/jq/), a command line JSON processor and you have all the tools you need for API investigation from the command line.

```bash
http swapi.co/api/planets/1/ | jq '.name'
"Tatooine"
```
