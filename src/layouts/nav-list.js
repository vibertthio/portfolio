import React from 'react';
import Link from 'gatsby-link';
import styles from './index.module.css';

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

export default () => (
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
