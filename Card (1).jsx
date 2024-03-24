import React from 'react';

const styles = {
  Card: {
    top: '0px',
    left: '298px',
    width: '1138px',
    height: '108px',
    backgroundColor: '#f0f0f0',
  },
};

const Card = (props) => {
  return (
    <div style={styles.Card}>
      {props.children}
    </div>
  );
};


export default Card;