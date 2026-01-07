// GK → Physics

import { physicsMotionQuestions } from "./questions/generalKnowledge/gs/physics/phys-motion";
import {physicsFrictionQuestions} from "./questions/generalKnowledge/gs/physics/phys-friction"
import { physicsUnitsQuestions } from "./questions/generalKnowledge/gs/physics/phys-units";
import { numberSystemQuestions } from "./questions/maths/numbersystem";
import { timeAndWorkQuestions } from "./questions/maths/timeandwork";


import { reasoningBloodRelationQuestions } from "./questions/resoning/3_bloodrelations";

import { CodingDecodingQuestions_Part1 } from "./questions/resoning/1_coding_decoding";
import { reasoningDirectionQuestions } from "./questions/resoning/5_directions";
import { reasoningAnalogyQuestions_Part1 } from "./questions/resoning/2_analogy";
import { reasoningNumberMissing_Part1 } from "./questions/resoning/7_missing_number";
import { reasoningAgeQuestions } from "./questions/resoning/15_age";
import { reasoningGeneralLogicQuestions } from "./questions/resoning/logical";
import { reasoningOrderRankingQuestions_Part1 } from "./questions/resoning/4_orderand_ranking";
import { reasoningAlphabetQuestions } from "./questions/resoning/6_dictonary_words";
import { reasoningNumberSeries_Part1 } from "./questions/resoning/8_number_series";
import { reasoningLetterSeries_Part1 } from "./questions/resoning/9_letter_series";
import { reasoningAlphabet_Part1 } from "./questions/resoning/10_alphanumeric";
import { physicsForceQuestions } from "./questions/generalKnowledge/gs/physics/phys-force";
import { physicsWorkPowerEnergyQuestions } from "./questions/generalKnowledge/gs/physics/phys-work";
import { physicsHeatTemperatureQuestions } from "./questions/generalKnowledge/gs/physics/phys-heat";
import { physicsSoundQuestions } from "./questions/generalKnowledge/gs/physics/phys-sound";
import { physicsLightQuestions } from "./questions/generalKnowledge/gs/physics/phys_light";
import { physicsElectricityQuestions } from "./questions/generalKnowledge/gs/physics/phys-elect";
import { physicsMagnetismQuestions } from "./questions/generalKnowledge/gs/physics/phys-mag";
import { chemistryMatterQuestions } from "./questions/generalKnowledge/gs/chemistry/chm-matter";
import { chemistryECMQuestions } from "./questions/generalKnowledge/gs/chemistry/chm-elements";
import { chemistryAcidBaseQuestions_Part1 } from "./questions/generalKnowledge/gs/chemistry/chm-acids";
import { chemistryMetalNonMetalQuestions } from "./questions/generalKnowledge/gs/chemistry/chm-metals";
import { chemistryReactionQuestions_Part1 } from "./questions/generalKnowledge/gs/chemistry/chm-chemical";
import { chemistryPeriodicTableQuestions } from "./questions/generalKnowledge/gs/chemistry/chm-period";
import { biologyCellQuestions } from "./questions/generalKnowledge/gs/biology/1-bio-cell";
import { biologyDigestiveSystemQuestions } from "./questions/generalKnowledge/gs/biology/2-bio-digestive";
import { biologyRespiratorySystemQuestions } from "./questions/generalKnowledge/gs/biology/2-2-bio-human-respiratory";
import { biologyCirculatorySystemQuestions } from "./questions/generalKnowledge/gs/biology/2-3-bio-human-circulatory";
import { biologyPlantPhysiologyQuestions } from "./questions/generalKnowledge/gs/biology/3-bio-plant";
import { biologyNervousSystemQuestions } from "./questions/generalKnowledge/gs/biology/2-4-bio-human-nerverse";
import { biologyDiseaseNutritionQuestions_Part1 } from "./questions/generalKnowledge/gs/biology/4-bio-desases";

// Maths


// Reasoning

// 🔴 SINGLE SOURCE OF ALL QUESTIONS
export const ALL_QUESTIONS = [
  ...physicsUnitsQuestions,
  ...physicsMotionQuestions,
  ...physicsFrictionQuestions,
  ...physicsForceQuestions,
  ...physicsWorkPowerEnergyQuestions,
  ...physicsHeatTemperatureQuestions,
  ...physicsSoundQuestions,
  ...physicsLightQuestions,
  ...physicsElectricityQuestions,
  ...physicsMagnetismQuestions,

  ...chemistryMatterQuestions,
  ...chemistryAcidBaseQuestions_Part1,
  ...chemistryMetalNonMetalQuestions,
  ...chemistryECMQuestions,
  ...chemistryReactionQuestions_Part1,
  ...chemistryPeriodicTableQuestions,

  ...biologyCellQuestions,
  ...biologyDigestiveSystemQuestions,
  ...biologyRespiratorySystemQuestions,
  ...biologyCirculatorySystemQuestions,
  ...biologyNervousSystemQuestions,
  ...biologyDiseaseNutritionQuestions_Part1,

  ...biologyPlantPhysiologyQuestions,

  ...numberSystemQuestions,
  ...timeAndWorkQuestions,
  ...reasoningNumberMissing_Part1,

...reasoningBloodRelationQuestions,
  ...CodingDecodingQuestions_Part1,
  ...reasoningDirectionQuestions,
  ...reasoningAnalogyQuestions_Part1,
  ...reasoningAgeQuestions,
  ...reasoningGeneralLogicQuestions,
  ...reasoningOrderRankingQuestions_Part1,
  ...reasoningAlphabetQuestions,
  ...reasoningNumberSeries_Part1,
  ...reasoningLetterSeries_Part1,
  ...reasoningAlphabet_Part1
 
];
