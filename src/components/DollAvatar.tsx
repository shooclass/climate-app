import React from 'react';
import { CharacterGender, EquippedItems, EvaluationResult } from '../types/climate';

interface DollAvatarProps {
  gender: CharacterGender;
  equipped: EquippedItems;
  reaction?: EvaluationResult['characterReaction'];
}

export const DollAvatar: React.FC<DollAvatarProps> = ({
  gender,
  equipped,
  reaction = 'happy'
}) => {
  const isBoy = gender === 'boy';
  const skinColor = '#FBD5B5';
  const skinShadow = '#F3BA8E';
  const hairColor = isBoy ? '#2C1D11' : '#42281D';

  const isFreezing = reaction === 'freezing';
  const isSweating = reaction === 'sweating';
  const isCelebrating = reaction === 'celebrating';

  return (
    <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[220/380] mx-auto select-none flex items-center justify-center">
      {/* Ambient reactions behind character */}
      {isCelebrating && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-56 h-56 rounded-full bg-amber-200/40 blur-2xl animate-pulse" />
          <div className="absolute top-4 left-6 text-2xl animate-bounce">✨</div>
          <div className="absolute top-10 right-6 text-2xl animate-bounce delay-150">🌟</div>
          <div className="absolute bottom-20 left-4 text-2xl animate-bounce delay-300">🎉</div>
          <div className="absolute bottom-24 right-4 text-2xl animate-bounce delay-75">✨</div>
        </div>
      )}

      {isFreezing && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-52 h-52 rounded-full bg-cyan-200/40 blur-2xl" />
          <div className="absolute top-6 left-6 text-xl animate-pulse">❄️</div>
          <div className="absolute top-12 right-8 text-xl animate-pulse delay-100">🥶</div>
          <div className="absolute bottom-16 left-6 text-xl animate-pulse delay-200">❄️</div>
        </div>
      )}

      {isSweating && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-52 h-52 rounded-full bg-orange-300/30 blur-2xl" />
          <div className="absolute top-6 right-6 text-xl animate-bounce">💦</div>
          <div className="absolute top-14 left-8 text-xl animate-bounce delay-150">🥵</div>
          <div className="absolute bottom-20 right-6 text-xl animate-bounce delay-300">☀️</div>
        </div>
      )}

      <svg
        viewBox="0 0 220 380"
        className="w-full h-full drop-shadow-md overflow-visible transition-transform duration-300 hover:scale-[1.01]"
        aria-label={`${isBoy ? '민우' : '서연'} 인형 캐릭터`}
      >
        <defs>
          {/* Gradients & Shadows */}
          <linearGradient id="bodySkin" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isFreezing ? '#CDEBF7' : skinColor} />
            <stop offset="100%" stopColor={isFreezing ? '#A9D6EB' : skinShadow} />
          </linearGradient>

          <linearGradient id="polarFurGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>

          <linearGradient id="ponchoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#DC2626" />
            <stop offset="50%" stopColor="#EA580C" />
            <stop offset="100%" stopColor="#7C2D12" />
          </linearGradient>

          <linearGradient id="desertRobeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FEF3C7" />
            <stop offset="60%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>

          <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.1" />
          </filter>
        </defs>

        {/* 1. BACK HAIR (for Girl) */}
        {!isBoy && (
          <g id="hair-back">
            {/* Left pigtail */}
            <path
              d="M 64 68 C 42 75 32 105 38 132 C 40 140 48 142 50 135 C 55 115 65 95 72 82 Z"
              fill={hairColor}
            />
            {/* Right pigtail */}
            <path
              d="M 156 68 C 178 75 188 105 182 132 C 180 140 172 142 170 135 C 165 115 155 95 148 82 Z"
              fill={hairColor}
            />
            {/* Hair ties */}
            <ellipse cx="60" cy="74" rx="4" ry="4" fill="#F43F5E" />
            <ellipse cx="160" cy="74" rx="4" ry="4" fill="#F43F5E" />
          </g>
        )}

        {/* 2. BASE BODY (Legs, Torso, Arms, Head) */}
        <g id="base-body">
          {/* Shadow at feet */}
          <ellipse cx="110" cy="368" rx="55" ry="8" fill="#000000" fillOpacity="0.15" />

          {/* Left Leg */}
          <path
            d="M 88 200 L 86 335 C 86 345 80 348 76 350 L 98 350 C 102 346 102 335 102 200 Z"
            fill="url(#bodySkin)"
          />
          {/* Right Leg */}
          <path
            d="M 118 200 L 118 335 C 118 346 118 348 122 350 L 144 350 C 140 348 134 345 134 200 Z"
            fill="url(#bodySkin)"
          />

          {/* Torso */}
          <path
            d="M 78 120 C 78 110 92 105 110 105 C 128 105 142 110 142 120 L 140 215 C 140 220 130 224 110 224 C 90 224 80 220 80 215 Z"
            fill="url(#bodySkin)"
          />

          {/* Basic Undergarments (so character is never bare) */}
          <path
            d="M 82 186 C 82 180 94 182 110 182 C 126 182 138 180 138 186 L 138 215 C 138 222 124 222 110 222 C 96 222 82 222 82 215 Z"
            fill="#E0E7FF"
          />
          <path
            d="M 82 124 C 82 116 94 118 110 118 C 126 118 138 116 138 124 L 138 152 C 138 156 126 156 110 156 C 94 156 82 156 82 152 Z"
            fill="#E0E7FF"
          />

          {/* Left Arm */}
          <path
            d="M 78 118 C 66 125 56 160 54 205 C 53 214 62 216 66 208 C 70 175 78 145 86 130 Z"
            fill="url(#bodySkin)"
          />
          {/* Left Hand */}
          <ellipse cx="57" cy="214" rx="7" ry="9" fill="url(#bodySkin)" />

          {/* Right Arm */}
          <path
            d="M 142 118 C 154 125 164 160 166 205 C 167 214 158 216 154 208 C 150 175 142 145 134 130 Z"
            fill="url(#bodySkin)"
          />
          {/* Right Hand */}
          <ellipse cx="163" cy="214" rx="7" ry="9" fill="url(#bodySkin)" />

          {/* Neck */}
          <rect x="101" y="90" width="18" height="22" rx="6" fill="url(#bodySkin)" />

          {/* Head */}
          <ellipse cx="110" cy="68" rx="36" ry="40" fill="url(#bodySkin)" />
          {/* Cheeks */}
          <ellipse cx="88" cy="74" rx="6" ry="3.5" fill="#FB7185" fillOpacity="0.4" />
          <ellipse cx="132" cy="74" rx="6" ry="3.5" fill="#FB7185" fillOpacity="0.4" />

          {/* Eyes & Eyebrows */}
          {isCelebrating ? (
            // Star happy eyes
            <g id="eyes-celebrate">
              <path d="M 88 64 Q 93 58 98 64 Q 93 70 88 64" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
              <path d="M 122 64 Q 127 58 132 64 Q 127 70 122 64" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
            </g>
          ) : isFreezing ? (
            // Freezing squint eyes
            <g id="eyes-freezing">
              <path d="M 88 64 Q 93 60 98 64" stroke="#0369A1" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M 122 64 Q 127 60 132 64" stroke="#0369A1" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </g>
          ) : isSweating ? (
            // Sweating distressed eyes
            <g id="eyes-sweating">
              <path d="M 88 66 Q 93 62 98 66" stroke="#9A3412" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M 122 66 Q 127 62 132 66" stroke="#9A3412" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </g>
          ) : (
            // Cheerful Normal Eyes
            <g id="eyes-normal">
              <ellipse cx="94" cy="65" rx="4" ry="5.5" fill="#1E293B" />
              <circle cx="95.5" cy="63.5" r="1.5" fill="#FFFFFF" />
              <ellipse cx="126" cy="65" rx="4" ry="5.5" fill="#1E293B" />
              <circle cx="127.5" cy="63.5" r="1.5" fill="#FFFFFF" />
              {/* Eyebrows */}
              <path d="M 89 56 Q 94 53 99 56" stroke="#475569" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              <path d="M 121 56 Q 126 53 131 56" stroke="#475569" strokeWidth="1.8" fill="none" strokeLinecap="round" />
            </g>
          )}

          {/* Mouth */}
          {isCelebrating ? (
            <path d="M 102 78 Q 110 88 118 78 Z" fill="#E11D48" />
          ) : isFreezing ? (
            <path d="M 103 80 Q 106 77 110 80 Q 114 77 117 80" stroke="#0284C7" strokeWidth="2" fill="none" strokeLinecap="round" />
          ) : isSweating ? (
            <path d="M 105 82 Q 110 77 115 82" stroke="#9A3412" strokeWidth="2" fill="none" strokeLinecap="round" />
          ) : (
            <path d="M 104 78 Q 110 84 116 78" stroke="#E11D48" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          )}

          {/* Sweat drop if sweating */}
          {isSweating && (
            <path
              d="M 136 50 C 136 46 142 42 142 42 C 142 42 148 46 148 50 C 148 54 143 56 139 56 C 136 56 136 53 136 50 Z"
              fill="#38BDF8"
            />
          )}
        </g>

        {/* 3. BOTTOMS LAYER (Shorts, Pants, Skirt) */}
        {equipped.bottom && (
          <g id="layer-bottom" filter="url(#softShadow)">
            {equipped.bottom.svgRenderKey === 'bottom-tropical-shorts' && (
              // Tropical Shorts (Cool cyan with hibiscus/wave pattern)
              <g>
                <path
                  d="M 76 182 C 76 178 90 176 110 176 C 130 176 144 178 144 182 L 148 245 L 126 248 L 112 215 L 94 248 L 72 245 Z"
                  fill="#06B6D4"
                />
                {/* Yellow drawstring waistband */}
                <path d="M 77 182 Q 110 186 143 182" stroke="#FDE047" strokeWidth="4" fill="none" />
                <path d="M 108 186 L 106 198 M 112 186 L 114 198" stroke="#FDE047" strokeWidth="2" />
                {/* Tropical hibiscus icon print */}
                <circle cx="88" cy="215" r="4" fill="#F43F5E" />
                <circle cx="132" cy="225" r="3.5" fill="#F43F5E" />
              </g>
            )}

            {equipped.bottom.svgRenderKey === 'bottom-arid-loose' && (
              // Loose Linen Pants (Airy beige sandy pants)
              <g>
                <path
                  d="M 75 180 C 75 176 90 175 110 175 C 130 175 145 176 145 180 L 152 322 L 125 324 L 110 230 L 95 324 L 68 322 Z"
                  fill="#FDE68A"
                  stroke="#D97706"
                  strokeWidth="1.2"
                />
                {/* Fabric folds */}
                <path d="M 85 240 Q 80 280 82 315" stroke="#D97706" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                <path d="M 135 240 Q 140 280 138 315" stroke="#D97706" strokeWidth="1" strokeDasharray="3 3" fill="none" />
              </g>
            )}

            {equipped.bottom.svgRenderKey === 'bottom-polar-pants' && (
              // Polar Padded Snow Pants (Heavy thick navy insulated snow pants)
              <g>
                <path
                  d="M 72 178 C 72 174 90 172 110 172 C 130 172 148 174 148 178 L 156 332 L 124 334 L 110 238 L 96 334 L 64 332 Z"
                  fill="#1E293B"
                />
                {/* Quilted thermal lines */}
                <path d="M 72 210 L 148 210 M 68 250 L 152 250 M 66 290 L 154 290" stroke="#334155" strokeWidth="2.5" />
                {/* Reflective safety knee patches */}
                <rect x="74" y="260" width="22" height="18" rx="4" fill="#38BDF8" fillOpacity="0.7" />
                <rect x="124" y="260" width="22" height="18" rx="4" fill="#38BDF8" fillOpacity="0.7" />
              </g>
            )}

            {equipped.bottom.svgRenderKey === 'bottom-alpine-skirt' && (
              // Andes Traditional Tiered Skirt (Pollera - vivid red/purple/amber pleated skirt)
              <g>
                <path
                  d="M 78 180 C 78 175 90 174 110 174 C 130 174 142 175 142 180 L 168 290 C 145 305 75 305 52 290 Z"
                  fill="#BE123C"
                />
                {/* Ruffle tiers */}
                <path d="M 58 240 Q 110 260 162 240" stroke="#F59E0B" strokeWidth="5" fill="none" />
                <path d="M 53 268 Q 110 288 167 268" stroke="#4338CA" strokeWidth="5" fill="none" />
                <path d="M 52 290 Q 110 308 168 290" stroke="#10B981" strokeWidth="4" fill="none" />
              </g>
            )}
          </g>
        )}

        {/* 4. SHOES LAYER (Sandals, Desert Boots, Snow Boots, Trekking Boots) */}
        {equipped.shoes && (
          <g id="layer-shoes" filter="url(#softShadow)">
            {equipped.shoes.svgRenderKey === 'shoes-sandals' && (
              // Beach Sandals (Orange straps)
              <g>
                {/* Left foot sole */}
                <ellipse cx="88" cy="353" rx="15" ry="6" fill="#0284C7" />
                <path d="M 76 352 Q 88 344 100 352" stroke="#F97316" strokeWidth="3" fill="none" />
                {/* Right foot sole */}
                <ellipse cx="132" cy="353" rx="15" ry="6" fill="#0284C7" />
                <path d="M 120 352 Q 132 344 144 352" stroke="#F97316" strokeWidth="3" fill="none" />
              </g>
            )}

            {equipped.shoes.svgRenderKey === 'shoes-desert-boots' && (
              // Desert High Leather Boots (Sand/Camel leather with thick soles)
              <g>
                {/* Left boot */}
                <path
                  d="M 78 305 L 102 305 L 102 348 L 106 354 L 72 354 L 74 340 Z"
                  fill="#B45309"
                />
                <rect x="71" y="352" width="37" height="6" rx="2" fill="#78350F" />
                {/* Right boot */}
                <path
                  d="M 118 305 L 142 305 L 146 340 L 148 354 L 114 354 L 118 348 Z"
                  fill="#B45309"
                />
                <rect x="112" y="352" width="37" height="6" rx="2" fill="#78350F" />
                {/* Boot straps */}
                <path d="M 77 318 L 103 318 M 117 318 L 143 318" stroke="#FDE68A" strokeWidth="2" />
              </g>
            )}

            {equipped.shoes.svgRenderKey === 'shoes-polar-boots' && (
              // Polar Fur-Trimmed Mukluk Boots (Warm white/grey fur with dark base)
              <g>
                {/* Left Mukluk */}
                <rect x="70" y="295" width="34" height="42" rx="6" fill="#475569" />
                <ellipse cx="87" cy="296" rx="18" ry="6" fill="url(#polarFurGrad)" />
                <path d="M 68 340 L 106 340 L 106 356 L 68 356 Z" fill="#0F172A" />
                <path d="M 87 310 L 87 335" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="2 2" />
                {/* Right Mukluk */}
                <rect x="116" y="295" width="34" height="42" rx="6" fill="#475569" />
                <ellipse cx="133" cy="296" rx="18" ry="6" fill="url(#polarFurGrad)" />
                <path d="M 114 340 L 152 340 L 152 356 L 114 356 Z" fill="#0F172A" />
                <path d="M 133 310 L 133 335" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="2 2" />
              </g>
            )}

            {equipped.shoes.svgRenderKey === 'shoes-trekking' && (
              // Alpine Trekking Boots (Sturdy brown hiking boots with red laces)
              <g>
                <path d="M 76 315 L 104 315 L 106 352 L 72 352 Z" fill="#581C87" />
                <rect x="70" y="350" width="38" height="7" rx="3" fill="#1E293B" />
                {/* Red laces */}
                <path d="M 80 322 L 100 328 M 100 322 L 80 328 M 80 334 L 100 340" stroke="#EF4444" strokeWidth="2" />

                <path d="M 116 315 L 144 315 L 148 352 L 114 352 Z" fill="#581C87" />
                <rect x="112" y="350" width="38" height="7" rx="3" fill="#1E293B" />
                {/* Red laces */}
                <path d="M 120 322 L 140 328 M 140 322 L 120 328 M 120 334 L 140 340" stroke="#EF4444" strokeWidth="2" />
              </g>
            )}
          </g>
        )}

        {/* 5. TOPS LAYER (Tropical Shirt, Linen Long-sleeve, Alpine Sweater, Polar Thermal) */}
        {equipped.top && (
          <g id="layer-top" filter="url(#softShadow)">
            {equipped.top.svgRenderKey === 'top-tropical-shirt' && (
              // Hawaiian Aloha Tropical Shirt
              <g>
                {/* Sleeves */}
                <path d="M 78 118 L 56 150 L 68 158 L 86 130 Z" fill="#10B981" />
                <path d="M 142 118 L 164 150 L 152 158 L 134 130 Z" fill="#10B981" />
                {/* Body */}
                <path
                  d="M 78 118 C 88 112 110 114 142 118 L 142 188 C 120 192 100 192 78 188 Z"
                  fill="#10B981"
                />
                {/* Collar */}
                <path d="M 98 114 L 110 134 L 122 114 Z" fill="#ECFDF5" />
                {/* Yellow palm prints */}
                <circle cx="92" cy="145" r="5" fill="#FDE047" fillOpacity="0.8" />
                <circle cx="128" cy="165" r="5" fill="#FDE047" fillOpacity="0.8" />
                <circle cx="106" cy="175" r="4" fill="#FDE047" fillOpacity="0.8" />
              </g>
            )}

            {equipped.top.svgRenderKey === 'top-sleeveless' && (
              // Sleeveless Tank Top
              <g>
                <path
                  d="M 86 116 C 96 112 110 114 134 116 L 136 186 C 120 190 100 190 84 186 Z"
                  fill="#38BDF8"
                />
                {/* Scoop neck */}
                <path d="M 96 115 C 102 130 118 130 124 115" stroke="#BAE6FD" strokeWidth="2" fill="none" />
              </g>
            )}

            {equipped.top.svgRenderKey === 'top-arid-linen' && (
              // Airy Linen Long-sleeve (Sand/Ivory)
              <g>
                {/* Left Long Sleeve */}
                <path d="M 80 118 L 55 198 L 68 202 L 88 132 Z" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="0.8" />
                {/* Right Long Sleeve */}
                <path d="M 140 118 L 165 198 L 152 202 L 132 132 Z" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="0.8" />
                {/* Torso */}
                <path
                  d="M 76 118 C 90 112 110 112 144 118 L 144 192 C 120 196 100 196 76 192 Z"
                  fill="#FEF3C7"
                  stroke="#F59E0B"
                  strokeWidth="0.8"
                />
                {/* Mandarin collar & wooden buttons */}
                <path d="M 103 114 L 110 122 L 117 114" stroke="#B45309" strokeWidth="2" fill="none" />
                <circle cx="110" cy="136" r="2" fill="#B45309" />
                <circle cx="110" cy="152" r="2" fill="#B45309" />
                <circle cx="110" cy="168" r="2" fill="#B45309" />
              </g>
            )}

            {equipped.top.svgRenderKey === 'top-alpine-sweater' && (
              // Andes Geometric Alpaca Knit Sweater
              <g>
                {/* Sleeves */}
                <path d="M 78 118 L 52 195 L 67 200 L 88 130 Z" fill="#9333EA" />
                <path d="M 142 118 L 168 195 L 153 200 L 132 130 Z" fill="#9333EA" />
                {/* Body */}
                <path
                  d="M 76 118 C 90 110 110 110 144 118 L 144 192 C 120 195 100 195 76 192 Z"
                  fill="#9333EA"
                />
                {/* Alpaca geometric band prints */}
                <rect x="76" y="140" width="68" height="18" fill="#F59E0B" />
                <path d="M 78 149 L 84 143 L 90 149 L 96 143 L 102 149 L 108 143 L 114 149 L 120 143 L 126 149 L 132 143 L 138 149 L 144 143" stroke="#FFFFFF" strokeWidth="2" fill="none" />
                <rect x="76" y="170" width="68" height="8" fill="#10B981" />
              </g>
            )}

            {equipped.top.svgRenderKey === 'top-polar-thermal' && (
              // Thick Thermal Polar Turtleneck
              <g>
                <path d="M 78 118 L 54 196 L 68 200 L 88 130 Z" fill="#334155" />
                <path d="M 142 118 L 166 196 L 152 200 L 132 130 Z" fill="#334155" />
                <path
                  d="M 76 118 C 90 110 110 110 144 118 L 144 190 C 120 194 100 194 76 190 Z"
                  fill="#334155"
                />
                {/* Turtleneck collar covering neck */}
                <rect x="98" y="92" width="24" height="22" rx="4" fill="#1E293B" />
              </g>
            )}
          </g>
        )}

        {/* 6. OUTERWEAR LAYER (Inuit Parka, Andes Poncho, Desert Robe, Windbreaker) */}
        {equipped.outer && (
          <g id="layer-outer" filter="url(#softShadow)">
            {equipped.outer.svgRenderKey === 'outer-polar-parka' && (
              // Inuit Heavy Fur Parka (Anorak with fluffy fur trim)
              <g>
                {/* Heavy Sleeves */}
                <path d="M 76 112 L 46 195 L 66 202 L 90 128 Z" fill="#0284C7" />
                <path d="M 144 112 L 174 195 L 154 202 L 130 128 Z" fill="#0284C7" />
                {/* Fur cuff on wrists */}
                <ellipse cx="56" cy="198" rx="12" ry="6" fill="url(#polarFurGrad)" />
                <ellipse cx="164" cy="198" rx="12" ry="6" fill="url(#polarFurGrad)" />
                {/* Heavy Parka Body */}
                <path
                  d="M 72 114 C 90 102 130 102 148 114 L 154 242 C 120 248 100 248 66 242 Z"
                  fill="#0284C7"
                />
                {/* Center zipper & toggles */}
                <path d="M 110 115 L 110 244" stroke="#0F172A" strokeWidth="3" />
                <rect x="106" y="145" width="8" height="4" rx="2" fill="#F8FAFC" />
                <rect x="106" y="175" width="8" height="4" rx="2" fill="#F8FAFC" />
                <rect x="106" y="205" width="8" height="4" rx="2" fill="#F8FAFC" />
                {/* Fur bottom hem */}
                <path
                  d="M 64 240 C 90 252 130 252 156 240 L 154 250 C 130 262 90 262 66 250 Z"
                  fill="url(#polarFurGrad)"
                />
                {/* Giant Hood Fur around shoulders */}
                <path
                  d="M 68 116 C 68 95 152 95 152 116 C 140 128 80 128 68 116 Z"
                  fill="url(#polarFurGrad)"
                />
              </g>
            )}

            {equipped.outer.svgRenderKey === 'outer-alpine-poncho' && (
              // Andes Traditional Poncho (Triangular drape with fringes)
              <g>
                <path
                  d="M 110 105 L 182 205 L 110 260 L 38 205 Z"
                  fill="url(#ponchoGrad)"
                />
                {/* Decorative Peruvian woven stripes */}
                <path d="M 52 195 L 110 240 L 168 195" stroke="#FDE047" strokeWidth="6" fill="none" />
                <path d="M 64 180 L 110 216 L 156 180" stroke="#10B981" strokeWidth="5" fill="none" />
                {/* V-neck collar */}
                <path d="M 98 105 L 110 125 L 122 105 Z" fill="#450A0A" />
                {/* Fringes at hem */}
                <path
                  d="M 40 206 L 110 262 L 180 206"
                  stroke="#78350F"
                  strokeWidth="4"
                  strokeDasharray="4 4"
                  fill="none"
                />
              </g>
            )}

            {equipped.outer.svgRenderKey === 'outer-arid-robe' && (
              // Flowing White Desert Robe (Thobe / Galabeya)
              <g>
                {/* Flowing wide sleeves */}
                <path d="M 76 114 L 46 205 L 70 210 L 88 128 Z" fill="url(#desertRobeGrad)" />
                <path d="M 144 114 L 174 205 L 150 210 L 132 128 Z" fill="url(#desertRobeGrad)" />
                {/* Full body ankle-length robe */}
                <path
                  d="M 72 112 C 90 106 130 106 148 112 L 164 330 C 130 338 90 338 56 330 Z"
                  fill="url(#desertRobeGrad)"
                  stroke="#D97706"
                  strokeWidth="0.8"
                />
                {/* Gold embroidered collar & front placket */}
                <path d="M 110 110 L 110 180" stroke="#B45309" strokeWidth="2.5" />
                <ellipse cx="110" cy="112" rx="14" ry="6" fill="none" stroke="#B45309" strokeWidth="2" />
              </g>
            )}

            {equipped.outer.svgRenderKey === 'outer-windbreaker' && (
              // Lightweight Outdoor Windbreaker Jacket
              <g>
                <path d="M 76 116 L 52 190 L 68 195 L 88 128 Z" fill="#EA580C" />
                <path d="M 144 116 L 168 190 L 152 195 L 132 128 Z" fill="#EA580C" />
                <path
                  d="M 74 116 C 90 108 130 108 146 116 L 148 215 C 120 220 100 220 72 215 Z"
                  fill="#EA580C"
                />
                {/* Zipper & contrasting chest block */}
                <path d="M 74 116 L 146 116 L 146 150 L 74 150 Z" fill="#0284C7" />
                <path d="M 110 114 L 110 216" stroke="#FFFFFF" strokeWidth="2.5" />
              </g>
            )}
          </g>
        )}

        {/* 7. FRONT HAIR (Boy/Girl Front Bangs) */}
        <g id="hair-front">
          {isBoy ? (
            // Boy Short Textured Hair
            <path
              d="M 74 65 C 72 38 88 28 110 28 C 132 28 148 38 146 65 C 146 72 142 70 140 62 C 135 48 130 45 110 45 C 90 45 85 48 80 62 C 78 70 74 72 74 65 Z"
              fill={hairColor}
            />
          ) : (
            // Girl Bangs & Side Locks
            <g>
              <path
                d="M 74 66 C 72 36 88 28 110 28 C 132 28 148 36 146 66 C 142 66 136 50 124 50 C 112 50 108 55 96 50 C 84 50 78 66 74 66 Z"
                fill={hairColor}
              />
              {/* Soft side locks */}
              <path d="M 73 62 C 71 80 73 95 76 98 C 78 95 76 80 76 62 Z" fill={hairColor} />
              <path d="M 147 62 C 149 80 147 95 144 98 C 142 95 144 80 144 62 Z" fill={hairColor} />
            </g>
          )}
        </g>

        {/* 8. NECKWEAR / SCARF (if equipped as accessory) */}
        {equipped.accessory?.svgRenderKey === 'acc-polar-scarf' && (
          <g id="layer-scarf" filter="url(#softShadow)">
            {/* Wrap around neck */}
            <path
              d="M 88 95 C 100 88 120 88 132 95 C 138 105 132 118 110 118 C 88 118 82 105 88 95 Z"
              fill="#DC2626"
            />
            {/* Hanging tails */}
            <path
              d="M 116 112 L 126 195 L 110 198 L 104 115 Z"
              fill="#DC2626"
            />
            {/* White stripes on scarf */}
            <path d="M 106 140 L 124 140 M 108 170 L 125 170" stroke="#FFFFFF" strokeWidth="4" />
          </g>
        )}

        {/* 9. GLOVES / MITTENS (if equipped) */}
        {equipped.accessory?.svgRenderKey === 'acc-polar-mittens' && (
          <g id="layer-mittens" filter="url(#softShadow)">
            {/* Left Fur Mitten */}
            <ellipse cx="57" cy="214" rx="10" ry="12" fill="#E11D48" />
            <path d="M 64 212 C 67 210 68 216 64 218 Z" fill="#E11D48" />
            <rect x="49" y="202" width="16" height="5" rx="2" fill="url(#polarFurGrad)" />
            {/* Right Fur Mitten */}
            <ellipse cx="163" cy="214" rx="10" ry="12" fill="#E11D48" />
            <path d="M 156 212 C 153 210 152 216 156 218 Z" fill="#E11D48" />
            <rect x="155" y="202" width="16" height="5" rx="2" fill="url(#polarFurGrad)" />
          </g>
        )}

        {/* 10. HATS LAYER (Straw Hat, Desert Turban, Polar Fur Hat, Andes Chullo, Bowler Hat) */}
        {equipped.hat && (
          <g id="layer-hat" filter="url(#softShadow)">
            {equipped.hat.svgRenderKey === 'hat-straw' && (
              // Wide-brimmed Tropical Straw Sunhat
              <g>
                {/* Crown */}
                <ellipse cx="110" cy="36" rx="28" ry="18" fill="#FDE047" stroke="#CA8A04" strokeWidth="1" />
                {/* Tropical blue fabric band */}
                <path d="M 83 40 Q 110 46 137 40" stroke="#0284C7" strokeWidth="5" fill="none" />
                {/* Hibiscus flower on hat */}
                <circle cx="132" cy="40" r="4" fill="#F43F5E" />
                {/* Giant Wide Brim */}
                <ellipse cx="110" cy="46" rx="64" ry="16" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1.5" />
              </g>
            )}

            {equipped.hat.svgRenderKey === 'hat-turban' && (
              // Desert Turban / Keffiyeh (Flowing white cloth wrapping head & jaw)
              <g>
                {/* Head wrap */}
                <path
                  d="M 70 52 C 70 20 150 20 150 52 C 155 65 145 74 110 74 C 75 74 65 65 70 52 Z"
                  fill="#FEF3C7"
                  stroke="#D97706"
                  strokeWidth="1"
                />
                {/* Black Agal cord ring holding the cloth */}
                <ellipse cx="110" cy="38" rx="34" ry="8" fill="none" stroke="#1E293B" strokeWidth="4" />
                {/* Flowing cloth hanging down around shoulders */}
                <path
                  d="M 68 50 C 60 70 54 115 58 140 C 66 142 74 125 76 90 Z"
                  fill="#FEF3C7"
                  stroke="#D97706"
                  strokeWidth="1"
                />
                <path
                  d="M 152 50 C 160 70 166 115 162 140 C 154 142 146 125 144 90 Z"
                  fill="#FEF3C7"
                  stroke="#D97706"
                  strokeWidth="1"
                />
              </g>
            )}

            {equipped.hat.svgRenderKey === 'hat-polar-fur' && (
              // Polar Ushanka Fur Hat with Big Ear Flaps
              <g>
                {/* Main dome */}
                <path
                  d="M 72 48 C 72 16 148 16 148 48 C 148 55 145 60 110 60 C 75 60 72 55 72 48 Z"
                  fill="#1E293B"
                />
                {/* Big Fluffy Fur Front Brim */}
                <ellipse cx="110" cy="40" rx="34" ry="12" fill="url(#polarFurGrad)" />
                {/* Left Ear Flap */}
                <path
                  d="M 72 42 C 68 65 66 90 74 95 C 78 92 80 75 80 50 Z"
                  fill="url(#polarFurGrad)"
                />
                {/* Right Ear Flap */}
                <path
                  d="M 148 42 C 152 65 154 90 146 95 C 142 92 140 75 140 50 Z"
                  fill="url(#polarFurGrad)"
                />
              </g>
            )}

            {equipped.hat.svgRenderKey === 'hat-andes-chullo' && (
              // Andes Chullo Wool Hat with Earflaps & Tassels
              <g>
                {/* Pointed beanie top */}
                <path
                  d="M 74 54 C 80 20 110 10 110 10 C 110 10 140 20 146 54 Z"
                  fill="#DC2626"
                />
                {/* Top pom-pom tassel */}
                <circle cx="110" cy="10" r="6" fill="#FDE047" />
                {/* Colorful Andes pattern band */}
                <path d="M 74 42 Q 110 46 146 42" stroke="#F59E0B" strokeWidth="5" fill="none" />
                <path d="M 74 50 Q 110 54 146 50" stroke="#10B981" strokeWidth="4" fill="none" />
                {/* Left earflap */}
                <path d="M 74 50 L 68 85 L 82 85 Z" fill="#DC2626" />
                <path d="M 75 85 L 75 105" stroke="#FDE047" strokeWidth="2.5" />
                {/* Right earflap */}
                <path d="M 146 50 L 152 85 L 138 85 Z" fill="#DC2626" />
                <path d="M 145 85 L 145 105" stroke="#FDE047" strokeWidth="2.5" />
              </g>
            )}

            {equipped.hat.svgRenderKey === 'hat-bowler' && (
              // Andes Bowler Hat (Dark brown / black rounded bowler hat)
              <g>
                {/* Rounded Crown perched atop head */}
                <ellipse cx="110" cy="30" rx="22" ry="16" fill="#3E2723" />
                {/* Satin ribbon */}
                <path d="M 88 34 Q 110 38 132 34" stroke="#F59E0B" strokeWidth="3" fill="none" />
                {/* Curled small brim */}
                <ellipse cx="110" cy="36" rx="32" ry="7" fill="#2E1C14" />
              </g>
            )}
          </g>
        )}

        {/* 11. HANDHELD PROPS & ACCESSORIES (Umbrella, Canteen, Stick) */}
        {equipped.accessory && (
          <g id="layer-prop" filter="url(#softShadow)">
            {equipped.accessory.svgRenderKey === 'acc-tropical-umbrella' && (
              // Colorful Tropical Rain / Sun Umbrella held in right hand
              <g>
                {/* Shaft */}
                <path d="M 166 214 L 195 80" stroke="#78350F" strokeWidth="3.5" strokeLinecap="round" />
                {/* Handle J-curve */}
                <path d="M 166 214 Q 163 226 155 224" stroke="#78350F" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                {/* Umbrella Canopy */}
                <path
                  d="M 150 95 C 160 50 230 50 240 95 C 215 90 175 90 150 95 Z"
                  fill="#06B6D4"
                />
                <path d="M 150 95 Q 172 88 195 90 Q 218 88 240 95" stroke="#FDE047" strokeWidth="3" fill="none" />
                <path d="M 195 54 L 195 44" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
              </g>
            )}

            {equipped.accessory.svgRenderKey === 'acc-desert-goggles-flask' && (
              // Desert Goggles on Eyes & Canteen over shoulder
              <g>
                {/* Protective Tinted Goggles over eyes */}
                <ellipse cx="94" cy="65" rx="10" ry="7" fill="#0F172A" fillOpacity="0.85" stroke="#D97706" strokeWidth="2" />
                <ellipse cx="126" cy="65" rx="10" ry="7" fill="#0F172A" fillOpacity="0.85" stroke="#D97706" strokeWidth="2" />
                <path d="M 104 65 L 116 65" stroke="#D97706" strokeWidth="2" />
                {/* Canteen slung across chest hanging on left hip */}
                <path d="M 90 115 L 48 220" stroke="#78350F" strokeWidth="2.5" />
                <circle cx="48" cy="225" r="12" fill="#0284C7" stroke="#78350F" strokeWidth="2" />
                <rect x="45" y="210" width="6" height="5" fill="#78350F" />
              </g>
            )}

            {equipped.accessory.svgRenderKey === 'acc-alpine-shawl' && (
              // Andes Walking Trekking Pole in right hand
              <g>
                {/* Pole */}
                <path d="M 166 214 L 175 352" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M 163 205 L 169 220" stroke="#EF4444" strokeWidth="6" strokeLinecap="round" />
                <circle cx="175" cy="342" r="5" fill="#0F172A" />
              </g>
            )}
          </g>
        )}
      </svg>
    </div>
  );
};
