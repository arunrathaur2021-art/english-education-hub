import React, { useEffect } from 'react';
import { 
  X, 
  FileText, 
  Printer, 
  Download, 
  ExternalLink, 
  BookOpen, 
  GraduationCap, 
  CheckCircle,
  Copy,
  Share2
} from 'lucide-react';
import { ResourceItem } from '../types';

interface PdfReaderModalProps {
  isOpen: boolean;
  resource: ResourceItem | null;
  onClose: () => void;
}

export const PdfReaderModal: React.FC<PdfReaderModalProps> = ({
  isOpen,
  resource,
  onClose
}) => {
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

  const handlePrint = () => {
    console.log(`[PDF Reader] Triggered print for "${resource.title}"`);
    window.print();
  };

  const handleDownloadText = () => {
    console.log(`[PDF Reader] Downloading study notes file for "${resource.title}"`);
    const header = `====================================================\nENGLISH EDUCATION HUB\nDeveloped and maintained by MT Khan\n====================================================\n\nTITLE: ${resource.title}\nCLASS: Class ${resource.classLevel} | TEXTBOOK: ${resource.book || 'NCERT'}\nCATEGORY: ${resource.category}\nDATE SAVED: ${new Date().toLocaleDateString()}\n\n`;
    const fullText = header + resource.pdfContent;
    
    const blob = new Blob([fullText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${resource.title.replace(/[^a-zA-Z0-9]/g, '_')}_Notes.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyNotes = () => {
    navigator.clipboard.writeText(resource.pdfContent);
    alert('Study notes copied to clipboard!');
    console.log(`[PDF Reader] Copied notes to clipboard for "${resource.title}"`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xs animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden my-auto">
        
        {/* Top Action Header (hidden on print) */}
        <div className="no-print px-5 sm:px-6 py-4 bg-slate-100/80 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div className="truncate">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Digital Revision Note • Class {resource.classLevel}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                {resource.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Copy Button */}
            <button
              onClick={handleCopyNotes}
              className="p-2 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-xs flex items-center gap-1 transition-colors cursor-pointer"
              title="Copy notes to clipboard"
            >
              <Copy className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Copy</span>
            </button>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-xs flex items-center gap-1 transition-colors cursor-pointer"
              title="Print study notes"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            {/* Download Text Button */}
            <button
              onClick={handleDownloadText}
              className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 text-xs flex items-center gap-1 transition-colors cursor-pointer"
              title="Download notes file"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Document Area */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
          
          {/* Document Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
              <span>English Education Hub • Official Board Notes</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                Developed and maintained by MT Khan
              </span>
            </div>
            
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-serif mt-2">
              {resource.title}
            </h1>

            <div className="flex items-center gap-2 mt-2 flex-wrap">
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
                Class {resource.classLevel}
              </span>
              {resource.book && (
                <span className="px-2 py-0.5 rounded text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {resource.book}
                </span>
              )}
              <span className="text-xs text-slate-500">
                Category: {resource.category}
              </span>
            </div>
          </div>

          {/* Formatted Notes Body */}
          <div className="whitespace-pre-wrap text-sm sm:text-base font-normal font-sans text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50/50 dark:bg-slate-950/40 p-4 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80">
            {resource.pdfContent}
          </div>

          {/* Official Textbook Link notice */}
          {resource.pdfUrl && (
            <div className="no-print p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <div className="text-xs">
                  <p className="font-bold text-indigo-900 dark:text-indigo-200">
                    Official NCERT / Board Source Reference
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Open original syllabus chapter PDF in a new browser tab.
                  </p>
                </div>
              </div>

              <a
                href={resource.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shrink-0 transition-colors"
              >
                <span>Open Link</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

        </div>

        {/* Footer info (hidden on print) */}
        <div className="no-print px-6 py-3 bg-slate-50 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
          <span>High-Yield Revision Module</span>
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            MT Khan Academic Series
          </span>
        </div>

      </div>
    </div>
  );
};
