import React from 'react';
import Link, { withPrefix } from 'gatsby-link';
import styles from './index.module.css';
import FadeIn from '../utils/fade-in';

const ListLink = props => (
  <li style={{ display: 'inline-block', marginLeft: '0.5rem' }}>
    <Link
      to={props.to}
      className={`${styles.navLink} ${
				withPrefix(props.to) === props.path ? styles.active : styles.inactive
			}`}
    >
      {props.children}
    </Link>
  </li>
);

const ListLinkOut = props => (
  <li style={{ display: 'inline-block', marginLeft: '0.5rem' }}>
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={props.to}
      className={`${styles.navLink} ${
				withPrefix(props.to) === props.path ? styles.active : styles.inactive
			}`}
    >
      {props.children}
    </a>
  </li>
);

const ListDevider = props => (
  <li
    className={`${styles.navListItem} ${styles.inactive}`}
    style={{ display: 'inline-block', marginLeft: '0.5rem' }}
  >
    {props.children}
  </li>
);

export default props => (
  <ul className={styles.expandMenu} style={{ listStyle: 'none', float: 'right' }}>
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
				stiffness: 50,
				damping: 20,
			}}
    >
      <ListLink to="/" path={props.path}>
        <h4 className={styles.navItem}>Home</h4>
      </ListLink>
      <ListDevider>
        <h4 className={styles.navDevider}>|</h4>
      </ListDevider>
      <ListLink to="/projects/" path={props.path}>
        <h4 className={styles.navItem}>Projects</h4>
      </ListLink>
      <ListDevider>
        <h4 className={styles.navDevider}>|</h4>
      </ListDevider>
      <ListLink to="/words/" path={props.path}>
        <h4 className={styles.navItem}>Words</h4>
      </ListLink>
      <ListDevider>
        <h4 className={styles.navDevider}>|</h4>
      </ListDevider>
      <ListLink to="/words/2017-10-24-bio/" path={props.path}>
        <h4 className={styles.navItem}>Bio</h4>
      </ListLink>
      <ListDevider>
        <h4 className={styles.navDevider}>|</h4>
      </ListDevider>
      <ListLinkOut to="https://drive.google.com/file/d/0ByNwzf7aYOQ3ZnZIbWdCYm9GbjA/view?usp=sharing" path={props.path}>
        <h4 className={styles.navItem}>C.V.</h4>
      </ListLinkOut>
    </FadeIn>
  </ul>
);
