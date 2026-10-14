import React, { useEffect } from 'react';
import { ClimateId, EvaluationResult } from '../types/climate';
import { CLIMATES } from '../data/climateData';
import { CheckCircle2, AlertTriangle, XCircle, Award, ArrowRight, RotateCcw, X, Sparkles, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEffects } from '../utils/soundEffects';

interface EvaluationModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: EvaluationResult;
  currentClimate: ClimateId;
  onNextClimate: () => void;
  onOpenCertificate: () => void;
}

export const EvaluationModal: React.FC<EvaluationModalProps> = ({
  isOpen,
  onClose,
  result,
  currentClimate,
  onNextClimate,
  onOpenCertificate
}) => {
  const climate = CLIMATES[currentClimate];

  useEffect(() => {
    if (isOpen) {
      if (result.score >= 85) {
        soundEffects.playSuccessFanfare();
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch {}
      } else {
        soundEffects.playClimateChange();
      }
    }
  }, [isOpen, result.score]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* MODAL HEADER */}
        <div
          className={`px-6 py-5 text-white flex items-center justify-between ${
            result.score >= 85
              ? 'bg-gradient-to-r from-emerald-600 to-teal-600'
              : result.score >= 60
              ? 'bg-gradient-to-r from-amber-500 to-orange-600'
              : 'bg-gradient-to-r from-rose-600 to-red-700'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl sm:text-4xl" aria-hidden="true">
              {result.score >= 85 ? '🌟' : result.score >= 60 ? '🧭' : '🚨'}
            </span>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-white/80">
                {climate.name} 옷차림 평가 리포트
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                {result.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-black/20 hover:bg-black/30 text-white transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* MODAL BODY (Scrollable) */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Score & Character feedback banner */}
          <div className="flex flex-col sm:flex-row items-center gap-5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            {/* Score Ring */}
            <div className="relative w-28 h-28 flex items-center justify-center shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#E2E8F0"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke={result.score >= 85 ? '#10B981' : result.score >= 60 ? '#F59E0B' : '#EF4444'}
                  strokeWidth="8"
                  strokeDasharray={`${(result.score / 100) * 251.2} 251.2`}
                  strokeLinecap="round"
                  fill="none"
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-extrabold text-slate-900 font-heading">
                  {result.score}
                </span>
                <span className="text-[11px] font-semibold text-slate-500">100점 만점</span>
              </div>
            </div>

            {/* Advice text */}
            <div className="flex-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-white border border-slate-200 text-slate-700 mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>탐험대 본부 평가 결과</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                {result.overallAdvice}
              </p>
            </div>
          </div>

          {/* ITEM-BY-ITEM FEEDBACK BREAKDOWN */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span>착용한 옷별 상세 평가</span>
              <span className="text-xs font-normal text-slate-500">
                (사회 교과서 기준)
              </span>
            </h4>

            <div className="space-y-2.5">
              {result.itemFeedback.length === 0 ? (
                <div className="p-4 rounded-xl border border-dashed border-slate-200 text-center text-xs text-slate-500">
                  아직 옷을 입히지 않았어요! 옷장에서 옷을 선택해 입혀보세요.
                </div>
              ) : (
                result.itemFeedback.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border flex items-start gap-3 transition-colors ${
                      item.isSuitable
                        ? 'bg-emerald-50/50 border-emerald-200 text-emerald-950'
                        : 'bg-rose-50/50 border-rose-200 text-rose-950'
                    }`}
                  >
                    <div className="mt-0.5 shrink-0">
                      {item.isSuitable ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <XCircle className="w-5 h-5 text-rose-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold">
                          {item.itemName}
                        </span>
                        <span
                          className={`text-xs font-bold px-2 py-0.5 rounded ${
                            item.points > 0
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-rose-100 text-rose-800'
                          }`}
                        >
                          {item.points > 0 ? `+${item.points}점` : `${item.points}점`}
                        </span>
                      </div>
                      <p className="text-xs mt-1 text-slate-700 leading-relaxed">
                        {item.feedbackText}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* MISSING ESSENTIALS (if any) */}
          {result.missingEssentials.length > 0 && (
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-2.5">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-amber-800">
                  꼭 챙겨야 할 필수 옷차림
                </h5>
                <ul className="mt-1 list-disc list-inside text-xs space-y-0.5 text-amber-900/90">
                  {result.missingEssentials.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* SOCIAL STUDIES CURRICULUM TAKEAWAY NOTE */}
          <div className="p-4 rounded-2xl bg-indigo-50/80 border border-indigo-100">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <h5 className="text-xs font-bold text-indigo-900 uppercase tracking-wide">
                6학년 사회과 핵심 배움 쏙쏙
              </h5>
            </div>
            <p className="text-xs sm:text-sm text-indigo-950 leading-relaxed">
              {result.socialStudiesTakeaway}
            </p>
          </div>
        </div>

        {/* MODAL FOOTER ACTIONS */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2.5">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>옷 다시 수정하기</span>
          </button>

          <div className="flex items-center gap-2">
            {result.score >= 80 && (
              <button
                onClick={() => {
                  soundEffects.playClick();
                  onOpenCertificate();
                }}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-amber-900 bg-amber-200 hover:bg-amber-300 rounded-xl transition-all shadow-xs"
              >
                <Award className="w-4 h-4 text-amber-700" />
                <span>탐험가 인증서 발급</span>
              </button>
            )}

            <button
              onClick={() => {
                soundEffects.playClimateChange();
                onNextClimate();
              }}
              className="flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-sm"
            >
              <span>다음 기후 도전</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
