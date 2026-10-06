//Language strands array
export const languageStrands = [
  {
    value: "literacyConnectionsAndApplications",
    label: "Literacy Connections and Applications"
  },
  { value: "foundationsOfLanguage", label: "Foundations of Language" },
  {
    value: "comprehension",
    label: "Comprehension: Understanding and Responding to Texts"
  },
  { value: "composition", label: "Expressing Ideas and Creating Texts" }
];

//Math strands array
export const mathStrands = [
  { value: "numberSense", label: "Number Sense" },
  { value: "algebra", label: "Algebra" },
  { value: "dataManagement", label: "Data Management" },
  { value: "spatialSense", label: "Spatial Sense" },
  { value: "financialLiteracy", label: "Financial Literacy" }
];

//Science strands array
export const scienceStrands = [
  { value: "lifeSystems", label: "Life Systems" },
  { value: "matterAndEnergy", label: "Matter and Energy" },
  {
    value: "structuresAndMechanisms",
    label: "Structures and Mechanisms"
  },
  {
    value: "earthAndSpace",
    label: "Earth and Space Systems"
  }
];

//Social Studies strands array
export const socialStudiesStrands = [
  {
    value: "heritageAndIdentity",
    label: "Heritage and Identity"
  },
  {
    value: "peopleAndEnvironments",
    label: "People and Environments"
  }
];

//Grade 7 History strands array
export const grade7HistoryStrands = [
  {
    value: "newFranceAndBritishNorthAmerica",
    label: "New France and British North America, 1713–1800"
  },
  {
    value: "canada1800To1850",
    label: "Canada, 1800–1850: Conflict and Challenges"
  }
];

//Grade 8 History strands array
export const grade8HistoryStrands = [
  {
    value: "creatingCanada",
    label: "Creating Canada, 1850–1890"
  },
  {
    value: "canada1890To1914",
    label: "Canada, 1890–1914: A Changing Society"
  }
];

//Grade 7 Geography strands array
export const grade7GeographyStrands = [
  {
    value: "physicalPatternsInAChangingWorld",
    label: "Physical Patterns in a Changing World"
  },
  {
    value: "naturalResourcesAroundTheWorld",
    label: "Natural Resources Around the World: Use and Sustainability"
  }
];

//Grade 8 Geography strands array
export const grade8GeographyStrands = [
  {
    value: "globalSettlement",
    label: "Global Settlement: Patterns and Sustainability"
  },
  {
    value: "globalInequalities",
    label: "Global Inequalities: Economic Development and Quality of Life"
  }
];

//French strands array
export const frenchStrands = [
  { value: "listening", label: "Listening" },
  { value: "speaking", label: "Speaking" },
  { value: "reading", label: "Reading" },
  { value: "writing", label: "Writing" }
];

//Object for strand lookup
export const strandsByGradeAndSubject = {
  grade1: {
    language: languageStrands,
    mathematics: mathStrands,
    science: scienceStrands,
    socialStudies: socialStudiesStrands
  },
  grade2: {
    language: languageStrands,
    mathematics: mathStrands,
    science: scienceStrands,
    socialStudies: socialStudiesStrands
  },
  grade3: {
    language: languageStrands,
    mathematics: mathStrands,
    science: scienceStrands,
    socialStudies: socialStudiesStrands
  },
  grade4: {
    language: languageStrands,
    mathematics: mathStrands,
    science: scienceStrands,
    socialStudies: socialStudiesStrands,
    french: frenchStrands
  },
  grade5: {
    language: languageStrands,
    mathematics: mathStrands,
    science: scienceStrands,
    socialStudies: socialStudiesStrands,
    french: frenchStrands
  },
  grade6: {
    language: languageStrands,
    mathematics: mathStrands,
    science: scienceStrands,
    socialStudies: socialStudiesStrands,
    french: frenchStrands
  },
  grade7: {
    language: languageStrands,
    mathematics: mathStrands,
    science: scienceStrands,
    history: grade7HistoryStrands,
    geography: grade7GeographyStrands,
    french: frenchStrands
  },
  grade8: {
    language: languageStrands,
    mathematics: mathStrands,
    science: scienceStrands,
    history: grade8HistoryStrands,
    geography: grade8GeographyStrands,
    french: frenchStrands
  }
};
