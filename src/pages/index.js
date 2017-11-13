import React from 'react';
import { Motion, spring } from 'react-motion';

import styles from './index.module.css';
import fbIcon from '../../assets/images/fb-icon.svg';
import ghIcon from '../../assets/images/gh-icon.svg';
import mdIcon from '../../assets/images/medium-icon.svg';
import './index.css';

const FadeIn = props => (
  <Motion
    defaultStyle={{ opacity: 0, x: 40 }}
    style={{
			opacity: spring(1, { stiffness: 120, damping: 17 }),
			x: spring(0, { stiffness: 50, damping: 5 }),
		}}
  >
    {(interpolatingStyle) => {
			console.log(interpolatingStyle);
			return (
  <div
    style={{ opacity: interpolatingStyle.opacity, marginLeft: `${interpolatingStyle.x}px` }}
  >
    {props.children}
  </div>
			);
		}}
  </Motion>
);

export default () => (
  <div>
    <FadeIn>
      <div>
        <h1 className={styles.title}>About</h1>
        <div className={styles.aboutContainer}>
          <p>
						Vibert Thio is digging into cutting-edge tech, and transforming it into the energy of
						creating his art pieces in several new forms.
          </p>
          <p>
						Thio is studying in National Taiwan University(NTU), majoring in Electrical Engineering.
          </p>
          <p>
						Mostly, he makes audio/visual art by using Processing(Java), C++ and Javascript. He is
						currently also working on research of VR and Bio-art study.
          </p>
        </div>
      </div>
      <div>
        <ul className={styles.snList}>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/vibert.thio"
            >
              <img src={fbIcon} className={styles.snIcon} alt="fb-icon" />
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/vibertthio">
              <img src={ghIcon} className={styles.snIcon} alt="gh-icon" />
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" target="_blank" href="https://medium.com/@vibertthio">
              <img src={mdIcon} className={styles.snIcon} alt="medium-icon" />
            </a>
          </li>
        </ul>
      </div>
    </FadeIn>
  </div>
);
