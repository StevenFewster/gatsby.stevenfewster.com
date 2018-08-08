title: AMP and Metalsmith Refresh
tags: []
categories:
  - Code
date: 2017-07-15 00:00:00
---
I have my reservations about Accelerated Mobile Pages (AMP), shared by many, but making precious little difference.  The theory, as I understand it, is that websites are terrible and are full of evil javascript that is ruining the end users experience, causing page bloat and adding insecurities.  In steps AMP from Google, and widely supported and endorsed by other major add slingers such as Facebook, which will provide a group of technologies for you to use which will optimise your site for mobile using Google's own AMP components, in return for which you _may_ get better rankings, pages will load quicker, making your end user happier, and be delivered through some Google caching wizadry.

My concerns are that the people that this really benefits are the big guys.  Be that those who can afford the development time and money to revamp their sites to AMP or the big ad slingers managing to freeze others out and get automatic buy-in from those using the AMP technologies.

I also question the reasons for this requirement.  Yes, pages can be slow to load.  In my experience this is frequently due to the nonsense placed on the page by those very people backing the AMP project.  Yes, they may not be optimised for mobile, but most templates are responsive these days. Page size, looking at any selection of recent stats, seems to be dictated more by images and still flash (for some reason) than javascript, though I accept javascript can be an issue, and that alot of those add-ins available from big CMS may be far from ideal for any number of reasons.

Still.  I shouldn't criticise until I have walked a mile in some shoes or something. As it is my existing site looks like this:

[image existing site]

So I need to do a number of things, which I will break down as follows:

* [Revamp existing site to a new template](/projects/site-update) including any javascript plug-ins that come with it.
* [Create a metalsmith AMP add in](/projects/metalsmith-amp) to help with converting my existing metalsmith site to AMP
* [Convert all my images with NodeJS](/projects/image-convert) so that they're static but responsive
* [Final push to AMP of existing site](/projects/ampified-site) and see how/if it affects the ranking or anything else.