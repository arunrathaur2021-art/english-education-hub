import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Moon, 
  Sun, 
  PlusCircle, 
  Menu, 
  X, 
  GraduationCap, 
  Bell, 
  CheckCircle2,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { ClassLevel } from '../types';

export type ActivePage = 'home' | '10' | '11' | '12';

interface NavbarProps {
  activePage: ActivePage;
  onNavigatePage: (page: ActivePage, targetSection?: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenAdmin: (targetClass?: ClassLevel) => void;
  completedCount: number;
  totalCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigatePage,
  searchQuery,
  onSearchChange,
  isDarkMode,
  onToggleDarkMode,
  onOpenAdmin,
  completedCount,
  totalCount
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', page: 'home' as ActivePage, href: '#home' },
    { name: 'Class 10', page: '10' as ActivePage, href: '#class-10' },
    { name: 'Class 11', page: '11' as ActivePage, href: '#class-11' },
    { name: 'Class 12', page: '12' as ActivePage, href: '#class-12' },
    { name: 'Latest Updates', page: 'home' as ActivePage, href: '#latest-updates', isScroll: true },
    { name: 'Grammar Quiz', page: 'home' as ActivePage, href: '#quick-quiz', isScroll: true }
  ];

  const handleItemClick = (item: typeof navItems[0]) => {
    setIsMobileMenuOpen(false);
    console.log(`[Navigation] Selected: ${item.name}`);
    if (item.isScroll) {
      onNavigatePage('home', item.href);
    } else {
      onNavigatePage(item.page);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200/80 dark:border-slate-800 transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo & Branding */}
          <button 
            onClick={() => onNavigatePage('home')}
            className="flex items-center gap-3 group shrink-0 text-left cursor-pointer focus:outline-hidden"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5 font-serif">
                English Education Hub
              </span>
              <span className="text-[11px] font-medium tracking-wide text-indigo-600 dark:text-indigo-400 font-sans flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                Developed and maintained by MT Khan
              </span>
            </div>
          </button>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-2">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  onSearchChange(e.target.value);
                  console.log(`[Search] Live query: "${e.target.value}"`);
                }}
                placeholder={
                  activePage === 'home' 
                    ? "Search all NCERT chapters, topics, notes..." 
                    : `Search Class ${activePage} NCERT chapters...`
                }
                className="w-full pl-10 pr-4 py-2 text-sm bg-slate-100/80 dark:bg-slate-800/80 text-slate-900 dark:text-white rounded-full border border-slate-200 dark:border-slate-700/60 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 dark:focus:ring-indigo-400/50 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-200 dark:bg-slate-700 rounded-full w-4 h-4 flex items-center justify-center cursor-pointer"
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = !item.isScroll && activePage === item.page;
              return (
                <button
                  key={item.name}
                  onClick={() => handleItemClick(item)}
                  className={`px-3 py-1.5 text-xs sm:text-sm rounded-xl font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 font-bold border border-indigo-200/60 dark:border-indigo-800/60'
                      : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Student Progress Badge */}
            <div 
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-800/60 rounded-full"
              title="Your marked completion progress"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{completedCount}/{totalCount} Done</span>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => {
                onToggleDarkMode();
                console.log(`[Theme] Toggled to ${!isDarkMode ? 'dark' : 'light'} mode`);
              }}
              aria-label="Toggle dark mode"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-600" />
              )}
            </button>

            {/* Admin CMS Trigger Button */}
            <button
              onClick={() => {
                const targetClass = activePage === '10' || activePage === '11' || activePage === '12' ? activePage : '10';
                console.log(`[Admin] Admin CMS Trigger clicked for Class ${targetClass}`);
                onOpenAdmin(targetClass);
              }}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl shadow-xs shadow-indigo-600/30 transition-all hover:scale-[1.02] cursor-pointer"
              title="Open Admin Content Management System"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Admin CMS</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden border border-slate-200 dark:border-slate-800 cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-3">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={
                activePage === 'home' 
                  ? "Search NCERT chapters..." 
                  : `Search Class ${activePage} chapters...`
              }
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-full border border-slate-200 dark:border-slate-700 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 bg-slate-200 dark:bg-slate-700 rounded-full w-4 h-4 flex items-center justify-center"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 py-3 space-y-1 animate-fadeIn">
            {navItems.map((item) => {
              const isActive = !item.isScroll && activePage === item.page;
              return (
                <button
                  key={item.name}
                  onClick={() => handleItemClick(item)}
                  className={`w-full text-left px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 font-bold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>{item.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              );
            })}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 px-4 py-2">
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Completion Status:</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">{completedCount} of {totalCount} completed</span>
              </div>
              <p className="mt-2 text-[11px] text-indigo-600 dark:text-indigo-400 font-medium">
                Developed and maintained by MT Khan
              </p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
