"use strict";

// Independent practice items. Each item includes its own answer rationale.
const EXTENDED = {english: [], math: [], science: [], analogy: [], logic: []};
const addItem = (subject, stem, options, answer, solution) => {
  EXTENDED[subject].push([stem, options, answer, solution]);
};

const passages = [
  ["A graduate student receives critical feedback on a proposal. Rather than abandoning the topic, she separates comments about the research question from comments about the method and revises each in turn.", "Organized revision can turn critical feedback into a practical improvement plan.", "She is willing to evaluate feedback rather than treat it as a final judgment of her ability.", "How a student responds to proposal feedback", ["Critical feedback requires immediate withdrawal.", "A proposal needs no revision once submitted.", "Changing the topic is always the best response."]],
  ["A community introduces an online appointment system. Waiting times decline for users with internet access, but residents without connectivity still queue in person. The office retains a walk-in desk while evaluating the system.", "Improving efficiency may require preserving access for people excluded by a digital service.", "The office recognizes that residents have different access needs.", "Balancing digital efficiency with public access", ["Digital systems eliminate every service barrier.", "All residents can use online appointments.", "Walk-in services are always more efficient."]],
  ["A researcher reports a promising association between sleep duration and examination scores. Because the study did not assign sleep schedules, the report recommends further investigation before making a causal claim.", "Promising observational findings require caution about causation.", "Other factors may help explain the observed association.", "Interpreting an observational finding cautiously", ["The study proves sleep is the only cause of achievement.", "Observational studies never provide useful information.", "Every student requires the same sleep schedule."]],
  ["A scholarship panel considers both academic achievement and financial circumstances. Its policy states that merit identifies preparedness, while financial assessment identifies barriers that assistance may reduce.", "Merit and financial assessment serve different purposes in scholarship decisions.", "A well-prepared applicant may still face financial barriers.", "Distinct roles of merit and need in scholarship selection", ["Financial need proves academic readiness.", "Grades reveal every applicant’s financial situation.", "Scholarships should ignore preparedness."]],
  ["A student working full time schedules short review sessions throughout the week. Although each session is brief, regular error analysis helps the student identify recurring weaknesses before the next session.", "Consistent practice with error analysis can guide focused preparation.", "The student uses past mistakes to determine what to review.", "Using regular feedback to focus study", ["Only uninterrupted full-day sessions are useful.", "Review time matters more than how it is used in every case.", "Mistakes should be ignored until examination day."]],
  ["A university consults residents before designing a flood study. Residents identify frequently blocked drainage channels that earlier maps did not show. Engineers combine these observations with field measurements.", "Local knowledge can complement technical evidence in research.", "Existing maps may omit information relevant to the investigation.", "Combining community knowledge and field measurement", ["Community observations make measurement unnecessary.", "Maps are always more accurate than field evidence.", "Residents and engineers cannot contribute to the same study."]],
  ["A department reports high satisfaction among respondents to an optional course survey. The report also notes a low response rate and avoids claiming that the results represent every enrolled student.", "A favorable survey result must be interpreted in light of participation limits.", "Nonrespondents may have views different from those of respondents.", "Recognizing limitations in voluntary survey findings", ["A positive response proves universal satisfaction.", "Low participation guarantees all responses are false.", "Optional surveys necessarily establish causation."]],
  ["During a group project, one member misses two deadlines. The team first clarifies responsibilities and asks about obstacles, then agrees on revised milestones and a process for reporting delays.", "Clear expectations and constructive discussion can address coordination problems.", "The team considers both accountability and possible barriers to participation.", "A structured response to missed group deadlines", ["Missed deadlines always indicate lack of ability.", "Responsibilities should remain undefined.", "Teamwork requires avoiding difficult conversations."]],
  ["An institution introduces reusable laboratory materials where safety standards permit. Procurement costs fall, but staff continue to use disposable supplies for procedures with contamination risks.", "Resource efficiency must be balanced with procedure-specific safety requirements.", "Not every laboratory procedure is suitable for reusable supplies.", "Balancing sustainability and laboratory safety", ["All disposable supplies can safely be removed.", "Lower costs establish that every procedure is safer.", "Safety requirements are irrelevant to procurement."]],
  ["After an unsuccessful application, an applicant requests feedback, reviews prerequisite gaps, and develops a study plan. The applicant treats the result as information for a future attempt rather than as a complete measure of personal worth.", "A setback can inform a constructive plan without defining a person’s worth.", "The applicant distinguishes an admission outcome from overall personal value.", "Responding constructively to an admission setback", ["An unsuccessful application proves permanent inability.", "Feedback cannot influence future preparation.", "Applying again guarantees admission."]]
];
passages.forEach(([text, main, inference, title, distractors], i) => {
  addItem('english', `Read the passage: “${text}” Which statement best expresses its main idea?`, [main, ...distractors], 0, `Identify the action and its purpose across the whole passage. The best summary is: ${main} The other options introduce absolute claims or contradict the passage.`);
  addItem('english', `Read the passage: “${text}” Which inference is most strongly supported?`, [distractors[1], inference, distractors[0], distractors[2]], 1, `An inference must follow from the stated details without requiring a universal claim. ${inference}`);
  addItem('english', `Read the passage: “${text}” Which title most accurately reflects its focus?`, ['A guarantee of institutional success', 'Why evaluation should be discontinued', title, 'A comparison of national examination scores'], 2, `Select a title covering the central situation rather than an unsupported outcome. “${title}” captures the passage’s focus.`);
});

