/**
 * Types for Climate Dress-Up App
 */

export type ClimateId = 'tropical' | 'arid' | 'polar' | 'alpine';

export type ClothingCategory =
  | 'hat'
  | 'top'
  | 'outer'
  | 'bottom'
  | 'shoes'
  | 'accessory';

export type CharacterGender = 'boy' | 'girl';

export interface ClimateInfo {
  id: ClimateId;
  name: string;
  englishName: string;
  icon: string;
  accentColor: string;
  bgGradient: string;
  avgTemp: string;
  rainfall: string;
  regions: string[];
  features: string[];
  clothingKeyRules: string[];
  textbookSummary: string;
  landscapeElements: {
    skyColor: string;
    groundColor: string;
    ambientItems: string[];
  };
}

export interface ClothingItem {
  id: string;
  name: string;
  category: ClothingCategory;
  suitableClimates: ClimateId[];
  unsuitableClimates: ClimateId[];
  icon: string;
  description: string;
  pedagogicalReason: Record<ClimateId, string>;
  warmthLevel: 1 | 2 | 3 | 4 | 5; // 1: very thin, 5: heavy polar winter
  sunProtection: boolean;
  rainProtection: boolean;
  sandProtection: boolean;
  breathability: boolean;
  // Visual rendering metadata for avatar overlay
  svgRenderKey: string;
}

export type EquippedItems = {
  hat: ClothingItem | null;
  top: ClothingItem | null;
  outer: ClothingItem | null;
  bottom: ClothingItem | null;
  shoes: ClothingItem | null;
  accessory: ClothingItem | null;
};

export interface EvaluationResult {
  score: number; // 0 ~ 100
  grade: 'perfect' | 'great' | 'needs_work' | 'danger';
  title: string;
  characterReaction: 'celebrating' | 'happy' | 'sweating' | 'freezing' | 'perplexed';
  itemFeedback: Array<{
    category: ClothingCategory;
    itemName: string;
    isSuitable: boolean;
    points: number;
    feedbackText: string;
  }>;
  missingEssentials: string[];
  positiveHighlights: string[];
  overallAdvice: string;
  socialStudiesTakeaway: string;
}
