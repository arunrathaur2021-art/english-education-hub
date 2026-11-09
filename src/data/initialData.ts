import { ResourceItem, AnnouncementItem, QuizQuestion } from '../types';

/**
 * START WITH ZERO DUMMY NOTES.
 * The dashboard displays clean "No notes uploaded yet for this chapter" state
 * until the admin adds content via the Admin CMS.
 */
export const INITIAL_RESOURCES: ResourceItem[] = [];

/**
 * Optional sample resources that the admin can load with one click in the CMS.
 */
export const DEMO_PREVIEW_RESOURCES: ResourceItem[] = [
  {
    id: 'demo-1',
    title: 'Formal Letter Writing & Analytical Paragraph Guide',
    chapterName: 'Formal Letter to Editor & Complaint',
    classLevel: '10',
    category: 'Writing Skills',
    book: 'Writing Skills',
    description: 'Format breakdown, marking scheme, standard opening and closing salutations for CBSE board examinations.',
    pdfUrl: 'https://ncert.nic.in/textbook.php',
    pdfTitle: 'Class 10 - Formal Writing Guide.pdf',
    pdfContent: `CLASS 10 ENGLISH - FORMAL WRITING SKILLS\nCurated by MT Khan\n\n1. FORMAT GUIDELINES:\n- Sender Address\n- Date\n- Receiver Designation & Address\n- Subject (Concise & Underlined)\n- Salutation (Sir/Madam)\n- 3-Paragraph Body Structure\n- Complimentary Close (Yours sincerely/truly)\n\n2. SCORING SECRETS:\n- Content: 2 Marks\n- Organization & Format: 1 Mark\n- Accuracy & Expression: 2 Marks`,
    videoUrl: 'https://www.youtube.com/watch?v=0hK2x3mZ7wQ',
    youtubeId: '0hK2x3mZ7wQ',
    timestamps: [
      { time: '00:00', seconds: 0, label: 'Overview & Marking Scheme' },
      { time: '04:15', seconds: 255, label: 'Standard Opening Lines' },
      { time: '09:30', seconds: 570, label: 'Analytical Paragraph Transitions' }
    ],
    duration: '20 mins',
    tags: ['Class 10', 'Writing Skills'],
    createdAt: '2026-10-22'
  },
  {
    id: 'demo-2',
    title: 'Note-Making & Abbreviation Conventions',
    chapterName: 'Note-Making & Summarizing Strategies',
    classLevel: '11',
    category: 'Writing Skills',
    book: 'Writing Skills',
    description: 'Structured indentation, title formulation, minimum 4 abbreviations with keys, and concise 50-word summaries.',
    pdfUrl: 'https://ncert.nic.in/textbook.php',
    pdfTitle: 'Class 11 - Note Making Method.pdf',
    pdfContent: `CLASS 11 ENGLISH CORE - NOTE-MAKING METHODOLOGY\nCurated by MT Khan\n\n1. ESSENTIAL CONVENTIONS:\n- Catchy, centered title reflecting primary theme\n- Logical indentation (1, 1.1, 1.2)\n- Telegraphic phrasing (no full grammatical sentences)\n- Minimum 4 standard abbreviations in Key Table\n\n2. SUMMARY CONVENTIONS:\n- Maximum 50 words combining key points into flowing prose.`,
    videoUrl: 'https://www.youtube.com/watch?v=y2kP4kP6x8M',
    youtubeId: 'y2kP4kP6x8M',
    timestamps: [
      { time: '00:00', seconds: 0, label: 'Format & Marks Distribution' },
      { time: '05:20', seconds: 320, label: 'Indentation Practice' },
      { time: '11:10', seconds: 670, label: 'Key to Abbreviations' }
    ],
    duration: '18 mins',
    tags: ['Class 11', 'Writing Skills'],
    createdAt: '2026-10-22'
  },
  {
    id: 'demo-3',
    title: 'Notice & Invitation Drafting Masterclass',
    chapterName: 'Notice Writing (50-Word Standard Format)',
    classLevel: '12',
    category: 'Writing Skills',
    book: 'Writing Skills',
    description: 'Box format rules, 50-word constraint precision, formal third-person perspective, and sample scoring rubrics.',
    pdfUrl: 'https://ncert.nic.in/textbook.php',
    pdfTitle: 'Class 12 - Short Writing Skills.pdf',
    pdfContent: `CLASS 12 ENGLISH CORE - SHORT WRITING TASKS\nCurated by MT Khan\n\n1. NOTICE WRITING RULES:\n- Name of Issuing Institution/Authority (Center Top)\n- The word NOTICE in capital letters\n- Date on left margin\n- Specific Subject / Heading\n- Body answering 5 Ws: What, When, Where, Who, Whom to contact\n- Enclosed strictly within a box.`,
    videoUrl: 'https://www.youtube.com/watch?v=FqG_8RjR8XU',
    youtubeId: 'FqG_8RjR8XU',
    timestamps: [
      { time: '00:00', seconds: 0, label: 'Box Layout & Capitalization' },
      { time: '04:30', seconds: 270, label: '50-Word Drafting Rules' },
      { time: '10:15', seconds: 615, label: 'Sample Model Question' }
    ],
    duration: '22 mins',
    tags: ['Class 12', 'Writing Skills'],
    createdAt: '2026-10-22'
  }
];

