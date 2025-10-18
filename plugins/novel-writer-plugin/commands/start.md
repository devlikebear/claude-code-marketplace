---
name: start
description: 소설 작성의 시작부터 완성까지 통합 워크플로우(integrated workflow)를 제공하는 프로젝트 초기화(initialization) 명령어
category: workflow
---

# 소설 프로젝트 시작 (Novel Project Start)

소설을 **처음부터 끝까지** 연속해서 작성할 수 있도록 안내하는 통합 워크플로우입니다.

## 사용법 (Usage)

```bash
/start [장르] [프로젝트명]
```

**예시**:
```bash
/start 판타지 "Dragon's Legacy"
/start 로맨스 "Second Chance"
/start 스릴러 "The Silent Witness"
/start SF "Starship Chronicles"
```

---

## 🚀 통합 워크플로우 (Integrated Workflow)

이 명령어는 9개의 기존 명령어를 **순서대로 연결**하여 소설 작성 전체 과정을 안내합니다:

1. `/plot-outline` - 플롯 구조 설계
2. `/character-profile` - 주요 캐릭터 생성
3. `/worldbuilding` - 세계관 구축 (장르 소설)
4. `/timeline` - 타임라인 설정
5. `/name-generator` - 이름 생성
6. `/scene-write` - 장면 작성 시작
7. `/dialogue-enhance` - 대화 개선
8. `/consistency-check` - 일관성 검증
9. `/word-count` - 진행 상황 추적

---

## 📁 프로젝트 초기화 (Project Initialization)

### 1단계: 디렉토리 생성 (Directory Setup)

`/start` 명령어는 다음과 같은 프로젝트 구조를 자동으로 생성합니다:

```
my-novel/
├── .novel-project/              # 메타데이터 폴더 (metadata)
│   ├── project.json             # 프로젝트 설정
│   ├── plot.md                  # 플롯 개요
│   ├── characters/              # 캐릭터 프로필들
│   │   ├── protagonist.md
│   │   ├── antagonist.md
│   │   └── supporting.md
│   ├── worldbuilding.md         # 세계관 설정
│   ├── timeline.md              # 타임라인
│   └── progress.json            # 진행 상황 추적
├── chapters/                    # 챕터 폴더
│   ├── chapter-01.md
│   ├── chapter-02.md
│   └── ...
└── README.md                    # 작품 소개
```

### 2단계: 프로젝트 메타데이터 (Project Metadata)

**`project.json` 구조**:

```json
{
  "name": "Dragon's Legacy",
  "genre": "fantasy",
  "targetWordCount": 100000,
  "currentWordCount": 0,
  "status": "planning",
  "startDate": "2024-10-18",
  "author": {
    "name": "Your Name",
    "preferences": {
      "tone": "epic",
      "style": "descriptive",
      "audience": "young-adult"
    }
  },
  "chapters": [],
  "characters": [],
  "lastEdited": "2024-10-18T15:30:00Z"
}
```

---

## 📝 기본 정보 수집 (Initial Information)

### 장르 선택 (Genre Selection)

**지원 장르**:
- **판타지 (Fantasy)**: 마법, 신화, 모험
- **로맨스 (Romance)**: 사랑, 관계, 감정
- **스릴러 (Thriller)**: 긴장감, 속도, 위험
- **SF (Science Fiction)**: 과학, 기술, 미래
- **호러 (Horror)**: 공포, 불안, 초자연
- **미스터리 (Mystery)**: 수수께끼, 탐정, 진실

### 목표 분량 설정 (Word Count Goal)

**장르별 권장 분량**:

```
판타지:   90,000 - 120,000 단어
로맨스:   70,000 - 100,000 단어
스릴러:   80,000 - 100,000 단어
SF:       80,000 - 120,000 단어
호러:     70,000 - 90,000 단어
미스터리: 70,000 - 90,000 단어
```

### 작가 선호도 (Writer Preferences)

**톤 (Tone)**:
- 경쾌함 (Light-hearted)
- 심각함 (Serious)
- 서정적 (Lyrical)
- 냉소적 (Cynical)

**문체 (Style)**:
- 서술적 (Descriptive)
- 간결함 (Concise)
- 대화 중심 (Dialogue-heavy)
- 액션 중심 (Action-oriented)

**독자층 (Target Audience)**:
- 청소년 (Young Adult)
- 성인 (Adult)
- 전연령 (All Ages)

---

