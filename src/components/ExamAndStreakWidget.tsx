import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  Flame, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  Award,
  Zap
} from 'lucide-react';

interface ExamAndStreakWidgetProps {
  onOpenQuiz: () => void;
}

export const ExamAndStreakWidget: React.FC<ExamAndStreakWidgetProps> = ({ onOpenQuiz }) => {
  // Target Exam Date: 15 Feb 2027 (standard board examination month)
  const targetDate = new Date('2027-02-15T09:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Streak state from localStorage
  const [streakDays, setStreakDays] = useState<number>(() => {
    try {
      const stored = localStorage.getItem('eeh_streak_days');
      return stored ? parseInt(stored, 10) : 3;
    } catch {
      return 3;
    }
  });

  const [studiedToday, setStudiedToday] = useState<boolean>(() => {
    try {
      const lastDate = localStorage.getItem('eeh_last_study_date');
      const todayStr = new Date().toDateString();
      return lastDate === todayStr;
    } catch {
      return false;
    }
  });

  // Countdown timer effect
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const handleLogStudySession = () => {
    if (studiedToday) return;

    const newStreak = streakDays + 1;
    const todayStr = new Date().toDateString();
    setStreakDays(newStreak);
    setStudiedToday(true);

    try {
      localStorage.setItem('eeh_streak_days', newStreak.toString());
      localStorage.setItem('eeh_last_study_date', todayStr);
    } catch (e) {
      console.warn('Could not save streak to localStorage', e);
    }

    console.log(`[Streak] Student logged study session for today! New streak: ${newStreak} days.`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
      
      {/* 1. Exam Countdown Card */}
      <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs relative overflow-hidden flex flex-col justify-between">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Board Exams Countdown
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Target: Class 10, 11 &amp; 12 Board Finals
              </p>
            </div>
          </div>
          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
            2027 Series
          </span>
        </div>

        {/* Countdown Digits Grid */}
        <div className="grid grid-cols-4 gap-2 my-2 text-center">
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
            <span className="block text-xl sm:text-2xl font-black text-indigo-600 dark:text-indigo-400 font-mono">
              {timeLeft.days}
            </span>
            <span className="text-[10px] uppercase font-bold text-slate-400">Days</span>
          </div>

          <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
            <span className="block text-xl sm:text-2xl font-black text-slate-800 dark:text-white font-mono">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase font-bold text-slate-400">Hours</span>
          </div>

          <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
            <span className="block text-xl sm:text-2xl font-black text-slate-800 dark:text-white font-mono">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase font-bold text-slate-400">Mins</span>
          </div>

          <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
            <span className="block text-xl sm:text-2xl font-black text-amber-500 font-mono">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase font-bold text-slate-400">Secs</span>
          </div>
        </div>

        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-indigo-500" />
          <span>Every hour of consistent English revision adds to your final percentage.</span>
        </p>
      </div>

      {/* 2. Daily Study Streak Card */}
      <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Flame className="w-5 h-5 animate-pulse text-amber-500" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                Daily Study Streak Tracker
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Maintained by MT Khan Mentorship
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 font-extrabold text-xs">
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            <span>{streakDays} Days</span>
          </div>
        </div>

        {/* Streak action */}
        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between gap-3">
          <div className="text-xs">
            <span className="font-semibold text-slate-800 dark:text-slate-200 block">
              {studiedToday ? 'Great job! Today’s session is logged.' : 'Ready to study today?'}
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              {studiedToday ? 'Streak maintained! Keep revising chapter notes.' : 'Click to log today’s study session.'}
            </span>
          </div>

          <button
            onClick={handleLogStudySession}
            disabled={studiedToday}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              studiedToday
                ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800'
                : 'bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white shadow-xs'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{studiedToday ? 'Logged' : 'Log Today'}</span>
          </button>
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mt-2">
          <span>Target: 30-Day English Habit</span>
          <button
            onClick={onOpenQuiz}
            className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
          >
            Solve 1 Quiz Question →
          </button>
        </div>
      </div>

    </div>
  );
};
