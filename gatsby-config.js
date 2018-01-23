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
		`gatsby-plugin-sharp`,
		'gatsby-plugin-catch-links',
	],
};
