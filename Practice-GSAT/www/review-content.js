"use strict";
// Original independent practice material.
const SUPPLEMENT = {
  questions: {
    science: [
      ["Which design best tests whether fertilizer increases plant growth?", ["Compare different species under different lighting.", "Randomly assign similar plants to fertilized and unfertilized groups, keeping other conditions constant.", "Fertilize only the tallest plants.", "Observe fertilized plants without a comparison group."], 1, "Step 1: Identify fertilizer as the independent variable and growth as the outcome. Step 2: Control species, light, water, and soil. Step 3: Use random assignment and an unfertilized comparison group to reduce alternative explanations."],
      ["An object has a mass of 240 g and a volume of 80 cm³. What is its density?", ["0.33 g/cm³", "160 g/cm³", "3 g/cm³", "320 g/cm³"], 2, "Step 1: Density = mass / volume. Step 2: Substitute 240 / 80. Step 3: The density is 3 g/cm³."],
      ["A 12-volt source is connected across a 4-ohm resistor. What current flows?", ["3 A", "0.33 A", "8 A", "48 A"], 0, "Step 1: Apply Ohm’s law, V = IR. Step 2: Rearrange: I = V/R. Step 3: I = 12/4 = 3 amperes."],
      ["Why does energy available for transfer generally decrease at successive trophic levels?", ["Energy is destroyed during feeding.", "Producers obtain energy from consumers.", "All consumed energy becomes new tissue.", "Organisms use energy for metabolism, and much is dispersed as heat."], 3, "Step 1: Organisms use energy for respiration, movement, and maintenance. Step 2: Only part becomes biomass available to the next consumer. Energy is conserved overall, but less remains available for transfer."],
      ["A solution changes from pH 6 to pH 4. How does its hydrogen ion concentration change?", ["It doubles.", "It increases one hundredfold.", "It decreases one hundredfold.", "It remains unchanged."], 1, "Step 1: Each decrease of one pH unit means ten times the hydrogen ion concentration. Step 2: The decrease is two units. Step 3: 10² = 100, so concentration increases one hundredfold."],
      ["In a single-gene inheritance model, two parents have genotypes Aa and Aa. What is the probability of an offspring with genotype aa?", ["0%", "50%", "25%", "75%"], 2, "Step 1: Each parent contributes A or a with equal probability. Step 2: The equally likely combinations are AA, Aa, aA, and aa. Step 3: One of four is aa: 1/4 = 25%."],
      ["Ice melts inside a sealed container. Which statement is correct?", ["Its chemical identity remains H₂O and total mass is conserved.", "All molecules split into hydrogen and oxygen gases.", "Total mass must decrease.", "Oxygen atoms disappear."], 0, "Step 1: Melting is a physical change of state. Step 2: Molecules remain H₂O. Step 3: No matter leaves the sealed container, so total mass is conserved."],
      ["A vehicle accelerates uniformly from rest to 20 m/s in 5 seconds. What is its acceleration?", ["100 m/s²", "0.25 m/s²", "15 m/s²", "4 m/s²"], 3, "Step 1: Acceleration = change in velocity / time. Step 2: a = (20 − 0)/5. Step 3: a = 4 m/s²."],
      ["How does new oceanic crust form at a divergent plate boundary?", ["River sediments are compressed.", "Magma rises and solidifies as plates move apart.", "Ocean water converts to rock.", "Continental plates collide and fold."], 1, "Step 1: Divergent plates move apart. Step 2: Magma rises into the space. Step 3: Cooling and solidification produce new oceanic crust."],
      ["Which explanation best describes the evolution of antibiotic resistance through natural selection?", ["Bacteria deliberately develop resistance.", "All bacteria mutate identically when exposed.", "Resistant variants survive and reproduce more successfully during antibiotic exposure.", "Individuals acquire resistance simply because they need it."], 2, "Step 1: Heritable variation can include resistance. Step 2: Antibiotics eliminate more susceptible bacteria. Step 3: Resistant survivors leave more offspring, increasing resistance in the population."]
    ],
    analogy: [
      ["HYPOTHESIS : TESTABLE PROPOSITION :: THEORY : _____", ["isolated measurement", "personal preference", "comprehensive explanatory framework", "experimental apparatus"], 2, "Step 1: Identify a term-to-description relationship. Step 2: A scientific theory is a comprehensive explanatory framework supported by evidence."],
      ["THERMOMETER : TEMPERATURE :: BAROMETER : _____", ["atmospheric pressure", "wind direction", "relative humidity", "rainfall"], 0, "Step 1: A thermometer measures temperature. Step 2: Preserve instrument-to-measurement direction. A barometer measures atmospheric pressure."],
      ["AUTHOR : NOVEL :: COMPOSER : _____", ["orchestra", "audience", "instrument", "symphony"], 3, "Step 1: An author creates a novel. Step 2: A composer creates a symphony. The other choices are associated with music but do not match creator to created work."],
      ["SCARCE : ABUNDANT :: TRANSIENT : _____", ["temporary", "permanent", "brief", "occasional"], 1, "Step 1: Scarce and abundant are opposites. Step 2: Transient means temporary. Step 3: Its opposite is permanent."],
      ["CHAPTER : BOOK :: STANZA : _____", ["sentence", "library", "poem", "syllable"], 2, "Step 1: A chapter is a structural part of a book. Step 2: A stanza is a structural part of a poem. Preserve part-to-whole direction."],
      ["EDITOR : MANUSCRIPT :: AUDITOR : _____", ["financial records", "court judgment", "laboratory specimen", "architectural blueprint"], 0, "Step 1: An editor professionally examines a manuscript. Step 2: An auditor examines financial records. Match professional to material reviewed."],
      ["SEED : GERMINATION :: EGG : _____", ["migration", "pollination", "evaporation", "hatching"], 3, "Step 1: Germination is the developmental emergence associated with a seed. Step 2: Hatching is the corresponding emergence associated with an egg."],
      ["OPAQUE : LIGHT :: IMPERMEABLE : _____", ["sound", "fluid", "heat", "color"], 1, "Step 1: Opaque material prevents light from passing through. Step 2: Impermeable material prevents fluid from passing through. Preserve barrier-to-substance relationship."],
      ["METICULOUS : CAREFUL :: CANDID : _____", ["hesitant", "ornate", "frank", "guarded"], 2, "Step 1: Meticulous and careful are similar in meaning. Step 2: Candid means frank or straightforward. Match synonym to synonym."],
      ["DROUGHT : WATER SHORTAGE :: CROP FAILURE : _____", ["food shortage", "increased rainfall", "soil formation", "seed germination"], 0, "Step 1: Drought can cause water shortage. Step 2: Crop failure can cause food shortage. Both pairs express cause and plausible consequence."]
    ]
  },
  lessons: {
    science: [
      ["Scientific investigation", "Identify independent and dependent variables, controlled conditions, and a comparison group.", "To test fertilizer, vary fertilizer while keeping water, light, and plant species comparable."],
      ["Quantitative science", "Write the formula, substitute values with units, calculate, and check the result.", "Density = mass / volume. For 150 g in 50 cm³: 150/50 = 3 g/cm³."],
      ["Core scientific concepts", "Review inheritance, natural selection, energy transfer, physical changes, pH, and plate tectonics.", "A three-unit decrease in pH means a 10³ = 1,000-fold increase in hydrogen ion concentration."]
    ],
    analogy: [
      ["Identify the relationship", "Express the first pair as a sentence. Consider synonym, antonym, part to whole, function, and cause to effect.", "LENS : CAMERA expresses part to whole."],
      ["Preserve direction", "Apply the same relationship in the same order. Association alone is insufficient.", "WRITER : ESSAY matches SCULPTOR : STATUE: creator to created work."],
      ["Eliminate alternatives", "Reject choices that reverse the relationship or change its type.", "CAUTIOUS : PRUDENT matches BRIEF : CONCISE because both pairs are synonyms."]
    ]
  }
};
