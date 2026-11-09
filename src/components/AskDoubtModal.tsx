import React, { useState } from 'react';
import { 
  MessageCircle, 
  Send, 
  X, 
  Sparkles, 
  ExternalLink, 
  GraduationCap, 
  HelpCircle,
  PhoneCall,
  Check
} from 'lucide-react';
import { ClassLevel } from '../types';

export const AskDoubtModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [studentClass, setStudentClass] = useState<ClassLevel>('10');
  const [topic, setTopic] = useState('');
  const [doubtText, setDoubtText] = useState('');
  const [copied, setCopied] = useState(false);

  // Pre-configured MT Khan Telegram & WhatsApp details
  const WHATSAPP_NUMBER = '919876543210';
  const TELEGRAM_HANDLE = 'MTKhanEnglish';

  const generateMessage = () => {
    return encodeURIComponent(
      `*Hello MT Khan Sir!* 👋\n\n*Student Name:* ${studentName || 'Student'}\n*Class:* Class ${studentClass}\n*Topic:* ${topic || 'English Curriculum'}\n\n*My Doubt:* \n${doubtText || 'Sir, I have a doubt in chapter analysis. Please guide me.'}\n\n_Sent via English Education Hub portal._`
    );
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = generateMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
    console.log(`[Ask Doubt] Redirecting student to WhatsApp with doubt on topic "${topic}"`);
    window.open(url, '_blank');
    setIsOpen(false);
  };

  const handleTelegramRedirect = () => {
    const msg = generateMessage();
    const url = `https://t.me/${TELEGRAM_HANDLE}?text=${msg}`;
    console.log(`[Ask Doubt] Redirecting student to Telegram`);
    window.open(url, '_blank');
    setIsOpen(false);
  };

  const handleCopyText = () => {
    const formatted = `Hello MT Khan Sir!\nStudent: ${studentName || 'Student'}\nClass: Class ${studentClass}\nTopic: ${topic || 'English Doubt'}\nQuestion: ${doubtText}`;
    navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    console.log('[Ask Doubt] Copied doubt message to clipboard');
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => {
            console.log('[Ask Doubt] Opened MT Khan Doubt Support Dialog');
            setIsOpen(true);
          }}
          className="group relative flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer border-2 border-white/40"
          title="Direct question & doubt support with MT Khan"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="text-xs sm:text-sm font-bold tracking-wide">
            Ask Doubt (MT Khan)
          </span>
        </button>
      </div>

      {/* Doubt Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn">
          <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
            
            {/* Modal Header */}
            <div className="px-6 py-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-serif">
                    Direct Mentor Doubt Desk
                  </h3>
                  <p className="text-[11px] text-emerald-100">
                    Connect directly with MT Khan via Telegram &amp; WhatsApp
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleWhatsAppRedirect} className="p-6 space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="e.g. Arun Sharma"
                    className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Class Level
                  </label>
                  <select
                    value={studentClass}
                    onChange={(e) => setStudentClass(e.target.value as ClassLevel)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500 font-semibold"
                  >
                    <option value="10">Class 10</option>
                    <option value="11">Class 11</option>
                    <option value="12">Class 12</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Chapter or Grammar Topic
                </label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g. Reported Speech, The Last Lesson, Note-Making"
                  className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Describe Your Doubt / Question
                </label>
                <textarea
                  value={doubtText}
                  onChange={(e) => setDoubtText(e.target.value)}
                  placeholder="Type your question or confusing point here..."
                  rows={3}
                  className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleTelegramRedirect}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold shadow-md transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via Telegram</span>
                </button>
              </div>

              <div className="pt-2 text-center border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={handleCopyText}
                  className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center justify-center gap-1 mx-auto"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <span>Or Copy Formatted Doubt to Paste Anywhere</span>
                  )}
                </button>
              </div>

            </form>

          </div>
        </div>
      )}
    </>
  );
};
