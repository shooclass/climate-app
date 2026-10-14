import React, { useState } from 'react';
import { CharacterGender, ClimateId, EquippedItems, EvaluationResult } from '../types/climate';
import { CLIMATES } from '../data/climateData';
import { DollAvatar } from './DollAvatar';
import { X, Award, Printer, Sparkles } from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  climateId: ClimateId;
  gender: CharacterGender;
  equipped: EquippedItems;
  result: EvaluationResult;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  climateId,
  gender,
  equipped,
  result
}) => {
  const [studentName, setStudentName] = useState('6학년 꿈나무 탐험가');
  const climate = CLIMATES[climateId];

  if (!isOpen) return null;

  const handlePrint = () => {
    soundEffects.playClick();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/75 backdrop-blur-sm animate-fade-in print:p-0 print:bg-white">
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] print:max-h-none print:shadow-none print:border-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER BAR (Hidden when printing) */}
        <div className="px-5 py-3.5 bg-amber-600 text-white flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-200" />
            <h3 className="text-sm font-bold font-heading">
              기후 탐험가 임명장 발급
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full bg-black/20 hover:bg-black/30 text-white transition-colors"
            aria-label="닫기"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* PRINTABLE CERTIFICATE BODY */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-amber-50/40">
          <div className="relative p-6 sm:p-8 rounded-2xl bg-white border-4 border-double border-amber-600 shadow-md flex flex-col items-center text-center">
            {/* Corner Decorative Ornaments */}
            <div className="absolute top-2 left-2 text-amber-600 text-lg">⚜️</div>
            <div className="absolute top-2 right-2 text-amber-600 text-lg">⚜️</div>
            <div className="absolute bottom-2 left-2 text-amber-600 text-lg">⚜️</div>
            <div className="absolute bottom-2 right-2 text-amber-600 text-lg">⚜️</div>

            {/* Emblem */}
            <div className="w-14 h-14 rounded-full bg-amber-100 border-2 border-amber-500 flex items-center justify-center text-2xl shadow-inner mb-2">
              🏆
            </div>

            <span className="text-[11px] font-bold tracking-widest text-amber-800 uppercase">
              초등 6학년 사회과 기후 탐험대
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1 mb-3">
              기후 탐험가 임명장
            </h2>

            {/* Editable student name box */}
            <div className="mb-4 print:mb-2">
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="text-center font-bold text-lg text-slate-900 border-b-2 border-amber-500 pb-0.5 focus:outline-none focus:border-amber-700 bg-transparent"
                title="이름을 입력하세요"
              />
              <span className="block text-[10px] text-slate-400 mt-1 print:hidden">
                (클릭하여 이름이나 학급을 수정할 수 있어요)
              </span>
            </div>

            {/* Doll avatar miniature */}
            <div className="w-32 h-44 mb-3 shrink-0">
              <DollAvatar
                gender={gender}
                equipped={equipped}
                reaction="celebrating"
              />
            </div>

            {/* Certificate Citation */}
            <div className="max-w-md text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2 mb-4">
              <p>
                위 학생은 <strong className="text-amber-800">[{climate.name}]</strong>의 기온, 강수량, 바람 등 자연환경의 특징을 깊이 이해하고, 현지 생활에 가장 안전하고 알맞은 옷차림을 훌륭하게 완성하였기에 본 임명장을 수여합니다.
              </p>
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>획득 점수: {result.score}점 (100점 만점)</span>
              </div>
            </div>

            {/* Date and Seal */}
            <div className="w-full pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <div className="text-left">
                <p>기후: {climate.name} ({climate.englishName})</p>
                <p>수여일: {new Date().toLocaleDateString('ko-KR')}</p>
              </div>
              <div className="flex items-center gap-1.5 font-bold text-amber-900">
                <span>기후탐험 본부장 직인</span>
                <div className="w-8 h-8 rounded-full border-2 border-red-600 flex items-center justify-center text-red-600 text-[10px] font-serif font-black">
                  참잘함
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MODAL FOOTER */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between print:hidden">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            닫기
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-xl transition-all shadow-sm"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>임명장 인쇄 / PDF 저장</span>
          </button>
        </div>
      </div>
    </div>
  );
};
