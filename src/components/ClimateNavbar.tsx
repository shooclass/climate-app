import React from 'react';
import { ClimateId } from '../types/climate';
import { CLIMATES } from '../data/climateData';
import { BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';

interface ClimateNavbarProps {
  currentClimate: ClimateId;
  onSelectClimate: (id: ClimateId) => void;
  onOpenEncyclopedia: () => void;
  onEvaluate: () => void;
}

export const ClimateNavbar: React.FC<ClimateNavbarProps> = ({
  currentClimate,
  onSelectClimate,
  onOpenEncyclopedia,
  onEvaluate
}) => {
  const climateList: ClimateId[] = ['tropical', 'arid', 'polar', 'alpine'];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Primary Top Bar (Three-zone contract) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-2xl" aria-hidden="true">🌍</span>
          <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 font-heading whitespace-nowrap">
            6학년 기후 탐험대
          </span>
        </div>

        {/* Zone 2: 4 Climate Navigation Buttons */}
        <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-1">
          {climateList.map((id) => {
            const climate = CLIMATES[id];
            const isActive = currentClimate === id;

            return (
              <button
                key={id}
                onClick={() => {
                  soundEffects.playClimateChange();
                  onSelectClimate(id);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm ring-2 ring-slate-900/10'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className="text-base">{climate.icon}</span>
                <span>{climate.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action / Quick Tools */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => {
              soundEffects.playClick();
              onOpenEncyclopedia();
            }}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
          >
            <BookOpen className="w-3.5 h-3.5 text-slate-600" />
            <span>기후 도감</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playClick();
              onEvaluate();
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 rounded-lg transition-all shadow-xs whitespace-nowrap"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>옷차림 점검</span>
          </button>
        </div>
      </div>

      {/* Sub-strip: Quick Curriculum Context Tagline */}
      <div className="bg-slate-50 border-t border-slate-100 px-4 py-1.5 text-center text-xs text-slate-600 flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
        <span className="truncate">
          <strong>초등학교 6학년 사회과</strong> · 열대, 건조, 한대, 고산 기후에 맞는 옷을 골라 인형에게 입혀보세요!
        </span>
      </div>
    </header>
  );
};
