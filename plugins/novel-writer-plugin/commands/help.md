---
name: help
description: Novel Writer 플러그인의 모든 명령어(command)와 에이전트(agent) 사용법(usage)을 안내하는 종합 도움말(help) 시스템
category: meta
---

# Novel Writer 플러그인 도움말

장르 소설 작성을 위한 전문 도구 모음입니다. 9개 명령어와 4개 에이전트를 제공합니다.

## 📚 명령어 목록 (Commands)

### 구성 및 기획 (Planning)

#### `/plot-outline` - 플롯 구조 생성
**목적**: 소설의 전체 플롯을 3막 구조로 설계

**사용법**:
```
/plot-outline [장르] [주제]
```

**예시**:
```
/plot-outline 판타지 "마법사 학교에서의 성장"
/plot-outline 로맨스 "운명적 재회"
```

**주요 기능**:
- 3막 구조 (설정, 전개, 결말)
- Hero's Journey, Save the Cat 템플릿
- 플롯 포인트 자동 배치
- 캐릭터 아크 통합

---

#### `/timeline` - 타임라인 관리
**목적**: 이야기의 시간순 사건을 추적하고 일관성 검증

**사용법**:
```
/timeline [타입] [범위]
```

**예시**:
```
/timeline story "Chapter 1-5"
/timeline character "주인공 과거"
/timeline world "대전쟁 역사"
```

**주요 기능**:
- 스토리/캐릭터/세계 타임라인
- 플래시백 관리
- 병렬 스토리라인 추적
- 시간 일관성 검증

---

#### `/word-count` - 단어 수 관리
**목적**: 글자 수 추적 및 목표 진행 상황 관리

**사용법**:
```
/word-count [대상] [목표]
```

**예시**:
```
/word-count chapter-01.md
/word-count total --goal 100000
/word-count progress
```

**주요 기능**:
- 장르별 분량 가이드
- 일일 목표 설정
- 진행 상황 시각화
- 페이싱 분석

---

### 세계관 구축 (Worldbuilding)

#### `/worldbuilding` - 세계관 설정
**목적**: 소설의 세계관을 체계적으로 구축

**사용법**:
```
/worldbuilding [영역] [장르]
```

**예시**:
```
/worldbuilding magic-system 판타지
/worldbuilding technology SF
/worldbuilding society 현대
```

**주요 기능**:
- 지리/역사/문화/정치 설정
- 마법 시스템 (Hard/Soft Magic)
- 과학 기술 체계
- 종교와 신화

---

#### `/name-generator` - 이름 생성기
**목적**: 캐릭터와 장소의 의미있는 이름 생성

**사용법**:
```
/name-generator [타입] [문화권/장르]
```

**예시**:
```
/name-generator character 판타지-엘프
/name-generator place 판타지-도시
/name-generator character 현대-한국
```

**주요 기능**:
- 장르별 이름 스타일
- 문화권별 작명법
- 의미와 상징 제공
- 발음 가능성 검증

---

### 작성 (Writing)

#### `/scene-write` - 장면 작성
**목적**: 효과적인 장면을 작성하는 가이드

**사용법**:
```
/scene-write [장면 타입] [POV]
```

**예시**:
```
/scene-write action 3인칭-관찰자
/scene-write dialogue 1인칭
/scene-write description 3인칭-전지적
```

**주요 기능**:
- 장면 구조 (MRU)
- POV 선택 가이드
- 감각적 묘사 기법
- 장면 전환 관리

---

#### `/dialogue-enhance` - 대화 개선
**목적**: 자연스럽고 생동감 있는 대화 작성

**사용법**:
```
/dialogue-enhance [대화 텍스트]
```

**예시**:
```
/dialogue-enhance "안녕하세요. 만나서 반갑습니다. 저는 김민준입니다."
```

**주요 기능**:
- 자연스러운 대화 개선
- 캐릭터 목소리 차별화
- 서브텍스트 활용
- 비언어적 소통 추가

---

#### `/character-profile` - 캐릭터 프로필
**목적**: 입체적이고 일관된 캐릭터 생성

