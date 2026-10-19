
"use strict";

/* GSAT Prep 2026 — Interactive Reviewer */

const SUBJECTS = {
  english: {
    title: "Language Proficiency",
    icon: "Aa",
    description: "Academic language, textual analysis, and evidence-based interpretation."
  },
  math: {
    title: "Quantitative Reasoning",
    icon: "∑",
    description: "Applied algebra, numerical analysis, probability, and problem solving."
  },
  logic: {
    title: "Logical & Abstract Reasoning",
    icon: "◇",
    description: "Deductive inference, argument evaluation, and analytical reasoning."
  },
  science: {
    title: "Science",
    icon: "Sc",
    description: "Scientific investigation, biology, chemistry, physics, and Earth science."
  },
  analogy: {
    title: "Verbal Analogy",
    icon: "A:B",
    description: "Vocabulary, word relationships, and relational reasoning."
  },
  essay: {
    title: "Academic Writing",
    icon: "✎",
    description: "Argument development, evidence integration, and scholarly conventions."
  }
};

const RAW = {
  ...SUPPLEMENT.questions,
  "english": [
    [
      "Select the option that completes the sentence in accordance with standard academic usage: Neither the principal investigator nor the research assistants _____ available for consultation yesterday.",
      [
        "was",
        "were",
        "is",
        "has been"
      ],
      1,
      "With neither ... nor, the verb agrees with the nearer subject. Research assistants is plural, and yesterday requires the past tense: were."
    ],
    [
      "In the statement, \"The panel considered the evidence compelling but not conclusive,\" the word conclusive most nearly means:",
      [
        "relevant to the inquiry",
        "consistent with expectations",
        "sufficient to settle the issue",
        "obtained through observation"
      ],
      2,
      "Conclusive evidence settles an issue. Evidence may be persuasive without being sufficient to establish a definitive conclusion."
    ],
    [
      "Which sentence observes parallel structure?",
      [
        "The study aims to assess access, identifying barriers, and recommendations for policy.",
        "The study aims to assess access, identify barriers, and recommend policy changes.",
        "The study aims at assessing access, to identify barriers, and policy recommendations.",
        "The study aims to assess access, barriers are identified, and recommend policy changes."
      ],
      1,
      "Assess, identify, and recommend are parallel base-form verbs governed by the same infinitive marker, to."
    ],
    [
      "Read the passage: \"A university extended library hours during examinations. Attendance increased substantially, although average examination scores remained unchanged. Administrators concluded that attendance alone was insufficient to evaluate the policy.\" Which statement best expresses the main idea?",
      [
        "Extended library hours reduced examination performance.",
        "Library attendance is a reliable substitute for academic achievement.",
        "Students attended the library only during examinations.",
        "Policy evaluation requires measures beyond increased use of a service."
      ],
      3,
      "The passage contrasts greater attendance with unchanged scores and explicitly questions attendance as the sole evaluation measure."
    ],
    [
      "Read the passage: \"Although remote instruction expanded access for employed students, those with unreliable internet connections reported difficulty participating in seminars.\" Which inference is best supported?",
      [
        "The benefits of remote instruction may depend partly on access to reliable connectivity.",
        "Remote instruction is less effective for every employed student.",
        "Seminar participation determines all academic outcomes.",
        "All students prefer instruction delivered on campus."
      ],
      0,
      "The passage identifies both improved access and a connectivity-related barrier. It does not establish universal preferences or outcomes."
    ],
    [
      "Select the most appropriate transition: \"The sample was sufficiently large for the planned analysis. _____, its restriction to one institution limited the generalizability of the findings.\"",
      [
        "Consequently",
        "Similarly",
        "Nevertheless",
        "For example"
      ],
      2,
      "Nevertheless marks the contrast between adequate sample size and limited representativeness."
    ],
    [
      "Which revision most clearly corrects the misplaced modifier in \"After reviewing the proposal, several methodological weaknesses were identified by the committee\"?",
      [
        "After reviewing the proposal, several weaknesses were methodological.",
        "The committee, after the proposal, reviewed several methodological weaknesses.",
        "Several methodological weaknesses reviewed the proposal with the committee.",
        "After reviewing the proposal, the committee identified several methodological weaknesses."
      ],
      3,
      "The committee performed the review, so it should immediately follow the introductory phrase."
    ],
    [
      "In academic writing, which sentence most appropriately qualifies a conclusion drawn from a small observational study?",
      [
        "The findings prove that the intervention always succeeds.",
        "The findings suggest an association that warrants further investigation.",
        "The findings establish a universal causal mechanism.",
        "The findings eliminate the need for replication."
      ],
      1,
      "A small observational study can suggest an association, but by itself does not establish universal effectiveness or causality."
    ],
    [
      "Read the statement: \"The author acknowledges the efficiency of automated assessment but questions its capacity to evaluate original argumentation.\" The author's attitude is best described as:",
      [
        "unconditionally approving",
        "dismissive of all assessment",
        "cautiously critical",
        "indifferent to evaluation"
      ],
      2,
      "The author recognizes a benefit while questioning a limitation, indicating a measured critical position."
    ],
    [
      "Which sentence uses punctuation correctly?",
      [
        "The instrument was revised; however, the sampling procedure remained unchanged.",
        "The instrument was revised, however the sampling procedure remained unchanged.",
        "The instrument was revised however; the sampling procedure remained unchanged.",
        "The instrument was revised; however the sampling procedure, remained unchanged."
      ],
      0,
      "A semicolon joins the independent clauses, and a comma follows the conjunctive adverb however."
    ]
  ],
  "math": [
    [
      "A department increased its research allocation by 20% and subsequently reduced the revised allocation by 10%. If the original allocation was ₱250,000, what is the final allocation?",
      [
        "₱250,000",
        "₱275,000",
        "₱270,000",
        "₱280,000"
      ],
      2,
      "₱250,000 × 1.20 × 0.90 = ₱270,000. Successive percentage changes apply to different bases."
    ],
    [
      "Two groups have mean scores of 76 and 84, respectively. If the first group contains 30 participants and the second contains 20, what is the combined mean?",
      [
        "79.2",
        "80.0",
        "80.8",
        "78.4"
      ],
      0,
      "The weighted mean is (30 × 76 + 20 × 84) / 50 = 3,960 / 50 = 79.2."
    ],
    [
      "A project requires a fixed fee of ₱1,200 plus ₱75 per participant. If the total budget is ₱4,950, what is the maximum number of participants that can be accommodated?",
      [
        "48",
        "49",
        "50",
        "66"
      ],
      2,
      "Solve 1,200 + 75n ≤ 4,950. Thus n ≤ 3,750 / 75 = 50."
    ],
    [
      "A committee of two is selected at random from four faculty members and three students. What is the probability that both selected members are students?",
      [
        "1/7",
        "2/7",
        "3/7",
        "1/2"
      ],
      0,
      "There are 3 choose 2 = 3 student pairs and 7 choose 2 = 21 possible pairs. The probability is 3/21 = 1/7."
    ],
    [
      "A researcher can encode a dataset in 6 hours, while an assistant can encode the same dataset in 12 hours. At their constant individual rates, how long would they take working together?",
      [
        "3 hours",
        "6 hours",
        "9 hours",
        "4 hours"
      ],
      3,
      "Their combined rate is 1/6 + 1/12 = 1/4 dataset per hour, so completion takes 4 hours."
    ],
    [
      "The ratio of full-time to part-time students is 3:5. After 12 full-time students enroll, the ratio becomes 9:10. How many students were enrolled originally?",
      [
        "64",
        "72",
        "80",
        "96"
      ],
      0,
      "Let the original counts be 3k and 5k. Then (3k + 12)/(5k) = 9/10, giving 30k + 120 = 45k and k = 8. The original total was 8k = 64."
    ],
    [
      "The ordered scores are 61, 68, 72, 75, 79, 83, and 92. If the highest score is replaced by 99, which statement is correct?",
      [
        "Both the mean and median increase by 1.",
        "The mean increases by 1; the median remains unchanged.",
        "The median increases by 7; the mean remains unchanged.",
        "Both the mean and median remain unchanged."
      ],
      1,
      "The sum increases by 7 across seven scores, so the mean rises by 1. The fourth score, which is the median, remains 75."
    ],
    [
      "A survey obtained 180 responses from 240 invitations. What additional number of responses is needed to reach an 85% response rate, assuming no further invitations are issued?",
      [
        "12",
        "18",
        "24",
        "36"
      ],
      2,
      "An 85% response rate requires 0.85 × 240 = 204 responses. Therefore 204 − 180 = 24 additional responses are required."
    ],
    [
      "If x + y = 14 and 2x − y = 4, what is the value of xy?",
      [
        "36",
        "42",
        "56",
        "48"
      ],
      3,
      "Adding the equations gives 3x = 18, so x = 6. Then y = 8 and xy = 48."
    ],
    [
      "A rectangular laboratory has a perimeter of 46 meters. Its length exceeds its width by 5 meters. What is its area?",
      [
        "126 square meters",
        "120 square meters",
        "144 square meters",
        "161 square meters"
      ],
      0,
      "Length + width = 23 and length − width = 5. Thus length = 14, width = 9, and area = 126 square meters."
    ]
  ],
  "logic": [
    [
      "All approved projects have ethics clearance. Some student projects are approved projects. Which conclusion necessarily follows?",
      [
        "All student projects have ethics clearance.",
        "All projects with ethics clearance are approved.",
        "Some student projects have ethics clearance.",
        "No unapproved project has ethics clearance."
      ],
      2,
      "The student projects identified as approved must have ethics clearance. The premises do not establish the converse or a conclusion about every student project."
    ],
    [
      "If an application is complete, it is forwarded to the review panel. An application was not forwarded to the panel. Assuming the rule was followed, what follows?",
      [
        "The application was incomplete.",
        "The panel rejected the application.",
        "The applicant withdrew the application.",
        "The application was submitted late."
      ],
      0,
      "This is modus tollens: if complete implies forwarded, not forwarded implies not complete. The other explanations are not established."
    ],
    [
      "A university introduced online registration, after which enrollment increased. An administrator concludes that online registration caused the increase. Which information most weakens this conclusion?",
      [
        "Online registration reduced paperwork.",
        "Students could register outside office hours.",
        "The registration portal used secure authentication.",
        "A major scholarship program began during the same enrollment period."
      ],
      3,
      "The scholarship program supplies a plausible alternative explanation for the increase, weakening the causal attribution."
    ],
    [
      "A report recommends replacing all printed materials with digital copies because digital distribution costs less. Which assumption is most necessary to the recommendation?",
      [
        "Every student prefers digital reading.",
        "Students can obtain adequate access to the digital materials.",
        "Printed materials never improve comprehension.",
        "Distribution costs are identical across departments."
      ],
      1,
      "Replacing all printed materials presupposes that students can access their replacements. Universal preference and identical departmental costs are unnecessary."
    ],
    [
      "A survey of students attending a voluntary research seminar found strong support for expanding research requirements. What is the principal limitation in generalizing this result to all students?",
      [
        "The respondents may be more interested in research than the wider student population.",
        "Voluntary attendance guarantees dishonest responses.",
        "The survey cannot describe the opinions of its respondents.",
        "Research requirements cannot be studied using surveys."
      ],
      0,
      "Self-selection into a research seminar may produce a sample whose interests differ systematically from those of all students."
    ],
    [
      "Five presentations must be scheduled. P must precede Q; R must follow Q; S must precede P; T has no restrictions. Which sequence satisfies all conditions?",
      [
        "P, S, Q, T, R",
        "S, Q, P, R, T",
        "T, S, P, Q, R",
        "S, P, R, Q, T"
      ],
      2,
      "The required relative order is S before P before Q before R. Only T, S, P, Q, R preserves that order."
    ],
    [
      "No unpublished manuscripts are eligible for the award. Some eligible works are interdisciplinary. Which conclusion necessarily follows?",
      [
        "All published works are eligible.",
        "Some interdisciplinary works are not unpublished manuscripts.",
        "No interdisciplinary works are manuscripts.",
        "All interdisciplinary works are eligible."
      ],
      1,
      "The interdisciplinary works that are eligible cannot be unpublished manuscripts. Eligibility does not extend to every published or interdisciplinary work."
    ],
    [
      "A policy is adopted only if the board approves it. The board approved a particular policy. Which statement is justified?",
      [
        "The policy must have been adopted.",
        "The policy cannot be adopted.",
        "Board approval is sufficient to establish adoption.",
        "Adoption remains undetermined from this information alone."
      ],
      3,
      "Only if makes approval necessary for adoption. Approval alone does not establish that adoption occurred."
    ],
    [
      "A study finds that students who attend more tutorials earn higher grades. Which additional finding most strengthens a causal explanation involving tutorial attendance?",
      [
        "Students randomly assigned to additional tutorials improve more than a comparable control group.",
        "High-achieving students report enjoying tutorials.",
        "Tutorial attendance and grades were recorded in the same semester.",
        "Several students attended tutorials before the study began."
      ],
      0,
      "Random assignment and a comparison group reduce alternative explanations such as prior ability and motivation, strengthening causal inference."
    ],
    [
      "Consider the argument: \"The proposal should be rejected because its author has never chaired a department.\" What is the primary weakness?",
      [
        "It assumes that every proposal is equally valid.",
        "It confuses a necessary condition with a sufficient condition.",
        "It evaluates the author’s position rather than the merits of the proposal.",
        "It draws a conclusion from a representative sample."
      ],
      2,
      "The argument dismisses the proposal based on the author’s background without examining its evidence or reasoning."
    ]
  ],
  "essay": [
    [
      "Which thesis provides the clearest basis for an analytical essay on access to graduate education?",
      [
        "Graduate education is an important topic in many countries.",
        "Universities should expand need-based assistance and flexible scheduling to reduce financial and time barriers to graduate study.",
        "This essay will discuss graduate education and several related matters.",
        "Many people have different views about postgraduate opportunities."
      ],
      1,
      "The thesis states an arguable position and identifies two specific measures that can organize the analysis."
    ],
    [
      "A paragraph argues that flexible scheduling improves access for employed graduate students. Which evidence most directly supports this claim?",
      [
        "A historical account of the university’s founding.",
        "The total number of books in the university library.",
        "An increase in enrollment among employed applicants after evening classes were introduced.",
        "A description of the university’s grading scale."
      ],
      2,
      "The enrollment change directly concerns access among employed applicants. It is relevant support, although it alone does not prove causation."
    ],
    [
      "Which revision is most appropriate for formal academic writing?",
      [
        "The policy may improve access, although its effects require systematic evaluation.",
        "The policy will obviously solve all access problems.",
        "The policy is pretty good for basically everyone.",
        "The policy is unquestionably perfect for the entire population."
      ],
      0,
      "The revision uses precise, measured language and acknowledges that the claim requires evidence."
    ],
    [
      "An essay argues for increased public research funding. Which treatment of a counterargument best strengthens the essay?",
      [
        "Omit objections to preserve a consistent position.",
        "Describe critics as uninformed about research.",
        "Mention an objection without addressing it.",
        "Examine concerns about competing budget priorities and explain why the proposed allocation remains justified."
      ],
      3,
      "A substantive response to a relevant objection demonstrates evaluation of competing considerations and strengthens the reasoning."
    ],
    [
      "A writer paraphrases a published author’s distinctive argument using entirely new wording. Which action is required?",
      [
        "Use quotation marks around every sentence of the paraphrase.",
        "Acknowledge the source of the argument with an appropriate citation.",
        "Provide a citation only if numerical data are included.",
        "Omit attribution because none of the original wording remains."
      ],
      1,
      "Paraphrasing changes the wording, not the ownership of the idea. The source still requires attribution."
    ],
    [
      "Which arrangement provides the most coherent structure for an argumentative paragraph?",
      [
        "Evidence, unrelated example, thesis, title.",
        "Conclusion, new topic, quotation, background.",
        "Topic sentence, supporting evidence, analysis, link to the central argument.",
        "Citation list, topic sentence, unsupported assertion, title."
      ],
      2,
      "The paragraph establishes a claim, supports it, explains the significance of the evidence, and connects the discussion to the essay’s argument."
    ],
    [
      "A draft concludes: \"Three interviewees preferred online classes; therefore, all graduate programs should become fully online.\" Which revision priority is most important?",
      [
        "Limit the conclusion to what the evidence can support.",
        "Replace the interviews with longer quotations from the same respondents.",
        "Add stronger adjectives to emphasize the recommendation.",
        "Repeat the recommendation in the introduction."
      ],
      0,
      "Three preferences cannot justify a universal institutional recommendation. The scope of the claim must reflect the limited evidence."
    ],
    [
      "Which sentence most effectively links evidence to a claim about equitable access?",
      [
        "The study was published in a journal last year.",
        "The researchers collected several different kinds of information.",
        "Access has been discussed by many authors.",
        "Because transport expenses disproportionately burden low-income students, travel assistance may reduce an identifiable barrier to attendance."
      ],
      3,
      "The sentence explains the mechanism connecting the evidence about costs to the claim about access."
    ],
    [
      "Which conclusion best follows an essay arguing that community partnerships improve the practical relevance of university research?",
      [
        "A new national tax system should also be introduced immediately.",
        "Partnerships can align research with local needs when communities participate in setting priorities and evaluating outcomes.",
        "The introduction has already explained everything about this subject.",
        "Community partnerships always guarantee successful research."
      ],
      1,
      "The conclusion synthesizes the central argument and its conditions without introducing an unrelated claim or an unsupported guarantee."
    ],
    [
      "During revision, a writer discovers that two body paragraphs repeat the same claim while a major objection is unanswered. What is the most effective response?",
      [
        "Correct punctuation before considering the argument.",
        "Retain both paragraphs to preserve the word count.",
        "Consolidate overlapping material and develop a reasoned response to the objection.",
        "Remove all supporting evidence to shorten the essay."
      ],
      2,
      "Substantive revision addresses organization and reasoning. Consolidation creates space to evaluate an important counterargument."
    ]
  ]
};

