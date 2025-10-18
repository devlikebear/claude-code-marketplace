---
name: continue
description: 중단했던 소설 프로젝트를 재개(resume)하고 이전 작업 내용을 불러오는(load) 프로젝트 재개 명령어
category: workflow
---

# 프로젝트 재개 (Continue Project)

중단했던 소설 작업을 **이전 맥락과 함께** 재개할 수 있도록 돕습니다.

## 사용법 (Usage)

```bash
/continue [프로젝트 경로]
```

**예시**:
```bash
/continue
/continue ~/novels/dragon-legacy
/continue ./my-novel
```

---

## 🔄 프로젝트 재개 기능

### 자동 컨텍스트 복원 (Context Restoration)

`/continue` 명령어는 자동으로 다음을 불러옵니다:

1. **프로젝트 메타데이터** (`project.json`)
   - 장르, 목표 분량, 현재 진행 상황
   - 작가 선호도 및 스타일
   - 프로젝트 시작 날짜

2. **진행 상황** (`progress.json`)
   - 마지막 작업 위치
   - 완료된 단계
   - 미완료 작업 목록
   - 다음 우선순위 작업

3. **작품 콘텐츠**
   - 플롯 개요 (`plot.md`)
   - 캐릭터 프로필 (`characters/`)
   - 세계관 설정 (`worldbuilding.md`)
   - 타임라인 (`timeline.md`)
   - 작성된 챕터 (`chapters/`)

---

## 📊 진행 상황 요약

### 프로젝트 개요 표시

```
📖 프로젝트: Dragon's Legacy
📁 경로: ~/novels/dragon-legacy
🎭 장르: Fantasy
📅 시작일: 2024-10-01
⏰ 마지막 작업: 2024-10-15 (3일 전)

📝 완료된 작업:
✅ 플롯 구조 설계
✅ 주요 캐릭터 3명 생성
✅ 마법 시스템 구축
✅ 타임라인 설정
✅ Chapter 1-3 초고 완성 (9,500 단어)

🔄 진행 중:
- Chapter 4 작성 중 (1,800 / ~3,000 단어)

⏳ 미완료 작업:
- Chapter 5-10 작성
- 대화 개선 (Chapter 1-4)
- 일관성 검증

📊 진행률:
단어 수: 11,300 / 100,000 (11%)
챕터: 3.5 / 30 (12%)
```

### 분량 진행 상황

**현재 분량**:
- 총 단어 수: 11,300
- 목표 대비: 11% 완료
- 평균 챕터 길이: 3,143 단어

**작성 속도**:
- 일평균: 750 단어
- 주평균: 5,250 단어
- 예상 완료일: 2025-01-10 (약 3개월)

---

## 🎯 다음 단계 제안

### 우선순위 작업 (Priority Tasks)

시스템이 **자동으로 다음 작업을 권장**합니다:

**우선순위 1: 진행 중인 작업 완료**
```
현재 Chapter 4가 60% 완성되었습니다.

권장: Chapter 4를 먼저 완료하세요.
명령어: /scene-write action 1인칭
```

**우선순위 2: 일관성 검증**
```
Chapter 1-3이 완성되었지만 일관성 검증이 필요합니다.

권장: /consistency-check character "Chapter 1-3"
```

**우선순위 3: 대화 개선**
```
Chapter 2의 대화가 개선이 필요하다고 표시되었습니다.

권장: /dialogue-enhance [Chapter 2 대화 부분]
```

### 작업 흐름 재개 (Resume Workflow)

**1단계: 이전 작업 검토 (5-10분)**
```bash
# 마지막 챕터 읽기
Read: chapters/chapter-03.md

# 주요 캐릭터 상기
Read: characters/protagonist.md
```

**2단계: 맥락 재확인**
```bash
# 플롯에서 현재 위치 확인
"plot.md의 Act 2 Part 1을 보여줘"

# 타임라인 확인
"timeline.md에서 Chapter 4 시점의 사건들을 보여줘"
```

**3단계: 워밍업 작성 (10-15분)**
```
이전 장면의 마지막 문단을 다시 읽고
새로운 장면을 이어서 작성하기 시작
```

**4단계: 본격 작업**
```bash
/scene-write [다음 장면 타입] [POV]
```

---

## 📁 프로젝트 구조 확인

### `.novel-project/` 디렉토리

```
.novel-project/
├── project.json          # 프로젝트 메타데이터
├── progress.json         # 진행 상황 추적
├── plot.md               # 플롯 개요
├── characters/           # 캐릭터 프로필
│   ├── protagonist.md
│   ├── antagonist.md
│   └── supporting-01.md
├── worldbuilding.md      # 세계관 설정
└── timeline.md           # 타임라인
```

### `progress.json` 예시