export const INITIAL_ANNOUNCEMENTS: AnnouncementItem[] = [
  {
    id: 'ann-1',
    title: '2026-2027 Board Exam English Syllabus Guidelines Released',
    content: 'Review competency-based question patterns and internal choice weightage. Check your respective class tab for uploaded notes.',
    category: 'Exam Alert',
    date: 'Today',
    isPinned: true
  },
  {
    id: 'ann-2',
    title: 'Admin CMS Live: MT Khan Can Now Upload Lesson Cards',
    content: 'All class sections are live. Use the Admin CMS in the top navigation to upload PDFs, YouTube video lessons, and timestamps.',
    category: 'New Notes',
    date: 'Just now'
  },
  {
    id: 'ann-3',
    title: 'Weekly YouTube Doubt Clearing Live Session by MT Khan',
    content: 'Join our weekend live stream addressing reported speech rules and formal writing formats. Bookmark the timetable.',
    category: 'Live Stream',
    date: 'Oct 20, 2026',
    isPinned: true
  }
];

export const INITIAL_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q-1',
    targetClass: 'All',
    category: 'Reported Speech',
    question: 'Transform into Indirect Speech: She said to me, "Can you help me carry these books?"',
    options: [
      'She asked me that if I could help her carry those books.',
      'She asked me if I could help her carry those books.',
      'She told me whether can I help her carry these books.',
      'She requested me to help her carrying these books.'
    ],
    correctIndex: 1,
    explanation: 'In interrogative yes/no questions, reporting verb becomes "asked", conjunction "if/whether" is used (never "that if"), "can" changes to "could", and "these" shifts to "those".'
  },
  {
    id: 'q-2',
    targetClass: 'All',
    category: 'Subject-Verb Concord',
    question: 'Choose the grammatically correct sentence:',
    options: [
      'Neither the principal nor the teachers was present in the hall.',
      'Neither the principal nor the teachers were present in the hall.',
      'Neither the teachers nor the principal were present in the hall.',
      'Neither of the teachers were prepared.'
    ],
    correctIndex: 1,
    explanation: 'With "neither... nor", the verb agrees with the closer subject. Since "teachers" (plural) is adjacent to the verb, "were" is correct.'
  },
  {
    id: 'q-3',
    targetClass: '12',
    category: 'Figures of Speech',
    question: 'In Shirley Toulson’s poem "A Photograph", what figure of speech is "laboured ease of loss"?',
    options: [
      'Personification',
      'Hyperbole',
      'Oxymoron',
      'Metaphor'
    ],
    correctIndex: 2,
    explanation: 'An Oxymoron pairs two contradictory terms together ("laboured" meaning difficult effort, and "ease" meaning effortless acceptance).'
  },
  {
    id: 'q-4',
    targetClass: '10',
    category: 'Tenses',
    question: 'Fill in the blank: "By the time the bell rang, all students ______ the hall."',
    options: [
      'had entered',
      'have entered',
      'were entered',
      'will enter'
    ],
    correctIndex: 0,
    explanation: 'For two past events, the earlier completed event uses the Past Perfect tense ("had entered").'
  },
  {
    id: 'q-5',
    targetClass: 'All',
    category: 'Modals',
    question: 'Select the best modal: "You ______ respect your mentors and parents; it is our primary duty."',
    options: [
      'might',
      'ought to',
      'could',
      'would'
    ],
    correctIndex: 1,
    explanation: '"Ought to" conveys strong moral obligation and duty.'
  }
];
