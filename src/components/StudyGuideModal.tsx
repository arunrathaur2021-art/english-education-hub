import React, { useState, useEffect } from 'react';
import { 
  X, 
  BookOpen, 
  GraduationCap, 
  Printer, 
  Download, 
  Copy, 
  CheckCircle2, 
  HelpCircle, 
  Award, 
  Layers, 
  Sparkles,
  User,
  Quote,
  Clock,
  Feather
} from 'lucide-react';
import { ChapterStudyGuide } from '../types';

interface StudyGuideModalProps {
  isOpen: boolean;
  guide: ChapterStudyGuide | null;
  onClose: () => void;
  isCompleted?: boolean;
  onToggleComplete?: () => void;
}

export const StudyGuideModal: React.FC<StudyGuideModalProps> = ({
  isOpen,
  guide,
  onClose,
  isCompleted = false,
  onToggleComplete
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'synopsis' | 'characters' | 'devices' | 'questions'>('all');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !guide) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const header = `======================================================================
ENGLISH EDUCATION HUB - NCERT COMPLETE STUDY GUIDE
Curated and maintained by MT Khan
======================================================================

TITLE: ${guide.name}
CLASS: Class ${guide.classLevel}
BOOK: ${guide.book}
AUTHOR: ${guide.author}
GENRE: ${guide.genre}
CORE THEME: ${guide.coreTheme}

----------------------------------------------------------------------
1. CHAPTER SYNOPSIS & PEDAGOGICAL OVERVIEW
----------------------------------------------------------------------
${guide.synopsis}

----------------------------------------------------------------------
2. HIGH-YIELD EXAMINATION KEY POINTS
----------------------------------------------------------------------
${guide.keyPoints.map((pt, idx) => `${idx + 1}. ${pt}`).join('\n')}

----------------------------------------------------------------------
3. CHARACTER & SPEAKER SKETCHES
----------------------------------------------------------------------
${guide.characterOrSpeakerAnalysis.map(c => `* ${c.name}:\n  ${c.description}`).join('\n\n')}

----------------------------------------------------------------------
4. LITERARY & POETIC DEVICES
----------------------------------------------------------------------
${guide.literaryAndPoeticDevices.map(d => `* ${d.device}: ${d.explanation}`).join('\n')}

----------------------------------------------------------------------
5. CBSE BOARD EXAM PRACTICE QUESTIONS WITH MODEL HINTS
----------------------------------------------------------------------
${guide.examPracticeQuestions.map((q, idx) => `[Question ${idx + 1}] (${q.marks})\nQ: ${q.question}\nAnswer Blueprint / Hints:\n${q.answerHint}\n`).join('\n')}
======================================================================
Generated from English Education Hub • MT Khan
`;

    const blob = new Blob([header], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Class_${guide.classLevel}_${guide.name.replace(/[^a-zA-Z0-9]/g, '_')}_StudyGuide.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    const summary = `${guide.name} (Class ${guide.classLevel} - ${guide.book})\nAuthor: ${guide.author}\n\nTheme: ${guide.coreTheme}\n\nSynopsis:\n${guide.synopsis}\n\nKey Points:\n${guide.keyPoints.join('\n')}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-xs animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden my-auto text-slate-800 dark:text-slate-100">
        
        {/* Header (Screen only) */}
        <div className="no-print px-5 sm:px-6 py-4 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex items-center justify-between gap-4 border-b border-indigo-900/50">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600/80 border border-indigo-400/30 flex items-center justify-center shrink-0 shadow-inner">
              <BookOpen className="w-5 h-5 text-indigo-100" />
            </div>
            <div className="truncate">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/30 text-indigo-200 border border-indigo-400/20">
                  Class {guide.classLevel} • {guide.book}
                </span>
                <span className="text-[11px] text-indigo-200/80 font-medium hidden sm:inline">
                  By {guide.author}
                </span>
              </div>
              <h2 className="text-base sm:text-xl font-bold font-serif text-white truncate mt-0.5">
                {guide.name}
              </h2>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {onToggleComplete && (
              <button
                onClick={onToggleComplete}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isCompleted 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}
                title="Mark this chapter as learned"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span className="hidden md:inline">{isCompleted ? 'Learned' : 'Mark Done'}</span>
              </button>
            )}

            <button
              onClick={handleCopy}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/10 text-xs flex items-center gap-1 transition-colors cursor-pointer"
              title="Copy study guide"
            >
              <Copy className="w-4 h-4" />
              <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/10 text-xs flex items-center gap-1 transition-colors cursor-pointer"
              title="Download full guide file"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Save</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/10 text-xs flex items-center gap-1 transition-colors cursor-pointer"
              title="Print study material"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-white/10 hover:bg-rose-600 text-white flex items-center justify-center transition-colors cursor-pointer ml-1"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className="no-print flex items-center gap-1 px-5 py-2.5 bg-slate-100/90 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800 overflow-x-auto scrollbar-none text-xs">
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mr-1 shrink-0">
            Sections:
          </span>
          {[
            { id: 'all', label: 'Full Study Guide' },
            { id: 'synopsis', label: 'Summary & Theme' },
            { id: 'characters', label: 'Characters & Analysis' },
            { id: 'devices', label: 'Literary Devices' },
            { id: 'questions', label: 'Board Exam Q&A' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-8 bg-white dark:bg-slate-900">
          
          {/* Institutional Credit Badge */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 flex-wrap gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-indigo-700 dark:text-indigo-400">
                English Education Hub Official Study Module
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-500 dark:text-slate-400">
                NCERT Class {guide.classLevel} English Curriculum
              </span>
            </div>
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 italic">
              Developed and maintained by MT Khan
            </div>
          </div>

          {/* Chapter Metadata Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white text-xs font-bold">
                {guide.book}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                Genre: {guide.genre}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                Author: {guide.author}
              </span>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-0.5">
                Core Conceptual Theme:
              </span>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                {guide.coreTheme}
              </p>
            </div>
          </div>

          {/* 1. Synopsis & Key Points */}
          {(activeTab === 'all' || activeTab === 'synopsis') && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base sm:text-lg font-bold font-serif text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                  <Feather className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <span>Comprehensive Chapter Synopsis</span>
                </h3>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850/60 border border-slate-200/80 dark:border-slate-800 text-sm leading-relaxed text-slate-700 dark:text-slate-300 font-serif">
                  {guide.synopsis}
                </div>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold font-serif text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  <span>High-Yield Examination Key Concepts</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {guide.keyPoints.map((point, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200"
                    >
                      <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 font-bold flex items-center justify-center shrink-0 text-xs">
                        {idx + 1}
                      </span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 2. Character / Speaker Analysis */}
          {(activeTab === 'all' || activeTab === 'characters') && guide.characterOrSpeakerAnalysis.length > 0 && (
            <div>
              <h3 className="text-base sm:text-lg font-bold font-serif text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Character Traits &amp; Speaker In-Depth Profiles</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {guide.characterOrSpeakerAnalysis.map((char, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 space-y-1.5"
                  >
                    <h4 className="text-sm font-bold text-blue-900 dark:text-blue-200 font-serif">
                      {char.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {char.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. Literary & Poetic Devices */}
          {(activeTab === 'all' || activeTab === 'devices') && guide.literaryAndPoeticDevices.length > 0 && (
            <div>
              <h3 className="text-base sm:text-lg font-bold font-serif text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                <Quote className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span>Literary &amp; Poetic Devices (Critical Appreciation)</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {guide.literaryAndPoeticDevices.map((device, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200/60 dark:border-purple-900/40"
                  >
                    <span className="text-xs font-bold text-purple-700 dark:text-purple-300 block mb-1">
                      {device.device}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {device.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. Board Exam Practice Questions */}
          {(activeTab === 'all' || activeTab === 'questions') && guide.examPracticeQuestions.length > 0 && (
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <h3 className="text-base sm:text-lg font-bold font-serif text-slate-900 dark:text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>Official Board Examination Practice Questions &amp; Hints</span>
                </h3>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                  {guide.examPracticeQuestions.length} High-Yield Questions
                </span>
              </div>

              <div className="space-y-4">
                {guide.examPracticeQuestions.map((q, idx) => (
                  <div 
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-slate-500">
                        Question {idx + 1}
                      </span>
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                        q.marks === '5 Marks' 
                          ? 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300'
                          : q.marks === '3 Marks'
                          ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300'
                          : 'bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300'
                      }`}>
                        {q.marks}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-serif">
                      Q: {q.question}
                    </h4>

                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                      <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 block mb-1 uppercase tracking-wider">
                        Educator Answer Blueprint &amp; Scoring Key:
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 bg-emerald-50/60 dark:bg-emerald-950/20 p-3 rounded-xl border border-emerald-200/50 dark:border-emerald-900/30">
                        {q.answerHint}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer info (print & screen) */}
        <div className="px-6 py-3 bg-slate-100 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between flex-wrap gap-2">
          <span>English Education Hub • Official NCERT Study Notes</span>
          <span className="font-semibold text-slate-700 dark:text-slate-300">
            Developed and maintained by MT Khan
          </span>
        </div>

      </div>
    </div>
  );
};