for (let n = 1; n <= 5; n++) {
  const base = 100000 + n * 20000, rate = 5 + n;
  const final = base * (100 + rate) * 90 / 10000;
  addItem('math', `A research grant of ₱${base.toLocaleString('en-US')} increases by ${rate}% and then decreases by 10%. What amount remains?`, [final, base * (100 + rate - 10) / 100, base * 0.9, base * (100 + rate) / 100].map(x => `₱${x.toLocaleString('en-US')}`), 0, `Step 1: Apply the increase: ${base} × ${(100 + rate)/100}. Step 2: Apply the reduction to the revised amount: multiply by 0.90. Step 3: The final amount is ₱${final.toLocaleString('en-US')}. Adding the percentages directly would use the wrong base.`);
  const a = 65 + n, b = 80 + n, mean = (2*a+3*b)/5;
  addItem('math', `A class of 20 students has a mean score of ${a}; a class of 30 has a mean of ${b}. What is their combined mean?`, [mean+1, (a+b)/2, mean, mean-1].map(String), 2, `Step 1: Compute total scores: 20 × ${a} + 30 × ${b}. Step 2: Divide by 50 students. Step 3: The weighted mean is ${mean}. A simple average would incorrectly give the classes equal weight.`);
  const cost = 400 + n*100, per = 25+n*5, count = 24+n, budget=cost+per*count;
  addItem('math', `An outreach event costs ₱${cost} plus ₱${per} per participant. With ₱${budget}, how many participants can be accommodated?`, [count-1,count,count+1,count+5].map(String), 1, `Step 1: Subtract the fixed cost: ${budget} − ${cost} = ${budget-cost}. Step 2: Divide the remainder by ${per}. Step 3: The maximum is ${count} participants.`);
  const hours=2+n;
  addItem('math', `One encoder completes a dataset in ${hours} hours; another needs ${hours*2} hours. At constant rates, how long do they need together?`, [`${hours} hours`, `${hours*1.5} hours`, `${hours*3} hours`, `${hours*2}/3 hours`], 3, `Step 1: Add rates, not times: 1/${hours} + 1/${hours*2} = 3/${hours*2} datasets per hour. Step 2: Take the reciprocal. Time = ${hours*2}/3 hours.`);
  const total=100+n*20, initial=50, target=75;
  addItem('math', `A survey has received responses from ${initial}% of ${total} invitees. How many more responses are required for a ${target}% response rate?`, [total/4,total/2,total*3/4,total/5].map(String), 0, `Step 1: Required responses = 0.75 × ${total}. Step 2: Current responses = 0.50 × ${total}. Step 3: Difference = 0.25 × ${total} = ${total/4}.`);
  const width=5+n, length=width+4;
  addItem('math', `A rectangular study room has perimeter ${2*(width+length)} meters. Its length exceeds its width by 4 meters. Find its area.`, [width*length+4,width*length-4,width*length,2*(width+length)].map(x=>`${x} m²`), 2, `Step 1: L + W = ${width+length} and L − W = 4. Step 2: Add the equations to obtain L = ${length}; then W = ${width}. Step 3: Area = ${length} × ${width} = ${length*width} m².`);
}

