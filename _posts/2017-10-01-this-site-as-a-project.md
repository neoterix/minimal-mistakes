---
title: antonnguyen.digital as a Project
category: posts
tags: 
- projects
- writing
modified: Sunday, October 1, 2017
excerpt: "My learnings on building this very site as a technology project. Choosing GitHub Pages, Jekyll, a theme, and the dozens of pitfalls along the way."
header:
  image: /assets/images/brooklyn_pier_1500x375.jpg
  image_description: "Brooklyn Bridge Park pier, 2016"
  caption: "[©2017](http://anthonynguyen.digital/)"
---

It turns out this site that you're reading right now is itself a pretty significant technology project for me— 

One of the goals of having a personal site was to develop a stronger web presence. As an avid learner and writer, I've got posts, articles, whatever, scattered all over the Internet. It's a real shame I haven't done a better job of leveraging all of my small contributions by consolidating them all in a single place.

Coinciding with a recent push to [learn programming](https://medium.com/@clumsycontraria/learning-to-code-on-a-bone-stock-chromebook-a7d0e75303bb) and improve my technology fluency as a product manager, the solution was obvious: Instead of outsourcing the setup, management, and hosting of my site to services like [Squarespace](https://www.squarespace.com/) or [Wix](https://www.wix.com/), what better way to learn and create something sustainable... *than to build it myself*? ...:boom:

## Research Groundwork

The first thing to do was to survey and understand my options for both hosting and technology. I needed something low cost (or better, *$free.99*), simple to manage and maintain, and most importantly, used by many—a criteria I quickly learned to appreciate.

I quickly arrived at [GitHub Pages](https://pages.github.com/): a free and seemingly quite popular hosting approach for developers and academics to host personal blogs and content. The one incredible part about choosing GitHub Pages is that based on how GitHub implements things, there are thousands of personal sites available in public Github repos. For someone like me, there is no better way to learn than to see a living example of how people do something, and to be able to see how they did it by examining the entire source code myself.

## Development

In relatively short amount of time, I got my `Hello World` page up and my custom domain connected. It was time to move on to bigger things: spinning up something more fully-featured using [Jekyll](https://jekyllrb.com/), a popular Ruby static site generator natively supported by GitHub Pages. 

I ended up choosing Michael Rose's ["Minimal Mistakes" Jekyll theme](https://mademistakes.com/work/minimal-mistakes-jekyll-theme/) to implement. It's incredibly [well documented](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/), it has a clean and professional layout, it has support for a lot of goodies (*e.g.*,  responsive design, Google Analytics support, etc.), it's *free*, it's been around for a [few years now](https://mmistakes.github.io/minimal-mistakes/docs/history/) (and is still [actively maintained](https://github.com/mmistakes/minimal-mistakes/releases/tag/4.6.0)), and... [thousands of people use it](https://github.com/mmistakes/minimal-mistakes/network/members). 

> As an aside pro-tip, if you use Minimal Mistakes yourself and are looking for inspiration on customizations and the like, just Google "[Powered by Jekyll & Minimal Mistakes](https://www.google.com/search?q="Powered+by+Jekyll+%26+Minimal+Mistakes")" or look at [those who have forked it on GitHub]((https://github.com/mmistakes/minimal-mistakes/network/members)). It's fantastic to see all the different takes on the theme and how the theme itself has evolved over the years. Also, you can usually trace the site back to the user's GitHub repo and learn about how they implemented their customizations.  


The end result (though it's a constant work in progress) is what you see here.

## I Spent an Entire Long Weekend Building this Site... and All I Got Was this Lousy T-Shirt?

While the final product itself is somewhat unremarkable in that it's a personal website much like the millions out there on the web, it was the product of several days of slow and steady [yak shaving](http://www.hanselman.com/blog/YakShavingDefinedIllGetThatDoneAsSoonAsIShaveThisYak.aspx) progress. Looking back on it all, it's amazing how many of the steps are needed as a novice exploring and trying to make sense of it all...

* Getting a Ruby toolchain up on my [Chromebook/Android-Termux-Linux frankenstein local dev environment](https://medium.com/@clumsycontraria/learning-to-code-on-a-bone-stock-chromebook-a7d0e75303bb)
* Figuring out why my SSH key wasn't cooperating with GitHub 
* Choosing a Jekyll theme that fit my design needs *and* had thorough, novice-friendly documentation
* Getting my chosen Jekyll theme, [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/), successfully forked, cloned locally, and able to run as a local web server *(bundle exec blah blah blah)* 
* Getting the *Android/Termux* Jekyll local web server visible by my *ChromeOS* browser (unfortunately my setup requires jumping through [half a dozen SSH hoops](https://medium.com/@clumsycontraria/learning-to-code-on-a-bone-stock-chromebook-a7d0e75303bb#a519))
* Reading through the entire Jekyll theme [documentation](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/) and testing each feature or config locally 
* Finding and studying other people's forks of [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) to understand how to implement certain designs and how the theme and Jekyll work
* Attempting various customizations to my theme setup... and often not succeeding
* Experimenting with the right aspect ratio for my hero image/banner against different screens and devices
* Troubleshooting various idiopathic glitches along the way, like when `git push` started mysteriously hanging and no longer worked (the diagnosis involved painstakingly replicating each file change until I uncovered a small file that oddly interfered with Git's ability to push up to GitHub)

Though this was a larger challenge than I had originally (and naively) anticipated, it was incredibly rewarding as a learning experience:

* I'm now fluent with the basic `git` and GitHub activities, including cloning, staging, committing, pushing, viewing the Git log, and well... resetting my commits (doh!)
* I now have a greater appreciation for the value that product management brings to software development—particularly in focusing on value-driven prioritization and iterative development. There were definite missteps along the way in terms of poorly allocated time and energy (like when I went down a rabbit hole trying to get recent posts on the lander page...) *I'll probably write a longer post about this someday...*

I think the most important lesson from this project (as well as my other projects) has been ***learning about how to teach yourself***. 

As has been the theme, a lot of what I learned was how to creatively approach searching for answers and leveraging how other people have solved this problem before me. I now understand GitHub (particularly GitHub Pages) and the posture towards open, public repositories. Being able to see people's sites and then look through the directories, files, and code is tremendous tool for solving problems and learning. And all of this builds a confidence around learning software development and continuing to build on the foundation here.

## ~~What's Been Done~~ What's Next

Other than continuing to consolidate my content here and getting myself to write more, I do have a short technology roadmap for this site in mind:

* ~~**Recent posts on landing page**~~  *[Solved!]*  
*(This was quite personally challenging as combining page Markdown content along with the code to generate a post index was not very intuitive to me, but it was nothing a whole lot of trial and error couldn't solve!)*
* ~~**Replace "read time" with post date (and favicon)**~~ *[Solved!]*  
*(A small improvement over the default theme design; I wondered why post dates were not prominently displayed on a default blog index layout, but no matter! I pored over another one of Michael Rose's themes, [Basically Basic](https://mademistakes.com/work/basically-basic-jekyll-theme/) to figure this one out)*
* **Rotating hero image**  
*(Show off more of my photography, and get out of the business of hardcoding in new hero images into specific posts and pages)*
* **Get post and tags and categories working**  
*(Right now the tags and categories return 404s because the page generation is not set up for those yet... should be straightforward to do)*
* **Email contact form**  
*(Because Jekyll is a static site generator, email forms are not natively supported, so I'll need to figure out a web service-based solution)*
* **Customize layout**  
*(If I have time, I'd want to experiment a little with tweaking some of the margins, padding, make the mast head a little smaller, and experiment with different fonts. Also, Michael Rose recently added [color skinning](https://twitter.com/mmistakes/status/907691710058287104) to Minimal Mistakes... might be fun to try out)*
* **Comments? Disqus?**  
*(TBA)*