RAW.logic.push(
  ["Identify the next symbol in the repeating sequence: ▲, ○, ■, ▲, ○, ■, ▲, ?", ["▲", "○", "■", "◇"], 1, "Step 1: Identify the repeating three-symbol unit: triangle, circle, square. Step 2: The eighth position is the second position in a unit. Step 3: The missing symbol is ○."],
  ["An arrow rotates 90 degrees clockwise at each step: ↑, →, ↓, ?", ["↑", "→", "←", "↓"], 2, "Step 1: Track clockwise quarter-turns: up, right, down, left. Step 2: Rotate the downward arrow another 90 degrees clockwise to obtain ←."],
  ["Identify the missing term: A1, C4, E9, G16, ?", ["I25", "H25", "I20", "J36"], 0, "Step 1: Letters advance by two positions: A, C, E, G, I. Step 2: Numbers are consecutive squares: 1², 2², 3², 4², 5². Step 3: Combine I and 25."],
  ["In a pattern grid, each row follows the same rule. Row 1: ○, ○○, ○○○. Row 2: △, △△, △△△. Row 3: □, □□, ?. What completes the grid?", ["□□", "△△△", "○○○", "□□□"], 3, "Step 1: Across each row, the count increases from one to two to three. Step 2: Within a row, the shape stays constant. Step 3: Row 3 therefore ends with three squares: □□□."],
  ["Identify the next term: 2, 6, 12, 20, 30, ?", ["40", "42", "44", "60"], 1, "Step 1: Consecutive differences are 4, 6, 8, and 10. Step 2: Continue with a difference of 12. Step 3: 30 + 12 = 42. Equivalently, terms follow n(n + 1)."]
);

