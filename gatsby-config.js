module.exports = {
	pathPrefix: `/portfolio`,
	siteMetadata: {
		title: 'Vibert Thio',
		author: '@vibertthio',
		description: 'real',
		homepage: 'https://vibertthio.github.io/',
	},
	plugins: [
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src/`,
			},
		},

		{
			resolve: 'gatsby-plugin-typography',
			options: {
				pathToConfigModule: 'src/utils/typography',
			},
		},

		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
          `gatsby-remark-emoji`,
					'gatsby-remark-copy-linked-files',
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 590,
							linkImagesToOriginal: false,
							sizeByPixelDensity: true,
						},
					},
					'gatsby-remark-responsive-iframe',
					`gatsby-remark-prismjs`,
					`gatsby-remark-autolink-headers`,
					{
						resolve: `gatsby-remark-smartypants`,
						options: {
							dashes: 'oldschool',
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-102358307-1",
				// Puts tracking script in the head instead of the body
				head: false,
				// Setting this parameter is optional
				anonymize: true,
				// Setting this parameter is also optional
				respectDNT: true,
				// Avoids sending pageview hits from custom paths
				exclude: [],
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-plugin-catch-links',

	],
};
