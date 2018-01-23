import Typography from 'typography';
import CodePlugin from 'typography-plugin-code';
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants';
import fairyGateTheme from 'typography-theme-fairy-gates';

fairyGateTheme.googleFonts = [
	{
		name: 'Oswald',
		styles: ['300', '400', '700'],
	},
	{
		name: 'Open Sans',
		styles: ['300', '300i', 'regular', 'italic', '600', '600i', '700'],
	},
];
fairyGateTheme.scaleRatio = 4;
fairyGateTheme.headerFontFamily = ['Oswald', 'Open Sans', 'sans-serif'];
fairyGateTheme.headerWeight = 300;
fairyGateTheme.bodyFontFamily = ['Open Sans', 'sans-serif'];
fairyGateTheme.bodyWeight = 300;

fairyGateTheme.plugins = [new CodePlugin()];

fairyGateTheme.overrideThemeStyles = ({ rhythm }) => ({
	h1: {
		letterSpacing: rhythm(0.5),
		// fontSize: rhythm(3.0),
		fontSize: rhythm(2.5),
	},
	h2: {
		letterSpacing: rhythm(0.2),
		fontSize: rhythm(1.5),
		marginBottom: rhythm(1 / 2),
		marginTop: rhythm(2),
	},
	h3: {
		letterSpacing: rhythm(0.2),
		fontSize: rhythm(1.2),
		marginBottom: rhythm(1 / 2),
		marginTop: rhythm(2),
	},
	h5: {
		// fontFamily: 'Oswald',

		fontFamily: 'Open Sans',
		fontStyle: 'italic',
		fontSize: rhythm(0.8),
		letterSpacing: rhythm(0.05),
		lineHeight: rhythm(1.4),
		marginBottom: rhythm(1 / 2),
		marginTop: rhythm(1 / 2),
	},
	p: {
		letterSpacing: rhythm(0.05),
		lineHeight: rhythm(1),
		fontSize: rhythm(0.6),
		marginBottom: rhythm(0.5),
	},
	li: {
		letterSpacing: rhythm(0.05),
		lineHeight: rhythm(1),
		fontSize: rhythm(0.6),
		marginBottom: rhythm(0.5),
	},
	a: {
		color: '#000',
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
	em: {
		// fontFamily: 'Open Sans',
		opacity: 0.5,
		fontSize: rhythm(0.5),
	},
	[MOBILE_MEDIA_QUERY]: {
		blockquote: {
			borderLeft: `${rhythm(5 / 16)} solid #AAA`,
			// color: gray(41),
			// paddingLeft: rhythm(9 / 16),
			// fontStyle: 'italic',
			// marginLeft: rhythm(-3 / 4),
			marginLeft: rhythm(0),
			// marginRight: 0,
		},
		h2: {
			fontSize: rhythm(1.3),
		},
		h3: {
			fontSize: rhythm(1.0),
		},
	},
});

const typography = new Typography(fairyGateTheme);

module.exports = typography;