Object.entries(EXTENDED).forEach(([subject, items]) => RAW[subject].push(...items));
const EXAM_SUBJECTS = ["english", "analogy", "math", "science", "logic"];
const SUBJECT_ORDER = [...EXAM_SUBJECTS, "essay"];
const orderedSubjects = () => SUBJECT_ORDER.map(key => [key, SUBJECTS[key]]);
const EXAM_SECONDS = 4 * 60 * 60;
const EXAM_COUNT = 200;
const SESSION_KEY = "gsatActiveAssessmentV2";

const BANK = Object.entries(RAW).flatMap(([subject, items]) =>
  items.map((item, index) => ({
    id: subject + "-" + index,
    subject,
    question: item[0],
    options: item[1],
    answer: item[2],
    explanation: item[3]
  }))
);

const LESSONS = {
  ...SUPPLEMENT.lessons,
  english: [
    ["Grammar", "Check subject-verb agreement and verb tense.",
     "The students are ready."],
    ["Vocabulary", "Study synonyms and antonyms.",
     "Meticulous means thorough."],
    ["Comprehension", "Identify main ideas and supported inferences.",
     "Distinguish evidence from assumptions."]
  ],
  math: [
    ["Percentages", "Convert percentages into decimals.",
     "20% of 500 = 0.20 × 500 = 100."],
    ["Algebra", "Use inverse operations to solve equations.",
     "2x + 4 = 12, so x = 4."],
    ["Averages", "Divide the sum by the number of values.",
     "(10 + 20 + 30) / 3 = 20."]
  ],
  logic: [
    ["Deduction", "Check if conclusions follow from premises.",
     "All A are B. X is A. Therefore X is B."],
    ["Assumptions", "Identify unstated supporting premises.",
     "Ask what must be true for an argument to work."],
    ["Evidence", "Avoid confusing correlation with causation.",
     "Two events occurring together does not prove cause."]
  ],
  essay: [
    ["Introduction", "Present the topic and a clear thesis.",
     "Explain your central position."],
    ["Body", "Support each argument with reasons and examples.",
     "Use a topic sentence for each paragraph."],
    ["Conclusion", "Synthesize your points and reinforce the thesis.",
     "Explain why your argument matters."]
  ]
};

