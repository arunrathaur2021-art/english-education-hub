import React, { useState } from 'react';
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Award, 
  RotateCcw, 
  ChevronRight, 
  BookOpen, 
  Sparkles,
  Zap,
  Lightbulb
} from 'lucide-react';
import { QuizQuestion } from '../types';

interface GrammarQuizProps {
  questions: QuizQuestion[];
}

export const GrammarQuiz: React.FC<GrammarQuizProps> = ({ questions }) => {
  const [selectedClass, setSelectedClass] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Filter questions
  const filteredQuestions = selectedClass === 'All'
    ? questions
    : questions.filter(q => q.targetClass === 'All' || q.targetClass === selectedClass);

  const currentQ = filteredQuestions[currentIndex] || filteredQuestions[0];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;

    setSelectedOption(index);
    setIsAnswered(true);

    const isCorrect = index === currentQ.correctIndex;
    if (isCorrect) {
      setScore(prev => prev + 1);
      setStreak(prev => prev + 1);
      console.log(`[Quiz] Question ${currentIndex + 1} answered CORRECTLY (+1 point, streak: ${streak + 1})`);
    } else {
      setStreak(0);
      console.log(`[Quiz] Question ${currentIndex + 1} answered INCORRECTLY (User picked: ${index}, Correct: ${currentQ.correctIndex})`);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      console.log(`[Quiz] Moved to question ${currentIndex + 2}`);
    } else {
      setQuizCompleted(true);
      console.log(`[Quiz] Finished quiz set! Final score: ${score + (selectedOption === currentQ.correctIndex ? 1 : 0)} / ${filteredQuestions.length}`);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setStreak(0);
    setQuizCompleted(false);
    console.log('[Quiz] Restarted quiz');
  };

  return (
    <section id="quick-quiz" className="py-10 scroll-mt-24">
      <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-indigo-500/20 relative overflow-hidden">
        
        {/* Subtle decorative background ring */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-indigo-500/20">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold border border-indigo-400/30">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                Quick Knowledge Check
              </span>
              <span className="text-xs text-indigo-200">
                Grammar &amp; Vocabulary Practice
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
              Instant Board Grammar Challenge
            </h3>
          </div>

          {/* Filter by Target Class */}
          <div className="flex items-center gap-1.5 bg-slate-800/80 p-1 rounded-xl border border-slate-700">
            {['All', '10', '11', '12'].map((cls) => (
              <button
                key={cls}
                onClick={() => {
                  setSelectedClass(cls);
                  setCurrentIndex(0);
                  setSelectedOption(null);
                  setIsAnswered(false);
                  setScore(0);
                  setQuizCompleted(false);
                  console.log(`[Quiz] Switched class target to ${cls}`);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedClass === cls
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cls === 'All' ? 'All Classes' : `Class ${cls}`}
              </button>
            ))}
          </div>
        </div>

        {!quizCompleted && currentQ ? (
          <div>
            {/* Stats Row */}
            <div className="flex items-center justify-between text-xs text-indigo-200 mb-4">
              <span className="font-semibold px-2 py-0.5 rounded bg-indigo-800/50 border border-indigo-700/50">
                Topic: {currentQ.category}
              </span>
              <div className="flex items-center gap-4">
                <span>
                  Question <strong className="text-white">{currentIndex + 1}</strong> of {filteredQuestions.length}
                </span>
                <span className="flex items-center gap-1 text-emerald-400 font-bold">
                  Score: {score}
                </span>
                {streak > 1 && (
                  <span className="flex items-center gap-1 text-amber-400 font-bold animate-pulse">
                    🔥 {streak} Streak!
                  </span>
                )}
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-5 border border-indigo-500/20 mb-6">
              <h4 className="text-base sm:text-lg font-semibold text-white leading-relaxed">
                {currentQ.question}
              </h4>
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-1 gap-3 mb-6">
              {currentQ.options.map((option, idx) => {
                let optionStyle = 'bg-slate-800/50 hover:bg-slate-700/60 border-slate-700 text-slate-200';
                let icon = <span className="w-5 h-5 rounded-full border border-slate-500 flex items-center justify-center text-xs font-mono">{String.fromCharCode(65 + idx)}</span>;

                if (isAnswered) {
                  if (idx === currentQ.correctIndex) {
                    optionStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-100 font-semibold ring-2 ring-emerald-500/30';
                    icon = <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />;
                  } else if (idx === selectedOption) {
                    optionStyle = 'bg-rose-950/80 border-rose-500 text-rose-100 ring-2 ring-rose-500/30';
                    icon = <XCircle className="w-5 h-5 text-rose-400 shrink-0" />;
                  } else {
                    optionStyle = 'bg-slate-900/40 border-slate-800 text-slate-500 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(idx)}
                    className={`flex items-center gap-3.5 p-3.5 rounded-xl border text-left text-sm transition-all duration-150 cursor-pointer ${optionStyle}`}
                  >
                    {icon}
                    <span className="flex-1">{option}</span>
                  </button>
                );
              })}
            </div>

            {/* Instant Feedback / Explanation Card */}
            {isAnswered && (
              <div className="p-4 rounded-xl bg-indigo-950/70 border border-indigo-500/30 mb-6 animate-fadeIn">
                <div className="flex items-start gap-2.5">
                  <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-1">
                      {selectedOption === currentQ.correctIndex ? '✓ Correct Answer!' : '✗ Incorrect! Here is the rule:'}
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {currentQ.explanation}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={handleRestart}
                className="flex items-center gap-1.5 text-xs text-indigo-300 hover:text-white transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset Quiz
              </button>

              {isAnswered && (
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-5 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white font-semibold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                >
                  <span>{currentIndex < filteredQuestions.length - 1 ? 'Next Question' : 'View Results'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Quiz Completed Summary Card */
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-indigo-600/30 border border-indigo-400/40 text-amber-400 flex items-center justify-center mx-auto shadow-lg">
              <Award className="w-8 h-8" />
            </div>
            
            <h4 className="text-2xl font-bold text-white font-serif">
              Knowledge Check Finished!
            </h4>

            <p className="text-sm text-indigo-200 max-w-md mx-auto">
              You scored <strong className="text-emerald-400 text-lg font-bold">{score}</strong> out of <strong className="text-white text-lg">{filteredQuestions.length}</strong> questions in this grammar test set.
            </p>

            <div className="pt-2">
              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white font-semibold text-sm shadow-lg transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                Retake Grammar Quiz
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
