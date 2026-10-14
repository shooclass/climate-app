import { ClimateId, EquippedItems, EvaluationResult } from '../types/climate';
import { CLIMATES } from '../data/climateData';

export function evaluateOutfit(climateId: ClimateId, equipped: EquippedItems): EvaluationResult {
  const climate = CLIMATES[climateId];
  let score = 0;
  const itemFeedback: EvaluationResult['itemFeedback'] = [];
  const missingEssentials: string[] = [];
  const positiveHighlights: string[] = [];
  let isFreezing = false;
  let isOverheating = false;

  // 1. Hat Evaluation
  if (equipped.hat) {
    const isSuitable = equipped.hat.suitableClimates.includes(climateId);
    const isUnsuitable = equipped.hat.unsuitableClimates.includes(climateId);
    let pts = 0;

    if (isSuitable) {
      pts = 20;
      positiveHighlights.push(`${equipped.hat.name}: ${equipped.hat.pedagogicalReason[climateId]}`);
    } else if (isUnsuitable) {
      pts = -15;
      if (climateId === 'tropical' || climateId === 'arid') isOverheating = true;
      if (climateId === 'polar') isFreezing = true;
    } else {
      pts = 5; // Neutral
    }

    score += pts;
    itemFeedback.push({
      category: 'hat',
      itemName: equipped.hat.name,
      isSuitable: pts > 0,
      points: pts,
      feedbackText: equipped.hat.pedagogicalReason[climateId]
    });
  } else {
    if (climateId === 'polar') {
      missingEssentials.push('머리와 귀로 빠져나가는 열을 막기 위한 방한 털모자가 필요해요!');
      isFreezing = true;
      score -= 10;
    } else if (climateId === 'arid') {
      missingEssentials.push('사막의 강한 자외선과 모래바람을 막아줄 터번이 필요해요!');
      score -= 10;
    } else if (climateId === 'tropical') {
      missingEssentials.push('강렬한 태양빛을 가려줄 챙 넓은 모자를 쓰면 더 좋아요!');
    }
  }

  // 2. Top & Outer Evaluation
  const top = equipped.top;
  const outer = equipped.outer;

  if (climateId === 'polar') {
    if (outer?.id === 'outer-polar-parka') {
      score += 30;
      positiveHighlights.push('이누이트 털 파카(아노락)로 영하 수십 도의 눈보라를 완벽하게 막아냈어요!');
      itemFeedback.push({
        category: 'outer',
        itemName: outer.name,
        isSuitable: true,
        points: 30,
        feedbackText: outer.pedagogicalReason.polar
      });
    } else if (outer) {
      score += 10;
      itemFeedback.push({
        category: 'outer',
        itemName: outer.name,
        isSuitable: false,
        points: 10,
        feedbackText: '북극의 맹추위를 버티려면 일반 겉옷 대신 두꺼운 방한 털 파카가 필요해요!'
      });
    } else {
      missingEssentials.push('한대 기후에서는 바람과 눈을 막아주는 두꺼운 털 파카(아노락)가 반드시 필요해요!');
      isFreezing = true;
      score -= 25;
    }

    if (top) {
      const isGoodTop = top.id === 'top-polar-thermal' || top.id === 'top-alpine-sweater';
      const pts = isGoodTop ? 15 : (top.warmthLevel <= 1 ? -20 : 5);
      if (top.warmthLevel <= 1) isFreezing = true;
      score += pts;
      itemFeedback.push({
        category: 'top',
        itemName: top.name,
        isSuitable: pts > 0,
        points: pts,
        feedbackText: top.pedagogicalReason.polar
      });
    } else {
      missingEssentials.push('따뜻한 방한 내의나 스웨터를 입어주세요!');
    }
  } else if (climateId === 'tropical') {
    if (outer?.id === 'outer-polar-parka') {
      score -= 30;
      isOverheating = true;
      itemFeedback.push({
        category: 'outer',
        itemName: outer.name,
        isSuitable: false,
        points: -30,
        feedbackText: '열대 정글에서 두꺼운 털 파카를 입으면 열사병으로 쓰러질 수 있어요!'
      });
    } else if (!outer || outer.id === 'outer-windbreaker') {
      score += 20;
      if (outer) {
        positiveHighlights.push('스콜(소나기)을 가볍게 막아주는 윈드브레이커를 준비했어요!');
      } else {
        positiveHighlights.push('덥고 습한 날씨에 맞춰 가볍고 시원하게 겉옷을 입지 않았어요!');
      }
    } else {
      score -= 10;
      itemFeedback.push({
        category: 'outer',
        itemName: outer.name,
        isSuitable: false,
        points: -10,
        feedbackText: outer.pedagogicalReason.tropical
      });
    }

    if (top) {
      const isGoodTop = top.id === 'top-tropical-shirt' || top.id === 'top-sleeveless';
      const pts = isGoodTop ? 25 : (top.warmthLevel >= 3 ? -15 : 10);
      if (top.warmthLevel >= 4) isOverheating = true;
      score += pts;
      itemFeedback.push({
        category: 'top',
        itemName: top.name,
        isSuitable: pts > 0,
        points: pts,
        feedbackText: top.pedagogicalReason.tropical
      });
    } else {
      missingEssentials.push('시원한 반팔이나 민소매 상의를 입혀주세요!');
      score -= 10;
    }
  } else if (climateId === 'arid') {
    const hasRobe = outer?.id === 'outer-arid-robe';
    const hasLinen = top?.id === 'top-arid-linen';

    if (hasRobe) {
      score += 30;
      positiveHighlights.push('사막 전통 헐렁한 긴 로브로 햇빛 반사와 체온 보호를 완벽하게 해냈어요!');
      itemFeedback.push({
        category: 'outer',
        itemName: outer.name,
        isSuitable: true,
        points: 30,
        feedbackText: outer.pedagogicalReason.arid
      });
    } else if (outer?.id === 'outer-polar-parka') {
      score -= 30;
      isOverheating = true;
      itemFeedback.push({
        category: 'outer',
        itemName: outer.name,
        isSuitable: false,
        points: -30,
        feedbackText: '40도가 넘는 사막에서 두꺼운 패딩 파카는 매우 위험해요!'
      });
    } else if (hasLinen) {
      score += 20;
      positiveHighlights.push('자외선과 모래를 막아주는 헐렁한 긴팔 린넨 셔츠를 입었어요!');
    } else {
      score -= 10;
      missingEssentials.push('사막에서는 살을 태우는 직사광선과 모래를 막는 긴 로브나 헐렁한 긴팔이 필수예요!');
    }

    if (top && !hasRobe) {
      const pts = top.suitableClimates.includes('arid') ? 15 : (top.warmthLevel === 1 ? -15 : 5);
      score += pts;
      itemFeedback.push({
        category: 'top',
        itemName: top.name,
        isSuitable: pts > 0,
        points: pts,
        feedbackText: top.pedagogicalReason.arid
      });
    }
  } else if (climateId === 'alpine') {
    const hasPoncho = outer?.id === 'outer-alpine-poncho';
    const hasSweater = top?.id === 'top-alpine-sweater';

    if (hasPoncho) {
      score += 30;
      positiveHighlights.push('안데스 전통 알파카 판초로 큰 일교차와 서늘한 날씨에 완벽하게 대비했어요!');
      itemFeedback.push({
        category: 'outer',
        itemName: outer.name,
        isSuitable: true,
        points: 30,
        feedbackText: outer.pedagogicalReason.alpine
      });
    } else if (outer?.id === 'outer-windbreaker') {
      score += 20;
      positiveHighlights.push('차가운 고산 바람을 막아주는 기능성 바람막이를 착용했어요!');
      itemFeedback.push({
        category: 'outer',
        itemName: outer.name,
        isSuitable: true,
        points: 20,
        feedbackText: outer.pedagogicalReason.alpine
      });
    } else {
      missingEssentials.push('기온 변화에 맞춰 입고 벗기 편한 판초나 겉옷을 준비해보세요!');
    }

    if (top) {
      const isGoodTop = hasSweater || top.id === 'top-arid-linen';
      const pts = isGoodTop ? 20 : (top.warmthLevel <= 1 ? -15 : 10);
      if (top.warmthLevel <= 1) isFreezing = true;
      score += pts;
      itemFeedback.push({
        category: 'top',
        itemName: top.name,
        isSuitable: pts > 0,
        points: pts,
        feedbackText: top.pedagogicalReason.alpine
      });
    } else {
      missingEssentials.push('서늘한 고산 기후에 맞는 따뜻한 스웨터나 이너웨어를 입혀주세요!');
      score -= 10;
    }
  }

  // 3. Bottom Evaluation
  if (equipped.bottom) {
    const bottom = equipped.bottom;
    const isSuitable = bottom.suitableClimates.includes(climateId);
    let pts = 0;

    if (isSuitable) {
      pts = 20;
      positiveHighlights.push(`${bottom.name}: ${bottom.pedagogicalReason[climateId]}`);
    } else if (bottom.unsuitableClimates.includes(climateId)) {
      pts = -20;
      if (climateId === 'polar' && bottom.warmthLevel <= 2) isFreezing = true;
      if ((climateId === 'tropical' || climateId === 'arid') && bottom.warmthLevel >= 4) isOverheating = true;
    } else {
      pts = 10;
    }

    score += pts;
    itemFeedback.push({
      category: 'bottom',
      itemName: bottom.name,
      isSuitable: pts > 0,
      points: pts,
      feedbackText: bottom.pedagogicalReason[climateId]
    });
  } else {
    // If wearing full robe in arid, bottom might be inside robe
    if (climateId === 'arid' && equipped.outer?.id === 'outer-arid-robe') {
      score += 15;
    } else {
      missingEssentials.push('하의를 입혀주세요!');
      score -= 15;
    }
  }

  // 4. Shoes Evaluation
  if (equipped.shoes) {
    const shoes = equipped.shoes;
    const isSuitable = shoes.suitableClimates.includes(climateId);
    let pts = 0;

    if (isSuitable) {
      pts = 20;
      positiveHighlights.push(`${shoes.name}: ${shoes.pedagogicalReason[climateId]}`);
    } else if (shoes.unsuitableClimates.includes(climateId)) {
      pts = -20;
      if (climateId === 'polar') isFreezing = true;
      if (climateId === 'arid' && shoes.id === 'shoes-sandals') isOverheating = true;
    } else {
      pts = 10;
    }

    score += pts;
    itemFeedback.push({
      category: 'shoes',
      itemName: shoes.name,
      isSuitable: pts > 0,
      points: pts,
      feedbackText: shoes.pedagogicalReason[climateId]
    });
  } else {
    missingEssentials.push('안전한 탐험을 위해 신발을 꼭 신겨주세요!');
    score -= 15;
  }

  // 5. Accessory Evaluation (Bonus points)
  if (equipped.accessory) {
    const acc = equipped.accessory;
    const isSuitable = acc.suitableClimates.includes(climateId);
    let pts = 0;

    if (isSuitable) {
      pts = 15;
      positiveHighlights.push(`${acc.name}: ${acc.pedagogicalReason[climateId]}`);
    } else if (acc.unsuitableClimates.includes(climateId)) {
      pts = -10;
    } else {
      pts = 5;
    }

    score += pts;
    itemFeedback.push({
      category: 'accessory',
      itemName: acc.name,
      isSuitable: pts > 0,
      points: pts,
      feedbackText: acc.pedagogicalReason[climateId]
    });
  }

  // Normalize score between 0 and 100
  score = Math.max(0, Math.min(100, Math.round(score)));

  // Character reaction determination
  let characterReaction: EvaluationResult['characterReaction'] = 'happy';
  if (score >= 90) {
    characterReaction = 'celebrating';
  } else if (isFreezing) {
    characterReaction = 'freezing';
  } else if (isOverheating) {
    characterReaction = 'sweating';
  } else if (score < 60) {
    characterReaction = 'perplexed';
  }

  let grade: EvaluationResult['grade'] = 'great';
  let title = '';

  if (score >= 95) {
    grade = 'perfect';
    title = '🌟 백점 만점! 완벽한 기후 박사';
  } else if (score >= 80) {
    grade = 'great';
    title = '👍 훌륭해요! 멋진 기후 탐험가';
  } else if (score >= 60) {
    grade = 'needs_work';
    title = '🤔 조금만 더 신경 써볼까요?';
  } else {
    grade = 'danger';
    title = '🚨 날씨에 맞지 않아 위험해요!';
  }

  let overallAdvice = '';
  if (grade === 'perfect') {
    overallAdvice = `${climate.name}의 기후 특성(기온, 강수량, 지형)을 완벽히 이해하고 옷차림을 준비했어요! 교과서에 나오는 현지 사람들의 생활 지혜를 아주 잘 살렸습니다.`;
  } else if (grade === 'great') {
    overallAdvice = `대부분 알맞게 잘 입혔어요! ${missingEssentials.length > 0 ? missingEssentials[0] : '조금 더 완벽한 소품을 챙겨보세요.'}`;
  } else if (grade === 'needs_work') {
    overallAdvice = `${climate.name}의 특징을 다시 떠올려보세요. ${climate.clothingKeyRules[0]}`;
  } else {
    overallAdvice = `지금 옷차림으로는 ${climate.name}에서 생활하기 어려워요! ${climate.clothingKeyRules.slice(0, 2).join(', ')}을 확인해보세요.`;
  }

  return {
    score,
    grade,
    title,
    characterReaction,
    itemFeedback,
    missingEssentials,
    positiveHighlights,
    overallAdvice,
    socialStudiesTakeaway: climate.textbookSummary
  };
}
