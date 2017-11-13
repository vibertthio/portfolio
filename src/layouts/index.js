import React, { Component } from 'react';
import Link from 'gatsby-link';
import Loadable from 'react-loading-overlay';

import styles from './index.module.css';
import Collapse from './collapse';
import NavList from './nav-list';
import signBlack from '../../assets/images/sign-black.png';
import logo from '../../assets/images/logo.png';

const NabBar = props => (
  <header
    className={`${props.sticky > 0 ? styles.fixedHeader : ''}`}
    style={{ marginBottom: '1.5rem' }}
  >
    <div className={`${props.sticky > 0 ? styles.fixedNavBar : ''}`}>
      <Link
        className={styles.logoLink}
        to="/"
        style={{ textShadow: 'none', backgroundImage: 'none' }}
      >
        <img className={styles.flashLogo} src={logo} alt="logo" />
        <div className={styles.navLogo}>
          <h3>{props.site.siteMetadata.title}</h3>
        </div>
        <img className={styles.signBlack} src={signBlack} alt="sign-black" />
      </Link>
      <NavList />
      <Collapse />
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
		window.addEventListener('scroll', () => {
			console.log('scroll!');
			console.log(`scroll Y: ${window.scrollY}`);
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
		});

		window.setTimeout(() => this.hideLoadingOverlay(), 1000);
	}

	componentWillUnmount() {}
	hideLoadingOverlay() {
		console.log('hide overlay');
		this.setState({
			loading: false,
		});
	}

	render() {
		return (
  <Loadable style={{ height: '100%' }} active={this.state.loading} spinner>
    {!this.state.loading && (
    <div
      className={`
          ${styles.layout}
          ${this.state.loading ? styles.hidden : ''}
          ${this.state.scrolledDown ? '' : styles.scrolled}`}
    >
      <NabBar site={this.props.data.site} sticky={false} />
      {this.state.scrolledDown ? <NabBar site={this.props.data.site} sticky /> : ''}
      {this.state.scrolledDown ? <div className={styles.stickyBackground} /> : ''}
      <div className={styles.body}>{this.props.children()}</div>
      <footer>
        <div className={styles.footerContainer}>
          <h5 className={styles.footerContent}>2017 @ Vibert Thio</h5>
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
			}
		}
	}
`;
