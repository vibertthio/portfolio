import React, { Component } from 'react';
import Link from 'gatsby-link';
import Loadable from 'react-loading-overlay';
import 'prismjs/themes/prism-solarizedlight.css';
// import 'prismjs/themes/prism-tomorrow.css';
// import 'prismjs/themes/prism.css';
import FadeIn from '../utils/fade-in';

import './index.css';
import styles from './index.module.css';
import Collapse from './collapse';
import NavList from './nav-list';
import signBlack from '../assets/images/sign-black.png';
import logo from '../assets/images/logo.png';

const NabBar = props => (
  <header
    className={`${props.sticky > 0 ? styles.fixedHeader : ''}`}
    style={{ marginBottom: '1.5rem' }}
  >
    <div className={`${props.sticky > 0 ? styles.fixedNavBar : ''} ${styles.navContainer}`}>
      <Link
        className={styles.logoLink}
        to="/"
        style={{ textShadow: 'none', backgroundImage: 'none' }}
      >
        <FadeIn
          opacity={{
						start: 0,
						end: 1,
						stiffness: 120,
						damping: 5,
					}}
          x={{
						start: 30,
						end: 0,
						stiffness: 100,
						damping: 20,
					}}
        >
          <div style={{ display: 'inline' }}>
            <img className={styles.flashLogo} src={logo} alt="logo" />
            <div className={styles.navLogo}>
              <h3>{props.site.siteMetadata.title}</h3>
            </div>
            <div className={styles.signBlackContainer}>
              <img className={styles.signBlack} src={signBlack} alt="sign-black" />
            </div>
          </div>
        </FadeIn>
      </Link>
      <NavList path={props.path} />
      <Collapse path={props.path} />
    </div>
  </header>
);

class Layout extends Component {
	constructor() {
		super();
		this.state = {
			loading: true,
			scrolledDown: false,
		};
	}
	componentDidMount() {
		window.addEventListener('scroll', () => this.scrollHandle());
		window.setTimeout(() => this.hideLoadingOverlay(), 1000);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', () => this.scrollHandle());
	}
	hideLoadingOverlay() {
		this.setState({
			loading: false,
		});
	}
	scrollHandle() {
		let scrolledDown;
		const y = window.scrollY;
		if (y > 60) {
			scrolledDown = true;
		} else {
			scrolledDown = false;
		}

		this.setState({
			scrolledDown,
		});
	}
	render() {
		// console.log(`current path: ${this.props.location.pathname}`);
		return (
  <Loadable
    background="rgba(200, 200, 200, 1)"
    style={{ height: '100%' }}
    active={this.state.loading}
    spinner
  >
    {!this.state.loading && (
    <div
      className={`
          ${styles.layout}
          ${this.state.loading ? styles.hidden : ''}
          ${this.state.scrolledDown ? '' : styles.scrolled}`}
    >
      <NabBar
        site={this.props.data.site}
        path={this.props.location.pathname}
        sticky={false}
      />
      {this.state.scrolledDown && (
      <NabBar site={this.props.data.site} path={this.props.location.pathname} sticky />
						)}
      <div
        className={`${styles.stickyBackground} ${this.state.scrolledDown && styles.appear}`}
      />
      <div className={styles.body}>{this.props.children()}</div>
      <footer>
        <div className={styles.footerContainer}>
          <h6 className={styles.footerContent}>2017 @ Vibert Thio</h6>
        </div>
      </footer>
    </div>
				)}
  </Loadable>
		);
	}
}

export default Layout;

export const query = graphql`
	query LayoutQuery {
		site {
			siteMetadata {
				title
				author
			}
		}
	}
`;
