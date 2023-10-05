import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import TextInput from './TextInput';
import Dropdown from './DropDown';
import { LanguageContext } from './LanguageContext';
import RadioButtonGroup from './RadioButtonGroup';

const StyledForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  font-family: Arial, sans-serif;
  background-color: #fafafa;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
`;

const StyledSubmitButton = styled.input`
  padding: 10px 20px;
  background-color: #0077cc;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #005fa3;
  }
`;
const FormComponent = () => {
  const { language } = useContext(LanguageContext);
  
  const [formValues, setFormValues] = useState({
    email: '',
    contactName: '',
    contactPreference: '',
    contactPosition: '',
    country: '',
    municipality: '',
    orgName: '',
    orgType: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const [errors, setErrors] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formValues.email) {
      setErrors({ email: language === 'en' ? 'Email is required.' : 'Требуется электронная почта.' });
      return;
    }
    setErrors({});  
    const answers = Object.entries(formValues).map(
      ([key, value]) => `${key}: ${value}`
    ).join('\n');
  
    alert(answers);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextInput 
        label={language === 'en' ? 'Email:' : 'Электронная почта:'} 
        name="email" 
        value={formValues.email} 
        onChange={handleInputChange}
        error={errors.email} 
      />
      <TextInput 
        label={language === 'en' ? 'Name of the contact person:' : 'Имя контактного лица:'} 
        name="contactName" 
        value={formValues.contactName} 
        onChange={handleInputChange} 
      />
      <TextInput 
        label={language === 'en' ? 'Please provide details about the preferred mean to contact you to facilitate our collaboration (personal email/cell phone/WhatsApp/Social networks):' : 'Пожалуйста, предоставьте данные о предпочтительном способе связи с вами для улучшения нашего сотрудничества (личный email/мобильный телефон/WhatsApp/социальные сети):'} 
        name="contactPreference" 
        value={formValues.contactPreference} 
        onChange={handleInputChange} 
      />
      <TextInput 
        label={language === 'en' ? 'Position of the contact person:' : 'Должность контактного лица:'} 
        name="contactPosition" 
        value={formValues.contactPosition} 
        onChange={handleInputChange} 
      />
<Dropdown
  label={language === 'en' ? 'Country:' : 'Страна:'}
  name="country"
  value={formValues.country}
  onChange={handleInputChange}
  translationKey="countries"  // Updated line
/>
      <TextInput 
        label={language === 'en' ? 'Municipality:' : 'Муниципалитет:'} 
        name="municipality" 
        value={formValues.municipality} 
        onChange={handleInputChange} 
      />
      <TextInput 
        label={language === 'en' ? 'Institution / Organization name:' : 'Название учреждения / организации:'} 
        name="orgName" 
        value={formValues.orgName} 
        onChange={handleInputChange} 
      />
      <Dropdown
        label={language === 'en' ? 'Institution / Organization type:' : 'Тип учреждения / организации:'}
        name="orgType"
        value={formValues.orgType}
        onChange={handleInputChange}
        translationKey="orgType"
      />
            <RadioButtonGroup
        label={language === 'en' ? 'Is there already an ongoing programme similar to the Soil Doctors in your country/region?' : 'Есть ли уже действующая программа, аналогичная Soil Doctors, в вашей стране/регионе?'}
        name="ongoingProgram"
        value={formValues.ongoingProgram}
        onChange={handleInputChange}
        translationKey="ongoingProgram"
      />

      <Dropdown
        label={language === 'en' ? 'Are you interested to develop trainings based on one or more specific soil topic?' : 'Вы заинтересованы в разработке обучения на основе одной или нескольких конкретных тем по почве?'}
        name="soilTopics"
        value={formValues.soilTopics}
        onChange={handleInputChange}
        translationKey="soilTopics"
      />

      <Dropdown
        label={language === 'en' ? 'Which would be the scale of the implementation?' : 'Каков будет масштаб внедрения?'}
        name="implementationScale"
        value={formValues.implementationScale}
        onChange={handleInputChange}
        translationKey="implementationScale"
      />

      <RadioButtonGroup
        label={language === 'en' ? 'Will you be able to involve other national or regional institutions/organizations? (other promoters, extension services, government, academia, NGOs…)' : 'Сможете ли вы привлечь другие национальные или региональные институты/организации? (другие инициаторы, службы по продвижению, правительство, академия, НПО и др.)'}
        name="involveInstitutions"
        value={formValues.involveInstitutions}
        onChange={handleInputChange}
        translationKey="involveInstitutions"
      />
            <Dropdown
  label={language === 'en' ? 'How large is the target farmer community you would like to start the implementation with?' : 'Каков размер целевого сельскохозяйственного сообщества, с которым вы бы хотели начать внедрение?'}
  name="targetCommunitySize"
  value={formValues.targetCommunitySize}
  onChange={handleInputChange}
  translationKey="targetCommunitySize"
/>

<RadioButtonGroup
  label={language === 'en' ? 'Have you already developed educational material on soil? (videos, posters, trainings)' : 'У вас уже есть образовательные материалы по почве? (видео, плакаты, тренинги)'}
  name="developedMaterials"
  value={formValues.developedMaterials}
  onChange={handleInputChange}
  translationKey="developedMaterials"
/>

<RadioButtonGroup
  label={language === 'en' ? 'Do you have access to funds to ensure the sustainability of the programme?' : 'У вас есть доступ к финансам для обеспечения устойчивости программы?'}
  name="accessToFunds"
  value={formValues.accessToFunds}
  onChange={handleInputChange}
  translationKey="accessToFunds"
/>

<RadioButtonGroup
        label={
          <span>
            {language === 'en' ? 'Did you read and agree with the ' : 'Вы прочитали и согласны с '} 
            <a 
              href={
                language === 'en' 
                  ? 'https://www.fao.org/fileadmin/user_upload/GSP/GSDP/documents/GSDP_TOR_promoters_EN_20_03_2023.pdf' 
                  : 'https://www.fao.org/fileadmin/user_upload/GSP/Soil_doctor/GSDP_TOR_promoters_RU_20_03_2023_.pdf'
              }
              target="_blank" 
              rel="noopener noreferrer"
            >
              ToR
            </a>
            ?
          </span>
        }
        name="agreementWithToR"
        value={formValues.agreementWithToR}
        onChange={handleInputChange}
        translationKey="agreementWithToR"
      />

      
      <StyledSubmitButton type="submit" value={language === 'en' ? 'Submit' : 'Отправить'} />
    </StyledForm>
  );

};

export default FormComponent;
