import { ClothingItem } from '../types/climate';

export const CLOTHING_ITEMS: ClothingItem[] = [
  // --- 모자 (HATS) ---
  {
    id: 'hat-straw',
    name: '챙 넓은 밀짚모자',
    category: 'hat',
    suitableClimates: ['tropical'],
    unsuitableClimates: ['polar'],
    icon: '👒',
    description: '가볍고 통풍이 잘되며 강한 햇볕을 넓게 가려주는 밀짚모자',
    warmthLevel: 1,
    sunProtection: true,
    rainProtection: false,
    sandProtection: false,
    breathability: true,
    svgRenderKey: 'hat-straw',
    pedagogicalReason: {
      tropical: '일 년 내내 햇볕이 강한 열대 기후에서는 챙이 넓어 얼굴과 목덜미 그늘을 만들어주고 바람이 통하는 모자가 필수예요!',
      arid: '햇빛은 가려주지만, 사막의 강한 모래바람과 밤의 기온 급강하를 막기엔 조금 아쉬워요.',
      polar: '얼음바람이 부는 영하의 날씨에 밀짚모자를 쓰면 머리와 귀에 심각한 동상을 입을 수 있어요!',
      alpine: '자외선은 일부 가려주지만, 고산 지대의 차가운 산바람을 막아주기엔 보온성이 부족해요.'
    }
  },
  {
    id: 'hat-turban',
    name: '사막 터번 (카피예)',
    category: 'hat',
    suitableClimates: ['arid'],
    unsuitableClimates: ['tropical'],
    icon: '👳',
    description: '머리와 얼굴 전체를 감싸서 모래바람과 강한 직사광선을 완벽히 막아주는 천',
    warmthLevel: 2,
    sunProtection: true,
    rainProtection: false,
    sandProtection: true,
    breathability: true,
    svgRenderKey: 'hat-turban',
    pedagogicalReason: {
      tropical: '습하고 비가 잦은 열대 기후에서는 천으로 머리를 꽁꽁 싸매면 땀이 차서 덥고 답답해요.',
      arid: '사막에서는 눈부신 햇빛과 살을 에는 모래바람으로부터 머리, 귀, 코, 입을 보호하는 터번이 가장 훌륭한 선택이에요!',
      polar: '천 소재 터번은 눈보라와 북극의 혹한을 이겨내기에 털모자보다 보온력이 부족해요.',
      alpine: '자외선은 막아주지만, 고산 지대의 체온을 지키려면 털이 들어간 모자가 더 좋아요.'
    }
  },
  {
    id: 'hat-polar-fur',
    name: '이누이트 방한 털모자',
    category: 'hat',
    suitableClimates: ['polar'],
    unsuitableClimates: ['tropical', 'arid'],
    icon: '❄️',
    description: '동물의 두꺼운 털로 귀와 볼까지 포근하게 감싸 체온 손실을 막는 모자',
    warmthLevel: 5,
    sunProtection: false,
    rainProtection: true,
    sandProtection: false,
    breathability: false,
    svgRenderKey: 'hat-polar-fur',
    pedagogicalReason: {
      tropical: '30도가 넘는 덥고 습한 열대에서 털모자를 쓰면 머리에 땀띠가 나고 탈진할 수 있어요!',
      arid: '사막의 낮 기온은 40℃가 넘어요! 두꺼운 털모자를 쓰면 열사병에 걸려요.',
      polar: '체온의 30% 이상이 머리로 빠져나가기 때문에 귀까지 덮는 두꺼운 털모자는 극지방 생존의 필수품이에요!',
      alpine: '서늘한 고산 기후에서도 추울 때 쓸 수 있지만, 한낮에는 다소 더울 수 있어요.'
    }
  },
  {
    id: 'hat-andes-chullo',
    name: '안데스 알파카 추요(Chullo)',
    category: 'hat',
    suitableClimates: ['alpine'],
    unsuitableClimates: ['tropical'],
    icon: '🧶',
    description: '알파카 털로 짠 안데스 고산 지대의 전통 털모자로 양옆에 귀덮개가 달려있어요',
    warmthLevel: 3,
    sunProtection: true,
    rainProtection: false,
    sandProtection: false,
    breathability: true,
    svgRenderKey: 'hat-andes-chullo',
    pedagogicalReason: {
      tropical: '더운 열대 정글에서는 울 털모자가 너무 덥고 습기 때문에 땀이 차요.',
      arid: '사막의 모래바람을 막기엔 터번이 더 알맞아요.',
      polar: '고산 털모자도 따뜻하지만, 북극의 영하 40도 강풍에는 방풍 털가죽 모자가 더 안전해요.',
      alpine: '늘 봄가을처럼 서늘하고 칼바람이 부는 안데스 고원에서는 귀를 덮어주는 알파카 추요가 안성맞춤이에요!'
    }
  },
  {
    id: 'hat-bowler',
    name: '안데스 전통 볼러햇',
    category: 'hat',
    suitableClimates: ['alpine'],
    unsuitableClimates: ['polar'],
    icon: '🎩',
    description: '볼리비아와 페루 고산 지대의 원주민 여성들이 즐겨 쓰는 단단한 중절모',
    warmthLevel: 2,
    sunProtection: true,
    rainProtection: true,
    sandProtection: false,
    breathability: true,
    svgRenderKey: 'hat-bowler',
    pedagogicalReason: {
      tropical: '통풍 구멍이 없는 모자라 열대 기후에서는 땀이 찰 수 있어요.',
      arid: '얼굴 전체의 모래바람을 가리기엔 부족해요.',
      polar: '귀를 가리지 못해 혹한의 추위에 귀가 얼어붙을 수 있어요.',
      alpine: '해발 3,000m가 넘는 라파스 등 고산 도시에서 강한 자외선을 가리고 전통을 지키는 멋진 모자예요!'
    }
  },

  // --- 상의 (TOPS) ---
  {
    id: 'top-tropical-shirt',
    name: '야자수 하와이안 반팔셔츠',
    category: 'top',
    suitableClimates: ['tropical'],
    unsuitableClimates: ['polar'],
    icon: '👕',
    description: '얇고 부드러우며 땀을 빠르게 날려주는 통풍 좋은 반팔 셔츠',
    warmthLevel: 1,
    sunProtection: false,
    rainProtection: false,
    sandProtection: false,
    breathability: true,
    svgRenderKey: 'top-tropical-shirt',
    pedagogicalReason: {
      tropical: '연중 무더운 열대 기후에서는 피부에 달라붙지 않고 바람이 숭숭 통하는 반팔 셔츠가 최고예요!',
      arid: '사막의 한낮에 반팔을 입으면 강한 자외선에 피부 화상을 입고 땀이 바로 말라 탈수가 와요.',
      polar: '얼음 왕국 한대 기후에서 반팔을 입으면 1분도 안 되어 심한 저체온증에 걸려요!',
      alpine: '서늘한 고산 기후에서는 반팔만 입으면 으슬으슬 감기에 걸리기 쉬워요.'
    }
  },
  {
    id: 'top-sleeveless',
    name: '시원한 쿨 민소매 나시',
    category: 'top',
    suitableClimates: ['tropical'],
    unsuitableClimates: ['polar', 'arid', 'alpine'],
    icon: '🎽',
    description: '열기를 밖으로 시원하게 방출하는 얇은 민소매',
    warmthLevel: 1,
    sunProtection: false,
    rainProtection: false,
    sandProtection: false,
    breathability: true,
    svgRenderKey: 'top-sleeveless',
    pedagogicalReason: {
      tropical: '습도와 기온이 높은 열대에서 야외 활동 시 열을 빠르게 식혀줘요!',
      arid: '자외선이 내리쬐는 사막에서는 살이 타서 화상을 입게 되므로 절대 금물이에요!',
      polar: '눈보라가 치는 극지방에서 민소매는 생명을 위협할 정도로 위험해요!',
      alpine: '찬 바람이 부는 고산 지대에서는 너무 춥고 자외선에 팔이 그을려요.'
    }
  },
  {
    id: 'top-arid-linen',
    name: '통풍 린넨 긴팔 셔츠',
    category: 'top',
    suitableClimates: ['arid'],
    unsuitableClimates: ['polar'],
    icon: '👔',
    description: '자외선과 모래를 막아주면서 바람이 잘 통하는 헐렁한 천연 섬유 긴팔',
    warmthLevel: 2,
    sunProtection: true,
    rainProtection: false,
    sandProtection: true,
    breathability: true,
    svgRenderKey: 'top-arid-linen',
    pedagogicalReason: {
      tropical: '비교적 얇지만 덥고 습한 정글에서는 반팔보다 땀 배출이 조금 더뎌요.',
      arid: '사막에서는 햇볕에 피부가 타지 않게 긴 소매로 가리면서도 공기가 순환되는 린넨이 최고예요!',
      polar: '얼음바람이 불어오는 툰드라에서는 이 옷 하나로 추위를 막을 수 없어요.',
      alpine: '고산 지대의 강한 자외선을 막아주는 이너웨어로 아주 유용해요.'
    }
  },
  {
    id: 'top-alpine-sweater',
    name: '안데스 알파카 패턴 스웨터',
    category: 'top',
    suitableClimates: ['alpine'],
    unsuitableClimates: ['tropical'],
    icon: '🦙',
    description: '고산 지대 가축인 알파카 털로 짠 따뜻하고 포근한 기하학 무늬 니트',
    warmthLevel: 3,
    sunProtection: true,
    rainProtection: false,
    sandProtection: false,
    breathability: true,
    svgRenderKey: 'top-alpine-sweater',
    pedagogicalReason: {
      tropical: '더운 열대에서 두꺼운 울 스웨터를 입으면 더위를 먹고 땀이 비 오듯 쏟아져요!',
      arid: '사막의 낮에는 너무 덥지만, 영하로 떨어지는 사막의 밤에는 입을 수도 있어요.',
      polar: '따뜻하지만 북극의 맹추위에는 이 스웨터 위에 두꺼운 방풍 가죽 파카를 덧입어야 해요.',
      alpine: '봄가을 날씨처럼 쌀쌀하고 일교차가 큰 고산 지대에 딱 알맞은 두께와 보온성을 자랑해요!'
    }
  },
  {
    id: 'top-polar-thermal',
    name: '극지방 방한 기모 터틀넥',
    category: 'top',
    suitableClimates: ['polar'],
    unsuitableClimates: ['tropical', 'arid'],
    icon: '🧥',
    description: '목까지 감싸서 체온을 철저히 가둬두는 두꺼운 기능성 기모 내의',
    warmthLevel: 4,
    sunProtection: false,
    rainProtection: false,
    sandProtection: false,
    breathability: false,
    svgRenderKey: 'top-polar-thermal',
    pedagogicalReason: {
      tropical: '기온 30도에 기모 목폴라를 입으면 열이 갇혀 열사병 위험이 있어요!',
      arid: '타오르는 사막 낮에 입으면 땀이 밖으로 나가지 못해 탈진해요.',
      polar: '파카 안쪽에서 차가운 공기가 파고들지 않도록 든든하게 목과 몸을 지켜주는 필수 이너예요!',
      alpine: '고산 지대의 쌀쌀한 밤이나 높은 산행 때 체온 유지에 큰 도움이 돼요.'
    }
  },

  // --- 겉옷 (OUTERWEAR) ---
  {
    id: 'outer-polar-parka',
    name: '이누이트 방한 털 파카 (아노락)',
    category: 'outer',
    suitableClimates: ['polar'],
    unsuitableClimates: ['tropical', 'arid'],
    icon: '🧥',
    description: '모자에 북극 동물 털트림이 달린 혹한기 전용 두꺼운 방한 파카',
    warmthLevel: 5,
    sunProtection: false,
    rainProtection: true,
    sandProtection: false,
    breathability: false,
    svgRenderKey: 'outer-polar-parka',
    pedagogicalReason: {
      tropical: '열대 우림에서 이 두꺼운 털파카를 입으면 온몸이 땀으로 범벅되고 쓰러져요!',
      arid: '40℃ 사막에서 패딩 파카를 입으면 온열 질환으로 위험에 처해요!',
      polar: '영하 30~50℃의 눈보라를 버티려면 동물의 털과 가죽으로 만든 두꺼운 아노락 파카가 절대적으로 필요해요!',
      alpine: '일교차가 큰 고산 지대 평소에는 너무 무겁고 둔하지만, 만년설 봉우리를 오를 땐 유용해요.'
    }
  },
  {
    id: 'outer-alpine-poncho',
    name: '안데스 전통 알파카 판초(Poncho)',
    category: 'outer',
    suitableClimates: ['alpine'],
    unsuitableClimates: ['tropical'],
    icon: '🧣',
    description: '가운데 머리만 쏙 넣어 걸치는 전통 망토! 더우면 벗고 추우면 덮기 편리해요',
    warmthLevel: 3,
    sunProtection: true,
    rainProtection: true,
    sandProtection: false,
    breathability: true,
    svgRenderKey: 'outer-alpine-poncho',
    pedagogicalReason: {
      tropical: '열대 정글의 눅눅한 습기와 비에 젖으면 무거워지고 너무 더워요.',
      arid: '사막의 모래바람을 막기엔 아래가 트여 있어 모래가 옷 속으로 들어와요.',
      polar: '눈보라가 몰아치는 극지방에서는 바람이 아래로 숭숭 들어와 얼어붙어요.',
      alpine: '하루 동안에 사계절이 다 나타나는 고산 지대에서 가장 쉽게 입고 벗을 수 있는 최고의 지혜가 담긴 옷이에요!'
    }
  },
  {
    id: 'outer-arid-robe',
    name: '사막의 긴 로브 (토브 / 갈라베야)',
    category: 'outer',
    suitableClimates: ['arid'],
    unsuitableClimates: ['tropical', 'polar'],
    icon: '🥻',
    description: '발목까지 덮는 헐렁한 흰색 긴 로브. 햇빛 반사와 체온 순환에 탁월해요',
    warmthLevel: 2,
    sunProtection: true,
    rainProtection: false,
    sandProtection: true,
    breathability: true,
    svgRenderKey: 'outer-arid-robe',
    pedagogicalReason: {
      tropical: '질질 끌리는 긴 로브는 비가 잦고 습한 열대 정글 흙탕물에 젖기 쉬워요.',
      arid: '온몸을 가려 강한 햇빛 반사 + 모래바람 차단 + 옷 내부 공기 대류로 땀을 자연스럽게 식혀주는 사막의 완벽한 전통 의상이에요!',
      polar: '눈밭에서 이 옷을 입으면 바람을 전혀 막지 못해 바로 저체온증에 걸려요.',
      alpine: '바위가 많은 산길을 걸을 때 발에 걸려 넘어질 위험이 있어요.'
    }
  },
  {
    id: 'outer-windbreaker',
    name: '다목적 방풍 바람막이',
    category: 'outer',
    suitableClimates: ['alpine', 'tropical'],
    unsuitableClimates: ['polar'],
    icon: '🥋',
    description: '비와 바람을 가볍게 막아주는 휴대하기 좋은 기능성 재킷',
    warmthLevel: 2,
    sunProtection: true,
    rainProtection: true,
    sandProtection: false,
    breathability: true,
    svgRenderKey: 'outer-windbreaker',
    pedagogicalReason: {
      tropical: '열대 스콜(소나기)이 갑자기 쏟아질 때 비를 피하기 좋아요.',
      arid: '사막의 모래바람을 어느 정도 막을 수 있지만 터번과 긴 로브가 더 좋아요.',
      polar: '혹한의 툰드라에서는 바람막이 하나만으로는 추위를 전혀 막을 수 없어요.',
      alpine: '고산 지대의 쌀쌀한 산바람과 갑작스러운 안개를 막아주어 트레킹할 때 훌륭해요!'
    }
  },

  // --- 하의 (BOTTOMS) ---
  {
    id: 'bottom-tropical-shorts',
    name: '시원한 쿨 반바지',
    category: 'bottom',
    suitableClimates: ['tropical'],
    unsuitableClimates: ['polar', 'arid'],
    icon: '🩳',
    description: '물에 젖어도 금방 마르고 통풍이 최고인 가벼운 반바지',
    warmthLevel: 1,
    sunProtection: false,
    rainProtection: false,
    sandProtection: false,
    breathability: true,
    svgRenderKey: 'bottom-tropical-shorts',
    pedagogicalReason: {
      tropical: '덥고 습한 열대 기후에서는 다리에 땀이 차지 않는 반바지가 가장 쾌적해요!',
      arid: '사막에서 반바지를 입으면 뜨거운 모래가 튀고 자외선에 다리 전체 화상을 입어요!',
      polar: '극지방에서 반바지를 입으면 몇 분 만에 다리 감각이 없어지고 심각한 동상에 걸려요!',
      alpine: '고산 지대는 늘 서늘하므로 반바지를 입으면 다리가 시리고 감기에 걸려요.'
    }
  },
  {
    id: 'bottom-arid-loose',
    name: '통넓은 헐렁한 린넨 바지',
    category: 'bottom',
    suitableClimates: ['arid'],
    unsuitableClimates: ['polar'],
    icon: '👖',
    description: '바람이 숭숭 통하면서도 다리 전체를 모래와 햇빛으로부터 지켜주는 긴바지',
    warmthLevel: 2,
    sunProtection: true,
    rainProtection: false,
    sandProtection: true,
    breathability: true,
    svgRenderKey: 'bottom-arid-loose',
    pedagogicalReason: {
      tropical: '통풍은 되지만 비가 오고 진흙탕이 많은 열대에서는 젖기 쉬워요.',
      arid: '사막의 모래바람과 강한 직사광선으로부터 다리를 완전히 지켜주는 최고의 사막 바지예요!',
      polar: '얇은 린넨 바지는 혹한의 눈보라를 이겨낼 수 없어요.',
      alpine: '자외선은 막아주지만 고산의 쌀쌀한 날씨에는 다소 얇을 수 있어요.'
    }
  },
  {
    id: 'bottom-polar-pants',
    name: '두꺼운 극지방 방한 솜바지',
    category: 'bottom',
    suitableClimates: ['polar'],
    unsuitableClimates: ['tropical', 'arid'],
    icon: '🎿',
    description: '방풍 가죽과 솜 패딩으로 눈밭에 뒹굴어도 끄떡없는 보온 바지',
    warmthLevel: 5,
    sunProtection: false,
    rainProtection: true,
    sandProtection: false,
    breathability: false,
    svgRenderKey: 'bottom-polar-pants',
    pedagogicalReason: {
      tropical: '더운 열대에서 패딩 바지를 입으면 땀띠가 나고 걷기도 힘들어요!',
      arid: '낮 40도 사막에서 이 두꺼운 바지를 입으면 탈수와 열사병이 와요.',
      polar: '얼음 눈밭 위를 걸을 때 다리로 파고드는 살인적인 냉기를 막아주는 필수 바지예요!',
      alpine: '눈 덮인 고산 봉우리를 오를 때 체온을 지켜줄 수 있어요.'
    }
  },
  {
    id: 'bottom-alpine-skirt',
    name: '안데스 전통 주름치마 (폴레라)',
    category: 'bottom',
    suitableClimates: ['alpine'],
    unsuitableClimates: ['tropical', 'polar'],
    icon: '👗',
    description: '여러 겹을 겹쳐 입어 보온성을 높이고 화려한 색감을 자랑하는 안데스 전통 치마',
    warmthLevel: 3,
    sunProtection: true,
    rainProtection: false,
    sandProtection: false,
    breathability: true,
    svgRenderKey: 'bottom-alpine-skirt',
    pedagogicalReason: {
      tropical: '여러 겹 겹친 모직 치마는 열대에서 너무 무겁고 더워요.',
      arid: '사막의 모래바람이 치마 밑으로 들어올 수 있어요.',
      polar: '빙판길 눈보라에서는 치마 대신 발목을 꽁꽁 묶은 방한 바지가 필요해요.',
      alpine: '고산 지대의 차가운 바람을 막기 위해 두꺼운 천을 여러 겹 덧대어 만든 안데스의 멋진 전통 치마예요!'
    }
  },

  // --- 신발 (SHOES) ---
  {
    id: 'shoes-sandals',
    name: '통풍 비치 샌들',
    category: 'shoes',
    suitableClimates: ['tropical'],
    unsuitableClimates: ['polar', 'arid'],
    icon: '🩴',
    description: '물이 튀어도 금방 마르고 발에 땀이 차지 않는 시원한 샌들',
    warmthLevel: 1,
    sunProtection: false,
    rainProtection: true,
    sandProtection: false,
    breathability: true,
    svgRenderKey: 'shoes-sandals',
    pedagogicalReason: {
      tropical: '스콜로 비가 자주 오고 물웅덩이가 많은 열대에서는 물에 젖어도 걱정 없는 샌들이 딱이에요!',
      arid: '뜨겁게 달궈진 사막 모래가 발가락 사이로 들어가 화상을 입고 피부가 벗겨져요!',
      polar: '영하의 눈밭에 샌들을 신으면 순식간에 발가락에 심한 동상을 입어요!',
      alpine: '돌과 자갈이 많은 가파른 산길에서 샌들을 신으면 발을 다치기 쉬워요.'
    }
  },
  {
    id: 'shoes-desert-boots',
    name: '사막용 가죽 부츠',
    category: 'shoes',
    suitableClimates: ['arid'],
    unsuitableClimates: ['tropical'],
    icon: '🥾',
    description: '뜨거운 모래 열기를 차단하고 발목 위로 모래가 들어가지 않게 막아주는 튼튼한 부츠',
    warmthLevel: 3,
    sunProtection: true,
    rainProtection: false,
    sandProtection: true,
    breathability: true,
    svgRenderKey: 'shoes-desert-boots',
    pedagogicalReason: {
      tropical: '비가 잦은 열대에서는 가죽 부츠에 물이 차서 발이 짓무를 수 있어요.',
      arid: '낮에 60℃ 넘게 달궈지는 뜨거운 모래밭을 안전하게 걸으려면 바닥이 두껍고 모래가 안 들어가는 부츠가 필수예요!',
      polar: '사막 부츠는 털 안감이 없어 북극의 맹추위를 막기엔 보온력이 약해요.',
      alpine: '바닥이 튼튼하여 고산 산길을 걸을 때도 꽤 유용해요.'
    }
  },
  {
    id: 'shoes-polar-boots',
    name: '극지방 털 스노우 부츠',
    category: 'shoes',
    suitableClimates: ['polar'],
    unsuitableClimates: ['tropical', 'arid'],
    icon: '👢',
    description: '두꺼운 물개나 순록 털로 안감을 덧대어 빙판에서도 미끄러지지 않는 방한 부츠',
    warmthLevel: 5,
    sunProtection: false,
    rainProtection: true,
    sandProtection: false,
    breathability: false,
    svgRenderKey: 'shoes-polar-boots',
    pedagogicalReason: {
      tropical: '더운 열대에서 털부츠를 신으면 발에 무좀과 땀띠가 생겨요!',
      arid: '사막의 땡볕에서 털부츠는 발을 찜통으로 만들어요.',
      polar: '얼음 위를 걷는 극지방에서는 발끝부터 얼어붙는 것을 막아주는 두꺼운 털 방한 부츠가 생명줄이에요!',
      alpine: '만년설이 덮인 고산 지대 빙하를 걸을 때 발을 따뜻하게 지켜줘요.'
    }
  },
  {
    id: 'shoes-trekking',
    name: '고산 지대 트레킹 등산화',
    category: 'shoes',
    suitableClimates: ['alpine'],
    unsuitableClimates: ['tropical'],
    icon: '🥾',
    description: '가파른 자갈길과 흙길에서도 발목을 단단히 지지해주는 접지력 좋은 등산화',
    warmthLevel: 3,
    sunProtection: false,
    rainProtection: true,
    sandProtection: false,
    breathability: true,
    svgRenderKey: 'shoes-trekking',
    pedagogicalReason: {
      tropical: '비가 쏟아지는 열대 해변이나 습지에서는 다소 답답하고 무거워요.',
      arid: '사막에서도 신을 수 있지만 모래가 신발 틈으로 들어올 수 있어요.',
      polar: '극지방의 영하 수십 도 혹한을 버티기엔 발가락 보온 털이 부족해요.',
      alpine: '해발고도가 높고 험준한 안데스 산길을 안전하게 등반하기에 가장 믿음직한 신발이에요!'
    }
  },

  // --- 소품 및 악세서리 (ACCESSORIES) ---
  {
    id: 'acc-tropical-umbrella',
    name: '스콜 대비 우산 & 시원한 부채',
    category: 'accessory',
    suitableClimates: ['tropical'],
    unsuitableClimates: ['polar'],
    icon: '🌂',
    description: '갑자기 하늘에서 쏟아지는 소나기(스콜)와 무더위를 동시에 대비하는 필수품',
    warmthLevel: 1,
    sunProtection: true,
    rainProtection: true,
    sandProtection: false,
    breathability: true,
    svgRenderKey: 'acc-tropical-umbrella',
    pedagogicalReason: {
      tropical: '열대 기후의 상징인 오후의 급작스러운 스콜(열대성 소나기)을 피하고 더위를 식히기에 제격이에요!',
      arid: '비가 거의 오지 않는 사막에서는 우산 대신 모래바람을 막을 고글과 수통이 더 필요해요.',
      polar: '눈보라 치는 극지방에서 우산은 강풍에 바로 뒤집혀 부러져요!',
      alpine: '갑작스러운 고산 소나기나 강한 햇볕을 가릴 때 유용해요.'
    }
  },
  {
    id: 'acc-desert-goggles-flask',
    name: '사막 고글 & 생명의 수통',
    category: 'accessory',
    suitableClimates: ['arid'],
    unsuitableClimates: ['polar'],
    icon: '🍶',
    description: '모래바람에 눈을 보호하는 방풍 고글과 물이 귀한 사막의 필수 수통',
    warmthLevel: 2,
    sunProtection: true,
    rainProtection: false,
    sandProtection: true,
    breathability: true,
    svgRenderKey: 'acc-desert-goggles-flask',
    pedagogicalReason: {
      tropical: '물이 풍부하고 습한 열대에서는 고글에 습기가 차서 앞이 안 보여요.',
      arid: '물이 귀하고 모래바람이 매섭게 부는 사막에서 눈을 보호하고 탈수를 막는 가장 중요한 소품이에요!',
      polar: '극지방에서는 수통의 물이 꽁꽁 얼어붙어 마실 수 없어요.',
      alpine: '고산 지대의 강한 자외선과 건조한 공기에 대비할 때 선글라스와 물통으로 쓰여요.'
    }
  },
  {
    id: 'acc-polar-scarf',
    name: '두꺼운 울 목도리',
    category: 'accessory',
    suitableClimates: ['polar', 'alpine'],
    unsuitableClimates: ['tropical', 'arid'],
    icon: '🧣',
    description: '목으로 파고드는 칼바람을 차단해 체온을 올려주는 두꺼운 털 목도리',
    warmthLevel: 4,
    sunProtection: false,
    rainProtection: false,
    sandProtection: false,
    breathability: false,
    svgRenderKey: 'acc-polar-scarf',
    pedagogicalReason: {
      tropical: '더운 열대에서 목도리를 두르면 목에 땀띠가 나고 숨이 막혀요!',
      arid: '사막의 땡볕에서 두꺼운 털목도리는 열을 가둬 위험해요.',
      polar: '옷 깃 사이로 살을 에는 북극풍이 들어오지 않도록 막아주는 든든한 방패예요!',
      alpine: '아침저녁으로 기온이 뚝 떨어지는 쌀쌀한 고산 기후에서 체온을 지켜줘요.'
    }
  },
  {
    id: 'acc-polar-mittens',
    name: '극지방 방한 털 벙어리장갑',
    category: 'accessory',
    suitableClimates: ['polar'],
    unsuitableClimates: ['tropical', 'arid'],
    icon: '🧤',
    description: '손가락끼리 모여 있어 체온을 보존하고 동상을 막아주는 두꺼운 벙어리장갑',
    warmthLevel: 5,
    sunProtection: false,
    rainProtection: true,
    sandProtection: false,
    breathability: false,
    svgRenderKey: 'acc-polar-mittens',
    pedagogicalReason: {
      tropical: '기온 30도에 털장갑을 끼면 손에 땀이 흥건해져요!',
      arid: '사막에서는 손에 털장갑 대신 햇빛 가리개가 필요해요.',
      polar: '손가락이 따로 나뉘어 있으면 동상에 취약해요. 손가락을 모아주는 벙어리장갑은 극지방의 지혜예요!',
      alpine: '추운 눈 덮인 봉우리를 넘을 때 손가락을 보호해줘요.'
    }
  },
  {
    id: 'acc-alpine-shawl',
    name: '안데스 알파카 숄 & 등산 지팡이',
    category: 'accessory',
    suitableClimates: ['alpine'],
    unsuitableClimates: ['tropical'],
    icon: '🦯',
    description: '어깨에 걸치는 따뜻한 숄과 가파른 산길을 오를 때 무릎을 지켜주는 튼튼한 지팡이',
    warmthLevel: 3,
    sunProtection: true,
    rainProtection: false,
    sandProtection: false,
    breathability: true,
    svgRenderKey: 'acc-alpine-shawl',
    pedagogicalReason: {
      tropical: '습한 정글에서 어깨 숄은 덥고 땀이 차요.',
      arid: '모래밭에서는 지팡이가 푹푹 빠져서 걷기 힘들어요.',
      polar: '극지방의 거센 블리자드 강풍에는 숄이 날아가 버려요.',
      alpine: '가파른 고산 지형을 오르내릴 때 무게를 분산하고, 쌀쌀한 산바람을 포근하게 감싸줘요!'
    }
  }
];
