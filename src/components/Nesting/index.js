import React from 'react';

import './index.scss';

const Nesting = () => {
  return (
    <div className="nestingContainer">
      <div className="nestingContainer__item nestingContainer__nav">
        <div className="nestingContainer__item">1</div>
        <div className="nestingContainer__item">2</div>
      </div>
      <div className="nestingContainer__item nestingContainer__content">
        <div className="nestingContainer__item nestingContainer__item--1">
          1
        </div>
        <div className="nestingContainer__item nestingContainer__item--2">
          2
        </div>
        <div className="nestingContainer__item nestingContainer__item--3">
          3
        </div>
      </div>
    </div>
  );
};

export default Nesting;
