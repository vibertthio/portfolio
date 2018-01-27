import React, { Component } from 'react';
import Link, { withPrefix } from 'gatsby-link';
import ClickOutside from 'react-click-outside';
import FadeIn from '../utils/fade-in';

import styles from './collapse.module.css';
import layoutStyles from './index.module.css';
import menuIcon from '../assets/images/menu-icon.png';
import signWhite from '../assets/images/sign-white.png';
import fbIcon from '../assets/images/fb-icon-white.svg';
import ghIcon from '../assets/images/gh-icon-white.svg';
import mdIcon from '../assets/images/medium-icon-white.svg';
import mailIcon from '../assets/images/mail-icon-white.svg';
// import closeIcon from '../../assets/images/cross-icon.png';

const ListLink = props => (
  <Link
    className={`${styles.link} ${
			withPrefix(props.to) === props.path ? styles.active : styles.inactive
		}`}
    onClick={() => props.onClick()}
    to={props.to}
  >
    <p>{props.children}</p>
  </Link>
);

const ListLinkOut = props => (
  <a
    className={`${styles.link} ${
			withPrefix(props.to) === props.path ? styles.active : styles.inactive
		}`}
    onClick={() => props.onClick()}
    href={props.to}
    rel="noopener noreferrer"
    target="_blank"
  >
    <p>{props.children}</p>
  </a>
);

class Collapse extends Component {
	constructor() {
		super();
		this.state = {
			open: false,
		};
	}

	onClick() {
		const { open } = this.state;
		if (open) {
			this.closeMenu();
		} else {
			this.openMenu();
		}
	}

	openMenu() {
		document.getElementById('menu').style.height = '100%';
		this.setState({
			open: true,
		});
	}

	closeMenu() {
		document.getElementById('menu').style.height = '0%';
		this.setState({
			open: false,
		});
	}

	render() {
		return (
  <div style={{ float: 'right' }}>
    <div id="menu" className={styles.overlay}>
      <div className={styles.menuContainer}>
        <ClickOutside className={styles.clickDetection} onClickOutside={() => this.closeMenu()}>
          <div className={styles.overlayContent}>
            <ListLink to="/" path={this.props.path} onClick={() => this.closeMenu()}>
									Home
            </ListLink>
            <ListLink to="/projects/" path={this.props.path} onClick={() => this.closeMenu()}>
									Projects
            </ListLink>
            <ListLink to="/words/" path={this.props.path} onClick={() => this.closeMenu()}>
									Words
            </ListLink>
            <ListLink
              to="/words/2017-10-24-bio/"
              path={this.props.path}
              onClick={() => this.closeMenu()}
            >
									Bio
            </ListLink>
            <ListLinkOut
              to="https://drive.google.com/file/d/0ByNwzf7aYOQ3ZnZIbWdCYm9GbjA/view?usp=sharing"
              path={this.props.path}
              onClick={() => this.closeMenu()}
            >
									C.V.
            </ListLinkOut>
            {/* }{this.state.open && (
							<button
							href=""
							className={`${styles.closeBtn} ${styles.btn}`}
							onClick={() => this.closeMenu()}
							>
							<img className={styles.closeIcon} src={closeIcon} alt="close-icon" />
							</button>
							)} */}
          </div>
        </ClickOutside>
        <div className={styles.foot}>
          <img className={styles.signWhite} src={signWhite} alt="sign-black" />
          <div className={styles.snContainer}>
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
                <a href="mailto:vibertthio@gmail.com">
                  <img src={mailIcon} className={styles.snIcon} alt="mail-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <button className={`${styles.btn} ${layoutStyles.menuBtn}`} onClick={() => this.onClick()}>
      <FadeIn
        right
        opacity={{
							start: 0,
							end: 1,
							stiffness: 100,
							damping: 5,
						}}
        x={{
							start: 30,
							end: 0,
							stiffness: 100,
							damping: 15,
						}}
      >
        <img className={layoutStyles.menuIcon} src={menuIcon} alt="menu-icon" />
      </FadeIn>
    </button>
  </div>
		);
	}
}

export default Collapse;
