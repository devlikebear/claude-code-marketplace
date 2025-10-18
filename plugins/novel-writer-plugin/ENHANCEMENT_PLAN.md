# Novel Writer Plugin Enhancement Plan

novel-writer-plugin을 실전에서 유용하게 사용할 수 있도록 강화하는 종합 계획

## 📋 목표

1. **통합 워크플로우**: 소설 시작부터 완성까지 연속 작업 가능
2. **프로젝트 관리**: 작품 디렉토리 기반 작업, 이전 내용 참조
3. **장르 전문화**: 장르별 Claude Skills로 깊이 있는 지원
4. **사용성 향상**: Help 시스템으로 쉬운 접근성

## Phase 6: 핵심 기능 강화

### 1. `/start` - 통합 워크플로우 명령어 ⭐

**목적**: 소설 작성 전체 프로세스를 단계별로 안내

**기능:**
```bash
/start [장르] [프로젝트명]
```

**워크플로우:**
1. **프로젝트 초기화**
   - 작품 디렉토리 생성 또는 선택
   - `.novel-project/` 메타데이터 폴더 생성
   - `project.json` 프로젝트 설정 파일 생성

2. **기본 정보 수집**
   - 장르 선택 (판타지, 로맨스, 스릴러, SF, 호러, 미스터리)
   - 목표 분량 설정
   - 작가 선호도 (문체, 톤, 독자층)

3. **단계별 안내**
   - Step 1: 플롯 구조 (`/plot-outline`)
   - Step 2: 주요 캐릭터 (`/character-profile`)
   - Step 3: 세계관 구축 (`/worldbuilding`)
   - Step 4: 타임라인 설정 (`/timeline`)
   - Step 5: 이름 생성 (`/name-generator`)
   - Step 6: 장면 작성 시작 (`/scene-write`)

4. **진행 상황 추적**
   - 완료된 단계 체크
   - 다음 단계 제안
   - 작업 재개 지점 저장

**프로젝트 구조:**
```
my-novel/
├── .novel-project/
│   ├── project.json          # 프로젝트 설정
│   ├── plot.md               # 플롯 개요
│   ├── characters/           # 캐릭터 프로필들
│   ├── worldbuilding.md      # 세계관 설정
│   ├── timeline.md           # 타임라인
│   └── progress.json         # 진행 상황
├── chapters/
│   ├── chapter-01.md
│   ├── chapter-02.md
│   └── ...
└── README.md                 # 작품 소개
```

### 2. `/help` - 도움말 시스템

**목적**: 플러그인 효과적 사용법 안내

**기능:**
```bash
/help                    # 전체 도움말
/help [command-name]     # 특정 명령어 도움말
/help workflow           # 워크플로우 가이드
/help skills             # 장르 스킬 가이드
```

**제공 정보:**
- 명령어 목록 및 설명
- 에이전트 사용법
- 장르별 스킬 안내
- 워크플로우 예시
- FAQ

### 3. `/continue` - 작업 재개 명령어

**목적**: 기존 프로젝트 작업 계속하기

**기능:**
```bash
/continue [project-path]
```

**동작:**
- 프로젝트 메타데이터 로드
- 이전 작업 내용 요약
- 다음 단계 제안
- 진행 상황 표시

### 4. `/context` - 컨텍스트 관리

**목적**: 작성된 내용 참조 및 일관성 유지

**기능:**
```bash
/context load [chapter-range]    # 챕터 내용 로드
/context summary                  # 전체 요약
/context characters               # 캐릭터 정보
/context worldbuilding            # 세계관 정보
```

**동작:**
- 지정된 챕터/섹션 내용 읽기
- 캐릭터, 세계관 설정 불러오기
- 일관성 검증
- 컨텍스트 요약 제공

## Phase 7: 장르별 Claude Skills

### Skills 디렉토리 구조

```
plugins/novel-writer-plugin/
├── skills/
│   ├── fantasy-worldbuilding/
│   │   └── SKILL.md
│   ├── romance-tropes/
│   │   └── SKILL.md
│   ├── thriller-pacing/
│   │   └── SKILL.md
│   ├── scifi-tech/
│   │   └── SKILL.md
│   ├── horror-atmosphere/
│   │   └── SKILL.md
│   └── mystery-plotting/
│       └── SKILL.md
```

### 1. Fantasy Worldbuilding Skill

**파일**: `skills/fantasy-worldbuilding/SKILL.md`

