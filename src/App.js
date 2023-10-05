import React from 'react';
import FormComponent from './Components/FormComponent';
import LanguageSelector from './Components/LanguageSelector';
import { LanguageProvider } from './Components/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <LanguageSelector />
        <FormComponent />
      </div>
    </LanguageProvider>
  );
}

export default App;
