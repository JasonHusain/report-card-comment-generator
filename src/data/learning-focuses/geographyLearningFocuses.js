// ========================================
// GRADE 7
// ========================================

const grade7PhysicalPatternsInAChangingWorldLearningFocuses = [
  {
    value: "physicalRegions",
    label: "Physical Regions and Landforms"
  },
  {
    value: "climatePatterns",
    label: "Climate Patterns and Processes"
  },
  {
    value: "vegetationPatterns",
    label: "Natural Vegetation Patterns"
  },
  {
    value: "physicalProcesses",
    label: "Physical Processes That Shape the Earth"
  },
  {
    value: "humanEnvironmentInteractions",
    label: "Human Interactions with the Physical Environment"
  },
  {
    value: "environmentalChange",
    label: "Environmental Change and Its Impacts"
  }
];

const grade7NaturalResourcesAroundTheWorldLearningFocuses = [
  {
    value: "resourceDistribution",
    label: "Distribution of Natural Resources"
  },
  {
    value: "resourceUse",
    label: "Use of Natural Resources"
  },
  {
    value: "renewableNonRenewableResources",
    label: "Renewable and Non-Renewable Resources"
  },
  {
    value: "resourceExtraction",
    label: "Resource Extraction and Its Impacts"
  },
  {
    value: "resourceSustainability",
    label: "Sustainable Resource Management"
  },
  {
    value: "resourcePerspectives",
    label: "Perspectives on Natural Resource Use"
  }
];

// ========================================
// GRADE 8
// ========================================

const grade8GlobalSettlementLearningFocuses = [
  {
    value: "settlementPatterns",
    label: "Global Settlement Patterns"
  },
  {
    value: "settlementFactors",
    label: "Factors Influencing Human Settlement"
  },
  {
    value: "populationDistribution",
    label: "Population Distribution and Density"
  },
  {
    value: "urbanization",
    label: "Urbanization and Urban Growth"
  },
  {
    value: "landUse",
    label: "Land Use and Settlement"
  },
  {
    value: "sustainableCommunities",
    label: "Sustainable Communities"
  }
];

const grade8GlobalInequalitiesLearningFocuses = [
  {
    value: "economicDevelopment",
    label: "Economic Development"
  },
  {
    value: "qualityOfLife",
    label: "Quality of Life"
  },
  {
    value: "developmentIndicators",
    label: "Indicators of Development and Quality of Life"
  },
  {
    value: "globalInequalities",
    label: "Patterns of Global Inequality"
  },
  {
    value: "factorsAffectingDevelopment",
    label: "Factors Affecting Economic Development"
  },
  {
    value: "reducingInequality",
    label: "Approaches to Reducing Global Inequality"
  }
];

// ========================================
// GEOGRAPHY LEARNING FOCUS LOOKUP
// ========================================

export const geographyLearningFocuses = {
  grade7: {
    physicalPatternsInAChangingWorld:
      grade7PhysicalPatternsInAChangingWorldLearningFocuses,

    naturalResourcesAroundTheWorld:
      grade7NaturalResourcesAroundTheWorldLearningFocuses
  },

  grade8: {
    globalSettlement: grade8GlobalSettlementLearningFocuses,

    globalInequalities: grade8GlobalInequalitiesLearningFocuses
  }
};

export default geographyLearningFocuses;