const facts = [
 ['Which organelle is the main site of aerobic ATP production in a typical eukaryotic cell?', ['Ribosome','Mitochondrion','Nucleus','Golgi apparatus'],1,'Mitochondria carry out major stages of aerobic respiration. Ribosomes synthesize proteins; the nucleus stores most genetic material.'],
 ['Which process moves water across a selectively permeable membrane in response to a water potential difference?', ['Osmosis','Mitosis','Transcription','Combustion'],0,'Osmosis is the movement of water across a selectively permeable membrane. It is distinct from cell division and gene expression.'],
 ['Which molecule carries amino acids to the ribosome during translation?', ['DNA','Glucose','tRNA','Starch'],2,'Transfer RNA carries an amino acid and pairs its anticodon with a messenger RNA codon at the ribosome.'],
 ['Which condition would most directly reduce photosynthesis when other factors are adequate?', ['Greater availability of carbon dioxide','Adequate water supply','Suitable light intensity','Absence of light'],3,'Photosynthesis requires light for the light-dependent reactions. Removing light limits the energy input.'],
 ['A population loses genetic variation after a sudden disaster kills most individuals. Which mechanism is illustrated?', ['Bottleneck effect','Artificial selection','Gene duplication in every survivor','Directed mutation'],0,'A bottleneck is a sharp reduction in population size. Chance survival can change allele frequencies and reduce variation.'],
 ['Which component of blood primarily transports oxygen?', ['Platelets','Red blood cells','Plasma antibodies','White blood cells'],1,'Red blood cells contain hemoglobin, which binds oxygen. Platelets contribute to clotting and white cells to immune defense.'],
 ['What is the primary role of decomposers in an ecosystem?', ['Create sunlight','Prevent all nutrient movement','Recycle nutrients from dead organic material','Convert every consumer into a producer'],2,'Decomposers break down dead material and release nutrients that can be reused by other organisms.'],
 ['Which statement about enzymes is correct?', ['They are consumed completely in every reaction.','They change the identity of the products arbitrarily.','They make every reaction independent of temperature.','They lower activation energy for specific reactions.'],3,'Enzymes act as catalysts by lowering activation energy. Their activity depends on conditions such as temperature and pH.'],
 ['An atom has 11 protons and 12 neutrons. What is its mass number?', ['23','11','12','1'],0,'Step 1: Mass number = protons + neutrons. Step 2: 11 + 12 = 23. Electrons do not contribute to the mass number.'],
 ['Which particle determines an element’s atomic number?', ['Neutron','Proton','Electron pair','Molecule'],1,'Atomic number equals the number of protons. Changing proton count changes the element.'],
 ['Which is a chemical change?', ['Melting wax','Cutting paper','Rusting iron','Boiling water'],2,'Rusting forms new substances through chemical reactions. The other changes alter state or shape without necessarily changing chemical identity.'],
 ['A gas is compressed at constant temperature from 6 L to 3 L. If its initial pressure is 100 kPa, what is its final pressure?', ['50 kPa','100 kPa','150 kPa','200 kPa'],3,'Step 1: Boyle’s law gives P₁V₁ = P₂V₂ for fixed gas amount at constant temperature. Step 2: P₂ = 100 × 6/3 = 200 kPa.'],
 ['Which solution has the highest hydrogen ion concentration?', ['pH 2','pH 5','pH 7','pH 10'],0,'Lower pH corresponds to higher hydrogen ion concentration. Among these values, pH 2 is lowest.'],
 ['What is the molar mass of H₂O using H = 1 and O = 16?', ['17 g/mol','18 g/mol','32 g/mol','34 g/mol'],1,'Step 1: Count two hydrogen atoms and one oxygen atom. Step 2: 2 × 1 + 16 = 18 g/mol.'],
 ['Which method best separates dissolved salt from water when the goal is to recover the water?', ['Sieving','Ordinary filtration','Distillation','Magnetic separation'],2,'Distillation vaporizes and then condenses water while leaving dissolved nonvolatile salt behind. Ordinary filtration cannot remove dissolved ions.'],
 ['Which force opposes relative sliding between contacting surfaces?', ['Buoyancy','Magnetism in every material','Nuclear force','Friction'],3,'Friction acts along contacting surfaces and opposes relative sliding or its tendency.'],
 ['A 2 kg object accelerates at 3 m/s². What net force acts on it?', ['6 N','1.5 N','5 N','9 N'],0,'Step 1: Newton’s second law is F = ma. Step 2: 2 × 3 = 6 newtons.'],
 ['A 60 W lamp operates for 5 hours. How much electrical energy does it use?', ['12 Wh','300 Wh','65 Wh','3,000 Wh'],1,'Step 1: Energy = power × time. Step 2: 60 W × 5 h = 300 Wh = 0.3 kWh.'],
 ['A wave has frequency 5 Hz and wavelength 2 m. What is its speed?', ['2.5 m/s','7 m/s','10 m/s','25 m/s'],2,'Step 1: Wave speed v = fλ. Step 2: 5 × 2 = 10 m/s.'],
 ['Which change increases gravitational potential energy near Earth’s surface?', ['Lowering the object','Removing its mass','Keeping height and mass constant','Raising the object'],3,'Near Earth, gravitational potential energy is mgh. With mass and gravity fixed, increasing height increases energy.'],
 ['Why can sound not travel through an ideal vacuum?', ['It requires a material medium.','It is always slower than light.','It has no frequency.','Its wavelength is always zero.'],0,'Sound is a mechanical wave transmitted through interactions among particles. An ideal vacuum lacks that medium.'],
 ['Which heat transfer mechanism can carry energy through empty space?', ['Conduction','Radiation','Convection','Diffusion of liquid water'],1,'Electromagnetic radiation can travel through a vacuum. Conduction and convection require matter.'],
 ['A 10 N force moves an object 4 m in the direction of the force. How much work is done?', ['2.5 J','14 J','40 J','400 J'],2,'Step 1: Work = force × displacement when aligned. Step 2: 10 × 4 = 40 joules.'],
 ['Which layer of Earth is predominantly liquid?', ['Crust','Inner core','Lithosphere','Outer core'],3,'The outer core is predominantly liquid iron alloy. The inner core is solid under much greater pressure.'],
 ['What drives much of the water cycle?', ['Solar energy and gravity','Earth’s magnetic field alone','Tidal forces alone','Combustion in clouds'],0,'Solar energy powers evaporation, and gravity contributes to precipitation, runoff, and downward movement.'],
 ['Which rock type forms when existing rock changes under heat and pressure without fully melting?', ['Sedimentary','Metamorphic','Extrusive igneous','Volcanic glass only'],1,'Metamorphism changes existing rock through heat, pressure, and fluids without complete melting.'],
 ['What is the main reason Earth has seasons?', ['Large seasonal changes in distance from the Sun','Changing mass of the Sun','Earth’s axial tilt during its orbit','Earth’s rotation stopping temporarily'],2,'Axial tilt changes sunlight angle and day length across the year. Distance alone does not explain opposite seasons in the hemispheres.'],
 ['Which action most directly reduces soil erosion on a bare slope?', ['Removing roots','Increasing unprotected runoff','Repeatedly exposing loose soil','Establishing vegetation cover'],3,'Roots stabilize soil, and plant cover reduces the direct impact of rainfall and slows runoff.'],
 ['Which observation is most relevant to evaluating a claim that water quality improved?', ['Comparable measurements of relevant contaminants before and after intervention','A new logo for the water utility','More advertisements about the project','The color of the testing office'],0,'Use direct, comparable measurements of the claimed outcome. Publicity and appearance do not measure water quality.'],
 ['Why should a scientific experiment be reproducible?', ['To guarantee that every hypothesis is true','To allow independent checking of methods and results','To eliminate all natural variation','To avoid recording procedures'],1,'Reproducibility allows others to evaluate whether stated methods support similar results, helping detect errors and assess reliability.']
];
facts.forEach(item => addItem('science', ...item));