const PROMPTS = [
  [
    "Equitable access to graduate education",
    "Evaluate whether need-based financial assistance or flexible program delivery should receive greater institutional priority. Defend your position, consider a counterargument, and discuss implementation constraints."
  ],
  [
    "Education and national development",
    "Assess the claim that universities should prioritize workforce preparation over broader intellectual development. Establish a clear position and examine the implications for national development."
  ],
  [
    "Artificial intelligence in graduate education",
    "To what extent should graduate programs permit generative artificial intelligence in assessed work? Propose a defensible policy that addresses learning, academic integrity, and equitable access."
  ],
  [
    "Leadership and institutional accountability",
    "Evaluate the claim that transparent decision-making is more important than rapid decision-making in academic leadership. Discuss conditions under which the priorities may conflict."
  ],
  [
    "Research and community priorities",
    "Assess whether community needs should determine the allocation of university research funding. Address scholarly independence, public benefit, and accountability."
  ]
];

PROMPTS.push(...EXTRA_PROMPTS);

const $ = id => document.getElementById(id);
const STORE = "gsatPrep2026ProgressV1";

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;",
    '"': "&quot;", "'": "&#39;"
  })[c]);
}

function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

let progress;
try {
  progress = JSON.parse(localStorage.getItem(STORE));
} catch {
  progress = null;
}
if (!progress || typeof progress !== "object") {
  progress = { answered: 0, correct: 0, best: null };
}
// Preserve cumulative history while retiring scores from the former 20-item format.
if (progress.bestTotal !== EXAM_COUNT) {
  progress.best = null;
  progress.bestTotal = EXAM_COUNT;
}

