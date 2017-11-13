import React, { Component } from 'react';
import Link from 'gatsby-link';
import Scroll from 'react-scroll';
import { Motion, spring } from 'react-motion';

import styles from './index.module.css';
import Collapse from './collapse';
import NavList from './nav-list';
import signBlack from '../../assets/images/sign-black.png';
import logo from '../../assets/images/logo.png';

const { Events, scrollSpy } = Scroll;

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
			scrolledDown: false,
		};
	}

	componentDidMount() {
		Events.scrollEvent.register('begin', (to, ...args) => {
			console.log('begin', args);
		});

		Events.scrollEvent.register('end', (to, ...args) => {
			console.log('end', args);
		});

		scrollSpy.update();

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
	}

	componentWillUnmount() {
		Events.scrollEvent.remove('begin');
		Events.scrollEvent.remove('end');
	}

	render() {
		return (
  <div className={`${styles.layout} ${this.state.scrolledDown ? '' : styles.scrolled}`}>
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
