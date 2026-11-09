import React, { useState, useEffect } from 'react';
import { 
  X, 
  Video, 
  Clock, 
  ExternalLink, 
  Play, 
  BookOpen, 
  Sparkles,
  Volume2
} from 'lucide-react';
import { ResourceItem, VideoTimestamp } from '../types';

interface VideoModalProps {
  isOpen: boolean;
  resource: ResourceItem | null;
  initialTimestamp?: VideoTimestamp | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  resource,
  initialTimestamp,
  onClose
}) => {
  const [activeSeconds, setActiveSeconds] = useState<number>(0);
  const [selectedTimestamp, setSelectedTimestamp] = useState<VideoTimestamp | null>(null);

  useEffect(() => {
    if (initialTimestamp) {
      setActiveSeconds(initialTimestamp.seconds);
      setSelectedTimestamp(initialTimestamp);
      console.log(`[Video Player] Initialized at timestamp: ${initialTimestamp.time} (${initialTimestamp.seconds}s)`);
    } else {
      setActiveSeconds(0);
      setSelectedTimestamp(null);
    }
  }, [resource, initialTimestamp]);

  // Keyboard escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !resource) return null;

  const embedUrl = `https://www.youtube.com/embed/${resource.youtubeId}?autoplay=1&start=${activeSeconds}&rel=0`;

  const handleTimestampClick = (ts: VideoTimestamp) => {
    setActiveSeconds(ts.seconds);
    setSelectedTimestamp(ts);
    console.log(`[Video Player] Jumped to ${ts.time}: "${ts.label}" (${ts.seconds}s)`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-850 border-b border-slate-800 text-white">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
              <Video className="w-4 h-4" />
            </div>
            <div className="truncate">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-600/30 text-indigo-300 border border-indigo-500/30">
                  Class {resource.classLevel}
                </span>
                <span className="text-xs text-slate-400 truncate">
                  {resource.book} • {resource.category}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white truncate">
                {resource.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={resource.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Open video directly on YouTube"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Close player"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player 16:9 Container */}
        <div className="relative w-full aspect-video bg-black shrink-0">
          <iframe
            key={activeSeconds} // forces reload to specific timestamp
            src={embedUrl}
            title={resource.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Bottom Details & Clickable Timestamps */}
        <div className="p-4 sm:p-5 overflow-y-auto bg-slate-900/90 space-y-4">
          
          {/* Active section info */}
          <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>
                Playing from:{' '}
                <strong className="text-white font-mono">
                  {selectedTimestamp ? `${selectedTimestamp.time} - ${selectedTimestamp.label}` : 'Start of Lesson'}
                </strong>
              </span>
            </div>
            <span className="text-[11px] text-indigo-400 font-medium">
              Curated by MT Khan
            </span>
          </div>

          {/* Interactive Timestamps Navigation */}
          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              Interactive Lesson Timestamps (Click to jump):
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {resource.timestamps.map((ts, idx) => {
                const isActive = activeSeconds === ts.seconds;
                return (
                  <button
                    key={idx}
                    onClick={() => handleTimestampClick(ts)}
                    className={`flex items-center gap-2 p-2.5 rounded-xl text-left text-xs transition-all cursor-pointer ${
                      isActive
                        ? 'bg-indigo-600 text-white font-semibold ring-2 ring-indigo-400/50 shadow-md'
                        : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60'
                    }`}
                  >
                    <Play className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-indigo-400'}`} />
                    <div className="truncate flex-1">
                      <span className="font-mono font-bold mr-1.5 opacity-90">{ts.time}</span>
                      <span className="truncate">{ts.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Lesson Synopsis */}
          <div className="pt-2 border-t border-slate-800 text-xs text-slate-400">
            <p className="line-clamp-2">
              <strong className="text-slate-300">Overview: </strong>
              {resource.description}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
