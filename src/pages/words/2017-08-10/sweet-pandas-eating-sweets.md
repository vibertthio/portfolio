---
title: "First Post"
date: "2017-08-10"
---

<br>

> javascript code block test

<br>

```jsx{1-2,22}
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
<br>

<iframe width="560" height="315" src="https://www.youtube.com/embed/4n0xNbfJLR8" frameborder="0" allowfullscreen></iframe>
