import React, { Component } from 'react';
import Link from 'gatsby-link';
import styles from './index.module.css';
import Collapse from './collapse';
import NavList from './nav-list';
import signBlack from '../../assets/images/sign-black.png';
import logo from '../../assets/images/logo.png';

class Layout extends Component {
	constructor() {
		super();
		this.state = {
			scrolledDown: false,
		};
	}

	componentDidMount() {
		// window.addEventListener('scroll', () => {
		//   console.log('scroll down!');
		// 	this.setState({
		// 		scrolledDown: true,
		// 	});
		// });
	}

	render() {
		return (
  <div
    className={`${styles.layout} ${this.state.scrolledDown ? '' : styles.scrolled}`}
    style={{ margin: '0 auto', maxWidth: 1100, padding: '1.25rem 1.0rem' }}
  >
    <header style={{ marginBottom: '1.5rem' }}>
      <Link
        className={styles.logoLink}
        to="/"
        style={{ textShadow: 'none', backgroundImage: 'none' }}
      >
        <img className={styles.flashLogo} src={logo} alt="logo" />
        <div className={styles.navLogo}>
          <h3>{this.props.data.site.siteMetadata.title}</h3>
        </div>
        <img className={styles.signBlack} src={signBlack} alt="sign-black" />
      </Link>
      <NavList />
      <Collapse />
    </header>
    <div className={styles.body}>
      {this.props.children()}
    </div>
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
