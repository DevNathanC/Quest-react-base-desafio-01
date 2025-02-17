import React from 'react';

const TextUppercase = (Text, Textcolor='Blue' ) => {
    return <p style={{color: Textcolor}}>{Text.label.toUpperCase()}</p>
    
  }

export default TextUppercase;