const analogies = [
 ['SURGEON : SCALPEL','CARPENTER','saw','stethoscope','telescope','compass','professional to characteristic tool'],
 ['BOTANIST : PLANTS','ZOOLOGIST','animals','minerals','stars','languages','specialist to subject studied'],
 ['ARCHITECT : BLUEPRINT','COMPOSER','score','audience','stage','instrument','creator to plan or notation produced'],
 ['DICTIONARY : WORDS','ATLAS','maps','poems','equations','experiments','reference work to primary contents'],
 ['KEY : LOCK','PASSWORD','account','keyboard','screen','printer','means of access to secured target'],
 ['ROOT : TREE','FOUNDATION','building','window','roof','paint','supporting base to supported whole'],
 ['PAGE : BOOK','BRICK','wall','cement','quarry','kiln','component to larger structure'],
 ['MINUTE : HOUR','CENTIMETER','meter','kilogram','liter','second','smaller unit to larger unit of the same quantity'],
 ['PUPIL : EYE','VALVE','heart','brain','bone','skin','anatomical structure to organ containing it'],
 ['FINGER : HAND','TOE','foot','leg','arm','shoulder','digit to body part'],
 ['BENEVOLENT : KIND','DILIGENT','industrious','careless','reluctant','hostile','synonym'],
 ['AMBIGUOUS : UNCLEAR','SUCCINCT','concise','lengthy','confused','ornate','synonym'],
 ['ROBUST : STRONG','FRAGILE','delicate','durable','rigid','abundant','synonym'],
 ['MITIGATE : LESSEN','EXACERBATE','worsen','clarify','measure','conceal','synonym'],
 ['VERIFY : CONFIRM','REFUTE','disprove','repeat','assume','praise','synonym'],
 ['EXPAND : CONTRACT','ACCEPT','reject','receive','admit','approve','antonym'],
 ['EXPLICIT : IMPLICIT','VISIBLE','invisible','obvious','bright','clear','antonym'],
 ['OPTIMISM : PESSIMISM','CERTAINTY','doubt','confidence','accuracy','knowledge','antonym'],
 ['RIGID : FLEXIBLE','HOSTILE','friendly','angry','severe','distant','antonym'],
 ['ABUNDANCE : SCARCITY','CLARITY','ambiguity','precision','transparency','certainty','antonym'],
 ['KNIFE : CUT','SIEVE','separate','measure temperature','magnify','generate light','tool to function'],
 ['LUNGS : GAS EXCHANGE','KIDNEYS','filtering blood','pumping blood','producing sound','moving bones','organ to principal function'],
 ['UMBRELLA : RAIN','SUNSCREEN','ultraviolet exposure','wind speed','soil moisture','air pressure','protective measure to exposure addressed'],
 ['VACCINE : PREVENTION','THERAPY','treatment','diagnostic image','specimen','inheritance','intervention to principal purpose'],
 ['QUESTION : ANSWER','PROBLEM','solution','assumption','distraction','description','challenge to corresponding resolution'],
 ['PRACTICE : PROFICIENCY','EXERCISE','fitness','fatigue only','height','age','activity to intended improvement'],
 ['SPARK : IGNITION','SEED','plant growth','erosion','condensation','evaporation','initiating entity to ensuing process'],
 ['EROSION : SOIL LOSS','DEFORESTATION','habitat loss','mineral formation','increased forest cover','tidal change','process to plausible consequence'],
 ['EVIDENCE : CONCLUSION','PREMISES','inference','apparatus','population','measurement unit','basis to reasoned outcome'],
 ['OUTLINE : ESSAY','PLAN','project','deadline','budget deficit','obstacle','organizing design to developed work']
];
analogies.forEach(([first, word, correct, d1,d2,d3,relation], i) => {
  const options=[correct,d1,d2,d3]; const answer=i%4;
  for(let j=0;j<answer;j++) options.unshift(options.pop());
  addItem('analogy', `${first} :: ${word} : _____`, options, answer, `Step 1: Identify the relationship in the first pair: ${relation}. Step 2: Apply that relationship in the same direction to ${word.toLowerCase()}. Step 3: The matching term is ${correct}.`);
});