## 🎯 단계별 안내 (Step-by-Step Guide)

### Step 1: 플롯 구조 설계 (Plot Outline)

```bash
/plot-outline [장르] [주제]
```

**판타지 예시**:
```bash
/plot-outline 판타지 "마법 학교에서 숨겨진 음모를 파헤치는 학생"
```

**목표**:
- 3막 구조 (설정, 전개, 결말) 완성
- 주요 플롯 포인트 배치
- 클라이맥스 설정

**완료 체크**: ✅ 플롯 개요 작성 완료

---

### Step 2: 주요 캐릭터 생성 (Character Profile)

```bash
/character-profile [이름] [역할]
```

**필수 캐릭터**:
```bash
/character-profile "주인공" 주인공
/character-profile "악당" 악당
/character-profile "조력자" 조력자
```

**목표**:
- 주인공의 Want vs Need 정의
- 악당의 동기 설정
- 캐릭터 관계 구축

**완료 체크**: ✅ 최소 3명 캐릭터 프로필 작성

---

### Step 3: 세계관 구축 (Worldbuilding) - 장르 소설용

```bash
/worldbuilding [영역] [장르]
```

**판타지 필수**:
```bash
/worldbuilding magic-system 판타지
/worldbuilding geography 판타지
/worldbuilding history 판타지
```

**SF 필수**:
```bash
/worldbuilding technology SF
/worldbuilding society SF
```

**현대 스릴러/로맨스**: 이 단계 생략 가능

**완료 체크**: ✅ 핵심 세계관 설정 문서화

---

### Step 4: 타임라인 설정 (Timeline)

```bash
/timeline story "전체"
```

**목표**:
- 주요 사건의 시간 순서 정리
- 플래시백 위치 결정
- 시간 일관성 검증

**완료 체크**: ✅ 스토리 타임라인 완성

---

### Step 5: 이름 생성 (Name Generator)

```bash
/name-generator character [장르/문화]
/name-generator place [장르/문화]
```

**예시**:
```bash
/name-generator character 판타지-엘프
/name-generator place 판타지-도시
```

**완료 체크**: ✅ 캐릭터 및 주요 장소 이름 결정

---

### Step 6: 장면 작성 시작 (Scene Write)

```bash
/scene-write [장면 타입] [POV]
```

**첫 장면 예시**:
```bash
/scene-write opening 1인칭
```

**목표**:
- 첫 챕터 작성 (Chapter 01)
- 후크(Hook) 설정
- 주인공 소개

**완료 체크**: ✅ Chapter 1 초고 완성

---

### Step 7: 대화 개선 (Dialogue Enhance)

```bash
/dialogue-enhance [대화 텍스트]
```

**목표**:
- 자연스러운 대화로 변환
- 캐릭터 목소리 차별화
- 서브텍스트 추가

**완료 체크**: ✅ 대화 장면 개선 완료

---

### Step 8: 일관성 검증 (Consistency Check)

```bash
/consistency-check character "Chapter 1-3"
/consistency-check timeline "Chapter 1-3"
```

**목표**:
- 캐릭터 묘사 일관성
- 타임라인 모순 검증
- 세계관 충돌 확인

**완료 체크**: ✅ 일관성 검증 통과

---

### Step 9: 진행 상황 추적 (Word Count)

```bash
/word-count progress
```

**목표**:
- 현재 분량 확인
- 목표 대비 진행률
- 일일 목표 설정

**완료 체크**: ✅ 진행 상황 업데이트

---

## 📊 진행 상황 추적 (Progress Tracking)

프로젝트 진행 상황을 `progress.json`에 **자동 저장(save)**합니다.

### `progress.json` 구조

```json
{
  "currentStep": "scene-write",
  "completedSteps": [
    "plot-outline",
    "character-profile",
    "worldbuilding",
    "timeline",
    "name-generator"
  ],
  "nextSteps": [
    "dialogue-enhance",
    "consistency-check",
    "word-count"
  ],
  "chapters": [
    {
      "number": 1,
      "title": "The Beginning",
      "wordCount": 3200,
      "status": "completed",
      "lastEdited": "2024-10-18"
    },
    {
      "number": 2,
      "title": "The Discovery",
      "wordCount": 1800,
      "status": "in-progress",
      "lastEdited": "2024-10-19"
    }
  ]
}
```

### 다음 단계 제안 (Next Step Suggestions)

시스템이 자동으로 다음에 해야 할 작업을 제안합니다:

