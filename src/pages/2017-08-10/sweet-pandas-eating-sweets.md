---
title: "First Post"
date: "2017-08-10"
---

Pandas are really sweet.

Here's a video of a panda eating sweets.  

> javascript code block test

```javascript
import React from 'react';
// import ReactHtmlParser from 'react-html-parser';

export default ({ data }) => {
	const post = data.markdownRemark;
	return (
  <div>
    <h1>{post.frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: post.html }} />
  </div>
	);
};
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/4n0xNbfJLR8" frameborder="0" allowfullscreen></iframe>
