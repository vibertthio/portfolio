import React from 'react';
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
		return (
  <div className={styles.projectContainer}>
    <FadeIn>
      <div>
        <h1 className={styles.title}>{this.props.title}</h1>
        <div
          className={`
                ${styles.projectImgContainer}
                ${this.props.index % 2 === 0 ? styles.left : styles.right}
                ${this.state.loadingImg ? styles.loading : ''}`}
        >
          <img
            src={this.props.img}
            className={styles.projectImg}
            alt="project-img"
            onLoad={() => this.handleFinishLoadingImg()}
          />
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>{this.props.content}</p>
        </div>
      </div>
    </FadeIn>
  </div>
		);
	}
}

export default Project;
