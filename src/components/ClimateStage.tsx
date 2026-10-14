import React from 'react';
import { CharacterGender, ClimateId, EquippedItems, EvaluationResult } from '../types/climate';
import { CLIMATES } from '../data/climateData';
import { DollAvatar } from './DollAvatar';
import { RotateCcw, Sparkles, CheckCircle2, User, Volume2, VolumeX, BookOpen } from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';

interface ClimateStageProps {
  currentClimate: ClimateId;
  gender: CharacterGender;
  onGenderChange: (gender: CharacterGender) => void;
  equipped: EquippedItems;
  onReset: () => void;
  onApplyRecommended: () => void;
  onEvaluate: () => void;
  onOpenEncyclopedia: () => void;
  reaction?: EvaluationResult['characterReaction'];
  isMuted: boolean;
  onToggleMute: () => void;
}

export const ClimateStage: React.FC<ClimateStageProps> = ({
  currentClimate,
  gender,
  onGenderChange,
  equipped,
  onReset,
  onApplyRecommended,
  onEvaluate,
  onOpenEncyclopedia,
  reaction = 'happy',
  isMuted,
  onToggleMute
}) => {
  const climate = CLIMATES[currentClimate];

  // Count equipped items
  const equippedCount = Object.values(equipped).filter(Boolean).length;

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-900 shadow-xl flex flex-col min-h-[580px] lg:min-h-[660px]">
      {/* 1. SCENIC DYNAMIC BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sky gradient */}
        {currentClimate === 'tropical' && (
          <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-teal-200 to-emerald-100 opacity-90" />
        )}
        {currentClimate === 'arid' && (
          <div className="absolute inset-0 bg-gradient-to-b from-amber-300 via-orange-200 to-amber-100 opacity-90" />
        )}
        {currentClimate === 'polar' && (
          <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-indigo-300 to-slate-100 opacity-90" />
        )}
        {currentClimate === 'alpine' && (
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-300 via-sky-200 to-slate-100 opacity-90" />
        )}

        {/* Ambient SVG Artwork for each climate */}
        <svg
          viewBox="0 0 500 500"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full opacity-60"
        >
          {currentClimate === 'tropical' && (
            <g id="bg-tropical">
              {/* Blazing Golden Sun */}
              <circle cx="390" cy="90" r="42" fill="#FDE047" opacity="0.9" />
              <circle cx="390" cy="90" r="58" fill="#FEF08A" opacity="0.4" />
              {/* Distant islands & water */}
              <path d="M 0 380 Q 250 360 500 380 L 500 500 L 0 500 Z" fill="#0D9488" />
              <path d="M 0 420 Q 250 400 500 420 L 500 500 L 0 500 Z" fill="#047857" />
              {/* Palm trees silhouettes */}
              <path d="M 40 450 Q 60 280 100 240" stroke="#78350F" strokeWidth="10" strokeLinecap="round" fill="none" />
              <path d="M 100 240 Q 60 210 20 230 M 100 240 Q 110 190 70 170 M 100 240 Q 150 200 160 230 M 100 240 Q 140 260 120 280" stroke="#059669" strokeWidth="8" strokeLinecap="round" fill="none" />
              {/* Right side leaves */}
              <path d="M 460 460 Q 440 310 400 260" stroke="#78350F" strokeWidth="9" strokeLinecap="round" fill="none" />
              <path d="M 400 260 Q 340 240 330 270 M 400 260 Q 420 200 380 190 M 400 260 Q 470 230 480 260" stroke="#059669" strokeWidth="7" strokeLinecap="round" fill="none" />
            </g>
          )}

          {currentClimate === 'arid' && (
            <g id="bg-arid">
              {/* Burning Desert Sun */}
              <circle cx="250" cy="110" r="54" fill="#F59E0B" opacity="0.8" />
              <circle cx="250" cy="110" r="75" fill="#FDE68A" opacity="0.3" />
              {/* Rolling Sand Dunes */}
              <path d="M 0 320 Q 180 270 340 330 Q 440 370 500 340 L 500 500 L 0 500 Z" fill="#D97706" opacity="0.7" />
              <path d="M 0 380 Q 200 410 500 370 L 500 500 L 0 500 Z" fill="#B45309" opacity="0.8" />
              <path d="M 0 430 Q 250 400 500 440 L 500 500 L 0 500 Z" fill="#92400E" />
              {/* Camel caravan silhouette */}
              <path d="M 370 330 Q 375 320 380 324 Q 385 315 390 324 L 398 332 L 398 344 L 394 344 L 394 336 L 386 336 L 386 344 L 382 344 L 382 334 L 372 334 Z" fill="#78350F" opacity="0.6" />
            </g>
          )}

          {currentClimate === 'polar' && (
            <g id="bg-polar">
              {/* Soft Aurora Glow */}
              <path d="M 0 100 Q 200 40 350 110 T 500 80 L 500 200 L 0 200 Z" fill="#38BDF8" opacity="0.25" />
              <path d="M 0 140 Q 250 80 500 130 L 500 240 L 0 240 Z" fill="#34D399" opacity="0.2" />
              {/* Distant Glaciers */}
              <polygon points="0,320 90,240 180,320" fill="#E0F2FE" />
              <polygon points="140,320 240,210 340,320" fill="#BAE6FD" />
              <polygon points="300,320 420,230 500,320" fill="#E0F2FE" />
              {/* Snowy Ice Ground */}
              <path d="M 0 360 Q 250 340 500 360 L 500 500 L 0 500 Z" fill="#F8FAFC" />
              <path d="M 0 420 Q 250 400 500 420 L 500 500 L 0 500 Z" fill="#E2E8F0" />
              {/* Igloo on the side */}
              <path d="M 390 390 C 390 355 450 355 450 390 Z" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="2" />
              <path d="M 405 390 C 405 375 425 375 425 390 Z" fill="#64748B" />
            </g>
          )}

          {currentClimate === 'alpine' && (
            <g id="bg-alpine">
              {/* High Mountain Majestic Peaks */}
              <polygon points="0,340 120,160 250,340" fill="#475569" />
              <polygon points="100,190 120,160 145,190 130,200 120,195 110,200" fill="#FFFFFF" />

              <polygon points="180,340 330,120 480,340" fill="#334155" />
              <polygon points="305,160 330,120 365,160 350,175 330,165 315,175" fill="#FFFFFF" />

              {/* Floating clouds below peaks */}
              <ellipse cx="140" cy="270" rx="70" ry="16" fill="#FFFFFF" opacity="0.6" />
              <ellipse cx="360" cy="240" rx="90" ry="20" fill="#FFFFFF" opacity="0.7" />

              {/* Terraced Andes Green Plateaus */}
              <path d="M 0 380 Q 250 350 500 380 L 500 500 L 0 500 Z" fill="#15803D" />
              <path d="M 0 430 Q 250 410 500 430 L 500 500 L 0 500 Z" fill="#166534" />
            </g>
          )}
        </svg>
      </div>

      {/* 2. STAGE HEADER BAR */}
      <div className="relative z-10 px-4 py-3 sm:px-6 bg-slate-900/60 backdrop-blur-md border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-white">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl" aria-hidden="true">{climate.icon}</span>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-bold text-white font-heading">
                {climate.name} 옷입히기
              </h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 text-white font-medium">
                {climate.englishName}
              </span>
            </div>
            <p className="text-xs text-slate-200">
              {climate.avgTemp}
            </p>
          </div>
        </div>

        {/* Action Controls & Sound Toggle */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            onClick={() => {
              onToggleMute();
              soundEffects.playClick();
            }}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            title={isMuted ? '소리 켜기' : '소리 끄기'}
            aria-label={isMuted ? '소리 켜기' : '소리 끄기'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Climate Encyclopedia Button */}
          <button
            onClick={() => {
              soundEffects.playClick();
              onOpenEncyclopedia();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/15 hover:bg-white/25 text-white transition-colors border border-white/20"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>기후 도감</span>
          </button>

          {/* Gender Selector */}
          <div className="flex items-center p-0.5 bg-black/30 rounded-lg border border-white/10">
            <button
              onClick={() => {
                soundEffects.playClick();
                onGenderChange('boy');
              }}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                gender === 'boy'
                  ? 'bg-blue-500 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>민우 (남)</span>
            </button>
            <button
              onClick={() => {
                soundEffects.playClick();
                onGenderChange('girl');
              }}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                gender === 'girl'
                  ? 'bg-pink-500 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>서연 (여)</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. CENTER AVATAR DISPLAY STAGE */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-4 sm:p-6">
        {/* Climate hint banner */}
        <div className="mb-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm text-slate-800 text-xs font-medium border border-white/40 shadow-sm flex items-center gap-1.5 max-w-md text-center">
          <span className="text-amber-500">💡</span>
          <span>{climate.clothingKeyRules[0]}</span>
        </div>

        {/* Doll Avatar */}
        <div className="relative my-auto">
          <DollAvatar
            gender={gender}
            equipped={equipped}
            reaction={reaction}
          />

          {/* Floating name badge under doll */}
          <div className="mt-2 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-slate-900/70 backdrop-blur-md text-white text-xs font-bold border border-white/20 shadow">
              {gender === 'boy' ? '탐험가 민우' : '탐험가 서연'} · 입은 옷 {equippedCount}개
            </span>
          </div>
        </div>
      </div>

      {/* 4. STAGE BOTTOM BAR (Fast Actions & Confirm Evaluation) */}
      <div className="relative z-10 p-3 sm:p-4 bg-slate-900/75 backdrop-blur-md border-t border-white/10 flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex items-center gap-2">
          {/* Reset button */}
          <button
            onClick={() => {
              soundEffects.playUnequip();
              onReset();
            }}
            disabled={equippedCount === 0}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-xl bg-white/10 hover:bg-white/20 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            title="모든 옷을 벗깁니다"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>옷 벗기기</span>
          </button>

          {/* Auto Recommend Hint Button */}
          <button
            onClick={() => {
              soundEffects.playEquip();
              onApplyRecommended();
            }}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-400/30 transition-all"
            title="교과서 추천 정답 코디를 바로 입혀봅니다"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>추천 코디 보기</span>
          </button>
        </div>

        {/* PRIMARY CTA: 잘 입었는지 확인하기! */}
        <button
          onClick={() => {
            soundEffects.playClick();
            onEvaluate();
          }}
          className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-2.5 text-sm sm:text-base font-bold rounded-xl text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 active:scale-95 transition-all shadow-lg shadow-emerald-900/30"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-100" />
          <span>잘 입었는지 확인하기!</span>
        </button>
      </div>
    </div>
  );
};
