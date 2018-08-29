---
title: You won't let those robots defeat me
subTitle: An Apache RewriteRule to restrict crawling of dev sites
category: "code"
cover: poster.jpg
---

A lovely opportunity to quote [The Flaming Lips](http://youtu.be/AzlMeTxVdH8 "Yoshimi Battles the Pink Robots Pt I - The Flaming Lips") in my opening post (one reproduced from the last site just so I can use again)
As a "proper" software developer, I have multiple test environments (okay, so for my own stuff local, test and prod only two of which are accessible by the outside world) and at work where we have many it makes our SEO people very sad to see those being spidered, so this needs to be fixed. Enter .htaccess to the rescue!
A nice simple line in your robots.txt file will at least tell those pesky spiders that obey the rules to ignore the content but, with a push CMS where you have the same files in multiple environments, you need to do something a little simple and a little special.
We've created a robots.txt for the live site as is standard, and robots_not_live.txt for the others. The spiders won't obey, or even be aware of, the other file until we tell them to go looking for it so a simple rewrite rule as below will work for us:
```bash
RewriteCond %{HTTP_HOST} ^test.stevenfewster.com
RewriteRule ^robots.txt$ /robots_not_live.txt [NC]
```
So the file on live will appear as:

```bash
User-agent: *
Allow: /</blockquote>
And on test (or wherever you specify) as:
<blockquote>User-agent: *
Disallow: /
```

You could equally, in whatever programming language you're using, slap in a couple of meta tags for no index/no follow based on the calling URL, but I like this.
