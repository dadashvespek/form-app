import React from 'react';
import { translations } from './translations';
import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const RadioButtonGroup = ({ label, name, value, onChange, translationKey }) => {
  const { language } = useContext(LanguageContext);

  const options = translations[language]?.options[translationKey] || [];

  return (
    <div className="form-group">
      <label>{label}</label>
      <div>
        {options.map((option, index) => (
          <div key={index} className="radio-option">
            <input 
              type="radio" 
              name={name} 
              value={option} 
              checked={value === option}
              onChange={onChange}
              id={`${name}-${index}`}  // This id is for associating the label with the input
            />
            <label htmlFor={`${name}-${index}`}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioButtonGroup;
