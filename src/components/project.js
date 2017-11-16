import React from 'react';
import Link from 'gatsby-link';
import styles from '../pages/projects.module.css';
import FadeIn from '../utils/fade-in';

class Project extends React.Component {
	constructor() {
		super();
		this.state = {
			loadingImg: true,
		};
	}

	handleFinishLoadingImg() {
		this.setState({
			loadingImg: false,
		});
	}

	render() {
		// console.log(`project link to: ${this.props.to}`);
		const linked = this.props.to !== '';
		return (
  <div className={styles.projectContainer}>
    <FadeIn>
      <div>
        <div className={styles.titleContainer}>
          {linked ? (
            <Link className={styles.titleLink} to={this.props.to}>
              <h1 className={styles.title}>{this.props.title}</h1>
            </Link>
							) : (
  <h1 className={styles.title}>{this.props.title}</h1>
							)}
        </div>
        <div
          className={`
                ${styles.projectImgContainer}
                ${this.props.index % 2 === 0 ? styles.left : styles.right}
                ${this.state.loadingImg ? styles.loading : ''}`}
        >
          {linked ? (
            <Link to={this.props.to}>
              <img
                src={this.props.img}
                className={styles.projectImg}
                alt="project-img"
                onLoad={() => this.handleFinishLoadingImg()}
              />
            </Link>
							) : (
  <img
    src={this.props.img}
    className={styles.projectImg}
    alt="project-img"
    onLoad={() => this.handleFinishLoadingImg()}
  />
							)}
        </div>
        <div className={styles.textContainer}>
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>{this.props.content}</p>
          </div>
          <div className={styles.linksContainer}>
            {this.props.links.map(l => (
              <div key={l.url} className={styles.linkContainer}>
                <a
                  className={styles.projectLink}
                  href={l.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {`> ${l.name}`}
                </a>
              </div>
								))}
          </div>
        </div>
      </div>
    </FadeIn>
  </div>
		);
	}
}

export default Project;
