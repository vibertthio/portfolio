import React from 'react';
import FadeIn from '../utils/fade-in';

import styles from './index.module.css';
import fbIcon from '../assets/images/fb-icon.svg';
import ghIcon from '../assets/images/gh-icon.svg';
import mdIcon from '../assets/images/medium-icon.svg';
import mailIcon from '../assets/images/mail-icon.svg';
import './index.css';

export default () => (
  <div className={styles.container}>
    <div className={styles.aboutContainer}>
      <FadeIn
        x={{
					start: 70,
					end: 0,
					stiffness: 50,
					damping: 20,
				}}
      >
        <h1 className={styles.title}>About</h1>
      </FadeIn>
      <FadeIn>
        <div className={styles.contentContainer}>
          <p>
						Thio defines himself as a poetic technologist, playing around the disciplines of music, art, and technology. He develops a wide variety of projects, including interactive machine learning, audio/visual web pages, diverse musical instruments, and art rehabilitation.
          </p>
          <p>
						Currently, he is doing research about "Machine Learning For Music Generation" in MAC Lab, Academia Sinica. Prior to that, he studied Electrical Engineering at National Taiwan University. His works have been showcased at Click Festival 2018 and Ars Electronica 2018.
          </p>
        </div>
      </FadeIn>
    </div>
    <FadeIn
      x={{
				start: -30,
				end: 0,
				stiffness: 50,
				damping: 8,
			}}
    >
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
          <li>
            <a href="mailto:vibertthio@gmail.com">
              <img src={mailIcon} className={styles.snIcon} alt="email-icon" />
            </a>
          </li>
        </ul>
      </div>
    </FadeIn>
  </div>
);
