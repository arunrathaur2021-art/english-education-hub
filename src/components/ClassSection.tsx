import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Layers, 
  CheckCircle2, 
  PlusCircle, 
  Filter, 
  FileText,
  ChevronRight,
  ArrowLeft,
  Sparkles,
  Info,
  Search,
  ExternalLink
} from 'lucide-react';
import { ResourceItem, ClassLevel, VideoTimestamp, ChapterStudyGuide } from '../types';
import { NCERT_DATABASE, NcertChapter } from '../data/ncertDatabase';
import { getChapterStudyGuide } from '../data/studyMaterialsMaster';
import { ResourceCard } from './ResourceCard';

interface ClassSectionProps {
  classLevel: ClassLevel;
  title: string;
  subtitle: string;
  resources: ResourceItem[];
  completedIds: Set<string>;
  onToggleComplete: (id: string) => void;
  onOpenVideo: (resource: ResourceItem, initialTimestamp?: VideoTimestamp) => void;
  onOpenPdf: (resource: ResourceItem) => void;
  onOpenStudyGuide?: (guide: ChapterStudyGuide) => void;
  onDeleteResource: (id: string) => void;
  onOpenAdminForChapter: (classLevel: ClassLevel, chapterName: string) => void;
  onBackToHome: () => void;
  searchQuery: string;
}

