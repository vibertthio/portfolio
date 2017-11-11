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
      <br/>
      <br/>
      <a
         href="https://www.aec.at/ai/en/etude/"
         rel="noopener noreferrer"
         target="_blank"
      >
        > Ars Electronica Festival 2017
      </a>
      <br/>
      <a
         href="http://www.clickfestival.dk/etude"
         rel="noopener noreferrer"
         target="_blank"
      >
        > Click Festival 2017
      </a>
      <br/>
      <a
         href="https://www.youtube.com/watch?v=lHnUpyWlh6k&t=1329s"
         rel="noopener noreferrer"
         target="_blank"
      >
        > Showcase in Click Festival 2017
      </a>
      <br/>
      <a
         href="https://www.youtube.com/watch?v=zU01cFDjL6s"
         rel="noopener noreferrer"
         target="_blank"
      >
        > showcase in Taipei 2016
      </a>
      <br/>
      <a
         href="https://github.com/vibertthio/etude"
         rel="noopener noreferrer"
         target="_blank"
      >
        > source code
      </a>

    `,
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
      <br/>
      <br/>
      <a
         href="https://vimeo.com/226318485"
         rel="noopener noreferrer"
         target="_blank"
      >
        > showcase video</a>
      <br/>
      <a
         href="https://beact.herokuapp.com/"
         rel="noopener noreferrer"
         target="_blank"
      >
        > demo</a>
      <br/>
      <a
         href="https://github.com/vibertthio/beact"
         rel="noopener noreferrer"
         target="_blank"
      >
        > source code</a>
      <br/>
      <a
         href="https://medium.com/@vibertthio/beact-audio-visual-art-in-react-44e9c757e40f"
         rel="noopener noreferrer"
         target="_blank"
      >
        > blog
      </a>
    `,
    img: beactImg,
  },
  {
    title: 'Tranception',
    content: `
      A sequencer in webVR.
      This is a part of experiment of Vibert's av_exp project.
      He spent a lot of time studying the new API of webVR,
      and dig into the raw Web Audio API to make the reliable timer.
      <br/>
      <br/>
      <a
         href="https://vibertthio.github.io/av_exp/webvr/load_sample/"
         rel="noopener noreferrer"
         target="_blank"
      >
        > demo</a>
      <br/>
      <a
         href="https://github.com/vibertthio/av_exp/tree/master/webvr/load_sample"
         rel="noopener noreferrer"
         target="_blank"
      >
        > source code</a>
      <br/>
    `,
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
      <br/>
      <br/>
      <a
         href="https://vimeo.com/184943616"
         rel="noopener noreferrer"
         target="_blank"
      >
        > showcase video</a>
      <br/>
      <a
         href="https://github.com/vibertthio/VTBB"
         rel="noopener noreferrer"
         target="_blank"
      >
        > source code</a>
      <br/>
    `,
    img: vtbbImg,
  },
  {
    title: 'AV_EXP',
    content: `
      A serie of audio/visual art work.
      Thio is trying to use only Processing, Pure Data, and several software
      tool to explore the possibility of programming.
      <br/>
      <br/>
      <a
         href="https://vibertthio.github.io/av_exp/"
         rel="noopener noreferrer"
         target="_blank"
      >
        > demo</a>
      <br/>
      <a
         href="https://github.com/vibertthio/av_exp/tree/master/beatSelector"
         rel="noopener noreferrer"
         target="_blank"
      >
        > source code</a>
      <br/>
    `,
    img: expImg,
  },
  {
    title: 'beatmap',
    content: `
      An generative musical instrument. It uses the algorithm of maps
      to creative organic melodies and beats.
      <br/>
      <br/>
      <a
         href="https://vimeo.com/204991989"
         rel="noopener noreferrer"
         target="_blank"
      >
        > demo video</a>
      <br/>
      <a
         href="https://github.com/vibertthio/av_exp/tree/master/beatmap_midi"
         rel="noopener noreferrer"
         target="_blank"
      >
        > source code</a>
      <br/>
    `,
    img: beatmapImg,
  },
];

export default projects;
