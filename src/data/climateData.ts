import { ClimateId, ClimateInfo } from '../types/climate';

export const CLIMATES: Record<ClimateId, ClimateInfo> = {
  tropical: {
    id: 'tropical',
    name: '열대 기후',
    englishName: 'Tropical Climate',
    icon: '🌴',
    accentColor: '#10B981', // Emerald
    bgGradient: 'from-emerald-400 via-teal-500 to-sky-600',
    avgTemp: '연평균 25℃ 이상 (일년 내내 한여름)',
    rainfall: '연강수량 2,000mm 이상 (스콜성 소나기 잦음)',
    regions: ['동남아시아 (인도네시아, 베트남)', '아마존 분지', '아프리카 콩고 분지'],
    features: [
      '일 년 내내 기온이 높고 덥고 습합니다.',
      '갑자기 쏟아지는 열대성 소나기인 스콜(Squall)이 자주 내립니다.',
      '울창한 열대 우림과 정글, 야자나무가 자랍니다.'
    ],
    clothingKeyRules: [
      '땀을 빠르게 흡수하고 바람이 잘 통하는 얇고 헐렁한 옷',
      '강렬한 햇볕을 가려주는 챙이 넓은 모자',
      '물에 젖어도 금방 마르고 시원한 샌들이나 슬리퍼',
      '갑작스러운 열대 소나기에 대비한 우산이나 부채'
    ],
    textbookSummary: '열대 기후 지역의 사람들은 높은 기온과 습도에 적응하기 위해 통풍이 잘되고 땀이 잘 마르는 얇은 옷을 입습니다. 강한 직사광선으로부터 머리와 피부를 보호하기 위해 챙이 넓은 모자를 쓰고, 바닥이 들려있는 고상 가옥에서 주로 생활합니다.',
    landscapeElements: {
      skyColor: '#38bdf8',
      groundColor: '#059669',
      ambientItems: ['야자나무', '열대 꽃', '스콜 구름', '파도']
    }
  },
  arid: {
    id: 'arid',
    name: '건조 기후',
    englishName: 'Arid / Desert Climate',
    icon: '🏜️',
    accentColor: '#F59E0B', // Amber
    bgGradient: 'from-amber-400 via-orange-500 to-amber-700',
    avgTemp: '낮 40℃ 이상 뙤약볕, 밤에는 10℃ 이하 (극심한 일교차)',
    rainfall: '연강수량 500mm 미만 (비가 거의 오지 않음)',
    regions: ['사하라 사막', '아라비아 반도', '고비 사막', '몽골 초원'],
    features: [
      '비가 매우 적게 오고 물이 귀한 메마른 사막과 초원입니다.',
      '낮에는 태양이 타는 듯이 뜨겁지만 밤에는 기온이 뚝 떨어집니다.',
      '강한 모래바람이 불어 피부와 호흡기를 위협합니다.'
    ],
    clothingKeyRules: [
      '강한 햇빛과 모래바람을 막고 땀 증발을 돕는 온몸을 감싸는 헐렁하고 긴 로브(토브/갈라베야)',
      '머리와 얼굴을 감싸는 터번이나 천 모자(카피예)',
      '뜨거운 모래와 바닥 열기를 차단하는 튼튼한 가죽 신발이나 부츠',
      '모래바람과 눈부심을 막는 고글/선글라스와 귀중한 수통(물병)'
    ],
    textbookSummary: '사막 사람들은 왜 덥고 햇빛이 강한데 온몸을 긴 옷으로 감쌀까요? 강한 직사광선에 피부 화상을 입지 않고, 땀이 너무 급격히 증발해 몸속 수분을 잃는 것을 막아주며, 매서운 모래바람을 차단하기 때문입니다. 헐렁한 긴 옷 내부로 공기가 순환되어 체온을 지켜줍니다.',
    landscapeElements: {
      skyColor: '#fef08a',
      groundColor: '#d97706',
      ambientItems: ['사막 모래언덕', '낙타', '오아시스', '이글거리는 태양']
    }
  },
  polar: {
    id: 'polar',
    name: '한대 기후',
    englishName: 'Polar / Tundra Climate',
    icon: '❄️',
    accentColor: '#0284C7', // Sky / Ice Blue
    bgGradient: 'from-sky-300 via-blue-500 to-indigo-900',
    avgTemp: '가장 따뜻한 달도 10℃ 미만, 겨울엔 영하 30℃~50℃ 이하',
    rainfall: '눈과 강풍, 얼어붙은 얼음과 눈보라(블리자드)',
    regions: ['북극해 주변', '그린란드', '시베리아 툰드라', '남극'],
    features: [
      '일 년 내내 매우 춥고 긴 겨울이 이어지는 얼음과 눈의 세상입니다.',
      '땅속이 얼어붙어 키 큰 나무가 자라지 못하고 짧은 여름에 이끼만 자랍니다.',
      '극심한 추위와 강풍에 노출되면 순식간에 저체온증과 동상에 걸립니다.'
    ],
    clothingKeyRules: [
      '바람과 추위를 완벽하게 막아주는 두꺼운 털/가죽 파카(아노락)와 솜 패딩',
      '귀와 이마를 덮어주는 털모자(이샤프카)',
      '얼어붙은 눈밭에서 미끄러지지 않고 발을 보호하는 방한 털부츠',
      '손가락 동상을 방지하는 두꺼운 털 벙어리장갑과 찬바람을 막는 목도리'
    ],
    textbookSummary: '한대(툰드라) 기후의 이누이트족 등 원주민들은 순록이나 물개, 북극곰 등의 두꺼운 털과 가죽으로 방한복(아노락)을 만들어 입었습니다. 바늘구멍 하나로도 찬 바람이 들어오지 않도록 정교하게 꿰매며, 체온을 지키기 위해 벙어리장갑과 털모자로 온몸을 꽁꽁 싸맵니다.',
    landscapeElements: {
      skyColor: '#bae6fd',
      groundColor: '#f1f5f9',
      ambientItems: ['빙산과 눈밭', '이글루', '북극곰', '오로라']
    }
  },
  alpine: {
    id: 'alpine',
    name: '고산 기후',
    englishName: 'Alpine / Highland Climate',
    icon: '🏔️',
    accentColor: '#8B5CF6', // Purple/Violet
    bgGradient: 'from-violet-400 via-indigo-600 to-slate-800',
    avgTemp: '연중 10~15℃ 내외 (연중 상춘 기후, 늘 봄·가을 같은 날씨)',
    rainfall: '맑고 건조하며 오후에 비구름 형성, 밤에는 기온 급강하',
    regions: ['안데스 산맥 (볼리비아 라파스, 페루 쿠스코)', '티베트 고원', '에티오피아 고원'],
    features: [
      '해발고도가 높아 평지보다 기온이 낮고 연중 봄·가을처럼 서늘합니다.',
      '공기가 희박하여 산소가 적고 태양 자외선이 매우 강합니다.',
      '하루 동안에 사계절이 다 나타난다고 할 정도로 낮과 밤의 기온 차가 큽니다.'
    ],
    clothingKeyRules: [
      '기온 변화에 따라 쉽게 벗고 입을 수 있는 여러 겹의 옷 (판초, 울 스웨터, 카디건)',
      '강한 자외선과 찬 산바람을 막아주는 중절모(볼러햇)나 귀마개 털모자(추요)',
      '가파른 산악 지형을 안전하게 오르내릴 수 있는 튼튼한 등산 트레킹화',
      '알파카나 라마의 털로 짠 따뜻한 모직 숄과 목도리'
    ],
    textbookSummary: '안데스 고산 지대의 원주민들은 야마나 알파카의 털로 짠 전통 망토인 "판초(Poncho)"를 즐겨 입습니다. 판초는 낮에 땀이 나면 벗기 쉽고, 밤에 기온이 뚝 떨어지거나 비바람이 불면 바로 걸쳐 입을 수 있어 하루에도 기온 변화가 큰 고산 지대에 가장 적합한 옷입니다.',
    landscapeElements: {
      skyColor: '#c7d2fe',
      groundColor: '#475569',
      ambientItems: ['안데스 설산', '라마', '마추픽추 유적', '뭉게구름']
    }
  }
};
