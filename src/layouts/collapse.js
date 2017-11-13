import React, { Component } from 'react';
import Link from 'gatsby-link';
import FadeIn from '../utils/fade-in';

import styles from './index.module.css';
import menuIcon from '../../assets/images/menu-icon.png';
import closeIcon from '../../assets/images/cross-icon.png';
import signWhite from '../../assets/images/sign-white.png';

const ListLink = props => (
  <Link
    className={`${styles.link} ${
			props.to === props.path ? styles.active : styles.inactive
		}`}
    onClick={() => this.closeMenu()}
    to={props.to}
  >
    <p>{props.children}</p>
  </Link>
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
      <button
        href=""
        className={`${styles.closeBtn} ${styles.btn}`}
        onClick={() => this.onClick()}
      >
        <img className={styles.closeIcon} src={closeIcon} alt="close-icon" />
      </button>
      <img className={styles.signWhite} src={signWhite} alt="sign-black" />
      <div className={styles.overlayContent}>
        <ListLink to="/" path={this.props.path}>
							Home
        </ListLink>
        <ListLink to="/projects/" path={this.props.path}>
							Projects
        </ListLink>
        <ListLink to="/blogs/" path={this.props.path}>
							Blogs
        </ListLink>
      </div>
    </div>
    <button className={`${styles.btn} ${styles.menuBtn}`} onClick={() => this.onClick()}>
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
        <img className={styles.menuIcon} src={menuIcon} alt="menu-icon" />
      </FadeIn>
    </button>
  </div>
		);
	}
}

export default Collapse;