const contexts = [
 ['scholarship applications','financial screening','applicants'],
 ['research proposals','ethics review','researchers'],
 ['community projects','safety assessment','organizers'],
 ['laboratory submissions','technical validation','students'],
 ['training requests','supervisor approval','employees']
];
contexts.forEach(([items, requirement, people]) => {
  addItem('logic', `All approved ${items} have completed ${requirement}. Some submissions from ${people} are approved. What necessarily follows?`, [`Some submissions from ${people} have completed ${requirement}.`, `Every submission from ${people} is approved.`, `Completing ${requirement} guarantees approval.`, 'No conclusion about any submission is possible.'], 0, `Step 1: Approved submissions belong to the group with completed ${requirement}. Step 2: Some submissions are approved. Step 3: Those particular submissions must have completed the requirement. Do not reverse the implication.`);
  addItem('logic', `Approval of ${items} requires ${requirement}. A submission has not completed ${requirement}. Which conclusion follows?`, ['Approval is guaranteed.', 'The submission cannot yet be approved under the rule.', 'The submission was never received.', 'The author is unqualified for all future applications.'], 1, 'Step 1: Identify the necessary condition for approval. Step 2: That condition is absent. Step 3: Approval is therefore excluded under the stated rule; unrelated conclusions about the person do not follow.');
  addItem('logic', `The processing time for ${items} fell after a new portal was introduced. Which finding most weakens the claim that the portal caused the reduction?`, ['The portal displays application status.', 'The portal accepts electronic documents.', 'Processing staff doubled during the same period.', 'The portal has an accessible help page.'], 2, 'Step 1: The claim assigns the change to one cause. Step 2: Increased staffing is an alternative explanation for faster processing. Step 3: This weakens attribution to the portal alone.');
  addItem('logic', `A survey about ${items} includes only people attending a voluntary preparation workshop. What most limits generalization to all ${people}?`, ['The survey has a clear topic.', 'The workshop has a published schedule.', 'The respondents can express opinions.', 'Workshop attendees may differ systematically from nonattendees.'], 3, 'Step 1: Identify the target population and who was sampled. Step 2: Voluntary workshop attendance may be associated with greater interest or preparation. Step 3: This selection difference limits representativeness.');
  addItem('logic', `A team recommends a digital-only process for ${items} because it reduces printing costs. Which assumption is most necessary?`, ['Intended users can obtain adequate access to the digital process.', 'Every user prefers screens to paper.', 'Printing costs are identical in every office.', 'The portal never requires maintenance.'], 0, 'Step 1: A replacement process must remain usable by its intended users. Step 2: Access is therefore necessary to the recommendation. Universal preference and zero maintenance are not required.');
});

