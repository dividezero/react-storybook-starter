import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './style.css'

const Screen = ({ children }) => (
  <Fragment>
    <div className="header">
      <h1 className="title">Hello world</h1>
    </div>
    <div className="body">
      { children }
    </div>
  </Fragment>
);

Screen.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Screen;