```json
{
  "currentStep": "scene-write",
  "lastWorkDate": "2024-10-15T18:30:00Z",
  "lastChapter": 4,
  "completedSteps": [
    "plot-outline",
    "character-profile",
    "worldbuilding",
    "timeline",
    "name-generator"
  ],
  "inProgressSteps": [
    {
      "command": "scene-write",
      "chapter": 4,
      "progress": 60,
      "wordCount": 1800,
      "targetWordCount": 3000
    }
  ],
  "nextSteps": [
    {
      "priority": 1,
      "command": "scene-write",
      "description": "Complete Chapter 4",
      "estimatedTime": "2 hours"
    },
    {
      "priority": 2,
      "command": "consistency-check",
      "description": "Verify Chapters 1-3",
      "estimatedTime": "30 minutes"
    },
    {
      "priority": 3,
      "command": "dialogue-enhance",
      "description": "Improve Chapter 2 dialogue",
      "estimatedTime": "1 hour"
    }
  ],
  "chapters": [
    {
      "number": 1,
      "title": "The Awakening",
      "wordCount": 3200,
      "status": "completed",
      "needsRevision": false
    },
    {
      "number": 2,
      "title": "The Discovery",
      "wordCount": 3100,
      "status": "completed",
      "needsRevision": true,
      "revisionNotes": "Dialogue feels stilted"
    },
    {
      "number": 3,
      "title": "The Betrayal",
      "wordCount": 3200,
      "status": "completed",
      "needsRevision": false
    },
    {
      "number": 4,
      "title": "The Hunt",
      "wordCount": 1800,
      "status": "in-progress",
      "targetWordCount": 3000
    }
  ]
}
```

---

## 🔍 컨텍스트 활용

### 이전 작업 참조

`/continue` 후에는 **모든 프로젝트 파일을 즉시 참조** 가능합니다:

**플롯 참조**:
```
"plot.md에서 정의한 Act 2의 전환점을 상기시켜줘"
```

**캐릭터 참조**:
```
"characters/protagonist.md의 Want vs Need를 확인해줘"
"주인공이 Chapter 3에서 어떤 결정을 내렸는지 요약해줘"
```

**세계관 참조**:
```
"worldbuilding.md의 마법 시스템 규칙을 보여줘"
```

**타임라인 참조**:
```
"timeline.md에서 지금 시점(Chapter 4)에 무슨 일이 일어나야 하는지 확인해줘"
```

**챕터 연결**:
```
"Chapter 3의 마지막 장면을 보여주고, Chapter 4로 자연스럽게 이어지는 방법을 제안해줘"
```

---

## 💡 재개 시 팁

### Tip 1: 천천히 시작하기

```
❌ 나쁜 예:
   바로 새 챕터 작성 시작 (맥락 놓침)

✅ 좋은 예:
   1. 마지막 챕터 다시 읽기 (10분)
   2. 플롯/캐릭터 상기 (5분)
   3. 워밍업 작성 (15분)
   4. 본격 작업 시작
```

### Tip 2: 진행 상황 시각화

```bash
/word-count progress
```

### Tip 3: 작은 목표 설정

```
"오늘은 Chapter 4를 완성하는 것에 집중"
vs
"오늘 5개 챕터 작성" (비현실적)
```

### Tip 4: 정기적인 저장 및 커밋

```bash
# 중요 작업 후 즉시 저장
git add .
git commit -m "Chapter 4 완성"
```

---

## 🔄 작업 재개 워크플로우 예시

### 3일 만에 돌아온 경우

```bash
# 1. 프로젝트 재개
/continue ~/novels/dragon-legacy

# 2. 진행 상황 확인
"현재 진행 상황과 다음 작업을 요약해줘"

# 3. 마지막 작업 검토
"Chapter 3의 마지막 부분을 보여줘"
"주인공이 지금 어떤 상황에 있는지 요약해줘"

# 4. 플롯 확인
"plot.md에서 Chapter 4에 해당하는 부분을 보여줘"

# 5. 작업 재개
/scene-write action 1인칭

# 6. 진행 상황 업데이트
/word-count progress
```

### 1주일 만에 돌아온 경우

```bash
# 1. 프로젝트 재개
/continue

# 2. 종합 리뷰 (30분)
"지금까지 작성한 내용을 요약해줘 (플롯, 캐릭터, 주요 사건)"

# 3. 전체 읽기
"Chapter 1-3을 순서대로 요약해줘"

# 4. 캐릭터 상기
"각 주요 캐릭터의 현재 상태와 목표를 정리해줘"

# 5. 플롯 위치 파악
"현재 스토리가 3막 구조의 어디쯤 진행되었는지 알려줘"

# 6. 워밍업 작성
"Chapter 3의 마지막 장면을 리라이트해봐"

# 7. 새 작업 시작
/scene-write [타입] [POV]
```

---

## ❓ FAQ

### Q: 프로젝트 경로를 지정하지 않으면?

**A**: 현재 디렉토리에서 `.novel-project/` 폴더를 찾습니다. 없으면 상위 디렉토리를 탐색합니다.

### Q: progress.json이 없으면?

**A**: 경고 메시지를 표시하고 `/start` 명령어로 프로젝트를 먼저 초기화하도록 안내합니다.

### Q: 여러 프로젝트를 관리하려면?

**A**: 각 프로젝트마다 별도 디렉토리에 `.novel-project/` 폴더를 유지하고, `/continue [경로]`로 원하는 프로젝트를 지정하세요.

### Q: 중단한 지 오래되어 기억이 안 나면?

**A**: `/continue` 후에 다음을 요청하세요:
```
"지금까지의 스토리를 처음부터 자세히 요약해줘"
"주요 사건, 캐릭터 관계, 현재 갈등 상황을 설명해줘"
```

---

**작업을 재개하세요!** `/continue`로 중단했던 소설을 이어서 작성할 수 있습니다. 모든 컨텍스트가 복원되어 바로 작업을 시작할 수 있습니다! 📖

Need help? Try `/help` for comprehensive guide!