let session = null;
let timerId = null;
let selectedLesson = "english";

function updateStats() {
  $("statAnswered").textContent = progress.answered;
  $("statCorrect").textContent = progress.correct;
  $("statAccuracy").textContent = progress.answered
    ? Math.round(progress.correct / progress.answered * 100) + "%"
    : "—";
  $("statBest").textContent = progress.best === null
    ? "—" : progress.best + "/" + EXAM_COUNT;
}

function saveProgress() {
  try {
    localStorage.setItem(STORE, JSON.stringify(progress));
  } catch {}
  updateStats();
}

function renderCards() {
  $("subjectCards").innerHTML = orderedSubjects()
    .map(([key, subject], index) => `
      <article class="subject-card subject-${key}">
        <div class="subject-card-top"><span class="subject-index">${key === "essay" ? "WORKSHOP" : `SUBJECT 0${index + 1}`}</span><span class="glyph" aria-hidden="true">${subject.icon}</span></div>
        <h3>${escapeHTML(subject.title)}</h3>
        <p>${escapeHTML(subject.description)}</p>
        <div class="subject-meta">${key === "essay" ? "250-word writing tasks" : `${BANK.filter(q => q.subject === key).length} questions · worked solutions`}</div>
        <button type="button" data-study="${key}">
          Review subject →
        </button>
      </article>
    `).join("");

  document.querySelectorAll("[data-study]").forEach(button => {
    button.onclick = () => {
      selectedLesson = button.dataset.study;
      renderLessons();
      location.hash = "lessons";
    };
  });
}

function renderLessons() {
  $("lessonTabs").innerHTML = orderedSubjects()
    .map(([key, subject]) => `
      <button type="button" data-lesson="${key}"
        class="${key === selectedLesson ? "active" : ""}">
        ${escapeHTML(subject.title)}
      </button>
    `).join("");

  $("lessonContent").innerHTML = LESSONS[selectedLesson]
    .map(([title, body, example], i) => `
      <article class="lesson-card">
        <span class="question-number">LESSON ${i + 1}</span>
        <h3>${escapeHTML(title)}</h3>
        <p>${escapeHTML(body)}</p>
        <div class="example"><b>Example:</b> ${escapeHTML(example)}</div>
      </article>
    `).join("");

  $("lessonContent").innerHTML += `
    <div class="section-head"><div><span class="eyebrow dark">GUIDED REVIEW</span><h2>${escapeHTML(SUBJECTS[selectedLesson].title)}</h2><p class="subtle">Questions and worked solutions</p></div></div>
    <p class="subtle">Attempt each item before opening the solution. Assessment answers are revealed only after submission.</p>
    ${BANK.filter(q => q.subject === selectedLesson).map((q, i) => `
      <article class="question-card">
        <span class="question-number">REVIEW ITEM ${i + 1}</span>
        <h3>${escapeHTML(q.question)}</h3>
        <ol type="A" class="review-options">${q.options.map(o => `<li>${escapeHTML(o)}</li>`).join("")}</ol>
        <details class="worked-solution"><summary>View answer and worked solution</summary>
          <p><strong>Answer: ${"ABCD"[q.answer]}. ${escapeHTML(q.options[q.answer])}</strong></p>
          <p>${escapeHTML(q.explanation)}</p>
        </details>
      </article>
    `).join("")}
  `;

  document.querySelectorAll("[data-lesson]").forEach(button => {
    button.onclick = () => {
      selectedLesson = button.dataset.lesson;
      renderLessons();
    };
  });
}