```
✅ 완료: plot-outline, character-profile
🔄 진행 중: scene-write (Chapter 1)
⏳ 다음 단계: dialogue-enhance

제안: Chapter 1 대화 장면을 /dialogue-enhance로 개선하세요.
```

### 재개 기능 (Resume Capability)

프로젝트를 중단했다가 나중에 재개할 수 있습니다:

```bash
/start --resume [프로젝트 경로]
```

**기능**:
- 이전 진행 상황 불러오기
- 마지막 작업 위치 표시
- 다음 단계 자동 제안

---

## 🎨 장르별 맞춤 안내 (Genre-Specific Guidance)

### 판타지 (Fantasy) 워크플로우

```
1. /plot-outline 판타지 "마법 학교 미스터리"
2. /character-profile "주인공" 주인공
3. /worldbuilding magic-system 판타지  ⭐ 중요
4. /worldbuilding geography 판타지
5. /worldbuilding history 판타지
6. /timeline world "천년 역사"
7. /name-generator character 판타지-엘프
8. /name-generator place 판타지-도시
9. /scene-write opening 1인칭
10. @genre-specialist 마법 시스템 검토  ⭐ 에이전트 활용
```

**핵심 포인트**:
- **마법 시스템**: Hard Magic vs Soft Magic 결정 필수
- **세계관**: 지리, 역사, 종족 설정 상세히
- **이름**: 일관된 작명 규칙 적용

---

### 로맨스 (Romance) 워크플로우

```
1. /plot-outline 로맨스 "운명적 재회"
2. /character-profile "주인공" 주인공
3. /character-profile "연인" 조력자
4. @character-developer 두 사람의 감정선 설계  ⭐
5. /timeline story "관계 발전 단계"
6. /scene-write dialogue 1인칭
7. /dialogue-enhance [첫 만남 장면]
8. @genre-specialist 로맨스 트로프 확인
```

**핵심 포인트**:
- **감정선**: Want vs Need 충돌로 긴장감 유지
- **대화**: 서브텍스트와 감정 표현 중요
- **세계관**: 현실적 배경이면 생략 가능

---

### 스릴러 (Thriller) 워크플로우

```
1. /plot-outline 스릴러 "연쇄살인 사건"
2. /character-profile "탐정" 주인공
3. /character-profile "범인" 악당
4. /timeline story "사건 발생 순서"  ⭐ 중요
5. @plot-architect 페이싱 최적화  ⭐
6. /scene-write action 3인칭-제한적
7. /consistency-check timeline all
```

**핵심 포인트**:
- **페이싱**: 빠른 전개와 클리프행거
- **타임라인**: 사건 순서 정확성 필수
- **긴장감**: 짧은 챕터로 속도감 유지

---

### SF (Science Fiction) 워크플로우

```
1. /plot-outline SF "우주 식민지 반란"
2. /character-profile "선장" 주인공
3. /worldbuilding technology SF  ⭐ 중요
4. /worldbuilding society SF
5. @genre-specialist 과학적 개연성 검토
6. /name-generator character SF-우주
7. /scene-write action 3인칭-전지적
```

**핵심 포인트**:
- **기술 설정**: Hard SF vs Soft SF 결정
- **과학적 개연성**: 최소한의 논리적 근거 필요
- **사회 구조**: 기술이 사회에 미친 영향

---

## 🔗 통합 기능 (Integration Features)

### 명령어 간 연계 (Command Integration)

각 단계는 **이전 단계의 결과를 참조**합니다:

```
plot.md → character-profile에서 플롯 기반 동기 설정
characters/ → scene-write에서 캐릭터 성격 반영
worldbuilding.md → name-generator에서 세계관 일관성 유지
timeline.md → consistency-check에서 시간 검증
```

### 에이전트 활용 (Agent Utilization)

각 단계에서 **전문 에이전트**를 호출할 수 있습니다:

- **`@genre-specialist`**: 장르 규칙 검증
- **`@character-developer`**: 캐릭터 심화
- **`@plot-architect`**: 플롯 최적화
- **`@editor`**: 문체 개선

**예시**:
```
Step 3 후: @genre-specialist 판타지 마법 시스템이 적절한지 검토해줘
Step 6 후: @character-developer 주인공의 Want vs Need 충돌 강화
Step 9 후: @plot-architect 중반부 페이싱이 너무 느린데 개선 방법은?
```

### 컨텍스트 참조 (Context Retention)

