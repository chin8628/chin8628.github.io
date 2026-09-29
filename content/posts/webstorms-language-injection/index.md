---
title: 'TIL: WebStorm''s Language Injection'
date: '2023-11-14 13:07:36'
draft: false
slug: webstorms-language-injection
cover:
  image: 375539565_6880539325338037_5614594575953194799_n.jpg
  relative: true
aliases:
  - /2023/11/14/webstorms-language-injection/
---

TIL: WebStorm can inject programming language into any string.

A month ago, I was working on Web Component. I had to write a component fragment as a string in order to reuse it. The problem is writing a programming language as a string is so annoying because it lacks of any IDE assistant such as auto indentation, auto-complete, code format, etc.

Until I found that Intellij-family IDE can inject a specific language into a string. It allow you to use IDE abilities on the string as same as you working on an actual source code including syntax highlighting, code format, or auto suggestion.

{{< figure src="image.png" >}}

Full document of Language Injection: [https://www.jetbrains.com/.../using-language-injections.html](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.jetbrains.com%2Fhelp%2Fidea%2Fusing-language-injections.html%3Ffbclid%3DIwAR1MH6OrPYuaGrk-IlDy7oRzlb0VjKydyo761H0wWcPF4REomffLGHwJZ_4&h=AT2NNCB1UdSEnxuT54b7Gk_OsZkxBe1a2xa7KrnFidMkNAlGm2pWJIpdavOl4-hK8LvNVJlyhKHnmmo6azum2ZUT58_aLpFvXpm7N8_QteberawJXtCjUd76c3B5v7Mq63UB5MLy4w&__tn__=-UK-R&c[0]=AT0Hem0J78j0fpOrWvgWcPfLwJTQiHttlOSVoc031EQjL6GxwsZmDB7VBpJ8YsCQwPpb6g3hSkZ4cch3nPL8GSSJCjtiKIc5iGIP_5fSNPKb8rC0rfJklwP7bbcfLiuhzzWMWNGqsZAH9tdbdwJiHxZCz9nnNENni-au2tyGPnuSp4RFOg4f)
