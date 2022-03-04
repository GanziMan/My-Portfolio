import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
import './Toggle.styled.css';

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
   
    
    <>
    <input onClick={toggleTheme}
      className="react-switch-checkbox"
      id={`react-switch-new`}
      type="checkbox"
    />
    <label
      className="react-switch-label"
      htmlFor={`react-switch-new`}
    >
      <span className={`react-switch-button`} />
    </label>
  </>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;
