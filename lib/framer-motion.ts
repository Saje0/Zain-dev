import React from 'react';

export const motion = {
  div: (props: any) => {
    const { children, ...rest } = props;
    return React.createElement('div', rest, children);
  },
};

export default motion;