const EXTRA_PROMPTS = [
 ['My purpose in taking the GSAT', 'Why are you taking the GSAT at this stage of your life? Connect your motivation to a specific academic goal, professional direction, and contribution you hope to make. Explain how you plan to prepare responsibly.'],
 ['Responding when I feel discouraged', 'Imagine that repeated setbacks have left you feeling discouraged and doubtful of your abilities. What constructive steps would you take? Discuss reflection, realistic goals, support from trusted people, and how you would recognize progress. You may use a hypothetical example.'],
 ['A setback that changes my approach', 'You receive an examination result below your target despite substantial preparation. Explain how you would evaluate what happened, adjust your study methods, and decide on your next steps without allowing one result to define your worth.'],
 ['Choosing integrity under pressure', 'A classmate offers you a leaked answer key shortly before an admission examination. Explain your response, the principles guiding it, and how you would address the pressure to succeed.'],
 ['Balancing work, family, and graduate study', 'You have been admitted to graduate school while working and supporting family responsibilities. Present a realistic plan for managing time, communicating commitments, and responding when priorities conflict.'],
 ['A community problem I want to investigate', 'Identify a community problem you would like to study in graduate school. Explain a focused research question, the evidence you would need, and how community members could participate in the work.'],
 ['Receiving difficult feedback', 'Your adviser identifies major weaknesses in a proposal you worked hard to develop. Explain how you would respond professionally, distinguish criticism of the work from personal judgment, and organize a revision plan.'],
 ['Leading a team through disagreement', 'A project team disagrees over how limited resources should be allocated. Explain how you would help the group compare options, include quieter members, and reach an accountable decision.'],
 ['When a study plan stops working', 'You notice that long study sessions are producing little improvement. Explain how you would investigate the problem, test a revised approach, and measure whether it is helping.'],
 ['Success beyond an admission result', 'What would meaningful progress look like for you beyond passing an admission examination? Discuss the capabilities, habits, and responsibilities you hope graduate education will help you develop.'],
 ['Using technology responsibly', 'A generative AI tool produces a persuasive answer containing unsupported claims. Explain how you would verify the material, protect academic integrity, and decide what belongs in your own work.'],
 ['Service when resources are limited', 'You are asked to lead an educational outreach activity with a small budget. Explain how you would identify priorities, consult participants, and evaluate whether the activity achieved its purpose.']
];
