import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  ArrowUp, 
  ShieldCheck, 
  Sparkles,
  Bell
} from 'lucide-react';
import { ActivePage } from './Navbar';

interface FooterProps {
  onOpenAdmin: () => void;
  onNavigatePage?: (page: ActivePage, targetSection?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin, onNavigatePage }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (page: ActivePage, section?: string) => {
    if (onNavigatePage) {
      onNavigatePage(page, section);
    } else if (section) {
      const el = document.querySelector(section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors mt-16">
      
      {/* Top Banner Accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & MT Khan Credit */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-xl text-slate-900 dark:text-white font-serif tracking-tight">
                  English Education Hub
                </span>
                <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                  Developed and maintained by MT Khan
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
              A comprehensive academic learning portal engineered to empower high school students across Class 10, Class 11, and Class 12 with conceptual literature explanations, timestamped video lessons, detailed chapter revision notes, and instant grammar mastery.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-slate-500 dark:text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Aligned with NCERT, CBSE &amp; State Board Academic Guidelines</span>
            </div>
          </div>

          {/* Col 2: Quick Curriculum Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Dedicated Portals
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <button 
                  onClick={() => handleLinkClick('10')}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                  Class 10 (First Flight &amp; Footprints)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('11')}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                  Class 11 (Hornbill &amp; Snapshots)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('12')}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <BookOpen className="w-3.5 h-3.5 text-purple-500" />
                  Class 12 (Flamingo &amp; Vistas)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('home', '#quick-quiz')}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  Interactive Grammar Quiz
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Portal Tools & Admin */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Tools &amp; Teacher Portal
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <button
                  onClick={onOpenAdmin}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-left font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Admin CMS (Upload &amp; Manage)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('home', '#latest-updates')}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <Bell className="w-3.5 h-3.5 text-amber-500" />
                  Latest Updates &amp; Exam Notices
                </button>
              </li>
              <li>
                <span className="text-slate-400 dark:text-slate-500 text-[11px] block mt-1">
                  Instructor: MT Khan (English Literature &amp; Linguistics)
                </span>
              </li>
            </ul>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & MT Khan Signature */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} English Education Hub. All rights reserved.</p>
          <div className="flex items-center gap-1 font-medium text-slate-700 dark:text-slate-300">
            <span>Developed and maintained with care by</span>
            <strong className="text-indigo-600 dark:text-indigo-400 font-bold ml-1">MT Khan</strong>
          </div>
        </div>

      </div>
    </footer>
  );
};
