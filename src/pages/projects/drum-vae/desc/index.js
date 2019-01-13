import img from '../sc-02.png';

export default {
	title: 'DrumVAE',
	content: `
It’s an interactive web demo based on an VAE model of drum patterns.
It visualize the relation of latent vectors and drum patterns in the VAE.
The player can modify any dimension in the latent vector to see how it affect the drum pattern,
through the decoder. Also, the latent vector will change responsively when the drum notes are added/removed.
  `,
	links: [
		{
			name: 'play it here',
			url: 'http://vibertthio.com/drum-vae-client/public/',
		},
		{
			name: 'Source Code',
			url: 'https://github.com/vibertthio/drum-vae-client',
		},
	],
	img,
};
