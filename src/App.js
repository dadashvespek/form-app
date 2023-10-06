/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import FormComponent from './Components/FormComponent';
import LanguageSelector from './Components/LanguageSelector';
import { LanguageProvider } from './Components/LanguageContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserResponseComponent from './Components/UserResponseComponent';

const appStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  font-family: 'Lato', sans-serif;
  background-color: #f7f8fa;

  /* Space between LanguageSelector and FormComponent */
  & > * + * {
    margin-top: 1.5em;
  }
`;
function App() {
  return (
      <LanguageProvider>
          <div className="App" css={appStyles}>
              <Router>
                  <LanguageSelector />
                  <Routes>
                      <Route path="/" element={<FormComponent />} />
                      <Route path="/:userEmail" element={<UserResponseComponent />} />
                  </Routes>
              </Router>
          </div>
      </LanguageProvider>
  );
}

export default App;