function startQuiz(mode) {
  if (session && !session.submitted &&
      !confirm("End the current assessment and discard unsubmitted responses?")) return;

  clearInterval(timerId);

  const nextArea = mode === "mock" ? "mockArea" : "practiceArea";
  if (session && session.area !== nextArea) $(session.area).innerHTML = "";

  let questions;

  if (mode === "mock") {
    questions = EXAM_SUBJECTS.flatMap(key =>
      shuffle(BANK.filter(q => q.subject === key)).slice(0, 40)
    );
  } else {
    const subject = $("practiceSubject").value;
    const count = $("practiceCount").value;

    questions = shuffle(BANK.filter(q =>
      subject === "all" || q.subject === subject
    ));

    if (count !== "all") {
      questions = questions.slice(0, Number(count));
    }
  }

  session = {
    mode,
    area: mode === "mock" ? "mockArea" : "practiceArea",
    questions: shuffle(questions).map(q => {
      const choices = shuffle(q.options.map((text, index) => ({text, index})));
      return {...q, options: choices.map(choice => choice.text), answer: choices.findIndex(choice => choice.index === q.answer)};
    }),
    submitted: false,
    selections: {},
    flagged: [],
    remaining: mode === "mock" ? EXAM_SECONDS : null,
    deadline: mode === "mock" ? Date.now() + EXAM_SECONDS * 1000 : null
  };

  renderQuiz();
  persistSession();
  runExamTimer();
}

function runExamTimer() {
  clearInterval(timerId);
  if (session && session.mode === "mock" && !session.submitted) {
    timerId = setInterval(() => {
      if (!session || session.submitted || session.mode !== "mock") {
        clearInterval(timerId);
        return;
      }
      session.remaining = Math.max(
        0, Math.ceil((session.deadline - Date.now()) / 1000)
      );
      updateTimer();
      if (session.remaining <= 0) submitQuiz(true);
    }, 500);
  }
}

function updateTimer() {
  const el = $("quizTimer");
  if (!el || !session || session.remaining === null) return;

  const n = Math.max(0, session.remaining);
  el.textContent =
    String(Math.floor(n / 3600)).padStart(2, "0") + ":" +
    String(Math.floor(n % 3600 / 60)).padStart(2, "0") + ":" +
    String(n % 60).padStart(2, "0");
  el.classList.toggle("danger", n <= 300);
}

function renderQuiz() {
  const s = session;
  organizeSession(s);
  const area = $(s.area);
  const sections = SUBJECT_ORDER.filter(key => s.questions.some(q => q.subject === key));

  area.innerHTML = `
    <div class="quiz-toolbar">
      <div>
        <strong>${s.mode === "mock" ? "Mock Examination" : "Practice Assessment"}</strong>
        <small id="answerProgress">0 of ${s.questions.length} answered</small>
      </div>
      ${s.mode === "mock"
        ? '<span class="timer" id="quizTimer" aria-label="Time remaining">04:00:00</span>' : ""}
      <button class="btn btn-outline small" id="nextUnanswered" type="button">Next Unanswered</button>
      <button class="btn btn-outline small" id="nextFlagged" type="button">Review Flagged</button>
      <button class="btn btn-primary small" id="submitQuiz">
        Submit Answers
      </button>
    </div>
    <p class="assessment-directions"><strong>Directions:</strong> Select the single best answer for each item. Base reading responses on the passage and logical conclusions on the stated premises. Each correct response earns one point; incorrect and unanswered items earn zero. Explanations are provided after submission.</p><div id="resultHolder"></div>
    <nav class="exam-subject-nav" aria-label="Examination subjects">
      ${sections.map((key, index) => `<button type="button" data-section-scroll="${key}"><span>0${index + 1}</span>${escapeHTML(SUBJECTS[key].title)}</button>`).join("")}
    </nav>
    ${s.questions.map((q, i) => `
      ${i === 0 || s.questions[i - 1].subject !== q.subject ? `<section class="exam-subject-section" aria-labelledby="sectionTitle-${q.subject}"><header class="exam-section-heading" id="examSection-${q.subject}" tabindex="-1"><div><span class="eyebrow dark">SECTION 0${sections.indexOf(q.subject) + 1}</span><h2 id="sectionTitle-${q.subject}">${escapeHTML(SUBJECTS[q.subject].title)}</h2><p>${escapeHTML(SUBJECTS[q.subject].description)}</p></div><span class="section-count">${s.questions.filter(item => item.subject === q.subject).length} questions</span></header>` : ""}
      <article class="question-card" id="examQuestion${i}" tabindex="-1">
        <span class="question-number">
          QUESTION ${i + 1} · ${escapeHTML(SUBJECTS[q.subject].title)}
        </span>
        <h3>${escapeHTML(q.question)}</h3>
        <label class="flag-control"><input type="checkbox" data-flag="${i}"> Flag for review</label>
        <div class="choices">
          ${q.options.map((option, j) => `
            <label class="choice">
              <input type="radio" name="q${i}" value="${j}">
              <span><b>${"ABCD"[j]}.</b> ${escapeHTML(option)}</span>
            </label>
          `).join("")}
        </div>
        <div class="explanation" id="exp${i}" hidden></div>
      </article>
      ${i === s.questions.length - 1 || s.questions[i + 1].subject !== q.subject ? '</section>' : ''}
    `).join("")}
    <div class="panel">
      <button class="btn btn-primary" id="submitBottom">
        Submit ${s.questions.length} Answers
      </button>
    </div>
  `;

  area.querySelector("#submitQuiz").onclick = () => submitQuiz(false);
  area.querySelector("#submitBottom").onclick = () => submitQuiz(false);
  area.querySelectorAll("[data-section-scroll]").forEach(button => {
    button.onclick = () => {
      const heading = area.querySelector(`#examSection-${button.dataset.sectionScroll}`);
      heading.scrollIntoView({behavior: "smooth", block: "start"});
      heading.focus({preventScroll: true});
    };
  });
  s.selections ||= {};
  s.flagged ||= [];
  Object.entries(s.selections).forEach(([i, value]) => {
    const input = area.querySelector(`input[name="q${i}"][value="${value}"]`);
    if (input) input.checked = true;
  });
  s.flagged.forEach(i => {
    const input = area.querySelector(`[data-flag="${i}"]`);
    if (input) input.checked = true;
  });
  area.onchange = event => {
    if (s.submitted) return;
    const input = event.target;
    if (input.type === "radio") s.selections[input.name.slice(1)] = Number(input.value);
    if (input.hasAttribute("data-flag")) {
      const i = Number(input.dataset.flag);
      s.flagged = s.flagged.filter(n => n !== i);
      if (input.checked) s.flagged.push(i);
    }
    updateAnswerProgress();
    persistSession();
  };
  const jumpTo = index => {
    if (index < 0) return;
    const card = area.querySelector(`#examQuestion${index}`);
    card.scrollIntoView({behavior: "smooth", block: "center"});
    card.focus({preventScroll: true});
  };
  area.querySelector("#nextUnanswered").onclick = () => jumpTo(s.questions.findIndex((q, i) => s.selections[i] === undefined));
  let flagCursor = -1;
  area.querySelector("#nextFlagged").onclick = () => {
    if (!s.flagged.length) return;
    flagCursor = (flagCursor + 1) % s.flagged.length;
    jumpTo(s.flagged[flagCursor]);
  };
  updateAnswerProgress();
  updateTimer();
}

