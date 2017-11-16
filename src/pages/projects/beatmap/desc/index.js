import img from '../img-01.png';

export default {
	title: 'beatmap',
	content: `
“Beatmap” is a generative musical instrument, consisting of customized-size grid
which contain directional information in each block. It connects to the whichever
digital audio workstation (DAW) you are using through the software midi interface,
synchronized by the clock sent from it.
  `,
	links: [
		{
			name: 'Demo',
			url: 'https://vimeo.com/204991989',
		},
		{
			name: 'Source Code',
			url: 'https://github.com/vibertthio/av_exp/tree/master/beatmap_midi',
		},
	],
	img,
};
