import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const LanguageSelector = () => {
  const { changeLanguage } = useContext(LanguageContext);

  return (
    <select onChange={changeLanguage}>
      <option value="en">English</option>
      <option value="ru">Russian</option>
    </select>
  );
};

export default LanguageSelector;