function updateAnswerProgress() {
  const answered = Object.keys(session.selections).length;
  $("answerProgress").textContent = `${answered} of ${session.questions.length} answered · ${session.flagged.length} flagged`;
}

function organizeSession(s) {
  const indexed = s.questions.map((question, previous) => ({question, previous}));
  indexed.sort((a, b) => SUBJECT_ORDER.indexOf(a.question.subject) - SUBJECT_ORDER.indexOf(b.question.subject));
  const selections = {};
  const flagged = [];
  indexed.forEach(({previous}, index) => {
    if (s.selections?.[previous] !== undefined) selections[index] = s.selections[previous];
    if (s.flagged?.includes(previous)) flagged.push(index);
  });
  s.questions = indexed.map(item => item.question);
  s.selections = selections;
  s.flagged = flagged;
}

function persistSession() {
  try {
    if (!session || session.submitted) localStorage.removeItem(SESSION_KEY);
    else localStorage.setItem(SESSION_KEY, JSON.stringify({
      ...session, questions: session.questions.map(q => ({id: q.id, options: q.options}))
    }));
  } catch {}
}

function restoreSession() {
  try {
    const saved = JSON.parse(localStorage.getItem(SESSION_KEY));
    if (!saved || !["mock", "practice"].includes(saved.mode) || saved.submitted) return;
    if (!Array.isArray(saved.questions) || !saved.questions.length) return;
    const questions = saved.questions.map(item => {
      const original = BANK.find(q => q.id === item.id);
      if (!original || !Array.isArray(item.options) || item.options.length !== 4 || new Set(item.options).size !== 4 || item.options.some(option => !original.options.includes(option))) return null;
      return {...original, options: item.options, answer: item.options.indexOf(original.options[original.answer])};
    });
    if (questions.some(q => !q) || new Set(questions.map(q => q.id)).size !== questions.length) return;
    if (saved.mode === "mock" && (questions.length !== EXAM_COUNT || !Number.isFinite(saved.deadline))) return;
    session = {
      ...saved, questions, area: saved.mode === "mock" ? "mockArea" : "practiceArea",
      selections: Object.fromEntries(Object.entries(saved.selections || {}).filter(([i, value]) => /^\d+$/.test(i) && Number(i) < questions.length && Number.isInteger(value) && value >= 0 && value < 4)),
      flagged: Array.isArray(saved.flagged) ? saved.flagged.filter(i => Number.isInteger(i) && i >= 0 && i < questions.length) : [],
      remaining: saved.mode === "mock" ? Math.max(0, Math.ceil((saved.deadline - Date.now()) / 1000)) : null
    };
    renderQuiz();
    location.hash = session.mode === "mock" ? "mock" : "practice";
    if (session.remaining === 0) submitQuiz(true);
    else runExamTimer();
  } catch {}
}

function submitQuiz(automatic = false) {
  const s = session;
  if (!s || s.submitted) return;

  const area = $(s.area);
  const selections = s.questions.map((q, i) => {
    const input = area.querySelector(`input[name="q${i}"]:checked`);
    return input ? Number(input.value) : null;
  });

  const unanswered = selections.filter(x => x === null).length;
  if (!automatic && unanswered &&
      !confirm(`${unanswered} item(s) remain unanswered and will receive no credit. Submit the assessment?`)) {
    return;
  }

  s.submitted = true;
  persistSession();
  clearInterval(timerId);
  area.querySelectorAll("[data-flag]").forEach(input => input.disabled = true);

  const score = s.questions.reduce(
    (total, q, i) => total + Number(selections[i] === q.answer), 0
  );

  progress.answered += s.questions.length;
  progress.correct += score;
  if (s.mode === "mock") {
    progress.best = Math.max(progress.best ?? 0, score);
  }
  saveProgress();

  s.questions.forEach((q, i) => {
    const inputs = area.querySelectorAll(`input[name="q${i}"]`);
    inputs.forEach((input, j) => {
      input.disabled = true;
      if (j === q.answer) input.closest(".choice").classList.add("correct");
      else if (j === selections[i]) input.closest(".choice").classList.add("wrong");
    });

    const explanation = area.querySelector(`#exp${i}`);
    explanation.hidden = false;
    explanation.innerHTML = `
      <strong>Correct Answer: ${"ABCD"[q.answer]}.
      ${escapeHTML(q.options[q.answer])}</strong>
      <p>${escapeHTML(q.explanation)}</p>
    `;
  });

  const percent = Math.round(score / s.questions.length * 100);
  const breakdown = orderedSubjects().map(([key, subject]) => {
    const items = s.questions.map((q, i) => ({q, i})).filter(({q}) => q.subject === key);
    if (!items.length) return "";
    const correct = items.filter(({q, i}) => selections[i] === q.answer).length;
    return `<span class="pill">${escapeHTML(subject.title)}: ${correct}/${items.length}</span>`;
  }).join("");
  const message = percent >= 85
    ? "Strong performance on this practice assessment. Review the rationale for each response."
    : percent >= 65
      ? "Further consolidation is recommended. Review incorrect responses and the accompanying explanations."
      : "Additional preparation is recommended. Revisit the relevant concepts before completing another assessment.";

  area.querySelector("#resultHolder").innerHTML = `
    <div class="result-box" role="status">
      <span class="question-number">
        ${automatic ? "TIME EXPIRED" : "YOUR RESULTS"}
      </span>
      <h2>${score} / ${s.questions.length} · ${percent}%</h2>
      <p>${message}</p>
      <div class="result-breakdown">${breakdown}</div>
      <p>This is a practice score, not an official GSAT passing score.</p>
    </div>
  `;

  ["submitQuiz", "submitBottom"].forEach(id => {
    const button = area.querySelector(`#${id}`);
    button.disabled = true;
    button.textContent = "Submitted";
  });

  area.querySelector("#resultHolder").scrollIntoView({
    behavior: "smooth", block: "center"
  });
}