**사용법**:
```
/character-profile [이름] [역할]
```

**예시**:
```
/character-profile "김서연" 주인공
/character-profile "박지훈" 조력자
/character-profile "이현우" 악당
```

**주요 기능**:
- 기본 정보 (나이, 외모, 직업)
- 성격 (MBTI, 강점/약점)
- 배경 스토리
- Want vs Need
- 캐릭터 아크

---

### 품질 관리 (Quality)

#### `/consistency-check` - 일관성 검증
**목적**: 소설 전체의 일관성 검증 및 오류 탐지

**사용법**:
```
/consistency-check [영역] [범위]
```

**예시**:
```
/consistency-check character "Chapter 1-10"
/consistency-check timeline all
/consistency-check worldbuilding "Part 1"
```

**주요 기능**:
- 캐릭터 일관성 (외모, 성격, 능력)
- 타임라인 모순 검증
- 세계관 설정 충돌 감지
- 플롯 홀 탐지

---

## 🤖 에이전트 목록 (Agents)

에이전트는 복잡한 작업을 자율적으로 수행하는 전문가입니다. `@agent-name` 형식으로 호출합니다.

### `@genre-specialist` - 장르 전문가
**전문 분야**: 장르별 문법, 클리셰, 트로프, 독자 기대

**사용법**:
```
@genre-specialist 이 판타지 소설의 마법 시스템이 적절한지 검토해줘
@genre-specialist 로맨스 장르에서 슬로우 번 전개를 어떻게 하는지 알려줘
```

**주요 기능**:
- 6대 장르 전문성 (판타지, 로맨스, 스릴러, SF, 호러, 미스터리)
- 장르 규칙 준수 확인
- 장르 혼합 조언
- 독자 기대치 관리

---

### `@character-developer` - 캐릭터 개발자
**전문 분야**: 캐릭터 심리, 동기, 관계, 성장

**사용법**:
```
@character-developer 주인공의 캐릭터 아크를 설계해줘
@character-developer 악당을 더 입체적으로 만들고 싶어
```

**주요 기능**:
- 심리적 깊이 있는 캐릭터 설계
- Want vs Need 충돌 설정
- 캐릭터 관계 역학
- 변화 추적

---

### `@plot-architect` - 플롯 설계자
**전문 분야**: 구조, 페이싱, 긴장감, 플롯 트위스트

**사용법**:
```
@plot-architect 중반부가 지루해, 페이싱을 개선해줘
@plot-architect 놀라운 플롯 트위스트를 추가하고 싶어
```

**주요 기능**:
- 플롯 구조 최적화
- 페이싱 조절
- 복선과 회수
- 반전 설계

---

### `@editor` - 편집자
**전문 분야**: 문체, 표현, 퇴고, 출판 준비

**사용법**:
```
@editor 이 장면의 문체를 개선해줘
@editor 전체적인 퇴고 조언을 해줘
```

**주요 기능**:
- 문장 수준 개선
- 문체 통일성
- 과도한 부사/형용사 제거
- 출판 표준 준수

---

## 🔄 워크플로우 가이드

### 초보자를 위한 시작 가이드

소설을 처음 시작하는 분들을 위한 권장 순서입니다.

#### Step 1: 플롯 구조 설계
```
/plot-outline [장르] [주제]
```
→ 3막 구조로 전체 이야기 흐름 파악

#### Step 2: 주요 캐릭터 생성
```
/character-profile [이름] [역할]
```
→ 주인공, 악당, 주요 조력자 설계

#### Step 3: 세계관 구축 (장르 소설)
```
/worldbuilding [영역] [장르]
```
→ 판타지, SF 등 세계관이 중요한 장르

#### Step 4: 타임라인 설정
```
/timeline story "전체"
```
→ 주요 사건의 시간 순서 정리

#### Step 5: 이름 생성
```
/name-generator character [장르/문화]
/name-generator place [장르/문화]
```
→ 캐릭터와 장소 이름 결정

#### Step 6: 장면 작성 시작
```
/scene-write [장면 타입] [POV]
```
→ 실제 집필 시작

