import React, { useState, useEffect } from 'react';
import { 
  X, 
  Upload, 
  PlusCircle, 
  Video, 
  FileText, 
  BookOpen, 
  Check, 
  Clock, 
  Trash2,
  RotateCcw,
  Sparkles,
  Layers,
  FolderOpen
} from 'lucide-react';
import { ResourceItem, ClassLevel, ResourceCategory, VideoTimestamp } from '../types';
import { NCERT_DATABASE, NcertChapter } from '../data/ncertDatabase';
import { getChapterStudyGuide } from '../data/studyMaterialsMaster';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddResource: (newResource: ResourceItem) => void;
  resources: ResourceItem[];
  onDeleteResource: (id: string) => void;
  onClearAllResources: () => void;
  onLoadDemoResources?: () => void;
  defaultClassLevel?: ClassLevel;
  defaultChapterName?: string;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  onAddResource,
  resources,
  onDeleteResource,
  onClearAllResources,
  onLoadDemoResources,
  defaultClassLevel = '10',
  defaultChapterName = ''
}) => {
  const [activeTab, setActiveTab] = useState<'create' | 'manage'>('create');
  
  // Form State
  const [classLevel, setClassLevel] = useState<ClassLevel>(defaultClassLevel);
  const [selectedChapter, setSelectedChapter] = useState<string>('');
  const [customTitle, setCustomTitle] = useState('');
  const [category, setCategory] = useState<ResourceCategory>('Literature Summary');
  const [notesLink, setNotesLink] = useState('');
  const [notesSummary, setNotesSummary] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [timestampNotes, setTimestampNotes] = useState('00:00 Intro, 04:30 Summary, 11:15 Q&A Analysis');
  const [duration, setDuration] = useState('22 mins');
  const [formSuccess, setFormSuccess] = useState(false);

  // Available chapters for selected class
  const availableChapters = NCERT_DATABASE[classLevel] || [];

  // When class level changes or modal opens, select first chapter or default
  useEffect(() => {
    if (defaultClassLevel) {
      setClassLevel(defaultClassLevel);
    }
  }, [defaultClassLevel, isOpen]);

  useEffect(() => {
    const chapters = NCERT_DATABASE[classLevel] || [];
    if (defaultChapterName && chapters.some(c => c.name === defaultChapterName)) {
      setSelectedChapter(defaultChapterName);
    } else if (chapters.length > 0) {
      setSelectedChapter(chapters[0].name);
    }
  }, [classLevel, defaultChapterName, isOpen]);

  if (!isOpen) return null;

  // Extract YouTube ID
  const extractYouTubeId = (url: string): string => {
    try {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      if (match && match[2].length === 11) {
        return match[2];
      }
    } catch (e) {
      console.warn('Failed to parse YouTube ID from URL', e);
    }
    return '0hK2x3mZ7wQ'; // clean fallback
  };

  // Parse timestamps
  const parseTimestamps = (text: string): VideoTimestamp[] => {
    if (!text.trim()) return [];
    const items = text.includes('\n') ? text.split('\n') : text.split(',');
    const parsed: VideoTimestamp[] = [];

    items.forEach(item => {
      const trimmed = item.trim();
      if (!trimmed) return;
      const match = trimmed.match(/^(\d{1,2}:\d{2})\s*(?:[-–:]\s*)?(.*)$/);
      if (match) {
        const timeStr = match[1];
        const label = match[2].trim() || 'Key Concept';
        const parts = timeStr.split(':');
        const seconds = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
        parsed.push({ time: timeStr, seconds, label });
      } else {
        parsed.push({ time: '00:00', seconds: 0, label: trimmed });
      }
    });

    return parsed.length > 0 ? parsed : [{ time: '00:00', seconds: 0, label: 'Lesson Start' }];
  };

  const handleAutoFillStudyGuide = () => {
    const guide = getChapterStudyGuide(selectedChapter);
    if (!guide) {
      alert(`No pre-loaded guide found for "${selectedChapter}".`);
      return;
    }

    setCustomTitle(`${guide.name} – Comprehensive Summary & Q&A`);
    setNotesSummary(guide.synopsis);
    setCategory('Literature Summary');
    setTimestampNotes('00:00 Chapter Overview & Historical Context\n04:15 Core Theme & Plot Synopsis\n11:40 Character Traits & Critical Analysis\n17:30 Literary Devices & Symbolism\n23:10 Board Exam High-Yield Questions');
    setNotesLink('https://ncert.nic.in/textbook.php');
  };

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();

    const chapterObj = availableChapters.find(c => c.name === selectedChapter) || availableChapters[0];
    const chapterName = chapterObj ? chapterObj.name : selectedChapter;
    const finalTitle = customTitle.trim() || `${chapterName} – ${category}`;
    const youtubeId = extractYouTubeId(videoUrl);
    const timestamps = parseTimestamps(timestampNotes);
    const bookName = chapterObj ? chapterObj.book : `Class ${classLevel} English`;

    const guide = getChapterStudyGuide(chapterName);
    const pdfContent = guide
      ? `ENGLISH EDUCATION HUB - OFFICIAL STUDY NOTES\nDEVELOPED AND MAINTAINED BY MT KHAN\n\nCHAPTER: ${chapterName.toUpperCase()}\nTEXTBOOK: ${bookName}\nCLASS: CLASS ${classLevel}\nAUTHOR: ${guide.author} | GENRE: ${guide.genre}\nCORE THEME: ${guide.coreTheme}\n\n1. CHAPTER SYNOPSIS:\n${notesSummary.trim() || guide.synopsis}\n\n2. KEY CONCEPTS & BOARD BLUEPRINT:\n${guide.keyPoints.map((pt, i) => `${i + 1}. ${pt}`).join('\n')}\n\n3. CHARACTER & THEMATIC BREAKDOWN:\n${guide.characterOrSpeakerAnalysis.map(c => `• ${c.name}: ${c.description}`).join('\n')}\n\n4. LITERARY & POETIC DEVICES:\n${guide.literaryAndPoeticDevices.map(d => `• ${d.device}: ${d.explanation}`).join('\n')}\n\n5. BOARD EXAM PRACTICE QUESTIONS & SCORING HINTS:\n${guide.examPracticeQuestions.map((q, i) => `[Q${i + 1} - ${q.marks}]\nQuestion: ${q.question}\nAnswer Hint: ${q.answerHint}`).join('\n\n')}\n\nPublished via MT Khan Admin CMS.`
      : `ENGLISH EDUCATION HUB - OFFICIAL STUDY NOTES\nDEVELOPED AND MAINTAINED BY MT KHAN\n\nCHAPTER: ${chapterName.toUpperCase()}\nTEXTBOOK: ${bookName}\nCLASS: CLASS ${classLevel}\nCATEGORY: ${category}\n\n1. CHAPTER OVERVIEW & THEME:\n${notesSummary.trim() || 'Comprehensive analytical study notes and NCERT solutions prepared for high school board preparation.'}\n\nPublished via MT Khan Admin CMS.`;

    const newResource: ResourceItem = {
      id: `note-${Date.now()}`,
      title: finalTitle,
      chapterName,
      classLevel,
      category,
      book: bookName,
      description: notesSummary.trim() || (guide ? guide.coreTheme : `Official NCERT Class ${classLevel} ${category} module for "${chapterName}". Prepared and reviewed by MT Khan.`),
      pdfUrl: notesLink.trim() || 'https://ncert.nic.in/textbook.php',
      pdfTitle: `${chapterName} - Notes.pdf`,
      pdfContent,
      videoUrl: videoUrl.trim() || `https://www.youtube.com/watch?v=${youtubeId}`,
      youtubeId,
      timestamps,
      duration: duration.trim() || '22 mins',
      tags: [`Class ${classLevel}`, bookName, category],
      createdAt: new Date().toISOString().split('T')[0],
      isCustom: true
    };

    onAddResource(newResource);
    console.log(`[Admin CMS] Published resource for Chapter: "${chapterName}" (Class ${classLevel})`);

    setFormSuccess(true);
    setTimeout(() => {
      setFormSuccess(false);
      setCustomTitle('');
      setNotesLink('');
      setNotesSummary('');
      setVideoUrl('');
      setActiveTab('manage');
    }, 800);
  };

  const handleConfirmClearAll = () => {
    const confirmation = window.confirm(
      'Are you sure you want to permanently delete ALL uploaded notes across Class 10, Class 11, and Class 12? This action cannot be undone.'
    );
    if (confirmation) {
      onClearAllResources();
      console.log('[Admin CMS] Permanently cleared all notes from LocalStorage and dashboard.');
    }
  };

  // Group chapters by Book for select optgroups
  const groupedChapters = availableChapters.reduce<Record<string, NcertChapter[]>>((acc, chap) => {
    if (!acc[chap.book]) acc[chap.book] = [];
    acc[chap.book].push(chap);
    return acc;
  }, {});

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-6">
        
        {/* Top Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <Upload className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-serif">
                Admin CMS • NCERT Chapter Manager
              </h3>
              <p className="text-[11px] text-indigo-100">
                Developed and maintained by MT Khan • Educational Content Portal
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            title="Close Admin CMS"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Bar */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 px-6 pt-2 justify-between items-center">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('create')}
              className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all cursor-pointer ${
                activeTab === 'create'
                  ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Upload &amp; Create Note
            </button>
            <button
              onClick={() => setActiveTab('manage')}
              className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all cursor-pointer ${
                activeTab === 'manage'
                  ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Manage &amp; Delete ({resources.length})
            </button>
          </div>

          {resources.length > 0 && (
            <button
              onClick={handleConfirmClearAll}
              className="text-xs font-bold text-rose-600 dark:text-rose-400 hover:text-rose-700 flex items-center gap-1 cursor-pointer py-1 px-2 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/40"
              title="Delete all uploaded cards"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear All</span>
            </button>
          )}
        </div>

        {/* TAB 1: UPLOAD & CREATE FORM */}
        {activeTab === 'create' && (
          <form onSubmit={handlePublish} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
            
            {formSuccess && (
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Resource published successfully! Card is now visible under {selectedChapter}.</span>
              </div>
            )}

            {/* 1. Class Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  1. Select Class Level <span className="text-red-500">*</span>
                </label>
                <select
                  value={classLevel}
                  onChange={(e) => {
                    const nextClass = e.target.value as ClassLevel;
                    setClassLevel(nextClass);
                    const chaps = NCERT_DATABASE[nextClass] || [];
                    if (chaps.length > 0) setSelectedChapter(chaps[0].name);
                  }}
                  className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white font-bold focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="10">Class 10 (First Flight &amp; Footprints)</option>
                  <option value="11">Class 11 (Hornbill &amp; Snapshots)</option>
                  <option value="12">Class 12 (Flamingo &amp; Vistas)</option>
                </select>
              </div>

              {/* 2. Category Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  2. Resource Category <span className="text-red-500">*</span>
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as ResourceCategory)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white font-semibold focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="Literature Summary">Literature Summary</option>
                  <option value="Important Q&A">Important Q&amp;A</option>
                  <option value="Grammar">Grammar</option>
                  <option value="Writing Skills">Writing Skills</option>
                </select>
              </div>
            </div>

            {/* 3. Pre-loaded NCERT Chapter Dropdown */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center justify-between">
                <span>3. Pre-loaded NCERT Chapter Dropdown <span className="text-red-500">*</span></span>
                <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-semibold">
                  Official NCERT Database
                </span>
              </label>
              <select
                value={selectedChapter}
                onChange={(e) => setSelectedChapter(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white font-medium focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                required
              >
                {Object.entries(groupedChapters).map(([bookName, chaps]) => (
                  <optgroup key={bookName} label={`📖 ${bookName}`}>
                    {chaps.map((chap) => (
                      <option key={chap.id} value={chap.name}>
                        {chap.name}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <div className="flex items-center justify-between mt-1.5 flex-wrap gap-1">
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  Pre-load pedagogical notes by MT Khan:
                </span>
                <button
                  type="button"
                  onClick={handleAutoFillStudyGuide}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/80 text-indigo-700 dark:text-indigo-300 text-xs font-bold transition-all border border-indigo-200/60 dark:border-indigo-800/60 cursor-pointer shadow-2xs"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>✨ Auto-Fill from Official Study Guide</span>
                </button>
              </div>
            </div>

            {/* Custom Sub-Topic Title (Optional) */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Custom Topic Sub-Title (Optional)
              </label>
              <input
                type="text"
                value={customTitle}
                onChange={(e) => setCustomTitle(e.target.value)}
                placeholder={`Leave blank to auto-use "${selectedChapter || 'Chapter Name'} – ${category}"`}
                className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* 4. Notes Link / PDF URL Input */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-indigo-500" />
                Notes Link / PDF URL Input
              </label>
              <input
                type="text"
                value={notesLink}
                onChange={(e) => setNotesLink(e.target.value)}
                placeholder="https://ncert.nic.in/textbook/pdf/... or Drive link (or leave blank for generated study notes)"
                className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Chapter Summary / Notes Content */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Key Notes Content &amp; Important Takeaways (For in-app reader)
              </label>
              <textarea
                value={notesSummary}
                onChange={(e) => setNotesSummary(e.target.value)}
                placeholder="Enter character sketch, key themes, literary devices, and 5-mark board hints..."
                rows={2}
                className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* 5. YouTube Video URL Input & Duration */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5 text-red-500" />
                  YouTube Video URL Input
                </label>
                <input
                  type="text"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  placeholder="e.g. https://www.youtube.com/watch?v=0hK2x3mZ7wQ"
                  className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Duration
                </label>
                <input
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="e.g. 25 mins"
                  className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* 6. Video Timestamp Notes */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-indigo-500" />
                Video Timestamp Notes (Clickable Chips)
              </label>
              <textarea
                value={timestampNotes}
                onChange={(e) => setTimestampNotes(e.target.value)}
                placeholder="00:00 Intro, 04:30 Summary, 11:15 Q&A Analysis"
                rows={2}
                className="w-full px-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white font-mono focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              />
              <span className="text-[10px] text-slate-400">
                Format: MM:SS Label (e.g. "03:15 Stanza Analysis")
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-200 dark:border-slate-800">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-600/30 transition-all cursor-pointer hover:scale-[1.01]"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Publish Resource</span>
              </button>
            </div>

          </form>
        )}

        {/* TAB 2: CONTENT MANAGEMENT & DELETE CONTROLS */}
        {activeTab === 'manage' && (
          <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
            
            <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Published Chapter Notes ({resources.length})
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Delete individual resource cards or clear the entire dashboard.
                </p>
              </div>

              <div className="flex items-center gap-2">
                {resources.length === 0 && onLoadDemoResources && (
                  <button
                    onClick={() => {
                      onLoadDemoResources();
                      console.log('[Admin CMS] Loaded sample demo curriculum');
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-bold hover:bg-indigo-100 transition-colors cursor-pointer"
                  >
                    <FolderOpen className="w-3.5 h-3.5" />
                    <span>Load 3 Demo Notes</span>
                  </button>
                )}

                {resources.length > 0 && (
                  <button
                    onClick={handleConfirmClearAll}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900 text-xs font-bold hover:bg-rose-100 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear All</span>
                  </button>
                )}
              </div>
            </div>

            {resources.length > 0 ? (
              <div className="space-y-2.5">
                {resources.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:border-slate-300 transition-all gap-3"
                  >
                    <div className="truncate flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
                          Class {item.classLevel}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-600 dark:text-slate-400">
                          {item.chapterName}
                        </span>
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                          {item.category}
                        </span>
                      </div>
                      <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                        {item.title}
                      </h5>
                    </div>

                    {/* Delete Button */}
                    <button
                      onClick={() => {
                        if (window.confirm(`Permanently delete note "${item.title}"?`)) {
                          onDeleteResource(item.id);
                          console.log(`[Admin CMS] Deleted note ID: ${item.id}`);
                        }
                      }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-100 dark:bg-rose-950/80 hover:bg-rose-200 dark:hover:bg-rose-900 text-rose-700 dark:text-rose-300 text-xs font-bold transition-colors cursor-pointer shrink-0"
                      title="Permanently remove this note"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl">
                <Layers className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                <h5 className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  Zero Notes in System
                </h5>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto mt-1">
                  Select a class and an official NCERT chapter in the "Upload &amp; Create Note" tab to add your first resource.
                </p>
                <button
                  onClick={() => setActiveTab('create')}
                  className="mt-4 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 cursor-pointer"
                >
                  Create First Chapter Note
                </button>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
