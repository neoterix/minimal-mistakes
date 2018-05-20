---
title: Progress on improving site banners
category: news
tags: 
- site
modified: Tuesday, November 28, 2017
header:
  image: /assets/images/brooklyn_pier_1500x375.jpg
  image_description: "Brooklyn Bridge Park pier, 2016"
  caption: "[©2017](https://anthonynguyen.digital/)"
---

Over the weekend I picked out and processed over a dozen more personal photos to add a little flair to the site. With the assets in place, next is developing a way to take advantage of all of the banners without having to manually assign them to each page (as was the case).

Naturally a randomly rotating banner makes the most sense here. In my initial research into a Jekyll-friendly approach, I came across [Jeff McAffer's writeup on his approach here](http://mcaffer.com/2015/11/Moving-to-Jekyll/), but I believe the approach ends up flawed. Even though it's based on pulling time (which should change), the time ends up only factoring in at site build-time. The result is that the site has (1) all pages sitewide with the same banner that (2) won't change unless the site is revised and regenerated.

It's clear that Javascript is the way to go here, as demonstrated by [Emilee Rader's Jekyll site](http://bierdoctor.com/). In the interest of wrapping up work on this, I opted for an interim approach as noted in a comment buried [on this StackOverflow question](https://stackoverflow.com/questions/7488393/jekyll-liquid-random-numbers): using `page.title.size` instead of `site.time` will at least solve the first problem in that it will at least kinda-uniquely pick out a banner for each page, although the banners stay static.

Next up: Javascript.