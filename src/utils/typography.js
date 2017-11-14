import Typography from 'typography';
import CodePlugin from 'typography-plugin-code';
import fairyGateTheme from 'typography-theme-fairy-gates';

fairyGateTheme.googleFonts = [
	{
		name: 'Oswald',
		styles: ['300', '400', '700'],
	},
];
fairyGateTheme.scaleRatio = 4;
fairyGateTheme.headerFontFamily = ['Oswald', 'Open Sans', 'sans-serif'];
fairyGateTheme.headerWeight = 300;
fairyGateTheme.bodyFontFamily = ['Open Sans', 'sans-serif'];
fairyGateTheme.bodyWeight = 300;

fairyGateTheme.plugins = [
  new CodePlugin(),
];

fairyGateTheme.overrideThemeStyles = ({ rhythm }) => ({
		h1: {
			letterSpacing: rhythm(0.5),
			fontSize: rhythm(3.0),
		},
		h2: {
			letterSpacing: rhythm(0.2),
			fontSize: rhythm(1.0),
			marginBottom: rhythm(1 / 2),
			marginTop: rhythm(2),
		},
		h3: {
			letterSpacing: rhythm(0.2),
			fontSize: rhythm(1.4),
			marginBottom: rhythm(1 / 2),
			marginTop: rhythm(2),
		},
		p: {
			letterSpacing: rhythm(0.05),
			lineHeight: rhythm(1),
			fontSize: rhythm(0.6),
			marginBottom: rhythm(0.5),
		},
		a: {
			fontFamily: 'Oswald',
			textDecoration: 'none',
			textShadow: 'none',
			backgroundImage: 'none',
			fontSize: rhythm(0.5),
			lineHeight: rhythm(0.4),
		},
		blockquote: {
			borderLeft: `${rhythm(6 / 16)} solid #AAA`,
			marginLeft: 0,
			marginRight: 0,
		},
	});

const typography = new Typography(fairyGateTheme);

module.exports = typography;
