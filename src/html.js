import React from 'react';
import favicon from './favicon.ico';

let inlinedStyles = '';
if (process.env.NODE_ENV === 'production') {
	try {
		inlinedStyles = require('!raw-loader!../public/styles.css');
	} catch (e) {
		console.log(e);
	}
}

export default class HTML extends React.Component {
	render() {
		let css;
		if (process.env.NODE_ENV === 'production') {
			css = <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: inlinedStyles }} />;
		}
		return (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport"           content="width=device-width, initial-scale=1.0" />
      <meta name="description"        content="Coder | Artists | AI" />
      <meta property="og:type"        content="personal.website" />
      <meta property="og:url"         content="https://vibertthio.github.io/portfolio/" />
      <meta property="og:title"       content="Vibert Thio" />
      <meta property="og:description" content="Coder | Artists | AI" />
      <meta
        property="og:image"
        content="https://github.com/vibertthio/beact/blob/master/assets/images/b1.png"
      />

      {this.props.headComponents}
      <link rel="shortcut icon" href={favicon} />
      {css}
      <title>Vibert Thio</title>
    </head>
    <body>
      <div id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
      {this.props.postBodyComponents}
    </body>
  </html>
		);
	}
}
