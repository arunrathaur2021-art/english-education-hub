import React from 'react';
import { 
  BookOpen, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  FileText, 
  Video, 
  Award 
} from 'lucide-react';
import { ClassLevel, ResourceItem } from '../types';
import { NCERT_DATABASE } from '../data/ncertDatabase';

interface ClassPortalsOverviewProps {
  resources: ResourceItem[];
  completedIds: Set<string>;
  onNavigateToClass: (level: ClassLevel) => void;
}

export const ClassPortalsOverview: React.FC<ClassPortalsOverviewProps> = ({
  resources,
  completedIds,
  onNavigateToClass
}) => {
  const portalCards = [
    {
      level: '10' as ClassLevel,
      title: 'Class 10 English Portal',
      subtitle: 'Language, Literature & Applied Grammar',
      books: ['First Flight (Prose & Poetry)', 'Footprints Without Feet', 'Writing & Grammar'],
      totalChapters: NCERT_DATABASE['10'].length,
      gradient: 'from-blue-600 via-sky-600 to-indigo-600',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border-blue-200 dark:border-blue-800',
      accentBorder: 'hover:border-blue-500/80',
      buttonBg: 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/20'
    },
    {
      level: '11' as ClassLevel,
      title: 'Class 11 English Portal',
      subtitle: 'English Core & Advanced Composition',
      books: ['Hornbill (Prose & Poetry)', 'Snapshots (Supplementary)', 'Note-Making & Summary'],
      totalChapters: NCERT_DATABASE['11'].length,
      gradient: 'from-indigo-600 via-violet-600 to-purple-600',
      badgeColor: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/80 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
      accentBorder: 'hover:border-indigo-500/80',
      buttonBg: 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/20'
    },
    {
      level: '12' as ClassLevel,
      title: 'Class 12 English Portal',
      subtitle: 'Flamingo, Vistas & Board Exam Blueprint',
      books: ['Flamingo (Prose & Poetry)', 'Vistas (Supplementary)', 'RTCs & 2027 Blueprint'],
      totalChapters: NCERT_DATABASE['12'].length,
      gradient: 'from-purple-600 via-pink-600 to-rose-600',
      badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-950/80 dark:text-purple-300 border-purple-200 dark:border-purple-800',
      accentBorder: 'hover:border-purple-500/80',
      buttonBg: 'bg-purple-600 hover:bg-purple-700 shadow-purple-600/20'
    }
  ];

  return (
    <section className="py-8 sm:py-12 border-t border-slate-200/80 dark:border-slate-800/80">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
          <Layers className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
          <span>Curriculum Hub</span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-serif tracking-tight">
          Explore Dedicated Class Portals
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          Access your grade-specific portal below to study textbook chapters, watch indexed lectures, and review comprehensive revision summaries.
        </p>
      </div>

      {/* 3 Portal Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {portalCards.map((portal) => {
          const classNotes = resources.filter(r => r.classLevel === portal.level);
          const classCompleted = classNotes.filter(r => completedIds.has(r.id)).length;
          
          return (
            <div
              key={portal.level}
              className={`group bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 p-6 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 ${portal.accentBorder} relative overflow-hidden`}
            >
              {/* Top Accent Gradient Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${portal.gradient}`} />

              <div>
                {/* Header row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-lg border ${portal.badgeColor}`}>
                    Class {portal.level}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    {portal.totalChapters} NCERT Chapters
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white font-serif group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {portal.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {portal.subtitle}
                </p>

                {/* Covered Textbooks List */}
                <div className="mt-5 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                    Syllabus Included:
                  </span>
                  {portal.books.map((b, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-2 rounded-xl border border-slate-100 dark:border-slate-800"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                      <span className="truncate">{b}</span>
                    </div>
                  ))}
                </div>

                {/* Status indicator */}
                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>Published Notes:</span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {classNotes.length} Resource{classNotes.length === 1 ? '' : 's'}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-2">
                <button
                  onClick={() => onNavigateToClass(portal.level)}
                  className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-white text-xs sm:text-sm font-bold shadow-md transition-all group-hover:scale-[1.02] cursor-pointer ${portal.buttonBg}`}
                >
                  <span>Enter Class {portal.level} Portal</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
