import React from 'react';
import './Content.css';

const ContentContainer = (props) => {
  return (
    <div className='Content-Container'>
      {props.children}
    </div>
  );
};

export default ContentContainer;