**YAML Frontmatter:**
```yaml
---
name: Fantasy Worldbuilding
description: Expert guidance for creating immersive fantasy worlds with magic systems, races, politics, and lore. Use when user is writing fantasy novels or building fantasy settings.
allowed-tools: Read, Write, Edit, Grep, Glob
---
```

**내용:**
- 마법 시스템 설계 (Hard Magic vs Soft Magic)
- 종족/인종 설정 (엘프, 드워프, 오크 등)
- 정치 구조 (왕국, 제국, 길드)
- 신화와 전설
- 고대 문명과 유물

### 2. Romance Tropes Skill

**파일**: `skills/romance-tropes/SKILL.md`

**YAML Frontmatter:**
```yaml
---
name: Romance Tropes
description: Master common romance tropes and relationship dynamics for compelling love stories. Use when user is writing romance novels or romantic subplots.
allowed-tools: Read, Write, Edit
---
```

**내용:**
- Enemies to Lovers
- Second Chance Romance
- Fake Relationship
- Forced Proximity
- Slow Burn vs Instalove
- 감정선 발전 단계

### 3. Thriller Pacing Skill

**파일**: `skills/thriller-pacing/SKILL.md`

**YAML Frontmatter:**
```yaml
---
name: Thriller Pacing
description: Expert techniques for maintaining tension, suspense, and rapid pacing in thriller narratives. Use when user is writing thriller, suspense, or action novels.
allowed-tools: Read, Write, Edit, Grep
---
```

**내용:**
- 긴장감 빌드업
- 클리프행거 배치
- 타임 프레셔 설정
- 페이스 조절 (Fast vs Slow)
- 반전 타이밍

### 4. SciFi Technology Skill

**파일**: `skills/scifi-tech/SKILL.md`

**YAML Frontmatter:**
```yaml
---
name: SciFi Technology
description: Create scientifically plausible or imaginative future technologies and their societal impacts. Use when user is writing science fiction with technological elements.
allowed-tools: Read, Write, Edit
---
```

**내용:**
- Hard SF vs Soft SF
- 기술 설정 (FTL, AI, 생명공학)
- 과학적 개연성
- 기술의 사회적 영향
- 테크 레벨 설정

### 5. Horror Atmosphere Skill

**파일**: `skills/horror-atmosphere/SKILL.md`

**YAML Frontmatter:**
```yaml
---
name: Horror Atmosphere
description: Craft terrifying atmospheres, psychological dread, and effective scares. Use when user is writing horror, gothic, or psychological thriller stories.
allowed-tools: Read, Write, Edit
---
```

**내용:**
- 공포 유형 (심리적, 초자연적, 고어)
- 분위기 조성 기법
- 긴장과 이완 리듬
- 오감 활용
- 공포의 점진적 확대

### 6. Mystery Plotting Skill

**파일**: `skills/mystery-plotting/SKILL.md`

**YAML Frontmatter:**
```yaml
---
name: Mystery Plotting
description: Structure compelling mysteries with clues, red herrings, and satisfying revelations. Use when user is writing mystery, detective, or whodunit stories.
allowed-tools: Read, Write, Edit, Grep
---
```

**내용:**
- 단서 배치 전략
- 레드 헤링 사용법
- 탐정의 추리 과정
- Fair Play 원칙
- 반전과 해결

## Phase 8: 프로젝트 관리 기능

### 1. 프로젝트 초기화

**파일**: `commands/project-init.md`

**기능:**
- 작품 디렉토리 생성
- 메타데이터 구조 설정
- Git 초기화 (선택)
- 템플릿 파일 생성

### 2. 프로젝트 상태 추적

**파일**: `.novel-project/project.json`

**구조:**
```json
{
  "name": "My Novel Title",
  "genre": "fantasy",
  "targetWordCount": 100000,
  "currentWordCount": 25000,
  "status": "in-progress",
  "startDate": "2024-10-18",
  "chapters": [
    {
      "number": 1,
      "title": "The Beginning",
      "wordCount": 3200,
      "status": "completed",
      "file": "chapters/chapter-01.md"
    }
  ],
  "characters": [
    {
      "name": "Alice",
      "role": "protagonist",
      "profileFile": ".novel-project/characters/alice.md"
    }
  ],
  "lastEdited": "2024-10-18T15:30:00Z"
}
```

### 3. 자동 백업