#### Step 7: 대화 다듬기
```
/dialogue-enhance [대화 텍스트]
```
→ 자연스러운 대화로 개선

#### Step 8: 일관성 검증
```
/consistency-check [영역] all
```
→ 정기적으로 일관성 확인

#### Step 9: 진행 상황 추적
```
/word-count progress
```
→ 목표 대비 진행도 확인

---

### 명령어 간 통합 사용

#### 캐릭터 중심 워크플로우
```
1. /character-profile "주인공" 주인공
2. /timeline character "주인공 생애"
3. @character-developer 주인공의 Want vs Need 충돌 설계
4. /scene-write action 1인칭 (주인공 POV)
5. /consistency-check character "Chapter 1-5"
```

#### 세계관 중심 워크플로우
```
1. /worldbuilding magic-system 판타지
2. /name-generator place 판타지-도시
3. /timeline world "천년 역사"
4. @genre-specialist 마법 시스템이 적절한지 검토
5. /consistency-check worldbuilding all
```

#### 플롯 중심 워크플로우
```
1. /plot-outline 스릴러 "연쇄살인 사건"
2. /timeline story "전체"
3. @plot-architect 클라이맥스 장면 강화
4. /scene-write action 3인칭-제한적
5. /consistency-check timeline all
```

---

## 📖 카테고리별 명령어

### Planning (구성 및 기획)
- `/plot-outline` - 플롯 구조
- `/timeline` - 타임라인
- `/word-count` - 분량 관리

### Worldbuilding (세계관)
- `/worldbuilding` - 세계관 설정
- `/name-generator` - 이름 생성

### Writing (작성)
- `/scene-write` - 장면 작성
- `/dialogue-enhance` - 대화 개선
- `/character-profile` - 캐릭터 설계

### Quality (품질)
- `/consistency-check` - 일관성 검증

---

## 🎯 도움말 옵션

### 일반 도움말
```
/help
```
→ 이 전체 도움말 표시

### 특정 명령어 도움말
```
/help [command-name]
```
→ 특정 명령어의 상세 사용법

**예시**:
```
/help plot-outline
/help character-profile
```

### 워크플로우 도움말
```
/help workflow
```
→ 작업 흐름 및 통합 사용 가이드

### 에이전트 도움말
```
/help agent
```
→ 에이전트 사용법 및 전문 분야

---

## ❓ FAQ (자주 묻는 질문)

### Q1: 어떤 명령어부터 시작해야 하나요?
**A**: `/plot-outline`으로 전체 구조를 먼저 잡고, `/character-profile`로 주요 캐릭터를 설계하세요. 그 다음 `/scene-write`로 실제 집필을 시작합니다.

### Q2: 명령어와 에이전트의 차이는?
**A**:
- **명령어** (`/command`): 특정 작업을 즉시 수행 (예: 플롯 생성, 이름 생성)
- **에이전트** (`@agent`): 복잡한 조언과 심층 분석을 제공 (예: 장르 전문가, 편집자)

### Q3: 장르 소설을 쓰는데 세계관 구축이 필요한가요?
**A**:
- **필수**: 판타지, SF (독특한 세계관이 핵심)
- **권장**: 호러, 미스터리 (분위기와 배경 중요)
- **선택**: 로맨스, 현대 스릴러 (현실 세계 기반)

### Q4: 타임라인이 복잡한데 어떻게 관리하나요?
**A**: `/timeline`을 story/character/world로 분리하여 관리하고, `/consistency-check timeline`으로 정기적으로 검증하세요.

### Q5: 대화가 어색한데 어떻게 개선하나요?
**A**: `/dialogue-enhance`로 자연스러운 대화로 변환하고, 각 캐릭터의 말투를 `/character-profile`에 명시하여 일관성을 유지하세요.

### Q6: 목표 분량은 어떻게 설정하나요?
**A**: `/word-count`의 장르별 가이드를 참고하세요:
- 판타지: 90,000-120,000 단어
- 로맨스: 70,000-100,000 단어
- 스릴러: 80,000-100,000 단어

