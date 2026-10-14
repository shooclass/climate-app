import React, { useState } from 'react';
import { ClimateId } from '../types/climate';
import { CLIMATES } from '../data/climateData';
import { X, Thermometer, CloudRain, MapPin, Sparkles, Shirt, Home, ArrowRight } from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';

interface ClimateEncyclopediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectClimate: (id: ClimateId) => void;
  initialClimate?: ClimateId;
}

export const ClimateEncyclopediaModal: React.FC<ClimateEncyclopediaModalProps> = ({
  isOpen,
  onClose,
  onSelectClimate,
  initialClimate = 'tropical'
}) => {
  const [selectedClimateId, setSelectedClimateId] = useState<ClimateId>(initialClimate);
  const climate = CLIMATES[selectedClimateId];

  if (!isOpen) return null;

  const climateIds: ClimateId[] = ['tropical', 'arid', 'polar', 'alpine'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">📚</span>
            <div>
              <h3 className="text-lg font-bold font-heading text-white">
                초등 6학년 사회과 기후 도감
              </h3>
              <p className="text-xs text-slate-300">
                열대·건조·한대·고산 기후의 자연환경과 사람들의 생활 모습
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* CLIMATE TABS */}
        <div className="p-3 bg-slate-100 border-b border-slate-200 flex gap-2 overflow-x-auto">
          {climateIds.map((id) => {
            const c = CLIMATES[id];
            const isSelected = selectedClimateId === id;
            return (
              <button
                key={id}
                onClick={() => {
                  soundEffects.playClick();
                  setSelectedClimateId(id);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-300'
                    : 'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <span>{c.icon}</span>
                <span>{c.name}</span>
              </button>
            );
          })}
        </div>

        {/* CONTENT (Scrollable) */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Top Banner */}
          <div
            className={`p-5 rounded-2xl text-white ${
              selectedClimateId === 'tropical'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-700'
                : selectedClimateId === 'arid'
                ? 'bg-gradient-to-r from-amber-600 to-orange-700'
                : selectedClimateId === 'polar'
                ? 'bg-gradient-to-r from-sky-600 to-blue-800'
                : 'bg-gradient-to-r from-purple-600 to-indigo-800'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-white/80 font-bold">
                  {climate.englishName}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                  {climate.name}
                </h2>
              </div>
              <span className="text-5xl">{climate.icon}</span>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-white/90 leading-relaxed max-w-xl">
              {climate.textbookSummary}
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-1">
                <Thermometer className="w-4 h-4 text-red-500" />
                <span>기온 특징</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                {climate.avgTemp}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-1">
                <CloudRain className="w-4 h-4 text-blue-500" />
                <span>강수량 특징</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                {climate.rainfall}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-1">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>대표 지역</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                {climate.regions[0]}
              </p>
            </div>
          </div>

          {/* Natural Environment & Housing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80">
              <div className="flex items-center gap-2 mb-2 text-amber-900 font-bold text-xs uppercase tracking-wide">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>자연환경 및 지리 특징</span>
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
                {climate.features.map((feat, idx) => (
                  <li key={idx} className="leading-relaxed">{feat}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-sky-50/60 border border-sky-200/80">
              <div className="flex items-center gap-2 mb-2 text-sky-900 font-bold text-xs uppercase tracking-wide">
                <Home className="w-4 h-4 text-sky-600" />
                <span>사람들의 생활 & 주거 문화</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {selectedClimateId === 'tropical' &&
                  '열기와 습기를 피하고 해충의 침입을 막기 위해 바닥을 땅에서 띄운 고상 가옥을 짓고, 빗물이 잘 흘러내리도록 경사가 급한 지붕을 만듭니다.'}
                {selectedClimateId === 'arid' &&
                  '뜨거운 열기와 모래바람을 막기 위해 벽을 두껍게 하고 창문을 작게 낸 흙벽돌집을 짓거나, 풀을 찾아 이동하는 유목민들은 이동식 천막(게르, 텐트)을 사용합니다.'}
                {selectedClimateId === 'polar' &&
                  '동토층이 녹을 때 집이 기울어지는 것을 막기 위해 단단한 암반층에 기둥을 박는 고상 가옥을 짓거나, 사냥할 때 얼음으로 임시 거처인 이글루를 만들었습니다.'}
                {selectedClimateId === 'alpine' &&
                  '돌과 흙을 이용해 바람을 막을 수 있는 집을 짓고, 산비탈을 깎아 계단식 논과 밭을 만들어 감자나 옥수수를 재배하고 라마와 알파카를 기릅니다.'}
              </p>
            </div>
          </div>

          {/* Clothing Takeaway Rules */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 mb-2.5">
              <Shirt className="w-4 h-4 text-slate-700" />
              <h4 className="text-sm font-bold text-slate-900">
                기후에 맞는 올바른 옷차림 원칙
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {climate.clothingKeyRules.map((rule, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            닫기
          </button>

          <button
            onClick={() => {
              soundEffects.playClimateChange();
              onSelectClimate(selectedClimateId);
              onClose();
            }}
            className="flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-sm"
          >
            <span>{climate.name} 옷입히기 시작</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
