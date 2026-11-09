import React from 'react';
import { 
  FileText, 
  Video, 
  Clock, 
  CheckCircle2, 
  Circle, 
  Trash2,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { ResourceItem, VideoTimestamp } from '../types';

interface ResourceCardProps {
  resource: ResourceItem;
  isCompleted: boolean;
  onToggleComplete: (id: string) => void;
  onOpenVideo: (resource: ResourceItem, initialTimestamp?: VideoTimestamp) => void;
  onOpenPdf: (resource: ResourceItem) => void;
  onDeleteResource: (id: string) => void;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  resource,
  isCompleted,
  onToggleComplete,
  onOpenVideo,
  onOpenPdf,
  onDeleteResource
}) => {
  const classStyles = {
    '10': {
      badge: 'bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border-blue-200 dark:border-blue-800',
      borderAccent: 'border-l-blue-500'
    },
    '11': {
      badge: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/80 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
      borderAccent: 'border-l-indigo-500'
    },
    '12': {
      badge: 'bg-purple-100 text-purple-800 dark:bg-purple-950/80 dark:text-purple-300 border-purple-200 dark:border-purple-800',
      borderAccent: 'border-l-purple-500'
    }
  };

  const style = classStyles[resource.classLevel] || classStyles['10'];

  return (
    <div
      className={`group relative flex flex-col justify-between bg-white dark:bg-slate-900 rounded-2xl border transition-all duration-200 p-5 shadow-xs hover:shadow-md ${
        isCompleted
          ? 'border-emerald-300 dark:border-emerald-800/70 bg-emerald-50/20 dark:bg-emerald-950/15'
          : 'border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
      } border-l-4 ${style.borderAccent}`}
    >
      <div>
        {/* Top Badges & Mark as Done Row */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center flex-wrap gap-1.5">
            <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md border ${style.badge}`}>
              Class {resource.classLevel}
            </span>
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              {resource.category}
            </span>
            {resource.book && (
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                • {resource.book}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            {/* Student Mark as Done Checkbox */}
            <button
              onClick={() => {
                onToggleComplete(resource.id);
                console.log(`[Progress] Marked "${resource.title}" as ${!isCompleted ? 'Completed' : 'Incomplete'}`);
              }}
              className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                isCompleted
                  ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-200'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
              title={isCompleted ? 'Mark as incomplete' : 'Mark as done'}
            >
              {isCompleted ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Done</span>
                </>
              ) : (
                <>
                  <Circle className="w-3.5 h-3.5" />
                  <span>Mark Done</span>
                </>
              )}
            </button>

            {/* Admin Delete Button on Card */}
            <button
              onClick={() => {
                if (window.confirm(`Permanently delete "${resource.title}"?`)) {
                  onDeleteResource(resource.id);
                  console.log(`[Admin CMS] Card delete clicked for ID: ${resource.id}`);
                }
              }}
              className="p-1 rounded-md text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors cursor-pointer"
              title="Delete this note card"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {resource.title}
        </h3>

        {/* Description / Summary */}
        <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
          {resource.description}
        </p>
      </div>

      {/* Video Timestamps Tag Section */}
      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
          <Clock className="w-3.5 h-3.5 text-indigo-500" />
          <span>Chapter Timestamps:</span>
        </div>

        {resource.timestamps && resource.timestamps.length > 0 ? (
          <div className="flex flex-wrap gap-1.5">
            {resource.timestamps.map((ts, idx) => (
              <button
                key={idx}
                onClick={() => {
                  console.log(`[Timestamps] Clicked ${ts.time} (${ts.label}) for "${resource.title}"`);
                  onOpenVideo(resource, ts);
                }}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 hover:bg-indigo-50 dark:bg-slate-800 dark:hover:bg-indigo-950/60 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-300 text-[11px] font-medium transition-colors border border-slate-200/60 dark:border-slate-700/60 cursor-pointer"
                title={`Seek video to ${ts.time} (${ts.label})`}
              >
                <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">{ts.time}</span>
                <span className="truncate max-w-[100px]">{ts.label}</span>
              </button>
            ))}
          </div>
        ) : (
          <span className="text-[11px] text-slate-400 italic">No timestamps specified</span>
        )}
      </div>

      {/* Action Buttons Row */}
      <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap flex-1">
          {/* Watch YouTube Video Button */}
          <button
            onClick={() => onOpenVideo(resource)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
            title="Watch YouTube video lesson"
          >
            <Video className="w-3.5 h-3.5" />
            <span>Watch YouTube Video</span>
          </button>

          {/* View Notes PDF Button */}
          <button
            onClick={() => onOpenPdf(resource)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition-colors cursor-pointer"
            title="View chapter notes & PDF"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>View Notes PDF</span>
          </button>
        </div>
      </div>

    </div>
  );
};
