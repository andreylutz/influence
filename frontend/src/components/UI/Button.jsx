import React from 'react';
import './Bytton.css';

const Button = ({title}) => {

  return (
             <button
              type='submit'
              className="frends-click"
              // name="frends-Batton"
            >
              {title}
            </button>
  );
};




export default Button;
