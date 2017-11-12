import React, { Component } from 'react';
import Link from 'gatsby-link';
import styles from './index.module.css';
import menuIcon from '../../assets/images/menu-icon.png';
import closeIcon from '../../assets/images/cross-icon.png';
import signWhite from '../../assets/images/sign-white.png';

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
      <button
        href=""
        className={`${styles.closeBtn} ${styles.btn}`}
        onClick={() => this.onClick()}
      >
        <img className={styles.closeIcon} src={closeIcon} alt="close-icon" />
      </button>
      <img className={styles.signWhite} src={signWhite} alt="sign-black" />
      <div className={styles.overlayContent}>
        <Link className={styles.link} onClick={() => this.closeMenu()} to="/">
          <p>Home</p>
        </Link>
        <Link className={styles.link} onClick={() => this.closeMenu()} to="/projects/">
          <p>Projects</p>
        </Link>
        <Link className={styles.link} onClick={() => this.closeMenu()} to="/blogs/">
          <p>Blogs</p>
        </Link>
      </div>
    </div>
    <button className={`${styles.btn} ${styles.menuBtn}`} onClick={() => this.onClick()}>
      <img className={styles.menuIcon} src={menuIcon} alt="menu-icon" />
    </button>
  </div>
		);
	}
}

export default Collapse;
