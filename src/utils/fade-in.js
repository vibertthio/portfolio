import React from 'react';
import { Motion, spring } from 'react-motion';

export default props => (
  <Motion
    defaultStyle={{ opacity: 0, x: 40 }}
    style={{
			opacity: spring(1, { stiffness: 120, damping: 17 }),
			x: spring(0, { stiffness: 50, damping: 5 }),
		}}
  >
    {s => <div style={{ opacity: s.opacity, marginLeft: `${s.x}px` }}>{props.children}</div>}
  </Motion>
);
