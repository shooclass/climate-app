/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CharacterGender, ClimateId, ClothingCategory, ClothingItem, EquippedItems, EvaluationResult } from './types/climate';
import { CLOTHING_ITEMS } from './data/clothingItems';
import { ClimateNavbar } from './components/ClimateNavbar';
import { ClimateStage } from './components/ClimateStage';
import { WardrobePanel } from './components/WardrobePanel';
import { EvaluationModal } from './components/EvaluationModal';
import { ClimateEncyclopediaModal } from './components/ClimateEncyclopediaModal';
import { CertificateModal } from './components/CertificateModal';
import { evaluateOutfit } from './utils/evaluation';
import { soundEffects } from './utils/soundEffects';

const INITIAL_EQUIPPED: EquippedItems = {
  hat: null,
  top: null,
  outer: null,
  bottom: null,
  shoes: null,
  accessory: null
};

export default function App() {
  const [currentClimate, setCurrentClimate] = useState<ClimateId>('tropical');
  const [gender, setGender] = useState<CharacterGender>('boy');
  const [equippedByClimate, setEquippedByClimate] = useState<Record<ClimateId, EquippedItems>>({
    tropical: { ...INITIAL_EQUIPPED },
    arid: { ...INITIAL_EQUIPPED },
    polar: { ...INITIAL_EQUIPPED },
    alpine: { ...INITIAL_EQUIPPED }
  });

  const [isEvaluationOpen, setIsEvaluationOpen] = useState(false);
  const [isEncyclopediaOpen, setIsEncyclopediaOpen] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Current climate equipped clothes
  const equipped = equippedByClimate[currentClimate];

  // Real-time evaluation for avatar facial reaction
  const liveEvaluation: EvaluationResult = evaluateOutfit(currentClimate, equipped);

  // Toggle item in wardrobe
  const handleToggleItem = (item: ClothingItem) => {
    setEquippedByClimate((prev) => {
      const currentSlot = prev[currentClimate][item.category];
      const isAlreadyEquipped = currentSlot?.id === item.id;

      return {
        ...prev,
        [currentClimate]: {
          ...prev[currentClimate],
          [item.category]: isAlreadyEquipped ? null : item
        }
      };
    });
  };

  // Remove specific category
  const handleRemoveSlot = (category: ClothingCategory) => {
    setEquippedByClimate((prev) => ({
      ...prev,
      [currentClimate]: {
        ...prev[currentClimate],
        [category]: null
      }
    }));
  };

  // Reset all equipped in current climate
  const handleReset = () => {
    setEquippedByClimate((prev) => ({
      ...prev,
      [currentClimate]: { ...INITIAL_EQUIPPED }
    }));
  };

  // Apply recommended curriculum outfit for the current climate
  const handleApplyRecommended = () => {
    const recommended: EquippedItems = { ...INITIAL_EQUIPPED };

    if (currentClimate === 'tropical') {
      recommended.hat = CLOTHING_ITEMS.find((i) => i.id === 'hat-straw') || null;
      recommended.top = CLOTHING_ITEMS.find((i) => i.id === 'top-tropical-shirt') || null;
      recommended.bottom = CLOTHING_ITEMS.find((i) => i.id === 'bottom-tropical-shorts') || null;
      recommended.shoes = CLOTHING_ITEMS.find((i) => i.id === 'shoes-sandals') || null;
      recommended.accessory = CLOTHING_ITEMS.find((i) => i.id === 'acc-tropical-umbrella') || null;
    } else if (currentClimate === 'arid') {
      recommended.hat = CLOTHING_ITEMS.find((i) => i.id === 'hat-turban') || null;
      recommended.outer = CLOTHING_ITEMS.find((i) => i.id === 'outer-arid-robe') || null;
      recommended.bottom = CLOTHING_ITEMS.find((i) => i.id === 'bottom-arid-loose') || null;
      recommended.shoes = CLOTHING_ITEMS.find((i) => i.id === 'shoes-desert-boots') || null;
      recommended.accessory = CLOTHING_ITEMS.find((i) => i.id === 'acc-desert-goggles-flask') || null;
    } else if (currentClimate === 'polar') {
      recommended.hat = CLOTHING_ITEMS.find((i) => i.id === 'hat-polar-fur') || null;
      recommended.top = CLOTHING_ITEMS.find((i) => i.id === 'top-polar-thermal') || null;
      recommended.outer = CLOTHING_ITEMS.find((i) => i.id === 'outer-polar-parka') || null;
      recommended.bottom = CLOTHING_ITEMS.find((i) => i.id === 'bottom-polar-pants') || null;
      recommended.shoes = CLOTHING_ITEMS.find((i) => i.id === 'shoes-polar-boots') || null;
      recommended.accessory = CLOTHING_ITEMS.find((i) => i.id === 'acc-polar-scarf') || null;
    } else if (currentClimate === 'alpine') {
      recommended.hat = CLOTHING_ITEMS.find((i) => i.id === 'hat-andes-chullo') || null;
      recommended.top = CLOTHING_ITEMS.find((i) => i.id === 'top-alpine-sweater') || null;
      recommended.outer = CLOTHING_ITEMS.find((i) => i.id === 'outer-alpine-poncho') || null;
      recommended.bottom = CLOTHING_ITEMS.find((i) => i.id === 'bottom-alpine-skirt') || null;
      recommended.shoes = CLOTHING_ITEMS.find((i) => i.id === 'shoes-trekking') || null;
      recommended.accessory = CLOTHING_ITEMS.find((i) => i.id === 'acc-alpine-shawl') || null;
    }

    setEquippedByClimate((prev) => ({
      ...prev,
      [currentClimate]: recommended
    }));
  };

  // Next climate button inside evaluation modal
  const handleNextClimate = () => {
    setIsEvaluationOpen(false);
    const order: ClimateId[] = ['tropical', 'arid', 'polar', 'alpine'];
    const nextIdx = (order.indexOf(currentClimate) + 1) % order.length;
    setCurrentClimate(order[nextIdx]);
  };

  // Sound mute toggle
  const handleToggleMute = () => {
    const next = !isMuted;
    setIsMuted(next);
    soundEffects.setMuted(next);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-800">
      {/* 1. TOP HEADER & NAVIGATION */}
      <ClimateNavbar
        currentClimate={currentClimate}
        onSelectClimate={(id) => setCurrentClimate(id)}
        onOpenEncyclopedia={() => setIsEncyclopediaOpen(true)}
        onEvaluate={() => setIsEvaluationOpen(true)}
      />

      {/* 2. MAIN WORKSPACE CONTAINER */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-6 flex flex-col gap-5">
        {/* Two-Zone Layout (Interactive Stage + Wardrobe Deck) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left Zone: Climate Scenic Stage & Avatar (7 cols on desktop) */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col">
            <ClimateStage
              currentClimate={currentClimate}
              gender={gender}
              onGenderChange={setGender}
              equipped={equipped}
              onReset={handleReset}
              onApplyRecommended={handleApplyRecommended}
              onEvaluate={() => setIsEvaluationOpen(true)}
              onOpenEncyclopedia={() => setIsEncyclopediaOpen(true)}
              reaction={liveEvaluation.characterReaction}
              isMuted={isMuted}
              onToggleMute={handleToggleMute}
            />
          </div>

          {/* Right Zone: Wardrobe Deck & Clothing Selectors (5-7 cols on desktop) */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col">
            <WardrobePanel
              currentClimate={currentClimate}
              equipped={equipped}
              onToggleItem={handleToggleItem}
              onRemoveSlot={handleRemoveSlot}
            />
          </div>
        </div>

        {/* 3. CURRICULUM DISCOVERY CARDS STRIP */}
        <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { id: 'tropical', name: '열대 기후', icon: '🌴', desc: '통풍 잘되는 얇은 옷과 챙 넓은 모자' },
            { id: 'arid', name: '건조 기후', icon: '🏜️', desc: '온몸을 감싸는 헐렁한 긴 옷과 터번' },
            { id: 'polar', name: '한대 기후', icon: '❄️', desc: '두꺼운 털 파카, 방한 털부츠와 벙어리장갑' },
            { id: 'alpine', name: '고산 기후', icon: '🏔️', desc: '입고 벗기 편한 판초, 추요와 등산화' }
          ].map((item) => {
            const isActive = currentClimate === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  soundEffects.playClimateChange();
                  setCurrentClimate(item.id as ClimateId);
                }}
                className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white border-slate-900 shadow-md ring-2 ring-slate-900/10'
                    : 'bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">{item.name}</span>
                </div>
                <p className="text-[11px] text-slate-500 line-clamp-1 leading-snug">
                  {item.desc}
                </p>
              </button>
            );
          })}
        </div>
      </main>

      {/* 4. MODALS */}
      {/* Evaluation Result Modal */}
      <EvaluationModal
        isOpen={isEvaluationOpen}
        onClose={() => setIsEvaluationOpen(false)}
        result={liveEvaluation}
        currentClimate={currentClimate}
        onNextClimate={handleNextClimate}
        onOpenCertificate={() => {
          setIsEvaluationOpen(false);
          setIsCertificateOpen(true);
        }}
      />

      {/* Climate Encyclopedia Modal */}
      <ClimateEncyclopediaModal
        isOpen={isEncyclopediaOpen}
        onClose={() => setIsEncyclopediaOpen(false)}
        onSelectClimate={(id) => setCurrentClimate(id)}
        initialClimate={currentClimate}
      />

      {/* Certificate Modal */}
      <CertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
        climateId={currentClimate}
        gender={gender}
        equipped={equipped}
        result={liveEvaluation}
      />
    </div>
  );
}