function route() {
  const name = location.hash.slice(1);
  const target = document.getElementById(name);
  const page = target && target.classList.contains("page")
    ? name : "dashboard";

  document.querySelectorAll(".page").forEach(el => {
    el.classList.toggle("active", el.id === page);
  });
  document.querySelectorAll("[data-page]").forEach(a => {
    a.classList.toggle("active", a.dataset.page === page);
    if (a.dataset.page === page) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });

  $("nav").classList.remove("open");
  $("menuBtn").setAttribute("aria-expanded", "false");
  // Run after native hash navigation so page titles stay below the sticky header.
  window.requestAnimationFrame(() => window.scrollTo({top: 0, left: 0, behavior: "instant"}));
}

function essayInit() {
  const prompt = $("essayPrompt");
  const textarea = $("essayText");
  const key = "gsatPrep2026EssayV1";
  let drafts = {};

  try {
    drafts = JSON.parse(localStorage.getItem(key)) || {};
  } catch {}

  prompt.innerHTML = PROMPTS.map(([title], i) =>
    `<option value="${i}">${escapeHTML(title)}</option>`
  ).join("");

  function count() {
    const value = textarea.value.trim();
    const words = value ? value.split(/\s+/).length : 0;
    const difference = 250 - words;
    $("wordCount").textContent =
      `${words} / 250 words · ` + (difference > 0 ? `${difference} ${difference === 1 ? "word" : "words"} remaining` : difference < 0 ? `Remove ${-difference} ${difference === -1 ? "word" : "words"} to meet the requirement` : "250-word requirement met");
    $("wordCount").classList.toggle("word-target-met", difference === 0);
  }

  function refresh() {
    const i = Number(prompt.value);
    textarea.value = drafts[i] || "";
    $("essayOutline").innerHTML = `
      <b>Practice Writing Task</b>
      <p>${escapeHTML(PROMPTS[i][1])}</p>
      <p><b>Requirement: 250 words.</b> State a clear position, develop a relevant example or scenario, explain your reasoning, and conclude with a practical insight. For reflective tasks, connect the experience to a constructive action plan. You may use hypothetical experiences and choose what to share.</p>
      <p><b>Planning guide:</b> approximately 40 words for the introduction, 170 for development, and 40 for the conclusion.</p><p><b>Self-assessment criteria:</b> relevance, depth of reflection or argument, organization, examples, and language accuracy. The counter checks length; drafts are not automatically graded. You may download an unfinished draft.</p>
    `;
    count();
  }

  prompt.onchange = refresh;
  textarea.oninput = () => {
    drafts[prompt.value] = textarea.value;
    try { localStorage.setItem(key, JSON.stringify(drafts)); } catch {}
    count();
  };

  $("clearEssay").onclick = () => {
    if (confirm("Clear your current essay draft?")) {
      textarea.value = "";
      textarea.dispatchEvent(new Event("input"));
    }
  };

  $("downloadEssay").onclick = () => {
    const content = PROMPTS[Number(prompt.value)][0] +
      "\n\n" + textarea.value;
    const blob = new Blob([content], {
      type: "text/plain;charset=utf-8"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "gsat-essay-draft.txt";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 500);
  };

  refresh();
}

function init() {
  renderCards();
  renderLessons();
  updateStats();

  $("practiceSubject").innerHTML =
    '<option value="all">All Subjects</option>' +
    orderedSubjects().map(([key, s]) =>
      `<option value="${key}">${escapeHTML(s.title)}</option>`
    ).join("");

  $("startPractice").onclick = () => startQuiz("practice");
  $("startMock").onclick = () => startQuiz("mock");

  $("resetProgress").onclick = () => {
    if (confirm("Reset your saved quiz results?")) {
      progress = { answered: 0, correct: 0, best: null, bestTotal: EXAM_COUNT };
      saveProgress();
    }
  };

  $("menuBtn").onclick = () => {
    const open = $("nav").classList.toggle("open");
    $("menuBtn").setAttribute("aria-expanded", String(open));
  };

  window.addEventListener("hashchange", route);
  essayInit();
  restoreSession();
  route();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
