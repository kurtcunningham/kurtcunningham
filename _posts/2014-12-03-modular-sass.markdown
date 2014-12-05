---
layout: post
title: Writing Clean, Modular SASS
date: 2014-12-03
author: Kurt Cunningham
categories: Development
description: As a practitioner of SASS, one thing I have struggled with over the years is writing clean, component-driven stylesheets or stylesheets that seperate reusable chunks of code from page specific code.
published: false
---

I have been meanging to write about my trip to New York for a while now and just haven't gotten around to it. So here goes. 

A few months ago I had the opportunity of attending SASS Conf in New York City. As a practitioner of SASS, one thing I have struggled with over the years is writing clean, component-driven stylesheets or stylesheets that seperate reusable chunks of code from page specific code. 

A simple example of this would be a stylesheet dedicated to buttons. As designers and developers we use buttons every where in our interfaces. Moreover, these buttons share similar traits: height, width, border radius, text color, text size, etc. In stead of creating five or six different buttons and changing one property, you would create a global button and then a color specific style and apply each class to the element. This gives you the base button properties and specific color. Moreover, you have a stylesheet dedicated to buttons and buttons only.

A pretty weak example, I know. Who creates five buttons with all the same properties except the color? This guy once did. (Those were sad days.)

<blockquote class="lead-quote">&ldquo;All of us who do creative work, we get into it because we have good taste. But there is this gap. For the first couple years you make stuff, it’s just not that good. It’s trying to be good, it has potential, but it’s not.&rdquo;
	<cite>— Ira Glass</cite>
</blockquote>

Other than seperating out my variables, basic mixins and extends I didn't know how to organize my stylesheets that would leverage the idea of component-based stylesheets.

Then Shay Howe - Director of Products at Belly Card - took center stage. 

Shay walked the group through Belly's process of development. I'll spare you the line-by-line rehash and let you explore his presentation at your leisure. Check it out [here](http://www.twitter.com/@designhawg). It's fascinating stuff.

There are a few points that I have put into pratice that I wanted to highlight.

<br>

#####Keep your variables, extends & mixins to the point