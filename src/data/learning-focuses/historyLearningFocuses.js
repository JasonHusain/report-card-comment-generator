// ========================================
// GRADE 7
// ========================================

const grade7NewFranceAndBritishNorthAmericaLearningFocuses = [
  {
    value: "britishConquest",
    label: "The British Conquest and Its Impact"
  },
  {
    value: "firstNationsEuropeanRelations",
    label: "First Nations and European Relations"
  },
  {
    value: "lifeInNewFrance",
    label: "Life in New France and British North America"
  },
  {
    value: "americanRevolution",
    label: "The American Revolution and Its Impact"
  },
  {
    value: "loyalistMigration",
    label: "Loyalist Migration and Settlement"
  },
  {
    value: "socialPoliticalChange",
    label: "Social and Political Change, 1713–1800"
  }
];

const grade7Canada1800To1850LearningFocuses = [
  {
    value: "warOf1812",
    label: "The War of 1812 and Its Impact"
  },
  {
    value: "immigrationSettlement",
    label: "Immigration and Settlement"
  },
  {
    value: "firstNationsMetisExperiences",
    label: "First Nations and Métis Experiences"
  },
  {
    value: "economicSocialChange",
    label: "Economic and Social Change"
  },
  {
    value: "politicalConflictReform",
    label: "Political Conflict and Reform"
  },
  {
    value: "rebellions",
    label: "The Rebellions of 1837–1838"
  },
  {
    value: "responsibleGovernment",
    label: "The Development of Responsible Government"
  }
];

// ========================================
// GRADE 8
// ========================================

const grade8CreatingCanadaLearningFocuses = [
  {
    value: "causesOfConfederation",
    label: "Causes of Confederation"
  },
  {
    value: "perspectivesOnConfederation",
    label: "Perspectives on Confederation"
  },
  {
    value: "confederation",
    label: "The Creation of Canada"
  },
  {
    value: "canadianExpansion",
    label: "Canadian Expansion and Settlement"
  },
  {
    value: "firstNationsMetisExperiences",
    label: "First Nations and Métis Experiences"
  },
  {
    value: "redRiverNorthWest",
    label: "Red River and the North-West Resistance"
  },
  {
    value: "nationalPolicyRailway",
    label: "The National Policy and Canadian Pacific Railway"
  }
];

const grade8Canada1890To1914LearningFocuses = [
  {
    value: "immigrationSettlement",
    label: "Immigration and Settlement"
  },
  {
    value: "industrializationUrbanization",
    label: "Industrialization and Urbanization"
  },
  {
    value: "workingLivingConditions",
    label: "Working and Living Conditions"
  },
  {
    value: "socialReform",
    label: "Social Reform and Changing Society"
  },
  {
    value: "indigenousExperiences",
    label: "Indigenous Experiences and Government Policies"
  },
  {
    value: "francophoneExperiences",
    label: "Francophone Experiences and Language Rights"
  },
  {
    value: "canadasInternationalRole",
    label: "Canada's Changing International Role"
  }
];

// ========================================
// HISTORY LEARNING FOCUS LOOKUP
// ========================================

export const historyLearningFocuses = {
  grade7: {
    newFranceAndBritishNorthAmerica:
      grade7NewFranceAndBritishNorthAmericaLearningFocuses,

    canada1800To1850: grade7Canada1800To1850LearningFocuses
  },

  grade8: {
    creatingCanada: grade8CreatingCanadaLearningFocuses,

    canada1890To1914: grade8Canada1890To1914LearningFocuses
  }
};

export default historyLearningFocuses;
