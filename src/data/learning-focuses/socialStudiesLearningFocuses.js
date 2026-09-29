// ========================================
// GRADE 1
// Also used for JK and SK
// ========================================

const grade1HeritageAndIdentityLearningFocuses = [
  { value: "rolesResponsibilities", label: "Roles and Responsibilities" },
  { value: "relationships", label: "Relationships with Family and Community" },
  { value: "rulesResponsibilities", label: "Rules and Responsibilities" },
  { value: "identity", label: "Personal and Family Identity" },
  {
    value: "changeOverTime",
    label: "Changes in Roles and Responsibilities Over Time"
  }
];

const grade1PeopleAndEnvironmentsLearningFocuses = [
  { value: "localCommunity", label: "The Local Community" },
  { value: "communityFeatures", label: "Features of Communities" },
  { value: "communityWorkers", label: "People and Services in the Community" },
  { value: "maps", label: "Maps and Location" },
  {
    value: "environmentalResponsibility",
    label: "Caring for the Local Environment"
  }
];

// ========================================
// GRADE 2
// ========================================

const grade2HeritageAndIdentityLearningFocuses = [
  { value: "familyTraditions", label: "Family Traditions and Celebrations" },
  { value: "culturalTraditions", label: "Cultural Traditions and Heritage" },
  {
    value: "communityTraditions",
    label: "Traditions in Different Communities"
  },
  { value: "changeOverTime", label: "Changes in Traditions Over Time" },
  { value: "diverseCommunities", label: "Diversity in Communities" }
];

const grade2PeopleAndEnvironmentsLearningFocuses = [
  { value: "globalCommunities", label: "Communities Around the World" },
  { value: "physicalFeatures", label: "Physical Features of Communities" },
  { value: "climateEnvironment", label: "Climate and the Environment" },
  { value: "waysOfLife", label: "Ways of Life in Different Communities" },
  {
    value: "humanEnvironment",
    label: "Relationships Between People and the Environment"
  }
];

// ========================================
// GRADE 3
// ========================================

const grade3HeritageAndIdentityLearningFocuses = [
  { value: "earlyCommunities", label: "Early Communities in Canada" },
  {
    value: "indigenousCommunities",
    label: "First Nations and Indigenous Communities"
  },
  { value: "settlerCommunities", label: "Early Settler Communities" },
  { value: "dailyLife", label: "Daily Life in Early Communities" },
  { value: "changeContinuity", label: "Change and Continuity Over Time" }
];

const grade3PeopleAndEnvironmentsLearningFocuses = [
  { value: "ontarioCommunities", label: "Communities in Ontario" },
  { value: "landUse", label: "Land Use" },
  { value: "municipalGovernment", label: "Municipal Government" },
  {
    value: "communityServices",
    label: "Community Services and Responsibilities"
  },
  { value: "environmentalIssues", label: "Local Environmental Issues" }
];

// ========================================
// GRADE 4
// ========================================

const grade4HeritageAndIdentityLearningFocuses = [
  { value: "earlySocieties", label: "Early Societies" },
  { value: "dailyLife", label: "Daily Life in Early Societies" },
  { value: "socialOrganization", label: "Social and Political Organization" },
  {
    value: "environmentInfluence",
    label: "Influence of the Environment on Early Societies"
  },
  { value: "comparison", label: "Comparing Early Societies" }
];

const grade4PeopleAndEnvironmentsLearningFocuses = [
  {
    value: "canadianRegions",
    label: "Political and Physical Regions of Canada"
  },
  { value: "physicalFeatures", label: "Physical Features of Canada" },
  { value: "naturalResources", label: "Natural Resources" },
  { value: "peopleEnvironment", label: "People and the Environment" },
  { value: "resourceUse", label: "Responsible Use of Resources" }
];

// ========================================
// GRADE 5
// ========================================

const grade5HeritageAndIdentityLearningFocuses = [
  { value: "indigenousPeoples", label: "Indigenous Peoples in Canada" },
  { value: "newFrance", label: "New France" },
  { value: "britishNorthAmerica", label: "British North America" },
  { value: "interactions", label: "Interactions Among Communities" },
  { value: "changeOverTime", label: "Changes in Canadian Society Over Time" }
];

const grade5PeopleAndEnvironmentsLearningFocuses = [
  { value: "government", label: "Levels of Government" },
  {
    value: "governmentRoles",
    label: "Roles and Responsibilities of Government"
  },
  { value: "citizenship", label: "Citizenship and Civic Responsibility" },
  { value: "rightsResponsibilities", label: "Rights and Responsibilities" },
  {
    value: "civicParticipation",
    label: "Civic Participation and Decision Making"
  }
];

// ========================================
// GRADE 6
// ========================================

const grade6HeritageAndIdentityLearningFocuses = [
  { value: "canadianCommunities", label: "Communities in Canada" },
  { value: "identity", label: "Canadian Identity" },
  { value: "immigration", label: "Immigration and Migration" },
  { value: "diversity", label: "Cultural Diversity in Canada" },
  { value: "contributions", label: "Contributions of Diverse Communities" }
];

const grade6PeopleAndEnvironmentsLearningFocuses = [
  { value: "globalConnections", label: "Canada's Global Connections" },
  { value: "internationalOrganizations", label: "International Organizations" },
  { value: "globalIssues", label: "Global Issues and Challenges" },
  { value: "internationalCooperation", label: "International Cooperation" },
  { value: "globalCitizenship", label: "Global Citizenship and Responsibility" }
];

// ========================================
// SOCIAL STUDIES LEARNING FOCUS LOOKUP
// ========================================

export const socialStudiesLearningFocuses = {
  juniorKindergarten: {
    heritageAndIdentity: grade1HeritageAndIdentityLearningFocuses,
    peopleAndEnvironments: grade1PeopleAndEnvironmentsLearningFocuses
  },

  seniorKindergarten: {
    heritageAndIdentity: grade1HeritageAndIdentityLearningFocuses,
    peopleAndEnvironments: grade1PeopleAndEnvironmentsLearningFocuses
  },

  grade1: {
    heritageAndIdentity: grade1HeritageAndIdentityLearningFocuses,
    peopleAndEnvironments: grade1PeopleAndEnvironmentsLearningFocuses
  },

  grade2: {
    heritageAndIdentity: grade2HeritageAndIdentityLearningFocuses,
    peopleAndEnvironments: grade2PeopleAndEnvironmentsLearningFocuses
  },

  grade3: {
    heritageAndIdentity: grade3HeritageAndIdentityLearningFocuses,
    peopleAndEnvironments: grade3PeopleAndEnvironmentsLearningFocuses
  },

  grade4: {
    heritageAndIdentity: grade4HeritageAndIdentityLearningFocuses,
    peopleAndEnvironments: grade4PeopleAndEnvironmentsLearningFocuses
  },

  grade5: {
    heritageAndIdentity: grade5HeritageAndIdentityLearningFocuses,
    peopleAndEnvironments: grade5PeopleAndEnvironmentsLearningFocuses
  },

  grade6: {
    heritageAndIdentity: grade6HeritageAndIdentityLearningFocuses,
    peopleAndEnvironments: grade6PeopleAndEnvironmentsLearningFocuses
  }
};

export default socialStudiesLearningFocuses;
