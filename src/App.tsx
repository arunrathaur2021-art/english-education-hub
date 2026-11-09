/**
 * English Education Hub - Complete Educational Platform
 * Developed and maintained by MT Khan
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Navbar, ActivePage } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClassPortalsOverview } from './components/ClassPortalsOverview';
import { ClassSection } from './components/ClassSection';
import { AnnouncementsSidebar } from './components/AnnouncementsSidebar';
import { GrammarQuiz } from './components/GrammarQuiz';
import { AdminModal } from './components/AdminModal';
import { VideoModal } from './components/VideoModal';
import { PdfReaderModal } from './components/PdfReaderModal';
import { StudyGuideModal } from './components/StudyGuideModal';
import { ExamAndStreakWidget } from './components/ExamAndStreakWidget';
import { AskDoubtModal } from './components/AskDoubtModal';
import { Footer } from './components/Footer';
import { 
  INITIAL_RESOURCES, 
  DEMO_PREVIEW_RESOURCES,
  INITIAL_ANNOUNCEMENTS, 
  INITIAL_QUIZ_QUESTIONS 
} from './data/initialData';
import { NCERT_DATABASE } from './data/ncertDatabase';
import { 
  ResourceItem, 
  AnnouncementItem, 
  ClassLevel, 
  VideoTimestamp,
  ChapterStudyGuide
} from './types';
import { Search, BookOpen, ArrowRight, Layers } from 'lucide-react';

const STORAGE_KEYS = {
  THEME: 'eeh_theme',
  RESOURCES: 'eeh_resources_v4', // v4 for clean zero default state with scoped class portals
  COMPLETED: 'eeh_completed_topics_v4',
  ANNOUNCEMENTS: 'eeh_announcements_v4'
};

export default function App() {
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.THEME);
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  // Active view: 'home' | '10' | '11' | '12'
  const [activePage, setActivePage] = useState<ActivePage>(() => {
    try {
      const hash = window.location.hash;
      if (hash === '#class-10') return '10';
      if (hash === '#class-11') return '11';
      if (hash === '#class-12') return '12';
    } catch {
      // ignore
    }
    return 'home';
  });

  // Resources state: START WITH ZERO DUMMY NOTES
  const [resources, setResources] = useState<ResourceItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.RESOURCES);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('[App] Could not load persisted resources', e);
    }
    return INITIAL_RESOURCES; // Starts completely empty: []
  });

  // Completed items state (persisted)
  const [completedIds, setCompletedIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return new Set(parsed);
        }
      }
    } catch (e) {
      console.warn('[App] Could not load completed topics', e);
    }
    return new Set<string>();
  });

  // Announcements state
  const [announcements, setAnnouncements] = useState<AnnouncementItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ANNOUNCEMENTS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('[App] Could not load announcements', e);
    }
    return INITIAL_ANNOUNCEMENTS;
  });

  // Search query
  const [searchQuery, setSearchQuery] = useState('');

  // Admin CMS Modal state
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [adminDefaultClass, setAdminDefaultClass] = useState<ClassLevel>('10');
  const [adminDefaultChapter, setAdminDefaultChapter] = useState<string>('');

  // Video and PDF modal state
  const [videoModalData, setVideoModalData] = useState<{
    isOpen: boolean;
    resource: ResourceItem | null;
    timestamp: VideoTimestamp | null;
  }>({
    isOpen: false,
    resource: null,
    timestamp: null
  });

  const [pdfModalData, setPdfModalData] = useState<{
    isOpen: boolean;
    resource: ResourceItem | null;
  }>({
    isOpen: false,
    resource: null
  });

  const [studyGuideModalData, setStudyGuideModalData] = useState<{
    isOpen: boolean;
    guide: ChapterStudyGuide | null;
  }>({
    isOpen: false,
    guide: null
  });

  // Apply dark mode class to <html>
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem(STORAGE_KEYS.THEME, 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem(STORAGE_KEYS.THEME, 'light');
    }
  }, [isDarkMode]);

  // Sync resources to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.RESOURCES, JSON.stringify(resources));
    } catch (e) {
      console.error('[Storage] Error saving resources', e);
    }
  }, [resources]);

  // Sync completed topics to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.COMPLETED, JSON.stringify(Array.from(completedIds)));
    } catch (e) {
      console.error('[Storage] Error saving completed IDs', e);
    }
  }, [completedIds]);

  // Sync announcements to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.ANNOUNCEMENTS, JSON.stringify(announcements));
    } catch (e) {
      console.error('[Storage] Error saving announcements', e);
    }
  }, [announcements]);

  // Listen to browser hash changes for smooth back/forward button navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#class-10') setActivePage('10');
      else if (hash === '#class-11') setActivePage('11');
      else if (hash === '#class-12') setActivePage('12');
      else if (hash === '#home' || hash === '' || hash === '#latest-updates' || hash === '#quick-quiz') {
        setActivePage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Navigation handler
  const handleNavigatePage = (page: ActivePage, targetSection?: string) => {
    setActivePage(page);
    setSearchQuery('');

    if (page === 'home') {
      if (targetSection) {
        window.location.hash = targetSection;
        setTimeout(() => {
          const el = document.querySelector(targetSection);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      } else {
        window.location.hash = '#home';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.location.hash = `#class-${page}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    console.log(`[Navigation] Switched to page: ${page}${targetSection ? ` (${targetSection})` : ''}`);
  };

  // Completion toggle handler
  const handleToggleComplete = (id: string) => {
    setCompletedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Add resource handler (Admin CMS)
  const handleAddResource = (newResource: ResourceItem) => {
    setResources(prev => [newResource, ...prev]);
    console.log(`[Admin CMS] Published "${newResource.title}" under ${newResource.chapterName} (Class ${newResource.classLevel})`);
  };

  // Delete individual resource handler
  const handleDeleteResource = (id: string) => {
    setResources(prev => prev.filter(r => r.id !== id));
    setCompletedIds(prev => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
    console.log(`[Admin CMS] Deleted resource ID: ${id}`);
  };

  // Clear ALL resources handler
  const handleClearAllResources = () => {
    setResources([]);
    setCompletedIds(new Set());
    localStorage.removeItem(STORAGE_KEYS.RESOURCES);
    localStorage.removeItem(STORAGE_KEYS.COMPLETED);
    console.log('[Admin CMS] All notes cleared from dashboard and storage');
  };

  // Optional: Load demo resources
  const handleLoadDemoResources = () => {
    setResources(DEMO_PREVIEW_RESOURCES);
    console.log('[Admin CMS] Loaded sample demo curriculum');
  };

  // Open Admin CMS with specific class & chapter selected
  const handleOpenAdminForChapter = (level: ClassLevel, chapterName: string) => {
    setAdminDefaultClass(level);
    setAdminDefaultChapter(chapterName);
    setIsAdminOpen(true);
    console.log(`[Admin CMS] Opened with preselected Class ${level} and Chapter "${chapterName}"`);
  };

  // Add announcement handler
  const handleAddAnnouncement = (newAnn: Omit<AnnouncementItem, 'id'>) => {
    const item: AnnouncementItem = {
      ...newAnn,
      id: `ann-${Date.now()}`
    };
    setAnnouncements(prev => [item, ...prev]);
  };

  // Video modal trigger
  const handleOpenVideo = (resource: ResourceItem, timestamp?: VideoTimestamp) => {
    setVideoModalData({
      isOpen: true,
      resource,
      timestamp: timestamp || null
    });
  };

  // PDF modal trigger
  const handleOpenPdf = (resource: ResourceItem) => {
    setPdfModalData({
      isOpen: true,
      resource
    });
  };

  // Study Guide modal trigger
  const handleOpenStudyGuide = (guide: ChapterStudyGuide) => {
    setStudyGuideModalData({
      isOpen: true,
      guide
    });
  };

  // Class-wise partitions
  const class10Resources = useMemo(
    () => resources.filter(r => r.classLevel === '10'),
    [resources]
  );

  const class11Resources = useMemo(
    () => resources.filter(r => r.classLevel === '11'),
    [resources]
  );

  const class12Resources = useMemo(
    () => resources.filter(r => r.classLevel === '12'),
    [resources]
  );

  // Search results on Home page (chapter discovery banner)
  const homeSearchMatches = useMemo(() => {
    if (activePage !== 'home' || !searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    const matches: Array<{ classLevel: ClassLevel; chapter: string; book: string }> = [];

    (['10', '11', '12'] as ClassLevel[]).forEach(lvl => {
      NCERT_DATABASE[lvl].forEach(chap => {
        if (chap.name.toLowerCase().includes(q) || chap.book.toLowerCase().includes(q)) {
          matches.push({ classLevel: lvl, chapter: chap.name, book: chap.book });
        }
      });
    });

    return matches.slice(0, 6);
  }, [searchQuery, activePage]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      
      {/* Top Header & Sticky Navigation Bar */}
      <Navbar
        activePage={activePage}
        onNavigatePage={handleNavigatePage}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        onOpenAdmin={(targetClass) => {
          setAdminDefaultClass(targetClass || (activePage !== 'home' ? activePage : '10'));
          setAdminDefaultChapter('');
          setIsAdminOpen(true);
        }}
        completedCount={completedIds.size}
        totalCount={resources.length}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* VIEW 1: MAIN HOME PAGE (Zero Note Cards / Zero Feeds)     */}
        {/* ========================================================= */}
        {activePage === 'home' && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* 1. 2-Column Hero Section */}
            <Hero
              totalResources={resources.length}
              completedCount={completedIds.size}
              onNavigateToClass={(lvl) => handleNavigatePage(lvl)}
              onOpenQuiz={() => {
                const el = document.querySelector('#quick-quiz');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Live Search Discovery Banner on Home (if searching) */}
            {searchQuery.trim() && (
              <div className="p-5 rounded-3xl bg-indigo-50/90 dark:bg-indigo-950/50 border border-indigo-200/80 dark:border-indigo-800/80 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-sm text-indigo-900 dark:text-indigo-200">
                    <Search className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span>
                      Syllabus matches for "<strong className="font-semibold">{searchQuery}</strong>" ({homeSearchMatches.length} found):
                    </span>
                  </div>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 border border-slate-200 dark:border-slate-700 cursor-pointer"
                  >
                    Clear
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {homeSearchMatches.map((m, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleNavigatePage(m.classLevel)}
                      className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-indigo-200/60 dark:border-indigo-800/60 text-left hover:border-indigo-500 transition-all cursor-pointer flex items-center justify-between"
                    >
                      <div className="truncate">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 mr-1.5">
                          Class {m.classLevel}
                        </span>
                        <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
                          {m.chapter}
                        </span>
                        <span className="text-[11px] text-slate-400 block truncate">
                          {m.book}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-indigo-500 shrink-0 ml-2" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 2. Dedicated Class Portals Gateway Cards (No notes feeds on Home) */}
            <ClassPortalsOverview
              resources={resources}
              completedIds={completedIds}
              onNavigateToClass={(lvl) => handleNavigatePage(lvl)}
            />

            {/* 3. Board Exams Countdown & Daily Study Streak Tracker */}
            <ExamAndStreakWidget
              onOpenQuiz={() => {
                const el = document.querySelector('#quick-quiz');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* 4. Announcements & Latest Updates Feed */}
            <AnnouncementsSidebar
              announcements={announcements}
              onAddAnnouncement={handleAddAnnouncement}
            />

            {/* 5. Quick Knowledge Check Mini Grammar Quiz */}
            <GrammarQuiz
              questions={INITIAL_QUIZ_QUESTIONS}
            />

          </div>
        )}

        {/* ========================================================= */}
        {/* VIEW 2: DEDICATED CLASS 10 PORTAL                        */}
        {/* ========================================================= */}
        {activePage === '10' && (
          <div className="animate-fadeIn">
            <ClassSection
              classLevel="10"
              title="Class 10 NCERT English: First Flight &amp; Footprints"
              subtitle="Official textbook chapters, literature analyses, YouTube video lectures, and PDF study notes curated by MT Khan."
              resources={class10Resources}
              completedIds={completedIds}
              onToggleComplete={handleToggleComplete}
              onOpenVideo={handleOpenVideo}
              onOpenPdf={handleOpenPdf}
              onOpenStudyGuide={handleOpenStudyGuide}
              onDeleteResource={handleDeleteResource}
              onOpenAdminForChapter={handleOpenAdminForChapter}
              onBackToHome={() => handleNavigatePage('home')}
              searchQuery={searchQuery}
            />
          </div>
        )}

        {/* ========================================================= */}
        {/* VIEW 3: DEDICATED CLASS 11 PORTAL                        */}
        {/* ========================================================= */}
        {activePage === '11' && (
          <div className="animate-fadeIn">
            <ClassSection
              classLevel="11"
              title="Class 11 NCERT English: Hornbill &amp; Snapshots"
              subtitle="Comprehensive prose, poetry, and supplementary reader chapters with note-making techniques and revision modules."
              resources={class11Resources}
              completedIds={completedIds}
              onToggleComplete={handleToggleComplete}
              onOpenVideo={handleOpenVideo}
              onOpenPdf={handleOpenPdf}
              onOpenStudyGuide={handleOpenStudyGuide}
              onDeleteResource={handleDeleteResource}
              onOpenAdminForChapter={handleOpenAdminForChapter}
              onBackToHome={() => handleNavigatePage('home')}
              searchQuery={searchQuery}
            />
          </div>
        )}

        {/* ========================================================= */}
        {/* VIEW 4: DEDICATED CLASS 12 PORTAL                        */}
        {/* ========================================================= */}
        {activePage === '12' && (
          <div className="animate-fadeIn">
            <ClassSection
              classLevel="12"
              title="Class 12 NCERT English Core: Flamingo &amp; Vistas"
              subtitle="Master high-stakes chapters, RTC questions, character sketches, and official board examination preparations."
              resources={class12Resources}
              completedIds={completedIds}
              onToggleComplete={handleToggleComplete}
              onOpenVideo={handleOpenVideo}
              onOpenPdf={handleOpenPdf}
              onOpenStudyGuide={handleOpenStudyGuide}
              onDeleteResource={handleDeleteResource}
              onOpenAdminForChapter={handleOpenAdminForChapter}
              onBackToHome={() => handleNavigatePage('home')}
              searchQuery={searchQuery}
            />
          </div>
        )}

      </main>

      {/* Footer with Page Navigation */}
      <Footer
        onOpenAdmin={() => {
          setAdminDefaultClass(activePage !== 'home' ? activePage : '10');
          setAdminDefaultChapter('');
          setIsAdminOpen(true);
        }}
        onNavigatePage={handleNavigatePage}
      />

      {/* Floating Ask Doubt Desk (MT Khan WhatsApp/Telegram) */}
      <AskDoubtModal />

      {/* Admin CMS Upload & Delete Panel Modal */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        onAddResource={handleAddResource}
        resources={resources}
        onDeleteResource={handleDeleteResource}
        onClearAllResources={handleClearAllResources}
        onLoadDemoResources={handleLoadDemoResources}
        defaultClassLevel={adminDefaultClass}
        defaultChapterName={adminDefaultChapter}
      />

      {/* Embedded YouTube Video Lesson Modal */}
      <VideoModal
        isOpen={videoModalData.isOpen}
        resource={videoModalData.resource}
        initialTimestamp={videoModalData.timestamp}
        onClose={() => setVideoModalData({ isOpen: false, resource: null, timestamp: null })}
      />

      {/* In-App Custom PDF Reader Modal */}
      <PdfReaderModal
        isOpen={pdfModalData.isOpen}
        resource={pdfModalData.resource}
        onClose={() => setPdfModalData({ isOpen: false, resource: null })}
      />

      {/* Comprehensive Official NCERT Chapter Study Guide Modal */}
      <StudyGuideModal
        isOpen={studyGuideModalData.isOpen}
        guide={studyGuideModalData.guide}
        onClose={() => setStudyGuideModalData({ isOpen: false, guide: null })}
      />

    </div>
  );
}
