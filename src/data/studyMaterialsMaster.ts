import { ChapterStudyGuide, ClassLevel } from '../types';
import { CLASS_10_STUDY_MATERIALS } from './studyMaterialsClass10';
import { CLASS_11_STUDY_MATERIALS } from './studyMaterialsClass11';
import { CLASS_12_STUDY_MATERIALS } from './studyMaterialsClass12';

export const MASTER_STUDY_MATERIALS: Record<string, ChapterStudyGuide> = {
  ...CLASS_10_STUDY_MATERIALS,
  ...CLASS_11_STUDY_MATERIALS,
  ...CLASS_12_STUDY_MATERIALS,
};

/**
 * Retrieve study guide by chapter name or approximate matching
 */
export function getChapterStudyGuide(chapterName: string): ChapterStudyGuide | undefined {
  if (!chapterName) return undefined;
  
  // Exact match
  if (MASTER_STUDY_MATERIALS[chapterName]) {
    return MASTER_STUDY_MATERIALS[chapterName];
  }

  // Normalized case-insensitive match
  const lowerName = chapterName.trim().toLowerCase();
  for (const [key, guide] of Object.entries(MASTER_STUDY_MATERIALS)) {
    if (key.toLowerCase() === lowerName || guide.name.toLowerCase() === lowerName) {
      return guide;
    }
  }

  // Substring match for compound names e.g. "The Cutting of My Long Hair"
  for (const [key, guide] of Object.entries(MASTER_STUDY_MATERIALS)) {
    if (key.toLowerCase().includes(lowerName) || lowerName.includes(key.toLowerCase())) {
      return guide;
    }
  }

  return undefined;
}

/**
 * Get all study guides for a given class
 */
export function getStudyGuidesForClass(classLevel: ClassLevel): ChapterStudyGuide[] {
  return Object.values(MASTER_STUDY_MATERIALS).filter(guide => guide.classLevel === classLevel);
}

/**
 * Get list of all available books for a class level
 */
export function getBooksForClass(classLevel: ClassLevel): string[] {
  const guides = getStudyGuidesForClass(classLevel);
  const books = Array.from(new Set(guides.map(g => g.book)));
  return books;
}
