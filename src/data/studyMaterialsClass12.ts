import { ChapterStudyGuide } from '../types';

export const CLASS_12_STUDY_MATERIALS: Record<string, ChapterStudyGuide> = {
  // ----------------------------------------------------
  // Book 1: Flamingo (Prose)
  // ----------------------------------------------------
  'The Last Lesson': {
    id: '12-fl-1',
    name: 'The Last Lesson',
    book: 'Book 1: Flamingo (Prose)',
    classLevel: '12',
    author: 'Alphonse Daudet',
    genre: 'Historical Fiction / Patriotic Narrative',
    coreTheme: 'Linguistic chauvinism, the regret of neglected education, and the sacred value of mother tongue as the key to freedom.',
    synopsis: 'Set in 1870 during the Franco-Prussian War when Alsace and Lorraine were annexed by Prussia, young schoolboy Franz dreads going to school because his strict teacher, M. Hamel, will quiz on participles. Upon arrival, Franz finds the school strangely quiet like a Sunday morning, with village elders sitting on the back benches. M. Hamel, dressed in his finest ceremonial coat, solemnly announces that Berlin has ordered only German be taught in the schools of Alsace and Lorraine; this will be their last French lesson. Overwhelmed by remorse for skipping studies, Franz listens intently as Hamel praises French as the most beautiful, clearest, and most logical language in the world, urging them never to forget it because "when people are enslaved, as long as they hold fast to their language it is as if they had the key to their prison." At noon, as church bells chime and Prussian trumpets sound, M. Hamel writes "Vive La France!" in giant letters on the blackboard before dismissing the class with a choked wave.',
    keyPoints: [
      'The sudden loss of mother tongue awakens instant national consciousness and profound remorse in the community.',
      'M. Hamel represents dedicated educators whose severity masked deep love for his pupils and culture.',
      'The village elders (Hauser, former mayor, postmaster) sit in the back to pay homage to Hamel’s forty years of service.',
      'Language is portrayed not just as grammar, but as cultural identity and the supreme shield against psychological subjugation.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Franz', description: 'Carefree, procrastinating French schoolboy whose sudden awakening turns reluctance into fervent reverence for his language.' },
      { name: 'M. Hamel', description: 'Stern yet profoundly compassionate schoolmaster; transforms his final classroom into a solemn temple of national resistance.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Symbolism', explanation: '"Vive La France!" written in bold chalk across the blackboard symbolizes indefatigable cultural spirit defying military conquest.' },
      { device: 'Situational Irony', explanation: 'Franz only begins to truly understand and appreciate French grammar on the day it is permanently confiscated.' }
    ],
    examPracticeQuestions: [
      {
        question: 'Why did M. Hamel say that French was the most beautiful language in the world?',
        marks: '2 Marks',
        answerHint: 'He declared it was the clearest, most logical language, and that holding fast to one’s language provides the key to unlocking the prison of enslavement.'
      },
      {
        question: 'What changes did the order from Berlin cause in school that day?',
        marks: '3 Marks',
        answerHint: 'The usual bustling noise was replaced by Sunday-morning quiet; village elders attended the class in silence; M. Hamel wore his celebratory green coat and frilled shirt.'
      },
      {
        question: 'How does Alphonse Daudet explore the theme of linguistic chauvinism and the human tendency to procrastinate learning in "The Last Lesson"?',
        marks: '5 Marks',
        answerHint: 'Discuss the Prussian conquerors imposing German on French citizens, and analyze how both parents, pupils, and Hamel admitted delaying education until freedom was snatched away.'
      }
    ]
  },

  'Lost Spring': {
    id: '12-fl-2',
    name: 'Lost Spring',
    book: 'Book 1: Flamingo (Prose)',
    classLevel: '12',
    author: 'Anees Jung',
    genre: 'Social Documentary / Investigative Reportage',
    coreTheme: 'The grim reality of generational poverty, child labor, systemic exploitation, and the stifling of youthful dreams.',
    synopsis: 'Anees Jung presents two poignant portraits of stolen childhoods in India. Part 1, "Sometimes I find a Rupee in the garbage", focuses on Saheb-e-Alam, a barefoot ragpicker living in the squalor of Seemapuri on the periphery of Delhi after fleeing floods in Dhaka. For elders, ragpicking is survival; for children, garbage is wrapped in wonder. Later, Saheb gains employment at a tea stall earning 800 rupees, yet loses his carefree freedom as the steel canister feels heavier than his plastic bag. Part 2, "I want to drive a car", depicts Mukesh from Firozabad, the bangle-making capital of India. Trapped in generational debt, unventilated glass furnaces, and police harassment, Mukesh’s community is blinded physically and socially. Yet Mukesh dares to dream differently, insisting on becoming a motor mechanic.',
    keyPoints: [
      'Seemapuri accommodates over 10,000 ragpickers with ration cards for votes but no sewage, drainage, or running water.',
      'Saheb’s full name "Saheb-e-Alam" means "Lord of the Universe", forming a tragic ironic contrast with his destitute condition.',
      'In Firozabad, over 20,000 children work near high-temperature glass furnaces, losing eyesight before reaching adulthood.',
      'Two vicious circles trap the children: the stigma of their caste and the nexus of sahukars, middlemen, policemen, and bureaucrats.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Saheb-e-Alam', description: 'Barefoot migrant child seeking wonder in rubbish heaps; loses autonomy upon becoming a tea stall laborer.' },
      { name: 'Mukesh', description: 'Resolute youth from Firozabad who refuses to surrender his dignity to the family bangle trade, aspiring to be a mechanic.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Irony', explanation: 'Saheb-e-Alam\'s name promises sovereignty over the universe, yet he sifts through trash without shoes.' },
      { device: 'Metaphor', explanation: '"Lost Spring" symbolizes the stolen bloom and vitality of childhood lost to grueling manual labor.' }
    ],
    examPracticeQuestions: [
      {
        question: 'What makes the city of Firozabad famous, and what hazards do workers face there?',
        marks: '3 Marks',
        answerHint: 'Famous for glass bangles. Workers, including thousands of children, labor in dark, dingy cells without air or light next to flaming glass furnaces, frequently losing vision.'
      },
      {
        question: 'Is Saheb happy working at the tea stall? Explain why or why not.',
        marks: '2 Marks',
        answerHint: 'No; although paid 800 rupees and all meals, the heavy steel canister belongs to the stall master. He is no longer his own master.'
      },
      {
        question: 'Analyze the two vicious circles that perpetuate the exploitation of bangle makers in Firozabad.',
        marks: '5 Marks',
        answerHint: 'Discuss the web of poverty and inherited caste dogma on one side, and the ruthless nexus of sahukars, middlemen, politicians, and police who criminalize collective organization.'
      }
    ]
  },

  'Deep Water': {
    id: '12-fl-3',
    name: 'Deep Water',
    book: 'Book 1: Flamingo (Prose)',
    classLevel: '12',
    author: 'William Douglas',
    genre: 'Autobiographical Essay / Inspirational Memoir',
    coreTheme: 'Conquering psychological phobia through systematic training, iron determination, and mental grit.',
    synopsis: 'Supreme Court Justice William Douglas recounts how he overcame a lifelong crippling terror of water. His hydrophobic fear originated at age three or four when ocean waves knocked him down at a California beach. Years later, determined to learn swimming at the YMCA pool in Yakima, a muscular eighteen-year-old bully tossed him into the deep end as a prank. Douglas nearly drowned, experiencing complete respiratory paralysis and blacking out. The lingering terror haunted his youth, ruining fishing trips and boating excursions. Deciding to reclaim his life, Douglas hired a professional instructor who trained him methodically piece by piece—using pulleys, belts, inhalation techniques, and leg kicks. Finally, Douglas tested his courage alone in Lake Wentworth and Warm Lake, declaring victory: "All we have to fear is fear itself."',
    keyPoints: [
      'Childhood trauma on California beach imprinted an irrational terror of water.',
      'The YMCA pool incident was near-fatal, detailing physiological asphyxiation and the peaceful sensation of fading into unconsciousness.',
      'Fear became a disability, preventing enjoyment of fishing, canoeing, and swimming in nature.',
      'Systematic deconditioning by the instructor rebuilt his swimming skills stroke by stroke.',
      'True liberation required confronting the phantom of terror alone in the open wilderness.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'William Douglas', description: 'Introspective, courageous author whose relentless willpower transformed a crippling phobia into an empowering life lesson.' },
      { name: 'The Swimming Instructor', description: 'Methodical educator who dissected a complex skill into safe, incremental modules to dismantle fear.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Graphic Psychological Realism', explanation: 'Vividly portrays near-death panic: "stark terror took an even deeper hold... like a great charge of electricity."' },
      { device: 'Philosophical Axiom', explanation: 'Quotes President Roosevelt: "All we have to fear is fear itself", emphasizing that panic in the mind is deadlier than physical danger.' }
    ],
    examPracticeQuestions: [
      {
        question: 'How did the "misadventure" at the YMCA pool happen to Douglas?',
        marks: '3 Marks',
        answerHint: 'While sitting alone awaiting company, a big bruiser of a boy grabbed him and tossed him into the deep nine-foot end. Douglas struck the bottom and struggled desperately to resurface.'
      },
      {
        question: 'What quotation from Roosevelt did Douglas reflect upon, and what was its significance?',
        marks: '2 Marks',
        answerHint: '"All we have to fear is fear itself." In death there is peace, but in the terror of dying there is terror; overcoming mental fear brings liberation.'
      },
      {
        question: 'Describe how the instructor built a swimmer out of William Douglas piece by piece.',
        marks: '5 Marks',
        answerHint: 'Detail the harness and overhead pulley system, training face underwater exhalation, practicing kicking at the side of the pool, and integrating strokes over seven months.'
      }
    ]
  },

  'The Rattrap': {
    id: '12-fl-4',
    name: 'The Rattrap',
    book: 'Book 1: Flamingo (Prose)',
    classLevel: '12',
    author: 'Selma Lagerlöf',
    genre: 'Philosophical Fairy Tale / Moral Allegory',
    coreTheme: 'The universal snare of materialism, the inherent goodness in every human being, and the redemptive power of unconditional kindness.',
    synopsis: 'A vagabond selling handmade wire rattraps views the world as a giant rattrap offering baits of riches, food, and shelter to trap unsuspecting human souls. One evening, an old crofter gives him hospitality, tobacco, and porridge, trusting him enough to show 30 kronor he earned from his cow. The peddler succumbs to greed, steals the money the next morning, and gets lost in a cold labyrinthine forest. Seeking shelter in the Ramsjö Iron Mill, the Ironmaster mistakes him for an old military comrade, Captain von Ståhle, and invites him home for Christmas. Although the identity error is exposed the next day, the Ironmaster’s compassionate daughter, Edla Willmansson, insists on hosting the peddler with dignity and love. Transformed by this unconditional respect, the peddler departs leaving behind the stolen 30 kronor, a small rattrap for Edla, and a letter signed as "Captain von Ståhle", having raised himself above the trap.',
    keyPoints: [
      'The central philosophical metaphor equates worldly pleasures (food, warmth, wealth) with pork and cheese in a trap.',
      'The crofter represents generous rural solitude betrayed by transient greed.',
      'Edla Willmansson embodies genuine Christian compassion that looks past social status and ragged clothes.',
      'Dignity and unconditional respect awaken the dormant nobility within the fallen peddler.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'The Peddler / Vagabond', description: 'Cynical philosopher-tramp driven to petty theft, whose latent moral integrity is rekindled by empathy.' },
      { name: 'Edla Willmansson', description: 'Gentle, perceptive, compassionate daughter of the Ironmaster whose unwavering kindness redeems the vagabond.' },
      { name: 'The Ironmaster', description: 'Impulsive and status-conscious; eager to help when believing the peddler is an elite comrade, but quick to summon police when disillusioned.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Extended Metaphor / Allegory', explanation: 'The physical wire rattrap mirrors the world’s traps of wealth and comfort entangling human moral freedom.' },
      { device: 'Folkloric Motif', explanation: 'Follows traditional Scandinavian storytelling elements: a wandering stranger, three tests of character, and redemption.' }
    ],
    examPracticeQuestions: [
      {
        question: 'Why did the peddler think that the world was a rattrap?',
        marks: '2 Marks',
        answerHint: 'Because just as a rattrap lures rats with cheese and pork, the world offers riches, joy, shelter, and food to trap men, closing in forever when touched.'
      },
      {
        question: 'Why did Edla continue to entertain the peddler even after discovering his true identity?',
        marks: '3 Marks',
        answerHint: 'She pitied his homeless life of perpetual persecution and wanted him to experience at least one day of peace, warmth, and Christian hospitality at Christmas.'
      },
      {
        question: 'How did Edla’s compassion transform the peddler into a gentleman worthy of signing as Captain von Ståhle?',
        marks: '5 Marks',
        answerHint: 'Explain how her treating him like a real captain elevated his self-respect above theft, leading him to return the thirty kronor to the crofter with an apologetic letter.'
      }
    ]
  },

  'Indigo': {
    id: '12-fl-5',
    name: 'Indigo',
    book: 'Book 1: Flamingo (Prose)',
    classLevel: '12',
    author: 'Louis Fischer',
    genre: 'Biographical Chronicle / Historical Non-Fiction',
    coreTheme: 'Civil disobedience, non-violent mass mobilization, self-reliance, and uplifting the downtrodden.',
    synopsis: 'In 1916 at the Lucknow Congress session, an illiterate, resolute tenant peasant named Rajkumar Shukla from Champaran, Bihar, approaches Mahatma Gandhi. Shukla implores him to inspect the oppressive sharecropping system where British landlords compelled tenants to cultivate indigo on 15% of their landholdings and surrender the entire harvest as rent. When German synthetic indigo made natural indigo unprofitable, landlords extorted compensation from peasants to release them from contracts. Gandhi visits Champaran, investigates meticulously, and refuses to obey a British expulsion order, sparking the first major victory of Civil Disobedience in modern India. A commission settles a 25% refund, breaking the British landlords’ myth of invincibility. Crucially, Gandhi remained in Champaran for months to build primary schools, introduce sanitation, and teach self-reliance.',
    keyPoints: [
      'The Champaran campaign marked the historic testing ground for Satyagraha and civil disobedience in India (1917).',
      'Gandhi valued the symbolic moral victory of breaking peasant fear above financial percentages (agreeing to 25% refund).',
      'He addressed the holistic root causes of backwardness: health, hygiene, education, and women’s sanitation.',
      'Refused help from British pacifist Charles Freer Andrews to instill absolute Indian self-reliance.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Mahatma Gandhi', description: 'Pragmatic, fearless moral visionary; grounded national liberation in the everyday realities of the poorest peasant.' },
      { name: 'Rajkumar Shukla', description: 'Tenacious, illiterate sharecropper whose unrelenting resolve brought Gandhi to Champaran.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Historical Realism', explanation: 'Direct factual recounting of legal depositions, colonial orders, and grassroots mass empowerment.' },
      { device: 'Paradox of Power', explanation: 'An unarmed, solitary lawyer-leader commands deeper authority than the armed apparatus of the British Empire.' }
    ],
    examPracticeQuestions: [
      {
        question: 'Why did Gandhi agree to a settlement of only 25 percent refund to the farmers?',
        marks: '3 Marks',
        answerHint: 'Because the amount was less important than the principle that British landlords were forced to surrender their prestige and part of their money, shattering peasant fear.'
      },
      {
        question: 'Why did Gandhi oppose taking help from C.F. Andrews in Champaran?',
        marks: '2 Marks',
        answerHint: 'He wanted Indians to rely on their own inner strength rather than seeking an English prop in what was an Indian fight for justice.'
      },
      {
        question: 'How did Gandhi combine political struggle with social and cultural upliftment in Champaran?',
        marks: '5 Marks',
        answerHint: 'Describe his opening of primary schools in six villages, mobilising Kasturbai and volunteers for health clinics, administering castor oil/quinine, and educating villagers on sanitation.'
      }
    ]
  },

  'Poets and Pancakes': {
    id: '12-fl-6',
    name: 'Poets and Pancakes',
    book: 'Book 1: Flamingo (Prose)',
    classLevel: '12',
    author: 'Asokamitran',
    genre: 'Memoir / Witty Behind-the-Scenes Chronicle',
    coreTheme: 'The backstage realities of early Indian cinema, creative jealousies, bureaucratic quirks, and ideological naivety.',
    synopsis: 'Asokamitran reminisces about his years working in the story department of Gemini Studios in Madras (Chennai), founded by S.S. Vasan in 1940. The title references "Pancake", the brand name of heavy makeup cake imported in truckloads to turn ordinary actors into hideous monsters under blazing lights. The makeup department operated with rigid hierarchy: the chief makeup artist attended to the lead hero, the junior for second lead, down to the "office boy" who painted crowds. Subbu (Kothamangalam Subbu), the versatile No. 2 at Gemini, was an indispensable poetic genius and problem-solver, though bitterly resented by the frustrated office boy. The studio also hosted Frank Buchman’s Moral Re-Armament Army and English poet Stephen Spender, whose obscure anti-communist speech completely baffled Tamil cinema workers.',
    keyPoints: [
      'Gemini Studios was a melting pot of national integration long before television, staffed by Bengalis, Maharashtrians, and Tamils.',
      'Subbu was the creative backbone of Gemini: loyal, cheerful, poetic, tailoring cinematic solutions spontaneously for the Boss.',
      'The "legal adviser" (lawyer) ironically extinguished an actress’s brilliant career through an illicit tape recording.',
      'The cultural visits of MRA and Stephen Spender reveal the Cold War cultural diplomacy that bewildered grassroots film technicians.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Asokamitran', description: 'Self-deprecating narrator whose job cutting newspaper clippings gave him a bird’s-eye view of human comedy.' },
      { name: 'Kothamangalam Subbu', description: 'Creative dynamo, generous friend, talented novelist, and second-in-command to S.S. Vasan.' },
      { name: 'The Office Boy', description: 'Bitter middle-aged lyricist/director aspirant relegated to slapping makeup on extras, nursing jealousy against Subbu.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Subtle Satire & Irony', explanation: 'Humorous exposure of studio pretensions, makeup excess, and ideological speeches delivered to uncomprehending audiences.' },
      { device: 'Anecdotal Vignette', explanation: 'Uses lighthearted backstage sketches to reveal broader socio-historical trends of post-independence India.' }
    ],
    examPracticeQuestions: [
      {
        question: 'What made Kothamangalam Subbu the ideal second-in-command at Gemini Studios?',
        marks: '3 Marks',
        answerHint: 'He had immense loyalty to the Boss, spontaneous creative solutions for film scenes, literary ability, and a generous disposition toward all guests.'
      },
      {
        question: 'Why was the visit of the English poet (Stephen Spender) a complete mystery to Gemini workers?',
        marks: '2 Marks',
        answerHint: 'His accent was unintelligible to the Tamil-speaking studio staff, and his highbrow talk on English poetry and anti-communism was irrelevant to their lives.'
      },
      {
        question: 'How does Asokamitran use gentle humor and satire to describe the makeup department and the legal adviser at Gemini Studios?',
        marks: '5 Marks',
        answerHint: 'Detail the truckloads of Pancakes, the scorching mirrors and incandescent bulbs, the ironic legal adviser who ruined an actress’s career, and the petty departmental rivalries.'
      }
    ]
  },

  'The Interview': {
    id: '12-fl-7',
    name: 'The Interview',
    book: 'Book 1: Flamingo (Prose)',
    classLevel: '12',
    author: 'Christopher Silvester',
    genre: 'Literary Journalism / Critical Dialogue',
    coreTheme: 'The ethical dilemmas of journalism, the celebrity fetishization of privacy, and intellectual time-management.',
    synopsis: 'Divided into two distinct parts, the chapter evaluates the modern phenomenon of the journalistic interview. Part 1 reviews diverse celebrity viewpoints: while some view interviews as supreme mediums of truth, others (Lewis Carroll, Rudyard Kipling, H.G. Wells, V.S. Naipaul) reviled it as an immoral assault, an invasion of privacy, or an operation that "steals the soul." Part 2 features a brilliant interview conducted by Mukund Padmanabhan of "The Hindu" with renowned Italian semiotician and novelist Umberto Eco. Eco demystifies his immense productivity by revealing his secret: utilizing the "interstices" or empty interstitial spaces of time (waiting for elevators, transit) and maintaining that his popular novel "The Name of the Rose" succeeded because it struck a mysterious chord at a particular historical moment.',
    keyPoints: [
      'The interview is both an indispensable communication instrument and a feared invasion of celebrity privacy.',
      'Literary luminaries like Kipling called interviews "vile, cowardly, and a crime" despite interviewing Mark Twain himself.',
      'Umberto Eco identifies himself primarily as an academic university professor who writes novels only on Sundays.',
      'Eco explains his phenomenal output through the elimination of wasted time in the "interstices" of daily existence.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Umberto Eco', description: 'Brilliant Italian semiotics professor, philosopher, and novelist; remarkably unpretentious, playful, and disciplined.' },
      { name: 'Mukund Padmanabhan', description: 'Perceptive journalist from The Hindu whose targeted inquiries draw out deep philosophical reflections.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Dual Perspective Structure', explanation: 'Balances theoretical critique of journalistic invasiveness with a model practical demonstration of an intellectual dialogue.' },
      { device: 'Metaphor of Interstices', explanation: 'Compares gaps in daily schedules to empty space between atoms in the universe.' }
    ],
    examPracticeQuestions: [
      {
        question: 'What is Umberto Eco’s theory of "interstices", and how does he utilize them?',
        marks: '3 Marks',
        answerHint: 'Interstices are empty intervals in time; Eco works during these waiting moments (like waiting for someone in an elevator) to compose essays and books.'
      },
      {
        question: 'Why did Rudyard Kipling express vehement hostility toward being interviewed?',
        marks: '2 Marks',
        answerHint: 'He viewed it as an assault, immoral, a crime deserving of punishment, and an unmanly imposition on personal dignity.'
      },
      {
        question: 'Discuss the factors that contributed to the monumental global success of Umberto Eco’s novel "The Name of the Rose".',
        marks: '5 Marks',
        answerHint: 'Examine its complex synthesis of medieval history, detective mystery, and semiotics, alongside Eco’s humble admission that timing played an inexplicable role.'
      }
    ]
  },

  'Going Places': {
    id: '12-fl-8',
    name: 'Going Places',
    book: 'Book 1: Flamingo (Prose)',
    classLevel: '12',
    author: 'A.R. Barton',
    genre: 'Adolescent Realist Fiction / Psychological Drama',
    coreTheme: 'Teenage hero-worship, escapist fantasies versus working-class reality, and the agony of shattered daydreams.',
    synopsis: 'Sophie and Jansie are working-class teenage schoolgirls destined to work in the local biscuit factory upon graduation. While sensible Jansie accepts their economic boundaries, Sophie lives in a vivid world of romantic daydreams, fantasizing about opening a boutique, becoming an actress, or working as a fashion manager. Sophie invents a fictitious encounter with Irish football prodigy Danny Casey in the arcade, confiding it to her reticent older brother Geoff, who works as an apprentice mechanic. Geoff shares it with their father, who dismisses it as nonsense. Sophie becomes so consumed by her fabricated romance that she travels to a solitary canal wharf on Saturday evening, waiting for Danny Casey to arrive. As dusk settles and reality sinks in, she walks home carrying the solitary grief of her unfulfilled illusions.',
    keyPoints: [
      'Stark contrast between Sophie\'s escapist fantasies and Jansie\'s grounded realism.',
      'The socio-economic constraints of a working-class industrial household where parents prioritize survival.',
      'Geoff symbolizes an elusive, mysterious outer world of motorcycles and silence that Sophie desperately wants to enter.',
      'Hero-worship of football icon Danny Casey acts as a psychological defense mechanism against a mundane destiny.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Sophie', description: 'Imaginative dreamer struggling against the monotony of working-class youth; blurs reality with yearning fantasy.' },
      { name: 'Jansie', description: 'Pragmatic, sensible friend who recognizes financial constraints and attempts to anchor Sophie in reality.' },
      { name: 'Geoff', description: 'Taciturn older brother whose mechanical world and silence make him Sophie’s trusted confidant.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Juxtaposition', explanation: 'Contrasts Sophie’s high-fashion boutique aspirations with the reality of biscuit factory labor and steaming kitchen sinks.' },
      { device: 'Pathos', explanation: 'The solitary scene at the canal bench captures the quiet heartbreak of adolescent self-deception.' }
    ],
    examPracticeQuestions: [
      {
        question: 'How do Sophie and Jansie differ in their attitude toward life and future careers?',
        marks: '3 Marks',
        answerHint: 'Sophie is an escapist dreamer aspiring to be a boutique owner or actress despite having no resources; Jansie is realistic, knowing they are earmarked for the biscuit factory.'
      },
      {
        question: 'Why did Sophie admire and confide in her brother Geoff more than anyone else?',
        marks: '2 Marks',
        answerHint: 'Geoff spoke little, making Sophie imagine he traveled into exotic unseen worlds where she longed to be admitted.'
      },
      {
        question: 'Describe Sophie’s experience as she waited for Danny Casey by the canal. How does A.R. Barton depict the tragedy of escapism?',
        marks: '5 Marks',
        answerHint: 'Trace the progression from excited anticipation on the wooden bench to growing doubt, the realization of her family’s mockery, and the heavy sorrow of confronting inescapable reality.'
      }
    ]
  },

  // ----------------------------------------------------
  // Book 1: Flamingo (Poetry)
  // ----------------------------------------------------
  'My Mother at Sixty-Six': {
    id: '12-fp-1',
    name: 'My Mother at Sixty-Six',
    book: 'Book 1: Flamingo (Poetry)',
    classLevel: '12',
    author: 'Kamala Das',
    genre: 'Confessional Lyric / Free Verse',
    coreTheme: 'The fear of aging, mortality of parents, separation anxiety, and concealing vulnerability behind social smiles.',
    synopsis: 'Driving from her parental home to the Cochin airport on a Friday morning, the poet looks at her elderly mother dozing beside her in the car with her mouth open. Her face appears pale, lifeless, and ashen like a corpse, sending a sharp pang of realization that her mother is truly aging toward death. To divert her thoughts from this ache, Kamala Das looks out the car window at young green trees sprinting and joyous children spilling out of their homes—symbols of pulsating youth and life. At the airport security check, seeing her mother again looking wan and pale like a late winter’s moon, the poet feels the familiar childhood fear of losing her mother. Suppressing her tears, she bids goodbye saying only, "See you soon, Amma," all while smiling continuously to mask her heartbreak.',
    keyPoints: [
      'The poem captures the universal pain of observing the inevitable physical decline of an aging parent.',
      'The car journey provides an intimate enclosed space contrasting inner grief with external vitality.',
      'Young sprinting trees and lively children serve as symbolic contrasts to the mother\'s decay.',
      'The repeated "smile and smile and smile..." represents courageous endurance over paralyzing grief.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Kamala Das (The Poet)', description: 'Sensitive daughter caught between modern professional commitments and protective grief for an aging parent.' },
      { name: 'The Mother', description: 'Sixty-six-year-old fragile matriarch whose pale face reflects approaching mortality.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Simile', explanation: '"Her face ashen like that of a corpse" and "wan, pale as a late winter’s moon" illustrate frail, lightless aging.' },
      { device: 'Personification & Contrast', explanation: '"Trees sprinting" contrasts the rush of youthful life against the immobile decline of the mother.' }
    ],
    examPracticeQuestions: [
      {
        question: 'Why does the poet compare her mother’s face to a "late winter’s moon"?',
        marks: '2 Marks',
        answerHint: 'A late winter’s moon lacks brightness, warmth, and luster due to fog and mist; similarly, the aging mother has lost her youthful vitality and radiance.'
      },
      {
        question: 'What do the "sprinting trees" and "merry children spilling" signify in the poem?',
        marks: '3 Marks',
        answerHint: 'They symbolize vigor, boundless life, speed, and energetic youth, serving as a dynamic contrast to the decaying, motionless mother inside the car.'
      },
      {
        question: 'Analyze the significance of the parting words of the poet and her repetitive smile at the airport.',
        marks: '5 Marks',
        answerHint: 'Explain how "See you soon, Amma" acts as a reassuring verbal bridge against the unspoken fear of mortality, while the repeated smile masks the daughter’s inner terror and comforts her mother.'
      }
    ]
  },

  'Keeping Quiet': {
    id: '12-fp-2',
    name: 'Keeping Quiet',
    book: 'Book 1: Flamingo (Poetry)',
    classLevel: '12',
    author: 'Pablo Neruda',
    genre: 'Meditative Anti-War Poetry / Free Verse',
    coreTheme: 'Universal introspection, peace, halting environmental plunder, and mutual human brotherhood.',
    synopsis: 'Pablo Neruda proposes that humanity count to twelve and suspend all speech and bodily movement for a single fleeting moment. In this exotic moment of quietude—free from roaring engines, rushing crowds, and mechanized labor—fishermen would cease harming whales in the cold seas, and the salt gatherer would look at his hurt hands. Those who wage wars of gas and fire would put on clean clothes and walk companionably with their brothers in the shade. Neruda clarifies that this stillness must not be confused with total inactivity or death; life is about dynamic essence. Just as the Earth appears dead in winter yet later proves to be vibrant with renewal, brief universal silence can heal humanity from the sadness of never understanding ourselves.',
    keyPoints: [
      'Counting to twelve symbolizes cosmic completeness (twelve hours of the clock, twelve months of the year).',
      'The "exotic moment" breaks mechanized haste, fostering environmental and spiritual balance.',
      'Clear distinction drawn between conscious introspection and total inactivity or death.',
      'The Earth serves as the supreme teacher of quiet, subterranean rejuvenation.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Pablo Neruda', description: 'Universal peacemaker and humanist poet advocating for mindfulness as an antidote to war and ecocide.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Paradox', explanation: 'The silence that appears inactive is actually the most active catalyst for moral rebirth and human fellowship.' },
      { device: 'Symbolism', explanation: '"Clean clothes" symbolize shedding hatred and military aggression to embrace brotherhood.' }
    ],
    examPracticeQuestions: [
      {
        question: 'What is the "exotic moment" referred to in Pablo Neruda’s poem?',
        marks: '2 Marks',
        answerHint: 'The rare moment when all humans pause activity and speech, creating a tranquil silence without rush or engines in mutual oneness.'
      },
      {
        question: 'How does Neruda distinguish keeping quiet from total inactivity and death?',
        marks: '3 Marks',
        answerHint: 'He explicitly states he wants "no truck with death"; life is about action, and quiet introspection is meant to revitalize meaningful living, not end it.'
      },
      {
        question: 'What lesson can humanity learn from the Earth according to "Keeping Quiet"?',
        marks: '5 Marks',
        answerHint: 'Discuss how the Earth demonstrates that apparent dormancy in autumn and winter conceals profound regenerative vitality that bursts forth in spring, showing silence is creative, not barren.'
      }
    ]
  },

  'A Thing of Beauty': {
    id: '12-fp-3',
    name: 'A Thing of Beauty',
    book: 'Book 1: Flamingo (Poetry)',
    classLevel: '12',
    author: 'John Keats',
    genre: 'Romantic Epic Excerpt (Endymion) / Heroic Couplet',
    coreTheme: 'The eternal restorative nature of beauty, spiritual transcendence over gloom, and art as an immortal fountain.',
    synopsis: 'John Keats opens his poetic romance Endymion with the immortal assertion: "A thing of beauty is a joy forever." Its loveliness increases continuously; it never passes into nothingness, providing a quiet bower of sleep full of sweet dreams, health, and peaceful breathing. Despite the despondence of inhuman dearth of noble natures, gloomy days, and dark ways of human existence, some shape of beauty moves away the dark pall from our spirits. Keats enumerates these eternal sources: the sun, the moon, old and young trees offering shade to simple sheep, daffodils in their green world, clear rills that cool the hot season, mid-forest ferns blooming with musk-roses, and the majestic legends of the mighty dead. All lovely tales we have heard or read constitute an endless fountain of immortal nectar pouring from heaven.',
    keyPoints: [
      'True beauty is timeless and unperishing, offering permanent emotional asylum.',
      'Human life is plagued by greed, despondence, malice, and shortage of noble virtues.',
      'Nature\'s beauty (daffodils, clear rills, shade trees) actively dispels human sorrow.',
      'Literature, history, and noble legends of ancestors are equivalent forms of sublime beauty.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'John Keats', description: 'Archetypal Romantic poet devoted to sensory worship and the spiritual permanence of aesthetic truth.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Metaphor', explanation: '"Bower quiet for us" and "Endless fountain of immortal drink" portray beauty as sheltering sanctuary and celestial elixir.' },
      { device: 'Alliteration', explanation: '"Noble natures", "cooling covert", "band to bind" lend musicality to the iambic couplets.' }
    ],
    examPracticeQuestions: [
      {
        question: 'Why does Keats describe a thing of beauty as "a joy forever"?',
        marks: '2 Marks',
        answerHint: 'Because its charm never fades or passes into nothingness; its memory and soothing emotional effect grow with time.'
      },
      {
        question: 'What makes human beings suffer and causes gloom in life according to Keats?',
        marks: '3 Marks',
        answerHint: 'Despondence, the lack of noble virtues among people, gloomy days, and the unhealthy, darkened pathways that people pursue.'
      },
      {
        question: 'List the things of beauty mentioned by Keats and explain how they lift the pall of sorrow from our lives.',
        marks: '5 Marks',
        answerHint: 'Enumerate the sun, moon, sheltering trees, simple sheep, daffodils, clear streams, musk-roses, and tales of the mighty dead, explaining how their divine grace purges worldly despair.'
      }
    ]
  },

  'A Roadside Stand': {
    id: '12-fp-4',
    name: 'A Roadside Stand',
    book: 'Book 1: Flamingo (Poetry)',
    classLevel: '12',
    author: 'Robert Frost',
    genre: 'Social Realist Verse / Pastoral Critique',
    coreTheme: 'The economic disparity between rural peasantry and urban elite, paternalistic political exploitation, and aching empathy.',
    synopsis: 'A modest rural household has extended a tiny shed out beside the road, appealing to speeding city automobiles to stop and purchase wild berries, squash, or rustic produce. The stand pleads not for charity, but for a share of the city money that sustains metropolitan prosperity. However, the affluent city motorists drive past with haughty indifference, complaining only that the unpolished signs mar the landscape. Self-serving politicians and "greedy good-doers" promise to relocate these peasants to villages near theaters and stores, calculatedly soothing them out of their wits and destroying their self-sufficiency. The poet is agonized by the futile, childlike longing of the rural folk waiting at their open windows for the squeal of brakes that only stop to turn around or ask for gas.',
    keyPoints: [
      'The roadside stand is not begging for bread, but for economic participation and fair cash trade.',
      'City dwellers demonstrate callous vanity, complaining about weathered signposts rather than recognizing rural struggle.',
      'Corrupt politicians and pseudo-philanthropists manipulate rural voters under the guise of urban welfare.',
      'Frost confesses raw personal anguish at the rural folk\'s unrewarded patience.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'The Rural Peasantry', description: 'Hardworking, patient, dignified villagers seeking economic dignity rather than humiliating handouts.' },
      { name: 'The City Motorists', description: 'Affluent, self-absorbed urbanites insensitive to the plight of the rural hinterland.' },
      { name: 'Robert Frost (The Poet)', description: 'Deeply troubled witness advocating for genuine social equity while despairing at human cruelty.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Oxymoron', explanation: '"Greedy good-doers" and "beneficent beasts of prey" expose deceitful politicians who exploit under the banner of charity.' },
      { device: 'Personification', explanation: '"A roadside stand that too pathetically pled" endows the physical wooden stall with human vulnerability.' }
    ],
    examPracticeQuestions: [
      {
        question: 'Why does the poet call the social reformers "greedy good-doers" and "beasts of prey"?',
        marks: '3 Marks',
        answerHint: 'They pretend to help rural people by relocating them to towns, but their true aim is self-enrichment, calculatedly depriving villagers of their independent initiative.'
      },
      {
        question: 'What do the city cars usually stop for at the roadside stand?',
        marks: '2 Marks',
        answerHint: 'To ask for directions, reverse their vehicles using the yard, or inquiring indignantly if they sell gallons of gas.'
      },
      {
        question: 'Examine Robert Frost’s critique of modern urban indifference and the exploitation of the rural poor in "A Roadside Stand".',
        marks: '5 Marks',
        answerHint: 'Analyze the contrast between city wealth and rural penury, the hollow promises of paternalistic welfare schemes, and the poet’s unbearable sorrow watching their patient, unanswered wait.'
      }
    ]
  },

  'Aunt Jennifer’s Tigers': {
    id: '12-fp-5',
    name: 'Aunt Jennifer’s Tigers',
    book: 'Book 1: Flamingo (Poetry)',
    classLevel: '12',
    author: 'Adrienne Rich',
    genre: 'Feminist Lyric / Symbolist Poetry',
    coreTheme: 'Patriarchal oppression, marital subjugation, artistic rebellion, and the immortality of creative agency.',
    synopsis: 'Aunt Jennifer knits bright, majestic topaz-colored tigers across an embroidered wool screen. These beasts pace fearlessly across the canvas with aristocratic confidence, unaffected by the men standing beneath the trees. In tragic contrast, Aunt Jennifer’s real hands are terrified and trembling; even pulling the lightweight ivory needle through the wool is an exhausting ordeal due to the crushing psychological weight of "Uncle\'s wedding band" sitting heavily on her hand. Even when death eventually claims her, her frightened hands will remain bound by the matrimonial ordeals that dominated her life. Yet, on the embroidered panel she leaves behind, her proud tigers will continue to prance proud and unafraid, symbolizing the eternal triumph of female artistic freedom.',
    keyPoints: [
      'The knitted tigers embody the courage, chivalry, and autonomy that Aunt Jennifer was denied in life.',
      '"Uncle\'s wedding band" symbolizes patriarchal captivity, domestic subservience, and emotional burden.',
      'Physical trembling of fingers reflects long-term psychological intimidation and trauma.',
      'Art functions as a subversive realm where suppressed female spirit achieves immortality.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Aunt Jennifer', description: 'Oppressed, victimized housewife whose suppressed inner spirit finds defiant expression through needlework.' },
      { name: 'The Tigers', description: 'Regal, bold creations of Aunt Jennifer’s imagination; unafraid of men, representing absolute freedom.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Symbolism', explanation: '"The massive weight of Uncle\'s wedding band" represents the oppressive institution of patriarchal marriage.' },
      { device: 'Alliteration', explanation: '"Prancing proud", "fingers fluttering" create contrasting musical cadences of strength versus fragility.' }
    ],
    examPracticeQuestions: [
      {
        question: 'How do Aunt Jennifer’s tigers look and behave differently from Aunt Jennifer herself?',
        marks: '3 Marks',
        answerHint: 'Her tigers are bright topaz, bold, chivalric, and prancing fearlessly before men; Aunt Jennifer is frail, terrified, and crushed beneath domestic domination.'
      },
      {
        question: 'What does "Uncle’s wedding band" symbolize in the poem?',
        marks: '2 Marks',
        answerHint: 'It symbolizes the burdensome marital expectations and patriarchal control that stripped away her freedom and identity.'
      },
      {
        question: 'Discuss how Adrienne Rich uses Aunt Jennifer’s art to demonstrate resistance against oppression and the immortal nature of art.',
        marks: '5 Marks',
        answerHint: 'Explain how while Jennifer’s mortal body remains ringed with ordeals even in death, her embroidered tigers will prance forever undefeated, validating the enduring power of creative expression.'
      }
    ]
  },

  // ----------------------------------------------------
  // Book 2: Vistas (Supplementary Reader)
  // ----------------------------------------------------
  'The Third Level': {
    id: '12-vs-1',
    name: 'The Third Level',
    book: 'Book 2: Vistas (Supplementary Reader)',
    classLevel: '12',
    author: 'Jack Finney',
    genre: 'Psychological Science Fiction / Time Travel',
    coreTheme: 'Escapism from modern anxiety, the psychological longing for idyllic peace, and the interplay between reality and fantasy.',
    synopsis: 'Thirty-one-year-old New York commuter Charley claims to have discovered a mysterious "Third Level" at Grand Central Station, where the authorities insist only two levels exist. Entering a strange arched corridor after work, Charley stumbles into the year 1894: flickering open-flame gaslights, brass spittoons, derby hats, handle-bar mustaches, pocket watches with gold chains, and an 1894 issue of The World newspaper. Desperately desiring to buy two train tickets to Galesburg, Illinois—a tranquil nineteenth-century haven of massive trees and summer evenings free from World War horrors—Charley offers modern currency, but the clerk threatens to arrest him for counterfeiting. Charley flees back to the present. His psychiatrist friend Sam Weiner initially dismisses the episode as a "waking-dream wish fulfillment" to escape modern insecurity and fear. However, Sam later mysteriously vanishes, and Charley discovers a first-day cover from 1894 sent by Sam from Galesburg, urging Charley and his wife Louisa to keep searching for the Third Level.',
    keyPoints: [
      'The modern urban world is full of insecurity, fear, war, and worry, sparking psychological escapism.',
      'Grand Central Station is metaphorically visualized as a giant growing tree pushing out roots and corridors.',
      'Philately (stamp collection) and first-day covers serve as psychological gateways across eras.',
      'Sam’s unexpected letter transforms an apparent psychological delusion into a tantalizing possibility.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Charley', description: 'Ordinary, stressed modern commuter whose nostalgic imagination seeks haven in pre-war Galesburg.' },
      { name: 'Sam Weiner', description: 'Psychiatrist friend whose professional skepticism succumbs to the irresistible allure of nineteenth-century peace.' },
      { name: 'Louisa', description: 'Caring wife who initially worries about Charley’s mental stability but joins the quest once evidence emerges.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Motif of Time Slip', explanation: 'Uses historical sensory artifacts (brass spittoons, Currier & Ives locomotives) to construct authentic temporal transitions.' },
      { device: 'Ambiguous Realism', explanation: 'Leaves open whether the Third Level is a psychological defense mechanism or an authentic inter-dimensional doorway.' }
    ],
    examPracticeQuestions: [
      {
        question: 'What did the psychiatrist friend say about Charley’s claim of the Third Level?',
        marks: '2 Marks',
        answerHint: 'He diagnosed it as a "waking-dream wish fulfillment", asserting that Charley sought to escape modern anxiety, insecurity, and stress.'
      },
      {
        question: 'What convinced Charley that Sam had truly reached the Third Level?',
        marks: '3 Marks',
        answerHint: 'He discovered an old first-day cover addressed to his grandfather in Galesburg with a handwritten letter from Sam dated July 18, 1894, confirming he had settled there.'
      },
      {
        question: 'Examine how "The Third Level" explores the psychological yearning of modern man to escape anxiety and reconnect with peace.',
        marks: '5 Marks',
        answerHint: 'Discuss the horrors of two World Wars that scarred the 20th-century psyche, analyzing the idyllic portrayal of 1894 Galesburg and how stamp-collecting served as a refuge.'
      }
    ]
  },

  'The Tiger King': {
    id: '12-vs-2',
    name: 'The Tiger King',
    book: 'Book 2: Vistas (Supplementary Reader)',
    classLevel: '12',
    author: 'Kalki',
    genre: 'Political Satire / Dramatic Irony',
    coreTheme: 'The arrogance of autocratic rulers, the folly of defying destiny, ecological ruthlessness, and supreme dramatic irony.',
    synopsis: 'Upon the birth of the Crown Prince of Pratibandapuram (Jilani Jung Jung Bahadur), chief astrologers prophesy that the child will grow to be a warrior of warriors, but will ultimately be killed by a tiger. The ten-day-old infant miraculously speaks, declaring: "Let tigers beware!" Ascending the throne at age twenty, the Maharaja embarks on an obsessive campaign to slaughter one hundred tigers to disprove the prophecy. He bans tiger hunting for all citizens, bribes a high-ranking British officer with fifty diamond rings to prevent hunting interference, and marries a princess whose father’s realm boasts dense tiger forests. Having killed ninety-nine tigers, the hundredth remains elusive until his terrified Dewan secretly plants an old circus tiger in the jungle. The King fires, the tiger collapses, and the King departs triumphant. In reality, the bullet missed and the tiger had only fainted from the shock; terrified hunters secretly shoot it dead. On his son\'s third birthday, the King buys a crudely carved wooden toy tiger. A tiny wooden sliver pierces his hand, developing into a fatal suppurating sore. Surgeons operate, but the King dies—the hundredth tiger claims its revenge.',
    keyPoints: [
      'Kalki delivers a stinging satire on the vanity, tyranny, and sycophancy of Indian princely states under British rule.',
      'The Maharaja subordinates all royal administration and state revenue to his personal obsession.',
      'The British officer\'s obsession with being photographed beside a dead tiger highlights colonial superficiality.',
      'The ultimate climax proves that human pride cannot outwit destiny; fate exacts retribution through an inanimate toy.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'The Tiger King (Maharaja of Pratibandapuram)', description: 'Arrogant, ruthless autocrat who treats state governance and ecology as playthings of his ego.' },
      { name: 'The Dewan', description: 'Spineless, sycophantic royal minister terrified of losing his position, going to comedic lengths to plant a circus tiger.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Dramatic Irony', explanation: 'The Maharaja dies celebrating his triumph over the 100th tiger, oblivious that the wooden toy is his true killer.' },
      { device: 'Satirical Hyperbole', explanation: 'A ten-day-old infant debating astrologers and royal bribes of 300,000 rupees in diamonds mock feudal absurdity.' }
    ],
    examPracticeQuestions: [
      {
        question: 'How did the Maharaja manage to retain his kingdom when a British officer was refused permission to hunt tigers?',
        marks: '3 Marks',
        answerHint: 'He dispatched a consignment of fifty expensive diamond rings from Calcutta to the British officer’s wife, hoping she would keep one or two; she kept all fifty, costing the King three lakh rupees but saving his throne.'
      },
      {
        question: 'What was the truth about the killing of the hundredth tiger?',
        marks: '2 Marks',
        answerHint: 'The King’s bullet missed the weak old beast; it merely fainted from the sound. The guards secretly shot it dead so the King would not learn the truth and punish them.'
      },
      {
        question: 'Comment on the ending of "The Tiger King" and how Kalki uses irony to satirize human arrogance against nature.',
        marks: '5 Marks',
        answerHint: 'Analyze how the King exterminated real beasts only to be slain by an infection from a cheap wooden toy tiger on his son’s birthday, highlighting the futility of escaping mortality.'
      }
    ]
  },

  'Journey to the End of the Earth': {
    id: '12-vs-3',
    name: 'Journey to the End of the Earth',
    book: 'Book 2: Vistas (Supplementary Reader)',
    classLevel: '12',
    author: 'Tishani Doshi',
    genre: 'Environmental Travelogue / Ecological Memoir',
    coreTheme: 'Climate crisis, geological history of Gondwana, the fragility of polar ecosystems, and youth environmental stewardship.',
    synopsis: 'Tishani Doshi joins the "Students on Ice" expedition aboard the Russian research vessel Akademik Shokalskiy, led by Canadian educator Geoff Green. The program takes high school students to Antarctica to foster visceral understanding of the planetary ecosystem. Six hundred and fifty million years ago, a giant supercontinent named Gondwana thrived around present-day Antarctica with a warm climate and rich biodiversity. Over millions of years, the landmass fractured, drifting into the continents of today. Antarctica, holding ninety percent of the Earth\'s total ice volume, possesses no trees, billboards, or human settlements, providing an untainted perspective on Earth’s past, present, and future. Doshi witnesses collapsing ice shelves, retreating glaciers, and microscopic phytoplankton sustaining the entire marine food web. She emphasizes that small changes in polar ecology trigger catastrophic global climatic consequences.',
    keyPoints: [
      'Gondwana’s geological history explains continental drift, the formation of the Himalayas, and Drake Passage.',
      'Antarctica acts as a pristine baseline devoid of human clutter, holding centuries of carbon records trapped in deep ice cores.',
      'Microscopic phytoplankton demonstrate how the smallest single-celled organisms nourish the entire Southern Ocean food chain.',
      'Geoff Green shifted the program from wealthy tourists to students because youth are the future policy makers who can take action.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Tishani Doshi', description: 'Reflective writer whose polar voyage bridges geological time with urgent ecological warnings.' },
      { name: 'Geoff Green', description: 'Visionary educator who recognized that experiential learning in Antarctica inspires youth to environmental leadership.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Sensory Immersion', explanation: 'Contrasts the scorching humidity of South India with the dazzling white, twenty-four-hour austral summer light of Antarctica.' },
      { device: 'Ecological Allegory', explanation: 'Phytoplankton serve as a metaphor: "Take care of the small things and the big things will fall into place."' }
    ],
    examPracticeQuestions: [
      {
        question: 'Why is Antarctica the perfect place to study the Earth’s past, present, and future?',
        marks: '3 Marks',
        answerHint: 'It has never sustained a human population, leaving it pristine; its deep ice cores hold half-million-year-old carbon records, and melting glaciers illustrate future global warming.'
      },
      {
        question: 'What is the significance of microscopic phytoplankton in the Southern Ocean?',
        marks: '2 Marks',
        answerHint: 'These single-celled grasses use sun energy to synthesize organic compounds, nourishing the entire marine ecosystem of the Southern Ocean.'
      },
      {
        question: 'Why did Geoff Green start the "Students on Ice" programme with high school students?',
        marks: '5 Marks',
        answerHint: 'He grew tired of carting idle wealthy tourists who gave nothing back; teenagers are energetic, receptive, and at an age where learning turns into lifelong environmental activism and policy change.'
      }
    ]
  },

  'The Enemy': {
    id: '12-vs-4',
    name: 'The Enemy',
    book: 'Book 2: Vistas (Supplementary Reader)',
    classLevel: '12',
    author: 'Pearl S. Buck',
    genre: 'Moral Drama / Historical Fiction',
    coreTheme: 'The supremacy of medical ethics and universal humanity over narrow wartime nationalism, prejudice, and patriotic duty.',
    synopsis: 'During World War II, Dr. Sadao Hoki, a distinguished Japanese surgeon living on the coast with his wife Hana, discovers a wounded American prisoner of war washed ashore near their house. The young sailor, Tom, has a bullet lodged near his kidney and is bleeding profusely. Harboring an enemy soldier is treason, while handing him to the military police means certain death. Guided by his Hippocratic oath and innate human empathy, Sadao operates on the American in his private clinic and extracts the bullet, while Hana washes him after their traditional servants quit in patriotic outrage. Sadao reports the prisoner’s presence to the ailing Japanese General, who promises to send private assassins to silently eliminate the American. When the assassins fail to arrive after three nights, Sadao takes destiny into his own hands: he outfits the American with a boat, food, water, and warm quilts, directing him to a desolate offshore island where an American rescue vessel can pick him up safely. Sadao reflects on why he could not kill his enemy.',
    keyPoints: [
      'The central conflict opposes universal human morality and professional duty against wartime jingoism.',
      'Sadao’s household servants represent traditional superstitious prejudice, choosing to leave the doctor rather than aid a white man.',
      'The Japanese General’s self-absorption (worrying about his own surgery) prevents him from sending assassins.',
      'True courage lies in defying institutional hatred to save an individual human life.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Dr. Sadao Hoki', description: 'Brilliant Japanese surgeon whose scientific integrity and profound moral courage transcend national chauvinism.' },
      { name: 'Hana', description: 'Loving, dignified wife who overcomes visceral nausea to assist during surgery when servants desert them.' },
      { name: 'The American POW (Tom)', description: 'Wounded, bewildered teenage soldier saved by the kindness of his sworn enemies.' },
      { name: 'The General', description: 'Aging military commander whose dependence on Sadao’s surgical skills makes him overlook the treason.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Moral Irony', explanation: 'A Japanese doctor trained in America during peacetime is compelled to save the life of an American soldier during wartime.' },
      { device: 'Symbolism of Mist', explanation: 'The creeping fog off the ocean mirrors the moral ambiguity and concealment clouding Sadao’s choices.' }
    ],
    examPracticeQuestions: [
      {
        question: 'What dilemma did Dr. Sadao and Hana face when they found the wounded American sailor?',
        marks: '3 Marks',
        answerHint: 'If they sheltered an enemy prisoner of war, they would be arrested for treason; if they turned him over to the police, he would certainly be executed.'
      },
      {
        question: 'Why did the household servants desert Dr. Sadao’s house?',
        marks: '2 Marks',
        answerHint: 'They were fiercely patriotic and superstitious, believing it was unpatriotic and cursed to heal a white enemy whom nature had condemned to drown.'
      },
      {
        question: 'How did Dr. Sadao help the American soldier escape safely, and what does this reveal about his character?',
        marks: '5 Marks',
        answerHint: 'Describe the boat loaded with provisions, fresh water, flashlights, and instructions to signal from the uninhabited island, demonstrating that his compassion as a doctor surpassed wartime hatred.'
      }
    ]
  },

  'On the Face of It': {
    id: '12-vs-5',
    name: 'On the Face of It',
    book: 'Book 2: Vistas (Supplementary Reader)',
    classLevel: '12',
    author: 'Susan Hill',
    genre: 'Psychological Play / Existential Drama',
    coreTheme: 'The pain of physical disability, psychological alienation, the transformative power of acceptance, and looking beyond appearances.',
    synopsis: 'Fourteen-year-old Derry has one side of his face horribly scarred by acid. Bitter, hypersensitive, and convinced that everyone pities or fears him, he climbs over the garden wall of an eccentric elderly man, Mr. Lamb, seeking isolation. Instead of chiding him, Mr. Lamb welcomes him warmly. Mr. Lamb has a tin leg, having lost his real one in a wartime explosion, and is nicknamed "Lamey-Lamb" by neighborhood children. Yet, Mr. Lamb keeps his garden gates open, loves bees humming, reads books, and makes jelly from crabapples. Through gentle, philosophical dialogue, Mr. Lamb challenges Derry’s self-imposed prison, teaching him that people are alienated not by physical scars, but by bitter internal walls. Deeply inspired, Derry returns home, defies his overprotective mother’s objections, and runs back to the garden, only to find Mr. Lamb lying motionless beside his fallen ladder. Though Mr. Lamb has passed away, Derry’s spirit has been permanently healed.',
    keyPoints: [
      'Physical deformity causes less torment than the cruel pity, callous stares, and isolation inflicted by society.',
      'Mr. Lamb embraces the beauty of life, refusing curtains on windows because he loves light, wind, and open space.',
      'The parable of the man who locked himself in a room to avoid danger (and was killed by a picture falling off the wall) shatters Derry’s isolationism.',
      'Derry discovers that courage is an active choice, stepping out of bitterness into emotional independence.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Derry (Derek)', description: 'Fourteen-year-old boy suffering from acute inferiority complex and defensive cynicism due to an acid burn.' },
      { name: 'Mr. Lamb', description: 'Wise, resilient old gentleman whose tin leg does not stop him from spreading optimism, warmth, and acceptance.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Motif of Open Gates and Windows', explanation: 'Symbolizes Mr. Lamb’s open mind, vulnerability, and refusal to shut out the world despite pain.' },
      { device: 'Weeds and Flowers Analogy', explanation: 'Mr. Lamb asks why a weed is considered inferior to a flower when both represent vibrant green life.' }
    ],
    examPracticeQuestions: [
      {
        question: 'Why does Derry say that people are afraid of him?',
        marks: '2 Marks',
        answerHint: 'Because one side of his face was eaten away by acid, causing people to shudder, stare with horror, or utter patronizing condolences.'
      },
      {
        question: 'What story did Mr. Lamb tell Derry about the man who feared everything?',
        marks: '3 Marks',
        answerHint: 'A man locked himself in a room to avoid accidents, infections, or snakes, but a picture hanging on the wall fell on his head and killed him, showing that fear cannot safeguard life.'
      },
      {
        question: 'How does Mr. Lamb’s brief mentorship permanently transform Derry’s outlook on life?',
        marks: '5 Marks',
        answerHint: 'Discuss Mr. Lamb’s teachings on the equality of weeds and flowers, the courage to embrace hearing and seeing, and how Derry defied his mother to return to the garden, forever shedding his self-hatred.'
      }
    ]
  },

  'The Cutting of My Long Hair (Memories of Childhood)': {
    id: '12-vs-6a',
    name: 'The Cutting of My Long Hair (Memories of Childhood)',
    book: 'Book 2: Vistas (Supplementary Reader)',
    classLevel: '12',
    author: 'Zitkala-Sa',
    genre: 'Autobiographical Protest Narrative',
    coreTheme: 'Cultural genocide, racial oppression in residential schools, destruction of Indigenous identity, and resistance.',
    synopsis: 'Zitkala-Sa (Gertrude Simmons Bonnin), a Native American girl, recalls her harrowing first day at Carlisle Indian Industrial School. Stripped of her warm, soft moccasins and forced into stiff shoes and tight-fitting dresses that violate modesty, she is bewildered by the harsh metallic bells and eating rituals in the dining hall. When her friend Judewin overhears a matron planning to cut her long, heavy hair, Zitkala-Sa vows to rebel: in her Dakota culture, short hair was worn only by mourners and shingled hair by captured cowards. She hides in a dark, empty room under a bed. Discovered and dragged out kicking and screaming, she is tied to a chair while her thick braids are sheared off. Desolate, she laments that her spirit has been crushed, leaving her feeling like one of many helpless animals driven by a herder.',
    keyPoints: [
      'Residential schools systematically eradicated Indigenous language, dress, hairstyle, and religious traditions.',
      'The strict mechanical routine (eating by bells) represents colonial regimentation suppressing human freedom.',
      'Hair is sacred in Native American culture; forcibly cutting it represents extreme humiliation and subjugation.',
      'Zitkala-Sa fights back fiercely, symbolizing persistent Indigenous spirit and dignity.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Zitkala-Sa', description: 'Proud, sensitive Native American girl who fiercely defends her cultural heritage against forced colonial assimilation.' },
      { name: 'Judewin', description: 'Fellow native student who understands English but advocates pragmatic submission to the cruel authorities.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Animal Imagery', explanation: '"I felt like one of many animals driven by a herder" conveys dehumanization and forced conformity.' },
      { device: 'Sensory Conflict', explanation: 'The loud clatter of hard shoes and ringing brass bells contrasted with the quiet dignity of her native blanket.' }
    ],
    examPracticeQuestions: [
      {
        question: 'Why did Zitkala-Sa resist having her hair cut at the Carlisle school?',
        marks: '2 Marks',
        answerHint: 'In her Native American culture, short hair was worn only by mourners, and shingled hair was the mark of cowards captured in battle.'
      },
      {
        question: 'Describe the dining room incident that caused confusion to Zitkala-Sa on her first day.',
        marks: '3 Marks',
        answerHint: 'She did not understand the three bells: pulling out chairs on the first, sitting on the second, and praying on the third; her early actions caused embarrassment under hostile eyes.'
      },
      {
        question: 'How does "The Cutting of My Long Hair" highlight the cruel erasure of cultural identity in boarding schools?',
        marks: '5 Marks',
        answerHint: 'Analyze the loss of moccasins, the forced Western clothing, the shearing of sacred braids, and how Zitkala-Sa’s lonely rebellion stood as a testament against cultural assimilation.'
      }
    ]
  },

  'We Too Are Human Beings (Memories of Childhood)': {
    id: '12-vs-6b',
    name: 'We Too Are Human Beings (Memories of Childhood)',
    book: 'Book 2: Vistas (Supplementary Reader)',
    classLevel: '12',
    author: 'Bama',
    genre: 'Dalit Autobiographical Memoir / Social Protest',
    coreTheme: 'The humiliation of caste discrimination and untouchability, the spark of social rebellion, and education as the weapon of liberation.',
    synopsis: 'Bama, a Tamil Dalit girl in the third standard, is a cheerful child who takes half an hour to walk a ten-minute distance from school, delighting in street performances, monkeys, snake charmers, and fried snacks. One afternoon, she witnesses an elder of her community carrying a parcel of vadai by a string without touching the package itself, bowing reverently to hand it to the upper-caste village landlord. Initially finding the sight comically absurd, Bama laughs when narrating it to her elder brother Annan. Annan sternly explains the horrific reality of untouchability: upper-caste people believe touching food handled by lower castes will pollute them. Shattered by this injustice, Bama feels burning indignation. Annan advises her that because Dalits are denied dignity and respect, education is their only true weapon: if she studies hard and excels, people will voluntarily associate with her. Bama dedicates herself to her studies, topping her class and earning numerous friends.',
    keyPoints: [
      'Caste discrimination and untouchability humiliate human beings on the arbitrary basis of birth.',
      'Bama’s childhood innocence initially views ritual submission as entertaining comedy before learning its cruelty.',
      'Annan provides vital radical consciousness, rejecting submission and promoting education as empowerment.',
      'Excellence in education directly shatters oppressive social hierarchies.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Bama', description: 'Curious, spirited Dalit girl whose youthful joy turns into a lifelong commitment against social discrimination.' },
      { name: 'Annan', description: 'Wise elder brother whose intellectual guidance channels Bama’s anger into educational brilliance and empowerment.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Tone Shift', explanation: 'Transitions masterfully from lighthearted street-fair whimsy to fiery social critique and moral awakening.' },
      { device: 'Symbolism', explanation: 'The packet held by a string symbolizes the dehumanizing stigma of touch pollution in feudal caste society.' }
    ],
    examPracticeQuestions: [
      {
        question: 'Why did the elder of Bama’s community hold the food packet by its string?',
        marks: '2 Marks',
        answerHint: 'Because he belonged to a lower caste; the upper-caste landlord believed that physical contact with the parcel would pollute the food.'
      },
      {
        question: 'What advice did Annan give Bama to overcome the indignity of untouchability?',
        marks: '3 Marks',
        answerHint: 'He explained that education was their only way to win respect; if she studied hard and made progress, people would come to her on their own accord.'
      },
      {
        question: 'Contrast Bama’s initial amusement with her subsequent feelings upon understanding the meaning of the elder’s behavior.',
        marks: '5 Marks',
        answerHint: 'Detail how her laughter transformed into burning anger and grief at the humiliation of an elder, and how Annan’s wisdom inspired her to top her class in school.'
      }
    ]
  }
};