### Q7: 여러 POV를 사용할 수 있나요?
**A**: 네! `/scene-write`에서 각 장면마다 POV를 지정할 수 있습니다. `/consistency-check`로 POV 전환이 일관되게 이루어지는지 확인하세요.

### Q8: 에이전트는 언제 사용하나요?
**A**:
- 복잡한 조언이 필요할 때 (장르 규칙, 캐릭터 심리)
- 심층 분석이 필요할 때 (플롯 구조, 페이싱)
- 전문적인 퇴고가 필요할 때 (문체, 출판 준비)

---

## 🔧 문제 해결 (Troubleshooting)

### 문제: 플롯이 너무 복잡해요
**해결**:
1. `/plot-outline`으로 3막 구조 단순화
2. `@plot-architect`에게 페이싱 조언 요청
3. `/timeline`으로 주요 사건만 정리

### 문제: 캐릭터가 일관성이 없어요
**해결**:
1. `/character-profile`에서 성격 특성 명확히 정의
2. `/consistency-check character`로 모순 찾기
3. `@character-developer`에게 캐릭터 아크 검토 요청

### 문제: 세계관 설정이 충돌해요
**해결**:
1. `/worldbuilding`으로 핵심 설정 문서화
2. `/consistency-check worldbuilding`로 충돌 탐지
3. `@genre-specialist`에게 장르 규칙 준수 확인

### 문제: 중반부가 지루해요
**해결**:
1. `@plot-architect`에게 페이싱 개선 조언 요청
2. `/timeline`에서 사건 간격 확인
3. `/scene-write`로 긴장감 있는 장면 추가

### 문제: 대화가 설명적이에요
**해결**:
1. `/dialogue-enhance`로 자연스러운 대화로 변환
2. 서브텍스트 활용 (직접 말하지 않고 암시)
3. 비언어적 소통 추가 (표정, 몸짓)

---

## 📊 명령어 빠른 참조표

| 명령어 | 카테고리 | 주요 용도 | 예시 |
|--------|----------|-----------|------|
| `/plot-outline` | Planning | 플롯 설계 | `/plot-outline 판타지 "마법 학교"` |
| `/character-profile` | Writing | 캐릭터 생성 | `/character-profile "김서연" 주인공` |
| `/scene-write` | Writing | 장면 작성 | `/scene-write action 1인칭` |
| `/dialogue-enhance` | Writing | 대화 개선 | `/dialogue-enhance [텍스트]` |
| `/consistency-check` | Quality | 일관성 검증 | `/consistency-check character all` |
| `/worldbuilding` | Worldbuilding | 세계관 구축 | `/worldbuilding magic-system 판타지` |
| `/timeline` | Planning | 타임라인 관리 | `/timeline story "Chapter 1-5"` |
| `/name-generator` | Worldbuilding | 이름 생성 | `/name-generator character 판타지-엘프` |
| `/word-count` | Planning | 분량 추적 | `/word-count total --goal 100000` |

---

## 🤖 에이전트 빠른 참조표

| 에이전트 | 전문 분야 | 언제 사용? | 예시 |
|----------|-----------|------------|------|
| `@genre-specialist` | 장르 규칙 | 장르 적합성 확인 | `@genre-specialist 이 마법 시스템이 적절한지 검토해줘` |
| `@character-developer` | 캐릭터 심리 | 깊이 있는 캐릭터 | `@character-developer 주인공의 내적 갈등 설계` |
| `@plot-architect` | 플롯 구조 | 페이싱/긴장감 | `@plot-architect 중반부 페이싱 개선` |
| `@editor` | 문체/퇴고 | 최종 다듬기 | `@editor 이 장면 문체 개선` |

---

**기억하세요**: 이 도구들은 **창작을 돕는 보조 도구**입니다. 완벽한 첫 장부터 시작하려 하지 마세요. `/plot-outline`과 `/character-profile`로 기본 틀을 잡고, `/scene-write`로 바로 집필을 시작하세요. 일관성은 `/consistency-check`로 나중에 검증하면 됩니다. **좋은 초고**가 **완벽한 계획**보다 중요합니다!

Need more help? Ask specific questions about any command or workflow!