프로젝트 디렉토리 내 모든 파일은 **자동으로 참조 가능**합니다:

```bash
# 이전에 작성한 플롯 참조
"plot.md에서 정의한 클라이맥스 장면을 scene-write로 작성해줘"

# 캐릭터 프로필 참조
"characters/protagonist.md의 성격 특성을 반영해서 대화를 개선해줘"

# 세계관 일관성 유지
"worldbuilding.md의 마법 규칙에 맞게 이 장면을 수정해줘"
```

### 연속 작업 흐름 (Continuous Workflow)

**한 세션에서 연속 작업**:

```bash
# 1. 프로젝트 시작
/start 판타지 "Dragon's Legacy"

# 2. 플롯 생성
/plot-outline 판타지 "용의 유산을 찾는 모험"

# 3. 캐릭터 생성
/character-profile "Aria" 주인공

# 4. 세계관 구축
/worldbuilding magic-system 판타지

# 5. 장면 작성
/scene-write opening 1인칭

# 6. 대화 개선
/dialogue-enhance "안녕하세요. 저는 Aria입니다."

# 7. 검증
/consistency-check character "Chapter 1"

# 8. 진행 확인
/word-count progress
```

---

## 💡 실전 사용 팁 (Practical Tips)

### Tip 1: 완벽한 기획보다 빠른 시작

```
❌ 나쁜 예:
   플롯을 3일간 완벽하게 짜고 시작

✅ 좋은 예:
   Step 1-5 빠르게 완료 (2시간)
   Step 6으로 바로 집필 시작
   필요시 Step 1-5 수정
```

### Tip 2: 정기적인 일관성 검증

```
매 5챕터마다:
/consistency-check character "Chapter N-N+5"
/consistency-check timeline "Chapter N-N+5"
```

### Tip 3: 에이전트 적극 활용

```
막힐 때마다:
@genre-specialist 이 장르에서 이런 전개가 적절한가?
@plot-architect 이 부분 페이싱을 어떻게 개선하지?
@character-developer 이 캐릭터가 왜 이렇게 행동하는지 모르겠어
```

### Tip 4: 진행 상황 시각화

```
주 1회:
/word-count progress

목표 달성 시각화:
[████████░░░░░░░░░░] 40% (40,000 / 100,000)
```

---

## 📈 성공 지표 (Success Metrics)

### 단계별 완료 기준

| 단계 | 완료 기준 | 예상 시간 |
|------|----------|----------|
| Plot Outline | 3막 구조 완성 | 1-2시간 |
| Character Profile | 주요 3명 프로필 | 1-2시간 |
| Worldbuilding | 핵심 설정 문서화 | 2-4시간 |
| Timeline | 주요 사건 정리 | 1시간 |
| Name Generator | 이름 결정 | 30분 |
| Scene Write | Chapter 1 초고 | 2-4시간 |
| Dialogue Enhance | 대화 개선 | 1시간 |
| Consistency Check | 검증 통과 | 1시간 |
| Word Count | 진행 확인 | 10분 |

**총 예상 시간**: 10-16시간 (초기 설정)

### 프로젝트 진행 단계

1. **Planning (기획)**: Step 1-5 완료
2. **Drafting (초고)**: Chapter 1-30 작성
3. **Revision (수정)**: 일관성 검증 및 개선
4. **Polish (다듬기)**: 최종 퇴고

---

## ❓ FAQ

### Q: 모든 단계를 꼭 거쳐야 하나요?

**A**: 아니요! 장르와 선호도에 따라 조정하세요:
- **필수**: Step 1 (플롯), Step 2 (캐릭터), Step 6 (집필)
- **장르 소설**: Step 3 (세계관) 추가
- **선택**: 나머지는 필요시에만

### Q: 중간에 순서를 바꿔도 되나요?

**A**: 네! 유연하게 조정하세요. 다만 권장 순서는:
1. 플롯 → 2. 캐릭터 → 3. 세계관 → 4. 집필

### Q: 프로젝트를 여러 개 동시에 진행할 수 있나요?

**A**: 가능합니다. 각 프로젝트별로 별도 디렉토리를 생성하세요.

---

**지금 바로 시작하세요!** `/start [장르] [프로젝트명]`으로 당신의 첫 소설 여정을 시작해보세요. 완벽한 계획보다 **실행**이 중요합니다! 🚀

Need help? Try `/help` or ask `@genre-specialist` for genre-specific guidance!