**기능:**
- 주요 변경사항 자동 커밋
- 버전 히스토리 관리
- 복원 포인트 생성

## Phase 9: 테스팅 & 문서화

### 테스트 추가

```
__tests__/
├── commands/
│   ├── start.test.js        # /start 명령어
│   ├── help.test.js         # /help 명령어
│   ├── continue.test.js     # /continue 명령어
│   └── context.test.js      # /context 명령어
└── skills/
    ├── fantasy-worldbuilding.test.js
    ├── romance-tropes.test.js
    ├── thriller-pacing.test.js
    ├── scifi-tech.test.js
    ├── horror-atmosphere.test.js
    └── mystery-plotting.test.js
```

### 문서 업데이트

- README.md: 새 기능 소개
- USAGE_GUIDE.md: 상세 사용 가이드
- SKILL_GUIDE.md: 스킬 활용법
- WORKFLOW.md: 워크플로우 예시

## 구현 우선순위

### Priority 1 (High Impact)
1. ✅ `/help` 명령어 - 즉시 필요
2. ✅ `/start` 명령어 - 핵심 기능
3. ✅ 프로젝트 구조 정의

### Priority 2 (Core Skills)
4. ✅ Fantasy Worldbuilding Skill
5. ✅ Romance Tropes Skill
6. ✅ Thriller Pacing Skill

### Priority 3 (Additional Skills)
7. ⏳ SciFi Technology Skill
8. ⏳ Horror Atmosphere Skill
9. ⏳ Mystery Plotting Skill

### Priority 4 (Advanced Features)
10. ⏳ `/continue` 명령어
11. ⏳ `/context` 명령어
12. ⏳ 자동 백업 시스템

## 예상 결과

### 사용자 경험

**Before (현재):**
```bash
# 개별 명령어를 수동으로 실행
/plot-outline 판타지 소설
/character-profile 주인공
# ... 매번 새로 시작
```

**After (강화 후):**
```bash
# 프로젝트 시작
/start fantasy "Dragon's Legacy"
# → 자동으로 디렉토리 생성, 단계별 가이드

# 작업 재개
/continue ~/novels/dragons-legacy
# → 이전 내용 로드, 다음 단계 제안

# 장르 스킬 자동 활성화
"Create a magic system for my fantasy world"
# → Fantasy Worldbuilding 스킬 자동 사용
```

### 플러그인 구조 (최종)

```
novel-writer-plugin/
├── .claude-plugin/
│   └── plugin.json
├── commands/              # 13개 명령어
│   ├── plot-outline.md
│   ├── character-profile.md
│   ├── scene-write.md
│   ├── dialogue-enhance.md
│   ├── consistency-check.md
│   ├── worldbuilding.md
│   ├── timeline.md
│   ├── name-generator.md
│   ├── word-count.md
│   ├── start.md           # ⭐ NEW
│   ├── help.md            # ⭐ NEW
│   ├── continue.md        # ⭐ NEW
│   └── context.md         # ⭐ NEW
├── agents/                # 4개 에이전트
│   ├── genre-specialist.md
│   ├── character-developer.md
│   ├── plot-architect.md
│   └── editor.md
├── skills/                # 6개 장르 스킬 ⭐ NEW
│   ├── fantasy-worldbuilding/
│   ├── romance-tropes/
│   ├── thriller-pacing/
│   ├── scifi-tech/
│   ├── horror-atmosphere/
│   └── mystery-plotting/
├── templates/             # 프로젝트 템플릿 ⭐ NEW
│   ├── project-structure/
│   └── chapter-template.md
├── __tests__/             # 확장된 테스트
├── README.md
├── CONTRIBUTING.md
├── CHANGELOG.md
├── USAGE_GUIDE.md         # ⭐ NEW
├── SKILL_GUIDE.md         # ⭐ NEW
└── WORKFLOW.md            # ⭐ NEW
```

## 성공 지표

1. **사용성**: 플러그인 설치 후 `/help`로 5분 내 시작 가능
2. **연속성**: `/start`로 프로젝트 초기화 후 중단 없이 작업 가능
3. **컨텍스트**: 이전 작성 내용을 참조하며 일관성 유지
4. **전문성**: 장르별 스킬로 깊이 있는 조언 제공
5. **완성도**: 실제로 소설 한 편을 처음부터 끝까지 완성 가능

---

**개발 시작 준비 완료!** 🚀

다음 단계: Priority 1부터 순차적으로 구현 시작
