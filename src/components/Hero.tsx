import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  ArrowRight, 
  Sparkles,
  CheckCircle2,
  Award,
  Video,
  FileText,
  Users
} from 'lucide-react';
import { ClassLevel } from '../types';

interface HeroProps {
  totalResources: number;
  completedCount: number;
  onNavigateToClass: (level: ClassLevel) => void;
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  totalResources,
  completedCount,
  onNavigateToClass,
  onOpenQuiz
}) => {
  return (
    <section id="home" className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-br from-indigo-500/10 via-sky-500/5 to-purple-500/10 blur-3xl pointer-events-none -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Portrait Image of MT Khan / English Education Hub */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative group w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative glowing halo */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-600 via-sky-500 to-purple-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500" />
              
              {/* Portrait Image Card */}
              <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-3 sm:p-3.5 border border-slate-200/80 dark:border-slate-800 shadow-xl overflow-hidden">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src="/assets/aistudio/English_Education_Hub_Portrait_697433de.png"
                    alt="English Education Hub - MT Khan"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('English%20Education%20Hub%20Portrait')) {
                        target.src = '/English Education Hub Portrait.png';
                      }
                    }}
                  />

                  {/* Gentle gradient overlay for bottom badge contrast */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none" />

                  {/* Floating educator tag on image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="font-bold text-sm tracking-wide font-serif">MT Khan</span>
                      </div>
                      <p className="text-[11px] text-slate-200 font-medium drop-shadow-xs">
                        English Education Hub • Lead Mentor
                      </p>
                    </div>

                    <div className="px-2.5 py-1 rounded-full bg-indigo-600/90 backdrop-blur-md border border-indigo-300/40 text-[10px] font-bold text-white shadow-xs">
                      Faculty
                    </div>
                  </div>
                </div>

                {/* Sub-card attribution badge */}
                <div className="mt-3 px-2 py-1.5 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80">
                  <span className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold text-[11px]">
                    <Sparkles className="w-3.5 h-3.5" />
                    English Education Hub
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Developed &amp; maintained by MT Khan
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Hero Badges, Heading, Description & Portals */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-1 lg:order-2">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 animate-pulse" />
                <span>Academic Portal &amp; Learning Management System</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium">
                <span>Developed and maintained by</span>
                <strong className="text-slate-900 dark:text-white font-semibold">MT Khan</strong>
              </div>
            </div>

            {/* Main Hero Heading (Updated per instruction) */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-serif leading-[1.15]">
              English Education Hub Portal with{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-600 bg-clip-text text-transparent underline decoration-indigo-400/40 decoration-wavy decoration-2">
                Concept Clarity
              </span>
            </h1>

            {/* Hero Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
              Curated NCERT literature deep dives, video lectures with indexed timestamps, downloadable revision notes, and instant grammar quizzes tailored for Class 10, 11, and 12 board preparation.
            </p>

            {/* Class Portal Entry Action Buttons */}
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center justify-center lg:justify-start gap-2">
                <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                <span>Select a Dedicated Class Portal:</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => onNavigateToClass('10')}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all text-left group cursor-pointer"
                >
                  <div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                      Class 10
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Class 10 Portal
                    </h4>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      First Flight &amp; Footprints
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </button>

                <button
                  onClick={() => onNavigateToClass('11')}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-md transition-all text-left group cursor-pointer"
                >
                  <div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
                      Class 11
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      Class 11 Portal
                    </h4>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      Hornbill &amp; Snapshots
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                </button>

                <button
                  onClick={() => onNavigateToClass('12')}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-md transition-all text-left group cursor-pointer"
                >
                  <div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300">
                      Class 12
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      Class 12 Portal
                    </h4>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      Flamingo &amp; Vistas
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                </button>
              </div>
            </div>

            {/* Quick Portal Highlights */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Complete NCERT Coverage
              </span>
              <span className="flex items-center gap-1.5">
                <Video className="w-4 h-4 text-red-500" />
                Indexed Video Lessons
              </span>
              <span className="flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-indigo-500" />
                Downloadable PDF Summaries
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
