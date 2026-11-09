export interface ChapterStudyGuide {
  id: string;
  name: string;
  book: string;
  classLevel: '10' | '11' | '12';
  author: string;
  genre: string;
  coreTheme: string;
  synopsis: string;
  keyPoints: string[];
  characterOrSpeakerAnalysis: { name: string; description: string }[];
  literaryAndPoeticDevices: { device: string; explanation: string }[];
  examPracticeQuestions: {
    question: string;
    marks: '2 Marks' | '3 Marks' | '5 Marks';
    answerHint: string;
  }[];
}

export const CLASS_10_STUDY_MATERIALS: Record<string, ChapterStudyGuide> = {
  'A Letter to God': {
    id: '10-ff-1',
    name: 'A Letter to God',
    book: 'Book 1: First Flight (Prose)',
    classLevel: '10',
    author: 'G.L. Fuentes',
    genre: 'Satirical Narrative / Parable',
    coreTheme: 'The dual nature of unwavering faith—its purity and power alongside the blinding irony of human distrust.',
    synopsis: 'Lencho, a committed and humble farmer, awaits a vital rain shower to nourish his cornfield. While initial showers bring joy, they swiftly morph into a calamitous hailstorm, destroying his entire year’s harvest. Driven by innocent, absolute faith, Lencho writes an honest letter addressed directly to "God" pleading for one hundred pesos. The postmaster, touched by such immaculate conviction, collects seventy pesos from colleagues and sends it with a sign-off "God". Upon counting the money, Lencho suspects the post office clerks of theft, ironically petitioning God not to send the remainder through the mail because the postal staff are "a bunch of crooks."',
    keyPoints: [
      'Lencho’s life is intrinsically tied to nature and agriculture; raindrops initially symbolize silver coins.',
      'A devastating hailstorm strips the valley white like salt, leaving Lencho’s family facing starvation.',
      'The postmaster embodies active secular charity, rallying his staff to prevent a believer from losing faith.',
      'The climax hinges upon dramatic and situational irony: the genuine benefactors are branded thieves.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Lencho', description: 'Hardworking, devout, innocent, yet limited in worldly understanding and trusting only the divine over human institutions.' },
      { name: 'The Postmaster', description: 'Empathetic, amiable, generous; represents genuine compassion and moral duty in society.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Situational Irony', explanation: 'The charitable postal workers who sacrificially help Lencho are accused of stealing the missing thirty pesos.' },
      { device: 'Metaphor', explanation: '"Raindrops are new coins" (large drops ten-cent pieces, small drops fives).' }
    ],
    examPracticeQuestions: [
      {
        question: 'Why did Lencho write a letter to God, and how did the postmaster react?',
        marks: '3 Marks',
        answerHint: 'Lencho lost his entire harvest to hail and needed 100 pesos to sow again and survive. The postmaster admired his rare faith and decided to respond with financial charity.'
      },
      {
        question: 'Elaborate on the element of irony in the ending of "A Letter to God".',
        marks: '5 Marks',
        answerHint: 'Discuss the discrepancy between reality and Lencho’s perception: the postal staff gave part of their own salaries, yet Lencho concluded they were dishonest crooks.'
      }
    ]
  },

  'Nelson Mandela: Long Walk to Freedom': {
    id: '10-ff-2',
    name: 'Nelson Mandela: Long Walk to Freedom',
    book: 'Book 1: First Flight (Prose)',
    classLevel: '10',
    author: 'Nelson Rolihlahla Mandela',
    genre: 'Autobiography / Historical Speech',
    coreTheme: 'Emancipation from apartheid, the philosophical evolution of human freedom, and universal brotherhood.',
    synopsis: 'Recounting the historic inauguration on May 10, 1994, at the Union Buildings amphitheatre in Pretoria, Nelson Mandela reflects on South Africa’s transition into a non-racial democracy. He salutes the countless patriots who gave their lives for freedom. Mandela expounds upon the concept of courage—defined not as the absence of fear, but the triumph over it. He elaborates on the "twin obligations" every citizen bears: towards one’s family and towards one’s nation, underscoring that both the oppressor and the oppressed must be freed from the shackles of hatred.',
    keyPoints: [
      '10th May symbolizes a bright dawn after centuries of systemic apartheid and white domination.',
      'Courage is not fearlessness, but the resilience to confront and conquer terror.',
      'Twin obligations must be balanced: family duty and civic responsibility.',
      'True freedom means liberating both the victim of oppression and the prisoner of prejudice.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Nelson Mandela', description: 'Visionary statesman, statesman of profound moral fortitude, forgiving of past captors, champion of inclusive equality.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Metaphor', explanation: '"Rainbow gathering of different nations" describes the multicultural assembly of world leaders.' },
      { device: 'Paradox', explanation: 'A person who imprisons another is himself a prisoner of hatred and narrow-mindedness.' }
    ],
    examPracticeQuestions: [
      {
        question: 'What are the "twin obligations" explained by Nelson Mandela?',
        marks: '3 Marks',
        answerHint: 'Obligation to family (parents, wife, children) and obligation to community, people, and nation.'
      },
      {
        question: 'How does Mandela define true courage and the liberation of the oppressor?',
        marks: '5 Marks',
        answerHint: 'Courage is the triumph over fear; the oppressor must be liberated from prejudice just as the oppressed from subjugation.'
      }
    ]
  },

  'His First Flight (Two Stories About Flying)': {
    id: '10-ff-3a',
    name: 'His First Flight (Two Stories About Flying)',
    book: 'Book 1: First Flight (Prose)',
    classLevel: '10',
    author: 'Liam O’Flaherty',
    genre: 'Allegorical Fiction',
    coreTheme: 'Overcoming irrational self-doubt, taking the initial leap of faith, and tough parental love.',
    synopsis: 'A young seagull stands alone on a cliff edge, paralyzed by fear while his siblings soar across the sea. Starved for twenty-four hours, his mother shrewdly uses a piece of fish as bait. Driven by desperate hunger, the young bird dives into the void. As terror gives way to instinctive wing movement, he discovers his innate ability to soar and skim the waves, embraced by his jubilant family.',
    keyPoints: [
      'Fear of failure often paralyzes potential before an effort is attempted.',
      'Hunger acts as the catalyst compelling the bird to forget his dread.',
      'Parental discipline often entails withholding comfort to encourage self-reliance.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'The Young Seagull', description: 'Initially timid and self-conscious, transforms into an agile flyer through necessity.' },
      { name: 'The Mother Seagull', description: 'Firm, perceptive, understands that desperation will awaken instinct.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Personification', explanation: 'Human emotional states (fear, pride, embarrassment) attributed to sea birds.' }
    ],
    examPracticeQuestions: [
      {
        question: 'How did the young seagull’s mother trick him into taking his first flight?',
        marks: '3 Marks',
        answerHint: 'She halted just out of his reach with fish in her beak; driven by intense hunger, he lunged forward and fell into the abyss, forcing his wings open.'
      }
    ]
  },

  'Black Aeroplane (Two Stories About Flying)': {
    id: '10-ff-3b',
    name: 'Black Aeroplane (Two Stories About Flying)',
    book: 'Book 1: First Flight (Prose)',
    classLevel: '10',
    author: 'Frederick Forsyth',
    genre: 'Mystery / Psychological Fiction',
    coreTheme: 'The power of inner survival instinct and the inexplicable nature of extraordinary deliverance.',
    synopsis: 'A pilot flying his vintage Dakota aircraft from France to England is engulfed by mountainous storm clouds. His instruments fail, compass spins erratically, and fuel runs low. Suddenly, an enigmatic black aeroplane without lights appears. Its pilot gestures him to follow through the turbulent darkness. Guided safely to a runway, the narrator lands and rushes to thank his guide, only to learn from the radar operator that no other plane flew that night.',
    keyPoints: [
      'The pilot’s yearning to reach home for English breakfast clouded his weather judgment.',
      'Instruments fail inside the storm, creating helplessness.',
      'The mysterious black aircraft represents either supernatural intervention or the pilot’s own subconscious survival instinct.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'The Narrator (Pilot)', description: 'Experienced yet susceptible to nostalgic temptation; resilient in crisis.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Pathetic Fallacy & Simile', explanation: 'Storm clouds described as "black mountains standing across the sky".' }
    ],
    examPracticeQuestions: [
      {
        question: 'What mystery remained unsolved at the conclusion of "The Black Aeroplane"?',
        marks: '3 Marks',
        answerHint: 'The identity of the pilot in the unlit black aeroplane who navigated the Dakota safely through the storm.'
      }
    ]
  },

  'From the Diary of Anne Frank': {
    id: '10-ff-4',
    name: 'From the Diary of Anne Frank',
    book: 'Book 1: First Flight (Prose)',
    classLevel: '10',
    author: 'Anne Frank',
    genre: 'Memoir / Diary Entries',
    coreTheme: 'Introspection, adolescent longing for genuine companionship, and intellectual resilience under repression.',
    synopsis: 'Thirteen-year-old Jewish girl Anne Frank reflects on why she keeps a diary, observing that "paper has more patience than people." She names her diary "Kitty" and narrates humorous and tender episodes from her Montessori school life, including her witty battles with Mr. Keesing, her math teacher who punished her talkativeness with essay assignments on "A Chatterbox". Anne turns these punishments into brilliant literary defences.',
    keyPoints: [
      'Anne felt lonely despite having loving parents and admirers because she lacked a true intimate confidante.',
      'Her humor and intellect allowed her to maintain human dignity amidst looming perils.',
      'Mr. Keesing’s transformation illustrates the power of creative persuasion.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Anne Frank', description: 'Precocious, witty, emotionally sensitive, observant, and intellectually gifted.' },
      { name: 'Mr. Keesing', description: 'Traditional teacher who appreciates Anne’s genuine comedic wit.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Personification', explanation: '"Paper has more patience than people."' }
    ],
    examPracticeQuestions: [
      {
        question: 'How did Anne justify her talkativeness in the essays assigned by Mr. Keesing?',
        marks: '3 Marks',
        answerHint: 'She argued that talking was an inherited female trait from her mother and impossible to cure completely.'
      }
    ]
  },

  'A Baker from Goa (Glimpses of India)': {
    id: '10-ff-5a',
    name: 'A Baker from Goa (Glimpses of India)',
    book: 'Book 1: First Flight (Prose)',
    classLevel: '10',
    author: 'Lucio Rodrigues',
    genre: 'Cultural Travelogue / Nostalgic Essay',
    coreTheme: 'The enduring legacy of Portuguese culinary traditions in Goan heritage.',
    synopsis: 'A warm recollection of traditional village bakers (pader) in Goa. In childhood, the baker was a friend, companion, and guide whose musical bamboo staff announced his arrival. Bread was central to every social and religious event—marriage bol, Christmas cakes, and sweet bread bangles (bolinhas). The baker’s distinctive dress (kabai) and prosperous build attested to a thriving profession.',
    keyPoints: [
      'The Portuguese introduced bread-making, which became deeply embedded in Goan folklore.',
      'The jhang-jhang of the baker’s staff was an auditory landmark for village children.',
      'Baking was a lucrative and respected domestic enterprise.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'The Village Pader', description: 'Plump, prosperous, cheerful craftsman woven into the cultural life of rural Goa.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Sensory Imagery', explanation: 'Aroma of fresh loaves, thud of the bamboo staff, sweet jingling bread bangles.' }
    ],
    examPracticeQuestions: [
      {
        question: 'Why was bread indispensable in traditional Goan village life?',
        marks: '3 Marks',
        answerHint: 'Marriage gifts were incomplete without sweet bread "bol", mothers prepared sandwiches for daughters’ engagements, and cakes for Christmas.'
      }
    ]
  },

  'Coorg (Glimpses of India)': {
    id: '10-ff-5b',
    name: 'Coorg (Glimpses of India)',
    book: 'Book 1: First Flight (Prose)',
    classLevel: '10',
    author: 'Lokesh Abrol',
    genre: 'Geographical & Cultural Sketch',
    coreTheme: 'Valor, biodiversity, and martial pride of the Kodavu people in the Western Ghats.',
    synopsis: 'Coorg (Kodagu), nestled halfway between Mysore and coastal Mangalore, is praised as a piece of heaven. Famed for evergreen rainforests, coffee plantations, and spices, it is populated by fiercely independent martial people of Greek or Arab lineage, evidenced by their traditional black coat (kuppia). Coorg is celebrated for scenic trekking, Mahseer fish in the river Kaveri, and as the home of General Cariappa, the Indian Army’s first Commander-in-Chief.',
    keyPoints: [
      'Known for aromatic coffee, spice plantations, and hospitable warrior traditions.',
      'Kuppia resembles the Arab kuffia, supporting tales of descent.',
      'The Coorg Regiment is among the most decorated in the Indian military.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'The Kodavus (Coorgis)', description: 'Courteous, brave, permitted to carry firearms without license due to trustworthy martial character.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Vivid Imagery', explanation: 'Canopies of coffee estates, mist-covered hills, and gushing waters of river Kaveri.' }
    ],
    examPracticeQuestions: [
      {
        question: 'Mention the two theories regarding the descent of the people of Coorg.',
        marks: '3 Marks',
        answerHint: 'Greek origin (soldiers of Alexander settling and marrying locally) and Arab origin (traditional kuppia coat akin to Arab kuffia).'
      }
    ]
  },

  'Tea from Assam (Glimpses of India)': {
    id: '10-ff-5c',
    name: 'Tea from Assam (Glimpses of India)',
    book: 'Book 1: First Flight (Prose)',
    classLevel: '10',
    author: 'Arup Kumar Datta',
    genre: 'Narrative Travelogue',
    coreTheme: 'History, myths, and immense agricultural landscape of world tea production.',
    synopsis: 'Classmates Rajvir and Pranjol travel by train to Assam, where Pranjol’s father manages the Dhekiabari tea estate. While Pranjol reads detective novels, Rajvir is enchanted by rolling manicured green tea bushes stretching as far as the eye can see. He shares legendary accounts of tea’s origin—from the Chinese Emperor whose boiled water was infused with accidental tea leaves, to Bodhidharma, who cut off his eyelids in meditation, producing medicinal tea plants.',
    keyPoints: [
      'Over eighty crore cups of tea are consumed worldwide daily.',
      'Legends trace tea to 2700 BC China and ancient Buddhist spiritual meditation.',
      'Assam boasts the largest concentration of tea plantations in the world.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Rajvir', description: 'Curious, scholarly researcher who prepares thoroughly for journeys.' },
      { name: 'Pranjol', description: 'Born in Assam, accustomed to the landscape, nonchalant yet welcoming.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Contrast', explanation: 'Rajvir’s wide-eyed wonder contrasted with Pranjol’s seasoned indifference.' }
    ],
    examPracticeQuestions: [
      {
        question: 'Briefly state the Chinese and Indian legends about the discovery of tea.',
        marks: '3 Marks',
        answerHint: 'Chinese: Leaves fell into boiling water for the Emperor; Indian: Bodhidharma plucked his eyelids and tea plants sprouted to banish sleep.'
      }
    ]
  },

  'Mijbil the Otter': {
    id: '10-ff-6',
    name: 'Mijbil the Otter',
    book: 'Book 1: First Flight (Prose)',
    classLevel: '10',
    author: 'Gavin Maxwell',
    genre: 'Personal Memoir / Animal Ecology',
    coreTheme: 'Interspecies bond, playful animal intellect, and human empathy.',
    synopsis: 'Following the death of his dog, Gavin Maxwell decides to raise an otter in his remote Scottish cottage at Camusfearna. In Iraq, he receives an otter from the Tigris marshes, named Mijbil. Mijbil showcases extraordinary intelligence, playing endlessly with marbles, ping-pong balls, and mastering water taps. His air transit to London triggers chaos, but an amiable air hostess assists. In London, city dwellers produce hilarious misidentifications—guessing Mijbil to be a seal, walrus, beaver, or hippo.',
    keyPoints: [
      'Otters have an insatiable affection for moving water.',
      'Maxwell’s meticulous care highlights responsible pet companionship.',
      'London pedestrians showcase comic detachment from wild biodiversity.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Mijbil', description: 'Inquisitive, acrobatic, affectionate, belonging to the zoological sub-species Lutrogale perspicillata maxwelli.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Humor & Hyperbole', explanation: 'Hilarious public guesses regarding Mijbil’s true species identity.' }
    ],
    examPracticeQuestions: [
      {
        question: 'How did Mijbil spend his time in London?',
        marks: '3 Marks',
        answerHint: 'Inventing games with ping-pong balls, marbles, galloping along low school walls, and splashing in baths.'
      }
    ]
  },

  'Madam Rides the Bus': {
    id: '10-ff-7',
    name: 'Madam Rides the Bus',
    book: 'Book 1: First Flight (Prose)',
    classLevel: '10',
    author: 'Vallikkannan',
    genre: 'Coming-of-Age Short Story',
    coreTheme: 'Childhood curiosity, self-determination, and the sobering reality of mortality.',
    synopsis: 'Eight-year-old Valliammai (Valli) yearns to ride the village bus to the nearby town. Demonstrating astonishing maturity, she saves sixty paise by sacrificing sweets and fair rides. Boarding the bus alone, she asserts her dignity against the good-humored conductor. On the journey, she is thrilled by a frolicking young cow running in front of the vehicle. However, on her return journey, seeing that same cow lying dead by the roadside shatters her naive exuberance, initiating her into life’s sobering fragility.',
    keyPoints: [
      'Valli’s disciplined planning and refusal of strangers’ treats demonstrate self-respect.',
      'The journey symbolizes the transition from innocent observation to existential awareness.',
      'The cow’s death serves as an epiphany regarding the impermanence of vitality.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Valli', description: 'Resourceful, dignified, observant, determined, resisting condescension.' },
      { name: 'Bus Conductor', description: 'Jovial, respectful of Valli’s haughty pride, calling her "Madam".' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Juxtaposition', explanation: 'The lively gamboling cow on the forward trip versus its still, bloodied body on the return.' }
    ],
    examPracticeQuestions: [
      {
        question: 'What did Valli see on her return journey that extinguished her joy?',
        marks: '3 Marks',
        answerHint: 'She saw the lifeless, bloodied body of the playful cow hit by a fast-moving vehicle, confronting the harshness of death.'
      }
    ]
  },

  'The Sermon at Benares': {
    id: '10-ff-8',
    name: 'The Sermon at Benares',
    book: 'Book 1: First Flight (Prose)',
    classLevel: '10',
    author: 'Betty Renshaw',
    genre: 'Spiritual Discourse / Philosophy',
    coreTheme: 'The inevitability of death, liberation from selfish grief, and Buddhist enlightenment.',
    synopsis: 'Prince Siddhartha Gautama renounces princely luxury upon encountering an aged man, a sick man, a corpse, and an ascetic monk. Attaining enlightenment beneath the Bodhi tree, he preaches his first sermon at the holy city of Benares. Kisa Gotami, devastated by her only son’s death, begs the Buddha for medicine. He asks her to procure mustard seeds from a house where no one has lost a child, husband, or parent. Wandering from door to door, she realizes that death is universal and grief only multiplies suffering.',
    keyPoints: [
      'Human life is brief, painful, and like ripe fruit liable to fall early.',
      'Mortality spares no mortal; grief cannot revive the departed.',
      'Peace of mind arises from overcoming the arrow of lamentation.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Gautama Buddha', description: 'Compassionate teacher who utilizes empirical life experiences to impart spiritual truth.' },
      { name: 'Kisa Gotami', description: 'Grief-stricken mother who evolves into spiritual awakening through universal brotherhood in suffering.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Simile', explanation: 'Mortals are compared to earthen vessels made by the potter, destined to be broken.' }
    ],
    examPracticeQuestions: [
      {
        question: 'How did Buddha make Kisa Gotami realize that death is common to all mankind?',
        marks: '3 Marks',
        answerHint: 'He asked for mustard seeds from a home that never faced death; finding no such household, she realized grief is shared by all humans.'
      }
    ]
  },

  'The Proposal': {
    id: '10-ff-9',
    name: 'The Proposal',
    book: 'Book 1: First Flight (Prose)',
    classLevel: '10',
    author: 'Anton Chekhov',
    genre: 'One-Act Farce / Satire',
    coreTheme: 'The absurdity of elite aristocratic marriages driven by material greed rather than romantic affection.',
    synopsis: 'Ivan Vassilevitch Lomov visits his neighbor Stepan Chubukov dressed in evening clothes to propose to his twenty-five-year-old daughter Natalya. Instead of expressing affection, Lomov and Natalya descend into petty, furious squabbles over the ownership of "Oxen Meadows" and the superior hunting pedigree of their dogs, Guess and Squeezer. Despite palpitations, fainting spells, and insults, they eventually seal the engagement amidst continued shouting.',
    keyPoints: [
      'Satirizes Russian landed gentry who prioritize property consolidation over authentic connection.',
      'Hypocrisy abounds as characters swing between hyperbolic flattery and vicious insults.',
      'The marriage is destined to be a lifelong continuation of combative bickering.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Ivan Lomov', description: 'Hypochondriac, petty, nervous, obsessed with legal ownership and pride.' },
      { name: 'Natalya Stepanovna', description: 'Shrewd, obstinate, argumentative, yet desperate for marital validation.' },
      { name: 'Stepan Chubukov', description: 'Opportunistic patriarch worried about social propriety and marrying off his daughter.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Farce & Caricature', explanation: 'Exaggerated physical hysterics, fainting spells, and ludicrous arguments over worthless plots.' }
    ],
    examPracticeQuestions: [
      {
        question: 'Why does Lomov decide to propose to Natalya despite their frequent arguments?',
        marks: '3 Marks',
        answerHint: 'He is thirty-five, suffers from nervous palpitations, desires a settled domestic life, and recognizes the economic benefits of merging properties.'
      }
    ]
  },

  // First Flight - Poetry
  'Dust of Snow': {
    id: '10-p-1',
    name: 'Dust of Snow',
    book: 'Book 1: First Flight (Poetry)',
    classLevel: '10',
    author: 'Robert Frost',
    genre: 'Lyrical Nature Poem',
    coreTheme: 'The redemptive, uplifting healing power of nature in overturning despondency.',
    synopsis: 'A depressed poet stands under a poisonous hemlock tree. A crow perches on a branch and shakes down a shower of fine snow onto him. This simple, spontaneous physical touch triggers an immediate psychological shift, lifting his melancholy and rescuing a day he had previously regretted.',
    keyPoints: [
      'Traditionally ominous symbols (crow, hemlock) are subverted to bring joyful catharsis.',
      'Small, unpremeditated moments in nature can heal profound mental distress.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'The Speaker', description: 'Gloomy, meditative, sensitized to nature’s subtle intervention.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Rhyme Scheme', explanation: 'abab cdcd' },
      { device: 'Alliteration', explanation: '"Has given my heart", "And saved some part"' },
      { device: 'Symbolism', explanation: 'Crow and Hemlock symbolize ill-omen subverted into renewal.' }
    ],
    examPracticeQuestions: [
      {
        question: 'What is the significance of the crow and the hemlock tree in "Dust of Snow"?',
        marks: '3 Marks',
        answerHint: 'Frost deliberately uses emblems of sorrow to demonstrate that nature brings joy through unexpected, unorthodox agents.'
      }
    ]
  },

  'Fire and Ice': {
    id: '10-p-2',
    name: 'Fire and Ice',
    book: 'Book 1: First Flight (Poetry)',
    classLevel: '10',
    author: 'Robert Frost',
    genre: 'Philosophical Apocalyptic Poem',
    coreTheme: 'The apocalyptic destructive power of unbridled human passion (fire) and cold hatred (ice).',
    synopsis: 'Frost contemplates the two scientific and theological theories regarding the world’s end. Associating fire with unchecked desire, greed, and lust, he favors those who forecast thermal destruction. Yet, examining human apathy, rigidity, and hatred, he notes that cold indifference is equally lethal and would suffice to annihilate humanity.',
    keyPoints: [
      'Fire corresponds to destructive desire, passion, and fury.',
      'Ice symbolizes cold indifference, intellectual malice, and hatred.',
      'Human emotional flaws are potent enough to trigger cosmic apocalypse.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'The Speaker', description: 'Pragmatic, observant philosopher warning against self-destruction.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Anaphora', explanation: '"Some say the world will end in fire, / Some say in ice"' },
      { device: 'Metaphor', explanation: 'Fire = Desire / Greed; Ice = Hatred / Apathy.' }
    ],
    examPracticeQuestions: [
      {
        question: 'How do "Fire" and "Ice" represent human emotions capable of destroying civilization?',
        marks: '3 Marks',
        answerHint: 'Fire represents fiery desires like greed and lust; Ice represents cold callousness and indifference.'
      }
    ]
  },

  'A Tiger in the Zoo': {
    id: '10-p-3',
    name: 'A Tiger in the Zoo',
    book: 'Book 1: First Flight (Poetry)',
    classLevel: '10',
    author: 'Leslie Norris',
    genre: 'Contrasting Nature Lyric',
    coreTheme: 'The tragedy of animal captivity, loss of freedom, and suppression of majestic instincts.',
    synopsis: 'Contrasts the life of a magnificent tiger confined in a cramped concrete cage with his natural habitat in the wild. In captivity, he paces powerless, his rage quieted behind iron bars, ignoring visitors. In the jungle, he should be stalking silently through long grass near water holes to hunt deer and terrifying village borders with bared fangs. At night, he stares hopelessly at the brilliant stars.',
    keyPoints: [
      'Contrasts vibrant natural ferocity with pathetic artificial confinement.',
      'Wild creatures lose vitality and pride when incarcerated for human amusement.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'The Tiger', description: 'Regal, dangerous, trapped, holding quiet, dignified rage.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Oxymoron', explanation: '"Quiet rage" brings together paradoxical emotional states.' },
      { device: 'Personification', explanation: 'Tiger referred to as "he" with proud human dignity.' }
    ],
    examPracticeQuestions: [
      {
        question: 'Contrast the tiger’s activities in the wild with his existence in the cage.',
        marks: '3 Marks',
        answerHint: 'In the wild: stalking deer, lurking in shadows, terrorizing villages; in cage: pacing short steps, ignoring tourists, staring at stars.'
      }
    ]
  },

  'How to Tell Wild Animals': {
    id: '10-p-4',
    name: 'How to Tell Wild Animals',
    book: 'Book 1: First Flight (Poetry)',
    classLevel: '10',
    author: 'Carolyn Wells',
    genre: 'Humorous / Light Verse',
    coreTheme: 'Playful identification of lethal beasts using tongue-in-cheek danger advice.',
    synopsis: 'A witty manual offering comical rules to recognize dangerous wild beasts: the Asian Lion by its terrifying roar before you perish, the Bengal Tiger by its black stripes on yellow coat as it devours you, the Leopard by its relentless leaping, the Bear by its fatal hug, the Crocodile by its deceptive tears, and the Chameleon by its invisible presence.',
    keyPoints: [
      'Humor created by treating lethal wildlife attacks as handy identification clues.',
      'Rhyme and rhythm generate whimsical pedagogical music.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'The Speaker', description: 'Facetious wildlife tour guide enjoying dark, gentle absurdity.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Alliteration', explanation: '"A noble wild beast greets you", "he’ll only lep and lep again".' },
      { device: 'Poetic License', explanation: 'Altering words like "lep" for leap to fit rhyme scheme.' }
    ],
    examPracticeQuestions: [
      {
        question: 'How does the poet distinguish between a hyena and a crocodile?',
        marks: '2 Marks',
        answerHint: 'Hyenas always arrive with merry human-like smiles, while crocodiles weep deceptive tears before devouring their prey.'
      }
    ]
  },

  'The Ball Poem': {
    id: '10-p-5',
    name: 'The Ball Poem',
    book: 'Book 1: First Flight (Poetry)',
    classLevel: '10',
    author: 'John Berryman',
    genre: 'Philosophical Elegy',
    coreTheme: 'The epistemology of loss, the necessity of personal grief, and growing up in a world of possessions.',
    synopsis: 'A young boy accidentally loses his rubber ball into the harbor waters. He stands rigid, trembling with despair. The poet refuses to intrude or offer money for another ball, recognizing that another ball is worthless; the boy is experiencing his first genuine confrontation with irreversible loss and learning how to stand up amidst universal worldly transience.',
    keyPoints: [
      'The lost ball symbolizes the irrevocable loss of sweet childhood innocence.',
      'External replacements cannot mend internal emotional severance.',
      'Learning to endure loss is an essential developmental milestone.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'The Boy', description: 'Grieving child experiencing the harsh reality of ownership and mortality.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Anaphora', explanation: '"What, what is he to do? / I saw it go..."' },
      { device: 'Metaphor', explanation: 'Ball bouncing into water embodies innocent childhood memories dissolving.' }
    ],
    examPracticeQuestions: [
      {
        question: 'Why does the poet say, "I would not intrude on him; a dime, another ball, is worthless"?',
        marks: '3 Marks',
        answerHint: 'The poet wants the boy to feel the responsibility of loss independently; money cannot purchase sentimental memory.'
      }
    ]
  },

  'Amanda!': {
    id: '10-p-6',
    name: 'Amanda!',
    book: 'Book 1: First Flight (Poetry)',
    classLevel: '10',
    author: 'Robin Klein',
    genre: 'Adolescent Monologue & Fantasy',
    coreTheme: 'The stifling impact of constant parental nagging versus the adolescent sanctuary of imagination.',
    synopsis: 'Juxtaposes the strict commands of an overbearing mother ("Don’t bite your nails, Amanda!", "Did you finish your homework?") with Amanda’s inner daydreaming. In alternating parenthetical stanzas, Amanda escapes into solitude as a languid emerald mermaid drifting alone, an orphaned child drawing patterns in dust with bare feet, and Rapunzel in a quiet tower with never-to-be-lowered hair.',
    keyPoints: [
      'Continuous correction suffocates childhood creativity and instills escapist rebellion.',
      'Freedom is sweet and silence golden to an over-managed child.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Amanda', description: 'Imaginative schoolgirl seeking psychological refuge from authoritarian micro-management.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Allusion', explanation: 'References to fairy tales: Rapunzel and mythological Mermaids.' },
      { device: 'Metaphor', explanation: '"Silence is golden, the freedom is sweet."' }
    ],
    examPracticeQuestions: [
      {
        question: 'Why does Amanda yearn to be an orphan or Rapunzel?',
        marks: '3 Marks',
        answerHint: 'To escape constant parental nagging, seeking tranquil solitude where no authoritative voice criticizes her conduct.'
      }
    ]
  },

  'Trees': {
    id: '10-p-7',
    name: 'Trees',
    book: 'Book 1: First Flight (Poetry)',
    classLevel: '10',
    author: 'Adrienne Rich',
    genre: 'Feminist & Ecological Lyric',
    coreTheme: 'The insurrection of imprisoned nature and the liberation of marginalized women into the open world.',
    synopsis: 'Trees held captive as decorative interior plants rebel and migrate back into the empty forest. Roots disengage from veranda floors, leaves strain towards glass, and boughs cram under roof ceilings like newly discharged hospital patients. The poet sits writing letters, sensing the liberating revolution as the nocturnal forest reclaims its wild integrity.',
    keyPoints: [
      'Dual allegorical layer: ecological rebellion and feminist liberation from domestic confinement.',
      'Imprisoned potential cannot be stifled permanently.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'The Forest/Trees', description: 'Rebellious, resilient force breaking artificial human barriers.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Simile', explanation: '"Like newly discharged patients / half-dazed, moving to the clinic doors".' },
      { device: 'Personification', explanation: 'Trees moving, boughs struggling, roots working.' }
    ],
    examPracticeQuestions: [
      {
        question: 'How does Adrienne Rich employ the metaphor of trees breaking out of houses?',
        marks: '3 Marks',
        answerHint: 'Trees escaping to the forest symbolize women breaking out of domestic confinement to reclaim their social and intellectual agency.'
      }
    ]
  },

  'Fog': {
    id: '10-p-8',
    name: 'Fog',
    book: 'Book 1: First Flight (Poetry)',
    classLevel: '10',
    author: 'Carl Sandburg',
    genre: 'Imagist Nature Lyric',
    coreTheme: 'The quiet, mysterious, stealthy arrival and departure of natural atmospheric phenomena.',
    synopsis: 'In six short lines, Sandburg visualizes fog descending over the urban harbor and cityscape on "little cat feet". It sits silently on silent haunches, scrutinizing everything without disturbance, before vanishing quietly.',
    keyPoints: [
      'Unobtrusive, stealthy movement of fog captured through feline imagery.',
      'Brevity captures the fleeting nature of misty weather.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'The Fog', description: 'Quiet, observant, feline presence across harbor docks.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Extended Metaphor', explanation: 'Fog equated to a silent cat crouching on its haunches.' }
    ],
    examPracticeQuestions: [
      {
        question: 'What image does Carl Sandburg employ to describe the motion of fog?',
        marks: '2 Marks',
        answerHint: 'A cat coming on little silent feet, sitting on silent haunches watching the city before disappearing.'
      }
    ]
  },

  'The Tale of Custard the Dragon': {
    id: '10-p-9',
    name: 'The Tale of Custard the Dragon',
    book: 'Book 1: First Flight (Poetry)',
    classLevel: '10',
    author: 'Ogden Nash',
    genre: 'Mock-Heroic Ballad / Parody',
    coreTheme: 'True courage is demonstrated through action in crisis rather than boastful pretension.',
    synopsis: 'Belinda lives in a white house with pets: Ink (black kitten), Blink (gray mouse), Mustard (yellow dog), and Custard (a cowardly dragon). While the others claim courage equal to lions and tigers, Custard cries for a nice safe cage. When a ferocious pirate breaks in with cutlasses and pistols, the boastful pets flee in terror. Custard charges, snorting like an engine, and gobbles the pirate whole. Once danger passes, the pets resume their boastful delusions while Custard meekly returns to wanting his safe cage.',
    keyPoints: [
      'Satirizes empty bravado and displays genuine modesty in genuine heroes.',
      'Playful vocabulary and comic rhyme schemes.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Custard', description: 'Modest, unassuming, gentle giant possessing unmatched valor when loved ones are threatened.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Simile & Onomatopoeia', explanation: '"Snorting like an engine, clashed his tail like irons in a dungeon."' },
      { device: 'Irony', explanation: 'The self-proclaimed coward proves to be the only authentic savior.' }
    ],
    examPracticeQuestions: [
      {
        question: 'How did Custard prove his true mettle during the pirate attack?',
        marks: '3 Marks',
        answerHint: 'While Ink, Blink, and Mustard fled terrified, Custard leaped forward bravely, attacked the pirate, and swallowed him whole.'
      }
    ]
  },

  'For Anne Gregory': {
    id: '10-p-10',
    name: 'For Anne Gregory',
    book: 'Book 1: First Flight (Poetry)',
    classLevel: '10',
    author: 'William Butler Yeats',
    genre: 'Philosophical Dialogue',
    coreTheme: 'The vanity of physical beauty versus the divine purity of unconditional internal love.',
    synopsis: 'A dialogue between an elderly speaker and young Anne Gregory. The speaker observes that young men are captivated by Anne’s gorgeous yellow honey-colored hair, loving her for her exterior vanity rather than herself alone. Anne retorts that she can dye her hair brown, black, or carrot to test if men love her true self. The speaker concludes that only God possesses the divine grace to love a human soul for itself alone without physical bias.',
    keyPoints: [
      'Human romantic love is often superficial, anchored in physical aesthetics.',
      'Divine spiritual love transcends temporary outer appearance.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Anne Gregory', description: 'Yearns to be loved for her spiritual core rather than external charms.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Metaphor', explanation: '"Honey-coloured ramparts at your ear" compares hair curls to fortress walls.' }
    ],
    examPracticeQuestions: [
      {
        question: 'What did the religious old man declare regarding unconditional love in "For Anne Gregory"?',
        marks: '3 Marks',
        answerHint: 'He found a text proving that only God has the capacity to love a person solely for themselves and not for their superficial physical beauty.'
      }
    ]
  },

  // Footprints Without Feet
  'A Triumph of Surgery': {
    id: '10-fp-1',
    name: 'A Triumph of Surgery',
    book: 'Book 2: Footprints Without Feet (Supplementary Reader)',
    classLevel: '10',
    author: 'James Herriot',
    genre: 'Veterinary Memoir / Humor',
    coreTheme: 'The detrimental perils of pampering pets and the cure of natural exercise and diet.',
    synopsis: 'Tricki, a pampered Pekingese dog owned by the wealthy Mrs. Pumphrey, is bloated like a sausage due to chocolates, cream cakes, and cod-liver oil. Dr. James Herriot recognizes that Tricki suffers from overfeeding, not disease. He hospitalizes Tricki for a fortnight, withholding food, giving plenty of water, and letting him run with a vigorous pack of dogs. Restored to health, Tricki returns fit, while Mrs. Pumphrey gratefully heralds this commonsense cure as "a triumph of surgery."',
    keyPoints: [
      'Blind parental indulgence can physically harm dependent creatures.',
      'Commonsense diet and physical activity trump excessive medicalization.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Dr. James Herriot', description: 'Pragmatic, compassionate, observant veterinary surgeon.' },
      { name: 'Mrs. Pumphrey', description: 'Affectionate but foolishly indulgent aristocratic woman.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Humor & Irony', explanation: 'A lifestyle cure through fasting and play is celebrated as complex surgery.' }
    ],
    examPracticeQuestions: [
      {
        question: 'Why did Dr. Herriot describe Tricki’s recovery as "a triumph of surgery"?',
        marks: '3 Marks',
        answerHint: 'He indulged Mrs. Pumphrey’s dramatic assumption that her dog survived serious surgical treatment when in reality simple fasting and exercise healed him.'
      }
    ]
  },

  'The Thief’s Story': {
    id: '10-fp-2',
    name: 'The Thief’s Story',
    book: 'Book 2: Footprints Without Feet (Supplementary Reader)',
    classLevel: '10',
    author: 'Ruskin Bond',
    genre: 'Moral Psychological Realism',
    coreTheme: 'The redemptive power of trust, education, and moral kindness over criminal instincts.',
    synopsis: 'Hari Singh, a fifteen-year-old seasoned thief, ingratiates himself with Anil, an easygoing, trusting freelance writer. Anil teaches Hari to cook, read, write his name, and add numbers. When Anil earns six hundred rupees, Hari succumbs to temptation and steals the money while Anil sleeps. At the railway platform, Hari’s awakened conscience halts him: he realizes that true dignity, respect, and an honest livelihood through literacy surpass short-lived stolen banknotes. He returns and slips the wet money back. Next morning, Anil gives him fifty rupees, subtly aware of the rain-drenched bills yet choosing silent forgiveness.',
    keyPoints: [
      'Kindness and unconditional trust reform criminals faster than punitive measures.',
      'Literacy provides permanent empowerment superior to criminal gain.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Hari Singh', description: 'Young thief transformed into moral adulthood through trust and education.' },
      { name: 'Anil', description: 'Generous, trusting writer who understands human psychology.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Internal Monologue', explanation: 'Hari’s introspective debate on the platform between theft and literacy.' }
    ],
    examPracticeQuestions: [
      {
        question: 'What prevented Hari Singh from boarding the Lucknow Express after stealing the money?',
        marks: '3 Marks',
        answerHint: 'His inner conscience and realization that Anil’s lessons in reading and writing could give him a respectable, dignified future.'
      }
    ]
  },

  'The Midnight Visitor': {
    id: '10-fp-3',
    name: 'The Midnight Visitor',
    book: 'Book 2: Footprints Without Feet (Supplementary Reader)',
    classLevel: '10',
    author: 'Robert Arthur',
    genre: 'Espionage Suspense / Mystery',
    coreTheme: 'Mental sharpness and quick composure prevail over brute physical weaponry.',
    synopsis: 'Fowler, a romantic young writer, visits secret agent Ausable expecting glamorous espionage. Instead, he meets a fat, sloppy man in a rundown French hotel. Entering Ausable’s room, they are confronted by Max, an armed rival agent demanding secret missile reports. Ausable stays calm, feigning irritation about an imaginary balcony outside his window that intruders allegedly use. When a waiter knocks with drinks, Ausable tricks Max into believing it is the police. Terrified, Max steps backward out the window onto the non-existent balcony, plummeting to his doom.',
    keyPoints: [
      'Intellectual cunning and calm presence of mind dismantle armed danger.',
      'Deceptive appearances mask professional espionage mastery.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Ausable', description: 'Fat, sluggish exterior masking an alert, inventive espionage strategist.' },
      { name: 'Max', description: 'Overconfident, armed rival undone by his gullible anxiety.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Dramatic Irony', explanation: 'The reader and Ausable know the balcony is non-existent while Max jumps to his death.' }
    ],
    examPracticeQuestions: [
      {
        question: 'How did Ausable outwit Max without raising a weapon?',
        marks: '3 Marks',
        answerHint: 'He fabricated the lie of a troublesome balcony below the window and told Max the police were knocking, causing Max to leap into thin air.'
      }
    ]
  },

  'A Question of Trust': {
    id: '10-fp-4',
    name: 'A Question of Trust',
    book: 'Book 2: Footprints Without Feet (Supplementary Reader)',
    classLevel: '10',
    author: 'Victor Canning',
    genre: 'Heist Fiction / Twisting Mystery',
    coreTheme: 'Honor among thieves is an illusion; superficial charm can deceive even calculated planners.',
    synopsis: 'Horace Danby, a respected lock-maker, robs one safe annually to purchase rare collectors’ books. During his meticulously planned burglary at Shotover Grange, he is interrupted by a young, elegant woman claiming to be the mistress of the house. She agrees to let him go if he opens the safe without tools because she "forgot the combination". Smitten and grateful, Horace cracks the safe barehanded. Two days later, he is arrested: the woman was a fellow thief who used him to secure jewels without leaving fingerprints.',
    keyPoints: [
      'Professional criminals can be outsmarted by more ruthless practitioners.',
      'Horace gets indignant when anyone mentions "honor among thieves".'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Horace Danby', description: 'Meticulous, polite gentleman-burglar undone by allergies and gullibility.' },
      { name: 'The Young Lady in Red', description: 'Cool, manipulative master swindler who outwits Horace.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Plot Twist & Irony', explanation: 'The thief assumes he helped the homeowner, only to discover she was an accomplice thief.' }
    ],
    examPracticeQuestions: [
      {
        question: 'Why does Horace Danby become furious when someone mentions "honor among thieves"?',
        marks: '3 Marks',
        answerHint: 'He was thoroughly duped by a clever female thief who took the loot while leaving him to take the blame.'
      }
    ]
  },

  'Footprints Without Feet': {
    id: '10-fp-5',
    name: 'Footprints Without Feet',
    book: 'Book 2: Footprints Without Feet (Supplementary Reader)',
    classLevel: '10',
    author: 'H.G. Wells',
    genre: 'Science Fiction / Moral Cautionary Tale',
    coreTheme: 'Science without ethical conscience breeds villainy and anarchic destruction.',
    synopsis: 'Griffin, a brilliant but lawless scientist, invents rare drugs that render human flesh as transparent as glass. When his landlord attempts to evict him, Griffin burns the house down and swallows the formula to escape invisibly. Wandering naked in freezing London, he burgles a department store for clothes and theatrical accessories. Escaping to the rural village of Iping, his bizarre appearance and violent temper terrify locals. When his money runs out, he steals from the vicarage and batters Constable Jaffers before fleeing into naked invisibility.',
    keyPoints: [
      'Scientific discovery divorced from moral responsibility endangers society.',
      'Invisible physical state exposes inner moral deformity.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Griffin', description: 'Egotistical, short-tempered, brilliant scientist who degenerates into a criminal fugitive.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Symbolism', explanation: 'Invisibility represents the detachment of intellect from moral accountability.' }
    ],
    examPracticeQuestions: [
      {
        question: 'How did Griffin become an invisible man, and what criminal acts did he commit?',
        marks: '3 Marks',
        answerHint: 'He swallowed rare chemical formulations; he committed arson, burglary in London stores, and robbery at Iping vicarage.'
      }
    ]
  },

  'The Making of a Scientist': {
    id: '10-fp-6',
    name: 'The Making of a Scientist',
    book: 'Book 2: Footprints Without Feet (Supplementary Reader)',
    classLevel: '10',
    author: 'Robert W. Peterson',
    genre: 'Biographical Essay',
    coreTheme: 'Curiosity, perseverance, mentorship, and first-rate intellect cultivate scientific innovation.',
    synopsis: 'Traces the developmental journey of Richard Ebright, renowned molecular biologist. Beginning with childhood butterfly collecting in Pennsylvania supported by his dedicated mother, Ebright progresses from tagging Monarch butterflies for Dr. Urquhart to discovering hormones in butterfly pupae. His breakthrough research on cell theory, genetics, and DNA demonstrates that curiosity, competitive spirit for the right reasons, and mentorship foster scientific genius.',
    keyPoints: [
      'A first-rate mind, boundless curiosity, and will to win for correct reasons create true scientists.',
      'Parental encouragement and early exploration lay the bedrock of academic greatness.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Richard Ebright', description: 'Inquisitive, hardworking, multi-talented champion debater, photographer, and biologist.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Chronological Narrative', explanation: 'Follows Ebright’s scientific milestones from kindergarten butterfly catching to DNA breakthroughs.' }
    ],
    examPracticeQuestions: [
      {
        question: 'What essential ingredients make up a scientist according to Richard Ebright’s story?',
        marks: '3 Marks',
        answerHint: 'A first-rate mind, curious scientific inquiry, and the drive to do the best work for noble purposes.'
      }
    ]
  },

  'The Necklace': {
    id: '10-fp-7',
    name: 'The Necklace',
    book: 'Book 2: Footprints Without Feet (Supplementary Reader)',
    classLevel: '10',
    author: 'Guy de Maupassant',
    genre: 'Moral Irony / Realist Short Story',
    coreTheme: 'The destructive consequences of vanity, discontentment, and false social pretension.',
    synopsis: 'Mathilde Loisel, born into a clerk’s family, constantly laments her modest social standing. When her devoted husband secures an invitation to a prestigious Ministry ball, she borrows a diamond necklace from wealthy friend Madame Forestier. Mathilde is the belle of the ball, but loses the necklace that night. Too proud to confess, the couple borrow exorbitant loans at usurious interest to purchase an identical 36,000-franc diamond replacement. For ten grueling years, they toil in poverty to repay debts. Meeting Forestier years later, ruined Mathilde learns the original was merely fake costume paste worth at most 500 francs.',
    keyPoints: [
      'Unchecked pride and vanity cause catastrophic ruin.',
      'A single lie or reluctance to communicate openly can forfeit a lifetime of happiness.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Mathilde Loisel', description: 'Beautiful, dissatisfied, vain, yet capable of heroic physical labor once adversity strikes.' },
      { name: 'Monsieur Loisel', description: 'Patient, selfless, loving husband who sacrifices his savings and life for his wife.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Stinging Situational Irony', explanation: 'A lifetime of grueling poverty spent replacing a worthless imitation necklace.' }
    ],
    examPracticeQuestions: [
      {
        question: 'What tragedy did Mathilde bring upon herself and her husband?',
        marks: '3 Marks',
        answerHint: 'Her false vanity made her borrow jewelry; losing it, they spent 10 years of poverty paying for an identical necklace that was originally fake.'
      }
    ]
  },

  'Bholi': {
    id: '10-fp-8',
    name: 'Bholi',
    book: 'Book 2: Footprints Without Feet (Supplementary Reader)',
    classLevel: '10',
    author: 'K.A. Abbas',
    genre: 'Social Realism / Feminist Empowerment',
    coreTheme: 'Education as a transformative catalyst against patriarchy, child marriage, and dowry extortion.',
    synopsis: 'Sulekha, nicknamed "Bholi" (simpleton) due to childhood brain damage and pockmarked scars, is neglected by her family. Sent to the newly opened village girls’ school as an administrative gesture, she meets a compassionate teacher whose encouraging voice unlocks her confidence and speech. Years later, her parents arrange her marriage to Bishamber, an old, lame, greedy widower. At the wedding, seeing her scars, Bishamber demands five thousand rupees dowry. Bholi casts aside the veil, speaks with firm articulation, and refuses to marry a contemptible coward, choosing instead to teach at her school and care for her aged parents.',
    keyPoints: [
      'Empathetic pedagogy transforms marginalized individuals into empowered leaders.',
      'Denunciation of regressive social evils like dowry and discrimination against disabled children.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Bholi (Sulekha)', description: 'Transforms from an insecure stammering child into an articulated woman of dignity.' },
      { name: 'The Teacher', description: 'Ideal educator whose gentleness, respect, and encouragement reshape a destiny.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Symbolism', explanation: 'The classroom artist metaphor: the teacher is an artist proud of her masterpiece (Bholi).' }
    ],
    examPracticeQuestions: [
      {
        question: 'Why did Bholi reject the marriage with Bishamber at the wedding altar?',
        marks: '3 Marks',
        answerHint: 'Bishamber humiliated her father by extorting dowry for her scars; she refused to marry an unprincipled, greedy coward.'
      }
    ]
  },

  'The Book That Saved the Earth': {
    id: '10-fp-9',
    name: 'The Book That Saved the Earth',
    book: 'Book 2: Footprints Without Feet (Supplementary Reader)',
    classLevel: '10',
    author: 'Claire Boiko',
    genre: 'Dramatic Science Fiction Parody',
    coreTheme: 'Misinterpreted knowledge, cultural arrogance, and the comic triumph of simple human literature.',
    synopsis: 'Set in the twenty-fifth century, a historian narrates how a dusty volume of "Mother Goose" nursery rhymes saved planet Earth from a Martian invasion in 2040. The arrogant Martian commander Think-Tank sends a probe crew (Omega, Top, Iota) to investigate a library. Mistaking books for communication sandwiches, they swallow vitamins and decipher nursery rhymes. Reading "Humpty Dumpty", Think-Tank believes Earthlings have discovered his balloon-headed likeness and plan to overthrow Mars, prompting him to abort the invasion and flee to Alpha Centauri.',
    keyPoints: [
      'Exposes the folly of intellectual vanity and literal misinterpretation.',
      'Humorous celebration of children’s rhymes outwitting planetary invaders.'
    ],
    characterOrSpeakerAnalysis: [
      { name: 'Think-Tank', description: 'Pompous, narcissistic Martian ruler with a massive balloon head and zero practical sense.' },
      { name: 'Noodle', description: 'Polite, humble apprentice who subtly corrects his master without provoking rage.' }
    ],
    literaryAndPoeticDevices: [
      { device: 'Parody & Comic Satire', explanation: 'Nursery rhymes interpreted as advanced interplanetary military strategies.' }
    ],
    examPracticeQuestions: [
      {
        question: 'How did the nursery rhyme "Humpty Dumpty" frighten Think-Tank into abandoning the invasion?',
        marks: '3 Marks',
        answerHint: 'The illustration looked identical to Think-Tank’s balloon-head, leading him to fear Earthlings planned to crush him in a great fall.'
      }
    ]
  }
};
