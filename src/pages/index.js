import React from "react";
import FadeIn from "../utils/fade-in";

import styles from "./index.module.css";
import fbIcon from "../assets/images/fb-icon.svg";
import ghIcon from "../assets/images/gh-icon.svg";
import mdIcon from "../assets/images/medium-icon.svg";
import mailIcon from "../assets/images/mail-icon.svg";
import "./index.css";

export default () => (
  <div className={styles.container}>
    <div className={styles.aboutContainer}>
      <FadeIn
        x={{
          start: 70,
          end: 0,
          stiffness: 50,
          damping: 20
        }}
      >
        <h1 className={styles.title}>About</h1>
      </FadeIn>
      <FadeIn>
        <div className={styles.contentContainer}>
          <p>
            Thio specializes in Front-End, musical machine learning, animation
            programming, music technology, and interactive design. He is
            currently working for{" "}
            <a rel="noopener noreferrer" target="_blank" href="https://frm.fm/">
              FRAMED*
            </a>{" "}
            as a Front-End engineer. Also, he is a master student in NYU about
            technology, media, and design.
          </p>
          <p>
            He also helps companies build inspiring prototypes and elegant
            product. His clients are Taiwan AI Labs, TSMC, etc. His past
            experiences also include research assistant in Academia Sinica,
            commissioned artist by QAF, and analyst internship of Darwin Venture
            Management. He has published academic papers in IUI2019 about
            musical machine learning. He has been advocated the culture of art
            and technology in Taiwan by hosting exhibition, workshop, and
            performances since 2016.
          </p>
        </div>
      </FadeIn>
    </div>
    <FadeIn
      x={{
        start: -30,
        end: 0,
        stiffness: 50,
        damping: 8
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
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/vibertthio"
            >
              <img src={ghIcon} className={styles.snIcon} alt="gh-icon" />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://medium.com/@vibertthio"
            >
              <img src={mdIcon} className={styles.snIcon} alt="medium-icon" />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://eepurl.com/glIO19"
            >
              <img src={mailIcon} className={styles.snIcon} alt="email-icon" />
            </a>
          </li>
        </ul>
      </div>
    </FadeIn>
  </div>
);
