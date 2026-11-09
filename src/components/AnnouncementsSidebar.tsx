import React, { useState } from 'react';
import { 
  Bell, 
  Pin, 
  Video, 
  FileText, 
  AlertCircle, 
  Sparkles, 
  Clock, 
  Plus, 
  ChevronRight,
  Send
} from 'lucide-react';
import { AnnouncementItem } from '../types';

interface AnnouncementsProps {
  announcements: AnnouncementItem[];
  onAddAnnouncement: (announcement: Omit<AnnouncementItem, 'id'>) => void;
  onOpenQuickNotes?: () => void;
}

export const AnnouncementsSidebar: React.FC<AnnouncementsProps> = ({
  announcements,
  onAddAnnouncement,
  onOpenQuickNotes
}) => {
  const [filter, setFilter] = useState<string>('All');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newCategory, setNewCategory] = useState<AnnouncementItem['category']>('Exam Alert');

  const categories = ['All', 'Exam Alert', 'New Notes', 'Live Stream', 'Curriculum'];

  const filteredAnnouncements = filter === 'All'
    ? announcements
    : announcements.filter(a => a.category === filter);

  const getBadgeStyle = (category: AnnouncementItem['category']) => {
    switch (category) {
      case 'Exam Alert':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border-amber-200 dark:border-amber-800';
      case 'Live Stream':
        return 'bg-red-100 text-red-800 dark:bg-red-950/70 dark:text-red-300 border-red-200 dark:border-red-800';
      case 'New Notes':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
      case 'Curriculum':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-950/70 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      default:
        return 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300';
    }
  };

  const handleCreateAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    onAddAnnouncement({
      title: newTitle.trim(),
      content: newContent.trim(),
      category: newCategory,
      date: 'Just now',
      isPinned: newCategory === 'Exam Alert'
    });

    setNewTitle('');
    setNewContent('');
    setShowAddForm(false);
    console.log(`[Announcements] Added announcement "${newTitle}" under category ${newCategory}`);
  };

  return (
    <section id="latest-updates" className="py-8 scroll-mt-24">
      <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm">
        
        {/* Header */}
        <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Bell className="w-5 h-5 animate-bounce-short" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                Latest Updates &amp; Announcements
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Official notices, exam schedules, and YouTube revision streams
              </p>
            </div>
          </div>

          {/* Post Update Toggle for Instructor */}
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{showAddForm ? 'Close Form' : 'Post Notice'}</span>
          </button>
        </div>

        {/* Add Announcement inline form */}
        {showAddForm && (
          <form onSubmit={handleCreateAnnouncement} className="mb-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
            <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
              Post New Notice (Instructor / MT Khan)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Notice headline..."
                className="sm:col-span-2 px-3 py-1.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                required
              />
              <select
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value as any)}
                className="px-2 py-1.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              >
                <option value="Exam Alert">Exam Alert</option>
                <option value="New Notes">New Notes</option>
                <option value="Live Stream">Live Stream</option>
                <option value="Curriculum">Curriculum</option>
              </select>
            </div>
            <textarea
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              placeholder="Announcement details, date, or syllabus alert..."
              rows={2}
              className="w-full px-3 py-1.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              required
            />
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-3 py-1 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 px-3 py-1 bg-indigo-600 text-white rounded-lg text-xs font-semibold hover:bg-indigo-700 transition-colors"
              >
                <Send className="w-3 h-3" />
                Publish Update
              </button>
            </div>
          </form>
        )}

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-4 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                console.log(`[Announcements] Filtered category to "${cat}"`);
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium shrink-0 transition-colors cursor-pointer ${
                filter === cat
                  ? 'bg-amber-500 text-white font-semibold shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Announcements List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {filteredAnnouncements.map((item) => (
            <div
              key={item.id}
              className={`p-3.5 rounded-xl border transition-all ${
                item.isPinned
                  ? 'bg-amber-50/40 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/60'
                  : 'bg-slate-50/60 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-800 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-1.5">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-sm border ${getBadgeStyle(item.category)}`}>
                    {item.category}
                  </span>
                  {item.isPinned && (
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-amber-600 dark:text-amber-400">
                      <Pin className="w-3 h-3 rotate-45" />
                      Pinned
                    </span>
                  )}
                </div>
                <span className="flex items-center gap-1 text-[11px] text-slate-400">
                  <Clock className="w-3 h-3" />
                  {item.date}
                </span>
              </div>

              <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">
                {item.title}
              </h4>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
