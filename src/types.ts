export type ClassLevel = '10' | '11' | '12';

export type ResourceCategory = 
  | 'Grammar' 
  | 'Literature Summary' 
  | 'Important Q&A' 
  | 'Writing Skills';

export interface VideoTimestamp {
  time: string; // e.g. "02:15"
  seconds: number;
  label: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  chapterName: string;
  classLevel: ClassLevel;
  category: ResourceCategory;
  book?: string;
  description: string;
  pdfUrl: string;
  pdfTitle: string;
  pdfContent: string;
  videoUrl: string;
  youtubeId: string;
  timestamps: VideoTimestamp[];
  duration: string;
  tags: string[];
  createdAt: string;
  isCustom?: boolean;
}

export interface AnnouncementItem {
  id: string;
  title: string;
  content: string;
  category: 'Exam Alert' | 'New Notes' | 'Live Stream' | 'Curriculum';
  date: string;
  isPinned?: boolean;
}

export interface QuizQuestion {
  id: string;
  targetClass: 'All' | '10' | '11' | '12';
  category: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

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

