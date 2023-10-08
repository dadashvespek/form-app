/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState, useContext } from 'react';
import TextInput from './TextInput';
import Dropdown from './DropDown';
import { LanguageContext } from './LanguageContext';
import RadioButtonGroup from './RadioButtonGroup';
import { labels } from './Labels';
import { useNavigate } from 'react-router-dom';
import {defaultFormValues} from './defaultFormValues';

const formStyles = css`
  max-width: 500px;
  margin: 40px auto;
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 2em;
  font-family: 'Lato', sans-serif;
  background-color: #ffffff;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`;

const submitButtonStyles = css`
  padding: 12px 25px;
  background-color: #0077cc;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #005fa3;
    transform: translateY(-2px);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  }
  &:active {
    transform: translateY(0);
  }
`;
const FormComponent = () => {
  const { language } = useContext(LanguageContext);
  
  const [formValues, setFormValues] = useState(defaultFormValues);
  
  let navigate = useNavigate();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const [errors, setErrors] = useState({});
  const handleSubmit = (event) => {
    console.log("Submitting form...")
    event.preventDefault();
    
    if (!formValues.email) {
      setErrors({ email: language === 'en' ? 'Email is required.' : 'Требуется электронная почта.' });
      return;
    }
    const updatedFormValues = {
      ...formValues,

    };

    setErrors({});
    console.log(updatedFormValues)
    
    fetch('http://localhost:5000/save-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedFormValues) // use the updated form values with null fields
    })
    .then(response => response.json())
    .then(data => {
      console.log("Data saved:", data);
      navigate(`/waiting?email=${encodeURIComponent(updatedFormValues.email)}`); // use the email from updatedFormValues
    })
    .catch(error => {
      console.error("Error saving data:", error);
    });
};
  
  function getTranslation(key, lang) {
    return labels[lang][key];
  }
  
  return (
    <form css={formStyles} onSubmit={handleSubmit}>
  <TextInput 
    label={getTranslation('email', language)} 
    name="email" 
    value={formValues.email} 
    onChange={handleInputChange}
    error={errors.email} 
  />
  <TextInput 
    label={getTranslation('contactName', language)} 
    name="contactName" 
    value={formValues.contactName} 
    onChange={handleInputChange} 
  />
  <TextInput 
    label={getTranslation('contactPreference', language)} 
    name="contactPreference" 
    value={formValues.contactPreference} 
    onChange={handleInputChange} 
  />
  <TextInput 
    label={getTranslation('contactPosition', language)} 
    name="contactPosition" 
    value={formValues.contactPosition} 
    onChange={handleInputChange} 
  />
  <Dropdown
    label = {getTranslation('region', language)}
    name="region"
    value={formValues.region}
    onChange={handleInputChange}
    translationKey="regions"
    />
  <Dropdown
    label={getTranslation('country', language)}
    name="country"
    value={formValues.country}
    onChange={handleInputChange}
    translationKey="countries"
  />
  <TextInput 
    label={getTranslation('municipality', language)} 
    name="municipality" 
    value={formValues.municipality} 
    onChange={handleInputChange} 
  />
  <TextInput 
    label={getTranslation('orgName', language)} 
    name="orgName" 
    value={formValues.orgName} 
    onChange={handleInputChange} 
  />
  <Dropdown
    label={getTranslation('orgType', language)}
    name="orgType"
    value={formValues.orgType}
    onChange={handleInputChange}
    translationKey="orgType"
  />
  <RadioButtonGroup
    label={getTranslation('ongoingProgram', language)}
    name="ongoingProgram"
    value={formValues.ongoingProgram}
    onChange={handleInputChange}
    translationKey="ongoingProgram"
  />
  <Dropdown
    label={getTranslation('soilTopics', language)}
    name="soilTopics"
    value={formValues.soilTopics}
    onChange={handleInputChange}
    translationKey="soilTopics"
  />
  <Dropdown
    label={getTranslation('implementationScale', language)}
    name="implementationScale"
    value={formValues.implementationScale}
    onChange={handleInputChange}
    translationKey="implementationScale"
  />
  <RadioButtonGroup
    label={getTranslation('involveInstitutions', language)}
    name="involveInstitutions"
    value={formValues.involveInstitutions}
    onChange={handleInputChange}
    translationKey="involveInstitutions"
  />
  <Dropdown
    label={getTranslation('targetCommunitySize', language)}
    name="targetCommunitySize"
    value={formValues.targetCommunitySize}
    onChange={handleInputChange}
    translationKey="targetCommunitySize"
  />
  <RadioButtonGroup
    label={getTranslation('developedMaterials', language)}
    name="developedMaterials"
    value={formValues.developedMaterials}
    onChange={handleInputChange}
    translationKey="developedMaterials"
  />
  <RadioButtonGroup
    label={getTranslation('accessToFunds', language)}
    name="accessToFunds"
    value={formValues.accessToFunds}
    onChange={handleInputChange}
    translationKey="accessToFunds"
  />
<RadioButtonGroup
    label={
        <span>
            {language === 'en' ? 'Did you read and agree with the ' : 
             language === 'ru' ? 'Вы прочитали и согласны с ' :
             language === 'fr' ? 'Avez-vous lu et accepté le ' :
             language === 'es' ? '¿Has leído y estás de acuerdo con el ' :
             'Did you read and agree with the '}
            <a 
                href={
                    language === 'en'
                        ? 'https://www.fao.org/fileadmin/user_upload/GSP/GSDP/documents/GSDP_TOR_promoters_EN_20_03_2023.pdf' 
                        : language === 'ru'
                        ? 'https://www.fao.org/fileadmin/user_upload/GSP/Soil_doctor/GSDP_TOR_promoters_RU_20_03_2023_.pdf'
                        : language === 'fr'
                        ? 'https://www.fao.org/fileadmin/user_upload/GSP/GSDP/documents/GSDP_TOR_promoters_FR_20_03_2023.pdf' 
                        : language === 'es'
                        ? 'https://www.fao.org/fileadmin/user_upload/GSP/GSDP/documents/GSDP_TOR_promoters_ES_20_03_2023.pdf' 
                        : 'https://www.fao.org/fileadmin/user_upload/GSP/GSDP/documents/GSDP_TOR_promoters_EN_20_03_2023.pdf'
                }
                target="_blank" 
                rel="noopener noreferrer"
            >
                {language === 'en' ? 'ToR' : 
                 language === 'ru' ? 'T3' :
                 language === 'fr' ? 'termes de référence' :
                 language === 'es' ? 'términos de referencia' :
                 'ToR'}
            </a>
            {language === 'en' ? '?' : 
             language === 'ru' ? '?' :
             language === 'fr' ? '?' :
             language === 'es' ? '?' :
             '?'}
        </span>
    }
    name="agreementWithToR"
    value={formValues.agreementWithToR}
    onChange={handleInputChange}
    translationKey="agreementWithToR"
/>
<TextInput 
    label={
        <>
            <span>
                {getTranslation('feedback', language)} 
                <a href="mailto:Soil-doctor@fao.org">Soil-doctor@fao.org</a>
            </span>
        </>
    }
    name="feedback" 
    value={formValues.feedback} 
    onChange={handleInputChange} 
/>

<input css={submitButtonStyles} type="submit" value={getTranslation('submit',language)} />
    </form>
  );

};

export default FormComponent;
