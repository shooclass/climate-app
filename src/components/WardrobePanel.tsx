import React, { useState } from 'react';
import { ClothingCategory, ClothingItem, EquippedItems, ClimateId } from '../types/climate';
import { CLOTHING_ITEMS } from '../data/clothingItems';
import { Check, X, Sun, Wind, Snowflake, Droplets, Sparkles } from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';

interface WardrobePanelProps {
  currentClimate: ClimateId;
  equipped: EquippedItems;
  onToggleItem: (item: ClothingItem) => void;
  onRemoveSlot: (category: ClothingCategory) => void;
}

type TabCategory = 'all' | ClothingCategory;

export const WardrobePanel: React.FC<WardrobePanelProps> = ({
  currentClimate,
  equipped,
  onToggleItem,
  onRemoveSlot
}) => {
  const [activeTab, setActiveTab] = useState<TabCategory>('all');

  const categories: Array<{ id: TabCategory; label: string; icon: string }> = [
    { id: 'all', label: '전체 옷장', icon: '🧳' },
    { id: 'hat', label: '모자', icon: '👒' },
    { id: 'top', label: '상의', icon: '👕' },
    { id: 'outer', label: '겉옷', icon: '🧥' },
    { id: 'bottom', label: '하의', icon: '👖' },
    { id: 'shoes', label: '신발', icon: '👟' },
    { id: 'accessory', label: '소품/방한구', icon: '🧣' }
  ];

  const filteredItems = CLOTHING_ITEMS.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  const isEquipped = (item: ClothingItem) => {
    return equipped[item.category]?.id === item.id;
  };

  return (
    <div className="w-full flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden h-full">
      {/* 1. CURRENTLY EQUIPPED SLOTS BAR */}
      <div className="p-3 sm:p-4 bg-slate-50 border-b border-slate-200">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            현재 착용 중인 옷차림
          </span>
          <span className="text-xs text-slate-500">
            {Object.values(equipped).filter(Boolean).length} / 6개 착용됨
          </span>
        </div>

        {/* Slot chips */}
        <div className="flex flex-wrap gap-1.5">
          {(
            [
              { key: 'hat', label: '모자', defaultIcon: '👒' },
              { key: 'top', label: '상의', defaultIcon: '👕' },
              { key: 'outer', label: '겉옷', defaultIcon: '🧥' },
              { key: 'bottom', label: '하의', defaultIcon: '👖' },
              { key: 'shoes', label: '신발', defaultIcon: '👟' },
              { key: 'accessory', label: '소품', defaultIcon: '🧣' }
            ] as const
          ).map((slot) => {
            const equippedItem = equipped[slot.key];
            return (
              <div
                key={slot.key}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                  equippedItem
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    : 'bg-white text-slate-400 border border-dashed border-slate-200'
                }`}
              >
                <span>{equippedItem ? equippedItem.icon : slot.defaultIcon}</span>
                <span className="max-w-[70px] truncate">
                  {equippedItem ? equippedItem.name : slot.label}
                </span>
                {equippedItem && (
                  <button
                    onClick={() => {
                      soundEffects.playUnequip();
                      onRemoveSlot(slot.key);
                    }}
                    className="p-0.5 rounded hover:bg-emerald-200/60 text-emerald-700 transition-colors"
                    title={`${equippedItem.name} 벗기`}
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. CATEGORY FILTER TABS */}
      <div className="p-2 sm:p-3 bg-white border-b border-slate-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        {categories.map((cat) => {
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                soundEffects.playClick();
                setActiveTab(cat.id);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* 3. WARDROBE ITEMS GRID */}
      <div className="flex-1 p-3 sm:p-4 overflow-y-auto max-h-[520px] sm:max-h-[600px] grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {filteredItems.map((item) => {
          const equippedState = isEquipped(item);
          const isRecommendedForCurrent = item.suitableClimates.includes(currentClimate);

          return (
            <div
              key={item.id}
              onClick={() => {
                if (equippedState) {
                  soundEffects.playUnequip();
                } else {
                  soundEffects.playEquip();
                }
                onToggleItem(item);
              }}
              className={`group relative p-3 rounded-xl border text-left cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                equippedState
                  ? 'bg-emerald-50/80 border-emerald-400 ring-2 ring-emerald-400/40 shadow-sm'
                  : 'bg-white hover:bg-slate-50/90 border-slate-200 hover:border-slate-300 shadow-xs'
              }`}
            >
              {/* Top Row: Icon & Status */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center text-2xl transition-transform group-hover:scale-110 ${
                      equippedState ? 'bg-emerald-100' : 'bg-slate-100'
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold text-slate-900 line-clamp-1">
                        {item.name}
                      </h4>
                      {isRecommendedForCurrent && (
                        <span className="shrink-0 text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-semibold inline-flex items-center gap-0.5">
                          <Sparkles className="w-2.5 h-2.5 text-amber-600" />
                          <span>기후 추천</span>
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-500">
                      {item.category === 'hat' && '모자'}
                      {item.category === 'top' && '상의'}
                      {item.category === 'outer' && '겉옷'}
                      {item.category === 'bottom' && '하의'}
                      {item.category === 'shoes' && '신발'}
                      {item.category === 'accessory' && '소품'}
                    </span>
                  </div>
                </div>

                {/* Equipped Check Badge */}
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                    equippedState
                      ? 'bg-emerald-500 text-white shadow-xs'
                      : 'border border-slate-300 text-transparent group-hover:border-slate-400'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Item Description */}
              <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {item.description}
              </p>

              {/* Feature Tags & Warmth */}
              <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <div className="flex items-center gap-1">
                  <span>보온성:</span>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((lvl) => (
                      <span
                        key={lvl}
                        className={`w-1.5 h-3 rounded-xs ${
                          lvl <= item.warmthLevel ? 'bg-amber-500' : 'bg-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-slate-400">
                  {item.sunProtection && <span title="햇빛 차단"><Sun className="w-3.5 h-3.5 text-amber-500" /></span>}
                  {item.breathability && <span title="통풍 우수"><Wind className="w-3.5 h-3.5 text-sky-500" /></span>}
                  {item.warmthLevel >= 4 && <span title="강력 보온"><Snowflake className="w-3.5 h-3.5 text-blue-500" /></span>}
                  {item.rainProtection && <span title="방수"><Droplets className="w-3.5 h-3.5 text-teal-500" /></span>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
