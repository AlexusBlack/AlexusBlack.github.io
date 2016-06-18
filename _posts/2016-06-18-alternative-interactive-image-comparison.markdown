---
published: true
title: Alternative interactive image comparison
layout: post
tags: [css-secrets, sass, experiments]
categories: [css-secrets]
---
<p>I'm reading <a href="http://shop.oreilly.com/product/0636920031123.do" title="Buy CSS Secrets book">CSS Secrets by Lea Verou</a> now, this is awesome book with a huge bunch of tips and tricks. But most important that it is not just giving you interesting solutions but helps you to start thinking different.</p>
<p>When I'm reading really interesting secret I have small mind game, I'm trying to find alternative way of doing the same thing, or imaging how I will try to solve this problem without knowing Lea's secret solution :-) . </p>
<p>Because I created this blog it is a good idea to post something here. So I want share my alternative way of solving Secret 35 "Interactive image comparison". My way has it's own advantages and disadvantages, though it works and can be called alternative, so mission accomplished.</p>
<h3>The problem</h3>
<p>Let me briefly explain what kind of problem secret 35 solving. What if we have two similar photos like before and after, we want user to easily see difference between them and compare small details on photos. Just putting them side by side not a solution, because user well need to move his sight from one photo to another many time, especially there are a lot of details. So good way to solve this problem is to overlay one photo with another and let user change the proportions of that overlay, like 20% new and 80% of old photo. Overlay part is easy, but convenient control isn't, and also we what solve problem without JavaScript and crazy markup.</p>
<h3>Solution</h3>
<p>Lea first showed example of news website where user has scroll bar below picture and can drag it to change overlay proportions. And then presented her solution based on resizable elements, what is really cool. You can find more details in her blog post - <a href="http://lea.verou.me/2014/07/image-comparison-slider-with-pure-css/">Image comparison slider with pure CSS</a></p>
<p>But I was not 100% happy with this solution, also had a chance to play a lot with a <strong>input[type=range]</strong> element several months before. I saw an opportunity to solve that problem with power of range element. The theory was that I can put "before" photo as range background-image, and "after" image as background of range thumb, and that use background-attachment fixed to fix position of thumb background.</p>

<p data-height="500" data-theme-id="dark" data-slug-hash="XKjdRL" data-default-tab="css,result" data-user="alexusblack" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/alexusblack/pen/XKjdRL/">one element image comparison</a> by Alexus (<a href="http://codepen.io/alexusblack">@alexusblack</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<h3>Browser support</h3>
<p>This solution works in Chrome, Firefox, Safary and IE10+, maybe somewhere else.</p>

<strong>Thanks for reading!</strong>