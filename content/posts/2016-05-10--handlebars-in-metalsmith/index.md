---
title: Handlebars Helpers for Metalsmith
subTitle: Adding a helper to switch html components
category: "code"
cover: poster.jpg
---

Handlebars is great stuff and has been invaluable in creating this blog.  It's not without it's hurdles however and one I hit early on was incorporating relatively simple flow logic into it, initially with the homepage and creating a "feature" card at the top for the most recent post.

Assuming a very simple metalsmith build file like index.js below, using markdown and handlebars:

```javascript
var Metalsmith 	= require('metalsmith'),
	markdown 	= require('metalsmith-markdown'),
	templates 	= require('metalsmith-templates'),
	Handlebars = require('handlebars');

Metalsmith(__dirname)
	.use(markdown())
	.use(templates('handlebars'))
	.build(function(err) { if (err) console.log(err) });
```

And that we have a home page snippet something along the following lines, which loops through a collection `all_pages` printing out a partial handlebars template for each page in our blog:

```html
<div id="posts" class="container">
    {{#each all_pages}}
        {{> components/card__small}}
    {{/each}}
</div>
```

We want to make sure that the first, most recent, post has a different partial applied.  It's at this stage that we realise that handlebars own flow control {{#if}} only accepts a boolean parameter.  If our `all_pages` collection has such an attribute, e.g. `this.isFirstPost = true` then no problem.  Otherwise we have to roll our own, and that's where handlebars helpers come in.

```javascript
Handlebars.registerHelper('ifFirst', function (index, options) {
	if(index == 0){
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
});
```

The code above in our index.js will register an ifFirst helper that can be used in our handlebars template to identify the first post, having an index of zero rather than 1, and implemented as below with an if-else.


```html
<div id="posts" class="container">
    {{#each all_pages}}
        {{#ifFirst}}
            {{> components/card__full}}
        {{else}}
            {{> components/card__small}}
        {{/ifFirst}}
    {{/each}}
</div>
```

Perfect.  However, it's not long after implementing that, you realise that your use cases stretch a little bit further an you need it to be a bit more flexible.  Ideally we'd like to be able to pass any index in and have it validate whether it's second, third, last, or some other condition.  Also we don't want multiple helpers called ifFirst, ifSecond, ifLast or ifCollectionIsBlogPost etc.

```javascript
Handlebars.registerHelper('iftt', function (item, comparison, options) {
	if (item == comparison) {
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
});
```

The above iftt (if-this-then) takes two parameters into the helper and can be implemented as below:

```html
<div id="posts" class="container">
    {{#each all_pages}}
        {{#iftt @index 0}}
            {{> components/card__full}}
        {{else}}
            {{> components/card__small}}
        {{/iftt}}
    {{/each}}
</div>
```

The last change I might want to make is to allow it to take more than one comparison, maybe to act on posts n, n + 3, n + 7 in complex layouts, or also to exclude items meeing some number of conditions.

Assuming we have 20 categories, from fly fishing to women's fashions, in our all_pages collection and we want to treat 3 of them one way and the rest another.  In this spurious example it would be easier just to reverse the if-else but there might be cases where it would be necessary:

```javascript
Handlebars.registerHelper('iftt', function (item, comparisons, reverse, options) {
	var match = false;

	if (typeof comparisons !== 'array') {
		comparisons = [ comparisons ];
	}

	comparisons.forEach(function(c) {
		if (item == c) {
			match = true;
		}
	});


	if (match !== reverse) { // if matched and not reversed true !== false
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
});
```

And would be used like:

```html
<div id="posts" class="container">
    {{#each all_pages}}
        {{#iftt this.collection ['flyfishing', 'coarsefishing', 'deepseafishing'] true }}
            {{>card__most}}
        {{else}}
            {{>card__fishing}}
        {{/iftt}}
    {{/each}}
</div>
```
