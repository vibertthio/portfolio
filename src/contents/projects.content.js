import etudeImg from '../../assets/images/etude/etude-01.jpg';
import beactImg from '../../assets/images/beact/perf.jpg';
import transImg from '../../assets/images/transperception/sc-01.png';
import vtbbImg from '../../assets/images/vtbb/sc-01.png';
import expImg from '../../assets/images/avexp/sc-01.png';
import beatmapImg from '../../assets/images/beatmap/sc-01.png';

const projects = [
	{
		title: 'Étude',
		content: `
      We set as a goal to bring back the victims of
      one incident their colorful youth and future
      through the expression of music, art, and
      technology. The addition of the music and creativity content in their
      rehabilitation aimed to bring a more positive atmosphere
      to them.
    `,
		links: [
			{
				name: 'Ars Electronica Festival 2017',
				url: 'https://www.aec.at/ai/en/etude/',
			},
			{
				name: 'Click Festival 2017',
				url: 'http://www.clickfestival.dk/etude',
			},
			{
				name: 'Showcase in Click Festival 2017',
				url: 'https://www.youtube.com/watch?v=lHnUpyWlh6k&t=1329s',
			},
			{
				name: 'Showcase in Taipei 2016',
				url: 'https://www.youtube.com/watch?v=zU01cFDjL6s',
			},
			{
				name: 'Source Code',
				url: 'https://github.com/vibertthio/etude',
			},
		],
		img: etudeImg,
	},
	{
		title: 'Beact',
		content: `
      An audio/visual interactive art piece,
      and an instrument that everyone play with
      to become a DJ + VJ. It's based on the idea of patatap,
      and using two.js, tone.js as audio and visual library.
      It combines sequencer with on concept of patatap.
      I have added some my own animation and will
      do more to replace ones from patatap.
    `,
		links: [
			{
				name: 'Showcase Video',
				url: 'https://vimeo.com/226318485',
			},
			{
				name: 'Demo',
				url: 'https://beact.herokuapp.com/',
			},
			{
				name: 'Source Code',
				url: 'https://github.com/vibertthio/beact',
			},
			{
				name: 'Blog',
				url: 'https://medium.com/@vibertthio/beact-audio-visual-art-in-react-44e9c757e40f',
			},
		],
		img: beactImg,
	},
	{
		title: 'Tranception',
		content: `
      A sequencer in webVR.
      This is a part of experiment of Vibert's av_exp project.
      He spent a lot of time studying the new API of webVR,
      and dig into the raw Web Audio API to make the reliable timer.
    `,
		links: [
			{
				name: 'Demo',
				url: 'https://vibertthio.github.io/av_exp/webvr/load_sample/',
			},
			{
				name: 'Source Code',
				url: 'https://github.com/vibertthio/av_exp/tree/master/webvr/load_sample',
			},
		],
		img: transImg,
	},
	{
		title: 'VTBB',
		content: `
      An interative toy, an audio visual work.
      It's Written in Processing for visual, pure data for sound.
      In 2016 July, Vibert met Aluan Wang as a mentor. He gave Vibert the homework
      about finishing a simple conception demonstrated in VTBB.
      He spend a whole night to complete the basic logic with an awful color setting.
      Continued...
    `,
		links: [
			{
				name: 'Showcase Video',
				url: 'https://vimeo.com/184943616',
			},
			{
				name: 'Source Code',
				url: 'https://github.com/vibertthio/VTBB',
			},
		],
		img: vtbbImg,
	},
	{
		title: 'AV_EXP',
		content: `
      A serie of audio/visual art work.
      Thio is trying to use only Processing, Pure Data, and several software
      tool to explore the possibility of programming.
    `,
		links: [
			{
				name: 'Demo',
				url: 'https://vibertthio.github.io/av_exp/',
			},
			{
				name: 'Source Code',
				url: 'https://github.com/vibertthio/av_exp/tree/master/beatSelector',
			},
		],
		img: expImg,
	},
	{
		title: 'beatmap',
		content: `
      An generative musical instrument. It uses the algorithm of maps
      to creative organic melodies and beats.
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
		img: beatmapImg,
	},
];

export default projects;
