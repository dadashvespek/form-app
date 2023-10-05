import { countries_en, countries_ru } from './countries';

export const translations = {
  en: {
    options: {
      orgType: [
        'Governmental agency',
        'Farmers association',
        'Soil science society',
        'NGOs',
        'Other'
      ],
      countries: countries_en,
      ongoingProgram: [
        'Yes',
        'No',
        "I don't know"
      ],
      soilTopics: [
        'Basic soil assessment',
        'Fertilization management',
        'Soil biodiversity',
        'Soil degradation',
        'Soil erosion',
        'Soil salinization',
        'Soil pollution',
        'Soil organic carbon',
        'Other'
      ],
      implementationScale: [
        'Regional',
        'National',
        'Sub-national',
        'Local'
      ],
      involveInstitutions: ['Yes', 'No'],
      targetCommunitySize: [
        'Less than 50 farmers',
        '50 to 200 farmers',
        '200 to 1000 farmers',
        'More than 1000 farmers'
      ],
      developedMaterials: ['Yes', 'No', 'Other'],
      accessToFunds: ['Yes', 'No'],
      agreementWithToR: [
        'Yes, I would like to implement the programme as a promoter and be trained by the GSP',
        'No, I would like to implement the programme as collaborator'
      ]
    }
  },
  ru: {
    options: {
      orgType: [
        'Государственное агентство',
        'Фермерское объединение',
        'Общество почвоведов',
        'НПО',
        'Другое'
      ],
      countries: countries_ru,
      ongoingProgram: [
        'Да',
        'Нет',
        'Не знаю'
      ],
      soilTopics: [
        'Базовая оценка почвы',
        'Управление удобрением',
        'Биоразнообразие почвы',
        'Деградация почвы',
        'Эрозия почвы',
        'Солонцоватость почвы',
        'Загрязнение почвы',
        'Органический углерод почвы',
        'Другое'
      ],
      implementationScale: [
        'Региональный',
        'Национальный',
        'Субнациональный',
        'Местный'
      ],
      involveInstitutions: ['Да', 'Нет'],
      targetCommunitySize: [
        'Меньше 50 фермеров',
        'От 50 до 200 фермеров',
        'От 200 до 1000 фермеров',
        'Более 1000 фермеров'
      ],
      developedMaterials: ['Да', 'Нет', 'Другое'],
      accessToFunds: ['Да', 'Нет'],
      agreementWithToR: [
        'Да, я хотел бы реализовать программу в качестве промоутера и пройти обучение в GSP',
        'Нет, я хотел бы реализовать программу в качестве сотрудника'
      ]
    }
  }
};
