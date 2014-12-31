---
layout: post
title: Writing Clean, Modular Sass
date: 2014-12-03
author: Kurt Cunningham
categories: Development
description: As a practitioner of Sass, one thing I have struggled with over the years is writing clean, component-driven stylesheets or stylesheets that seperate reusable chunks of code from page specific code.
published: true
---

<img src="http://cl.ly/Yqel/sass-post.jpg" class="post-img">

I have been meanging to write about my trip to New York for a while now and just haven't gotten around to it. So here goes. 

A few months ago I had the opportunity of attending Sass Conf in New York City. As a practitioner of Sass, one thing I have struggled with over the years is writing clean, component-driven stylesheets or stylesheets that seperate reusable chunks of code from page specific code. 

A simple example of this would be a stylesheet dedicated to buttons. As designers and developers we use buttons every where in our interfaces. Moreover, these buttons share similar traits: height, width, border radius, text color, text size, etc. Instead of creating five or six different buttons and changing one property, you would create a global button and then a color specific style and apply each class to the element. This gives you the base button properties and specific color. Moreover, you have a stylesheet dedicated to buttons and buttons only.

A pretty weak example, I know. Who creates five buttons with all the same properties except the color? This guy once did. (Those were dark days.)

<blockquote class="lead-quote">&ldquo;We often build multiple websites and applications that share the same styles across multiple code bases (style guides/pattern libraries). Maintaining these styles becomes quite a task, and causes increasing frustration overtime. Fortunately it doesn’t have to be this way.&rdquo;
	<cite>— Shay Howe</cite>
</blockquote>

Other than seperating out my variables, basic mixins and extends I didn't know how to organize my stylesheets in a way that would leverage the idea of component-based Sass.

Then Shay Howe - Director of Product at Belly Card - took center stage. 

Shay walked the group through Belly's process of development. I'll spare you the line-by-line rehash and let you explore his presentation at your leisure. Check it out [here](https://speakerdeck.com/shayhowe/style-as-a-service-maintaining-style-across-multiple-websites). It's fascinating stuff.

There are a few points that I have put into pratice that I wanted to highlight. Note: As Shay states, this isn't for everyone and by no means is this the only way to write clean, modular Sass. I would love to hear how you do it, if it is different.

<br>

<img src="http://cl.ly/YrOD/sass-settings.jpg" class="post-img">

#####Keep your files for variables, extends and mixins short and sweet

Instead of creating one file to contain every single variable you plan on using through out your website or application, create several small files for specific variable groups. 

For instance on this site, I created four variable files:

Each is a small, tidy file that contains the variables and associated lists needed to create a few simple loop.

<br>

<img src="http://cl.ly/Yqsa/sass-loop.jpg" class="post-img">

#####Take Advantage Of @Extend

Once your variables are in place and you have mapped your variables to a list (or map depending on what version of Sass you are using) develop a few basic loops. 

These loops will allow you to @extend your styles. Meaning instead of having the browser print the color <span class="blue-link">#00ADEF</span> over 100 individual times, all elements using this color will be concatenated together. Then the color will be applied once to all elements. To call on an extend your code would look something like this: 

<code> @extend %color-blue-base </code>

The % sign is a shadow class that you can only be refrenced in your Sass files. Additionally, blue-base is the name I gave my $blue-base variable in my color list.

<br>

#####Create Sass Partials For Reusable Components

The most helpful tip I took away: Create a style guide based on the elements the design calls for, not a style guide based on the elements you might use. 

This means each time you create a component, a modal, accordion, tabs, etc., create a new Sass file for this style. Overtime you will create your own framework that is as simple and intutive as Foundation or Bootstrap. 

Additionally, because these files do not rely on page specific tags you can use them through out your project without needing to add extra, non-semantic selectors.

I could go on for days about Shay's talk and what I learned at this conference. But this post is getting longer than I ever intended it to. 

If you want to chat more about this post or how to go about refactoring your current projects to be component based reach out to me, <a href="mailto:kurt@launchpadlab.com" class="blue-link">kurt@launchpadlab.com</a>.