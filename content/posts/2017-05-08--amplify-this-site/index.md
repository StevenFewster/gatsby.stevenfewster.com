---
title: AMPing Up a Metalsmith Site (this one)
subTitle: An attempt to get metalsmith to generate AMP
category: "code"
cover: poster.jpg
---

## Opinion

I'm very conflicted about AMP (Accelerated Mobile Pages).  On the one hand there are benefits offered by Google (the primary drivers behind it) in terms of improved speed and ranking, and on the other, it's major premise is that web sites are slow due to poor and inefficient javascript.

As a web dev that hurts.  We all know that the thing that slows up web sites are images (getting bigger every day) and tracking beacons that, yes, don't stop a page loading but do take a painfully long time to resolve.

So it's something of a slap in the face that it's the "ad slingers" - Google, FB, DoubleClick et al that are pushing a solution to a problem that they're more than partly to blame for. It leads you to question their ultimate reasoning behind it, no?

## Case Study

This site was written using Metalsmith quite some time ago and hasn't been updated much since. As such my approaching to AMPing it up might be slightly different to what other might tackle as an incremental upgrade - where I feel there are other/better ways to do that, I will attempt to highlight them.

### Tear it up and start again

My first pass at this site used an external mobile-friendly template.  Things have moved on considerably since then - and as the site was never really complete I have few qualms about killing it.

Just taking out the existing external javascript and replacing it with the AMP import would be a fine way to start - you might fail to notice stuff that was working suddenly not working though.

> If I was going to maintain two versions of the site, one for desktop one for mobile, with 
 AMP in a /AMP subfolder, I would try running them all together and letting AMPs useful error messages tell me what the problems were.

 * Remove external JS references
 * Include link to AMP
 * Replace CSS with link to Zurb Foundation 6
 * Scaffold out lower level pages
 * Scaffold out Home and Landing pages
 * Add colour

 For now I'm just going to link to a CDN version [http://foundation.zurb.com/sites/docs/installation.html] of Foundation for Sites CSS.  This is just to get up and running, later I will probably get the whole bit.

 
 Add some basic AMP markup https://www.ampproject.org/docs/tutorials/create/basic_markup