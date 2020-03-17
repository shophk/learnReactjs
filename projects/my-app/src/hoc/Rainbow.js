import React from 'react';

const Rainbow = WrapperComponent => {
  const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];

  // const randomColour = colours[Math.floor(Math.random() * 5)];
  // const className = randomColour + '-text';

  return props => {
    const randomColour = colours[Math.floor(Math.random() * 5)];
    const className = randomColour + '-text';
    return (
      <div className={className}>
        <WrapperComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
