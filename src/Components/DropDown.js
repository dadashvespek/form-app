import React from 'react';
import { translations } from './translations';
import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const Dropdown = ({ label, name, value, onChange, translationKey }) => {
  const { language } = useContext(LanguageContext);

  const options = translations[language]?.options[translationKey] || [];

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select name={name} value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option value={option} key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
