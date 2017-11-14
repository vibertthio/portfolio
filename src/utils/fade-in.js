import React from 'react';
import { Motion, spring } from 'react-motion';

const no = () => {};
class FadeIn extends React.Component {
	constructor() {
		super();
		no();
	}

	render() {
		// console.log(`fade-in props: ${this.props}`);
		const { opacity, x, y } = this.props;
		const { right } = this.props;

		if (!right) {
			return (
  <Motion
    defaultStyle={{
						opacity: opacity.start,
						x: x.start,
						y: y.start,
					}}
    style={{
						opacity: spring(opacity.end, { stiffness: 120, damping: 17 }),
						x: spring(x.end, { stiffness: x.stiffness, damping: x.damping }),
						y: spring(y.end, { stiffness: y.stiffness, damping: y.damping }),
					}}
  >
    {s => (
      <div
        style={{
								display: 'inherit',
								opacity: s.opacity,
								top: `${s.y}px`,
								marginLeft: `${s.x}px`,
							}}
      >
        {this.props.children}
      </div>
					)}
  </Motion>
			);
		}
			return (
  <Motion
    defaultStyle={{
						opacity: opacity.start,
						x: x.start,
						y: y.start,
					}}
    style={{
						opacity: spring(opacity.end, { stiffness: 120, damping: 17 }),
						x: spring(x.end, { stiffness: x.stiffness, damping: x.damping }),
						y: spring(y.end, { stiffness: y.stiffness, damping: y.damping }),
					}}
  >
    {s => (
      <div
        style={{
								opacity: s.opacity,
								marginTop: `${s.y}px`,
								marginRight: `${s.x}px`,
							}}
      >
        {this.props.children}
      </div>
					)}
  </Motion>
			);
	}
}

FadeIn.defaultProps = {
	right: false,
	opacity: {
		start: 0,
		end: 1,
		stiffness: 120,
		damping: 17,
	},
	x: {
		start: 0,
		end: 0,
		stiffness: 50,
		damping: 6.5,
	},
	y: {
		start: 0,
		end: 0,
		stiffness: 0,
		damping: 0,
	},
};

export default FadeIn;
