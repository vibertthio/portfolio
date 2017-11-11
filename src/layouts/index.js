import React, { Component } from 'react';
import Link from 'gatsby-link';
import styles from './index.module.css';
import Collapse from './collapse';
import signBlack from '../../assets/images/sign-black.png';
import logo from '../../assets/images/logo.png';

const ListLink = props => (
  <li style={{ display: 'inline-block', marginLeft: '0.5rem' }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

const ListDevider = props => (
  <li className={styles.navListItem} style={{ display: 'inline-block', marginLeft: '0.5rem' }}>
    {props.children}
  </li>
);

const NavList = () => (
  <ul className={styles.expandMenu} style={{ listStyle: 'none', float: 'right' }}>
    <ListLink to="/">
      <h4 className={styles.navItem}>Home</h4>
    </ListLink>
    <ListDevider>
      <h4 className={styles.navDevider}>|</h4>
    </ListDevider>
    <ListLink to="/projects/">
      <h4 className={styles.navItem}>Projects</h4>
    </ListLink>
    <ListDevider>
      <h4 className={styles.navDevider}>|</h4>
    </ListDevider>
    <ListLink to="/blogs/">
      <h4 className={styles.navItem}>Blogs</h4>
    </ListLink>
  </ul>
);

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
    {this.props.children()}
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
