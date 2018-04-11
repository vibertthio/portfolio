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
						Vibert Thio is digging into cutting-edge tech, and transforming it into the energy
						of creating his art pieces in several new forms.
          </p>
          <p>
						Thio is studying in National Taiwan University(NTU), majoring in Electrical Engineering.
          </p>
          <p>
						Mostly, he makes audio/visual art by using Processing(Java),
            C++ and Javascript. He is currently working on research of
            machine learning in music
            and web audio visual experiemts.
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