export const ClassSection: React.FC<ClassSectionProps> = ({
  classLevel,
  title,
  subtitle,
  resources,
  completedIds,
  onToggleComplete,
  onOpenVideo,
  onOpenPdf,
  onOpenStudyGuide,
  onDeleteResource,
  onOpenAdminForChapter,
  onBackToHome,
  searchQuery
}) => {
  const [selectedBookFilter, setSelectedBookFilter] = useState<string>('All');
  const [viewFilter, setViewFilter] = useState<'all' | 'uploadedOnly'>('all');

  const chapters: NcertChapter[] = NCERT_DATABASE[classLevel] || [];

  // Group chapters by Book
  const books = ['All', ...Array.from(new Set(chapters.map(c => c.book)))];

  // Map resources by chapterName
  const resourcesByChapter = useMemo(() => {
    const map = new Map<string, ResourceItem[]>();
    resources.forEach(res => {
      const list = map.get(res.chapterName) || [];
      list.push(res);
      map.set(res.chapterName, list);
    });
    return map;
  }, [resources]);

  // Filtered chapters based on search and book filter
  const filteredChapters = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return chapters.filter(chap => {
      const matchesBook = selectedBookFilter === 'All' || chap.book === selectedBookFilter;
      const chapterNotes = resourcesByChapter.get(chap.name) || [];
      const hasNotes = chapterNotes.length > 0;

      if (viewFilter === 'uploadedOnly' && !hasNotes) {
        return false;
      }

      if (!matchesBook) return false;

      if (!q) return true;

      // Check if chapter matches query or any of its notes match query
      const matchesChapterName = chap.name.toLowerCase().includes(q) || chap.book.toLowerCase().includes(q);
      const matchesAnyNote = chapterNotes.some(
        n => n.title.toLowerCase().includes(q) || n.description.toLowerCase().includes(q) || n.category.toLowerCase().includes(q)
      );

      return matchesChapterName || matchesAnyNote;
    });
  }, [chapters, selectedBookFilter, viewFilter, searchQuery, resourcesByChapter]);

  // Total completed resources in this class
  const totalUploaded = resources.length;
  const completedInClass = resources.filter(r => completedIds.has(r.id)).length;
  const percentComplete = totalUploaded > 0 ? Math.round((completedInClass / totalUploaded) * 100) : 0;

  const sectionStyles = {
    '10': {
      badge: 'bg-blue-600 text-white',
      badgeLight: 'bg-blue-100 text-blue-800 dark:bg-blue-950/70 dark:text-blue-300 border-blue-200 dark:border-blue-800',
      progressFill: 'from-blue-500 to-cyan-500',
      btnBg: 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/20'
    },
    '11': {
      badge: 'bg-indigo-600 text-white',
      badgeLight: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/70 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
      progressFill: 'from-indigo-500 to-violet-500',
      btnBg: 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/20'
    },
    '12': {
      badge: 'bg-purple-600 text-white',
      badgeLight: 'bg-purple-100 text-purple-800 dark:bg-purple-950/70 dark:text-purple-300 border-purple-200 dark:border-purple-800',
      progressFill: 'from-purple-500 to-pink-500',
      btnBg: 'bg-purple-600 hover:bg-purple-700 shadow-purple-600/20'
    }
  };

  const currentStyle = sectionStyles[classLevel] || sectionStyles['10'];

  return (
    <div className="py-6 sm:py-8 space-y-6">
      
      {/* Top Breadcrumb & Back Navigation */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-1 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home Dashboard</span>
        </button>

        <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
          <span>Home</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="font-semibold text-slate-900 dark:text-white">
            Class {classLevel} Dedicated Portal
          </span>
        </div>
      </div>

      {/* Class Portal Header Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`px-3 py-1 text-xs font-bold rounded-lg ${currentStyle.badge} uppercase tracking-wider shadow-xs`}>
                Dedicated Class {classLevel} Portal
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                {chapters.length} NCERT Chapters
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                • {totalUploaded} Published Study Notes
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white font-serif tracking-tight">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Action & Progress Tracker */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {totalUploaded > 0 && (
              <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-3.5 min-w-[200px]">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    Class Progress
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {completedInClass}/{totalUploaded} ({percentComplete}%)
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div 
                    className={`bg-gradient-to-r ${currentStyle.progressFill} h-full rounded-full transition-all duration-500`}
                    style={{ width: `${percentComplete}%` }}
                  />
                </div>
              </div>
            )}

            {/* Class-Specific Add Note Button */}
            <button
              onClick={() => onOpenAdminForChapter(classLevel, chapters[0]?.name || '')}
              className={`flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-white text-xs sm:text-sm font-bold shadow-md transition-all hover:scale-[1.02] cursor-pointer ${currentStyle.btnBg}`}
            >
              <PlusCircle className="w-4 h-4" />
              <span>+ Add Note for Class {classLevel}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Book Filter Pills & View Toggles */}
      <div className="flex items-center justify-between gap-3 flex-wrap pb-2 border-b border-slate-200/80 dark:border-slate-800/80">
        
        {/* Textbook Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 shrink-0 flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
            Textbook:
          </span>
          {books.map((b) => (
            <button
              key={b}
              onClick={() => setSelectedBookFilter(b)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all shrink-0 cursor-pointer ${
                selectedBookFilter === b
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {b}
            </button>
          ))}
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs">
          <button
            onClick={() => setViewFilter('all')}
            className={`px-3 py-1 rounded-lg transition-colors font-medium cursor-pointer ${
              viewFilter === 'all'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-bold'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            All NCERT Chapters ({chapters.length})
          </button>
          <button
            onClick={() => setViewFilter('uploadedOnly')}
            className={`px-3 py-1 rounded-lg transition-colors font-medium cursor-pointer ${
              viewFilter === 'uploadedOnly'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-bold'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            With Uploaded Notes ({resourcesByChapter.size})
          </button>
        </div>

      </div>

      {/* Chapters & Notes Container */}
      {filteredChapters.length > 0 ? (
        <div className="space-y-6">
          {filteredChapters.map((chapter) => {
            const chapterNotes = resourcesByChapter.get(chapter.name) || [];
            const hasNotes = chapterNotes.length > 0;
            const studyGuide = getChapterStudyGuide(chapter.name);

            return (
              <div 
                key={chapter.id}
                className="bg-white/90 dark:bg-slate-900/90 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-4 sm:p-5 shadow-xs transition-all hover:border-slate-300 dark:hover:border-slate-700"
              >
                {/* Chapter Banner */}
                <div className="flex items-center justify-between gap-3 mb-3 pb-3 border-b border-slate-100 dark:border-slate-800/80 flex-wrap">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
                        {chapter.book}
                      </span>
                      <span className="text-[11px] font-medium text-slate-400">
                        {chapter.type}
                      </span>
                      {studyGuide && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60 flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          <span>Full Study Guide</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-serif">
                      {chapter.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    {hasNotes && (
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{chapterNotes.length} Note{chapterNotes.length > 1 ? 's' : ''} Ready</span>
                      </span>
                    )}

                    {/* Prominent Chapter Study Guide button */}
                    {studyGuide && (
                      <button
                        onClick={() => onOpenStudyGuide?.(studyGuide)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/70 dark:hover:bg-indigo-900/80 text-indigo-700 dark:text-indigo-300 text-xs font-bold transition-all border border-indigo-200 dark:border-indigo-800 cursor-pointer shadow-xs"
                        title={`Read full NCERT study guide & exam questions for ${chapter.name}`}
                      >
                        <BookOpen className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                        <span>Read Study Guide</span>
                      </button>
                    )}

                    {/* Quick Add Button for this specific chapter */}
                    <button
                      onClick={() => onOpenAdminForChapter(classLevel, chapter.name)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition-colors cursor-pointer border border-slate-200 dark:border-slate-700"
                      title={`Upload custom video / notes for ${chapter.name}`}
                    >
                      <PlusCircle className="w-3.5 h-3.5" />
                      <span>+ Add Note</span>
                    </button>
                  </div>
                </div>

                {/* Notes List or Clean Zero-State */}
                {hasNotes ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-1">
                    {chapterNotes.map((resource) => (
                      <ResourceCard
                        key={resource.id}
                        resource={resource}
                        isCompleted={completedIds.has(resource.id)}
                        onToggleComplete={onToggleComplete}
                        onOpenVideo={onOpenVideo}
                        onOpenPdf={onOpenPdf}
                        onDeleteResource={onDeleteResource}
                      />
                    ))}
                  </div>
                ) : (
                  /* Clean "No notes uploaded yet for this chapter" state with MT Khan Guide access */
                  <div className="py-4 px-4 rounded-xl bg-slate-50/70 dark:bg-slate-850/40 border border-dashed border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                    <div className="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400">
                      <Info className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>
                        No custom admin video/notes uploaded yet for this chapter.
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {studyGuide && (
                        <button
                          onClick={() => onOpenStudyGuide?.(studyGuide)}
                          className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>View Official Guide</span>
                        </button>
                      )}
                      <button
                        onClick={() => onOpenAdminForChapter(classLevel, chapter.name)}
                        className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold border border-slate-200 dark:border-slate-700 transition-all cursor-pointer"
                      >
                        Upload Video/PDF
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12 px-6 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40">
          <Layers className="w-10 h-10 text-slate-400 mx-auto mb-2" />
          <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">
            No matching NCERT chapters found
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
            Try resetting your book filter or search keywords to view the syllabus.
          </p>
          <button
            onClick={() => {
              setSelectedBookFilter('All');
              setViewFilter('all');
            }}
            className="mt-4 px-3.5 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-bold hover:bg-indigo-100 cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

    </div>
  );
};
