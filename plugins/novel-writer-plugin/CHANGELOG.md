# Changelog

All notable changes to the Novel Writer Plugin will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2024-10-18

### Added - Phase 8: Complete Workflow & All Genre Skills

#### Phase 8-1: Advanced Project Management (52 tests)

**`/continue` Command** (28 tests):
- 중단했던 프로젝트 재개 및 컨텍스트 복원
- 이전 진행 상황 자동 로드 (`progress.json`)
- 마지막 작업 위치 표시
- 다음 단계 자동 제안 (우선순위 기반)
- 작업 재개 워크플로우 가이드

**`/context` Command** (24 tests):
- 전체 프로젝트 콘텐츠 검색 및 참조
- 타입별 검색 (character, plot, worldbuilding, chapter)
- 이전 작성 내용 인용 및 활용
- 일관성 유지를 위한 컨텍스트 관리
- 복합 검색 및 관련 콘텐츠 찾기

#### Phase 8-2: Complete Genre Skills Coverage (3 additional skills)

**4. SciFi Technology Skill**:
   - FTL 여행 시스템 설계
   - AI 및 로봇공학
   - 우주 서식지 및 식민지
   - 미래 무기 및 전쟁
   - 생명공학 및 유전공학

**5. Horror Atmosphere Skill**:
   - 공포 장르별 기법 (Cosmic, Psychological, Gothic, Body Horror)
   - 공포감 조성 및 긴장 빌드업
   - 괴물/위협 디자인 전략
   - 분위기 및 환경 활용
   - 심리적 공포 기법

**6. Mystery Plotting Skill**:
   - Fair Play 미스터리 구조
   - 단서 배치 및 Red Herring
   - 탐정 및 용의자 설계
   - 반전 및 폭로 기법
   - 미스터리 서브장르별 접근

### Changed
- Plugin version 1.1.0 → 1.2.0
- Commands 11개 → 13개 (continue, context 추가)
- Skills 3개 → 6개 (SciFi, Horror, Mystery 추가)
- Test coverage 292 → 344 tests (+52)
- Description: "완전한 통합 워크플로우 - 시작부터 완성까지"

### Technical Details
- **Total Commands**: 13 (plot-outline, character-profile, scene-write, dialogue-enhance, consistency-check, worldbuilding, timeline, name-generator, word-count, help, start, continue, context)
- **Total Agents**: 4 (genre-specialist, character-developer, plot-architect, editor)
- **Total Skills**: 6 (fantasy-worldbuilding, romance-tropes, thriller-pacing, scifi-technology, horror-atmosphere, mystery-plotting)
- **Test Coverage**: 344 tests (100% passing)
- **Development Method**: Strict TDD (Test-Driven Development)

## [1.1.0] - 2024-10-18

### Added - Phase 6-7: Enhanced Practical Features

#### Phase 6: Integrated Workflow (79 tests)

**`/help` Command** (32 tests):
- 전체 플러그인 사용법 종합 안내
- 9개 명령어 사용 예시
- 4개 에이전트 활용법
- 워크플로우 가이드
- FAQ 및 문제 해결

**`/start` Command** (47 tests):
- 통합 워크플로우로 소설 시작부터 완성까지 안내
- 프로젝트 디렉토리 자동 초기화 (`.novel-project/`)
- 장르별 맞춤 워크플로우 (판타지, 로맨스, 스릴러, SF)
- 진행 상황 추적 (`progress.json`)
- 단계별 체크리스트
- 기존 9개 명령어 통합

#### Phase 7: Genre-Specific Claude Skills (3 skills)

**Claude Skills Integration**:
- Model-invoked 자동 활성화 시스템
- 장르별 전문 지식 제공
- 실시간 컨텍스트 기반 조언

**Skills Created**:
1. **Fantasy Worldbuilding Skill**
   - 마법 시스템 설계 (Hard/Soft Magic)
   - 종족 및 문화 창조
   - 정치 시스템 구축
   - 지리 및 역사 설정
   - 신화 및 전설 구축

2. **Romance Tropes Skill**
   - Enemies to Lovers, Friends to Lovers
   - Second Chance, Fake Relationship
   - Forced Proximity, Forbidden Love
   - 감정선 개발 기법
   - Heat level 별 작성법

3. **Thriller Pacing Skill**
   - 긴장감 빌드업 기법
   - 클리프행거 배치 전략
   - 액션 시퀀스 안무
   - 페이싱 조절 (짧은/긴 챕터)
   - Plot Twist 타이밍

### Changed
- Plugin version 1.0.0 → 1.1.0
- Commands 9개 → 11개 (help, start 추가)
- Test coverage 213 → 292 tests (+79)

### Technical Details
- **Total Commands**: 11 (plot-outline, character-profile, scene-write, dialogue-enhance, consistency-check, worldbuilding, timeline, name-generator, word-count, help, start)
- **Total Agents**: 4 (genre-specialist, character-developer, plot-architect, editor)
- **Total Skills**: 3 (fantasy-worldbuilding, romance-tropes, thriller-pacing)
- **Test Coverage**: 292 tests (100% passing)
- **Development Method**: Strict TDD (Test-Driven Development)

## [1.0.0] - 2024-10-18

### Added

#### Phase 1: Infrastructure
- 프로젝트 초기 구조 설정
- Jest 테스팅 프레임워크 구성
- ESM 모듈 시스템 설정
- Plugin metadata (plugin.json)

#### Phase 2: Core Commands (90 tests)
- **`/plot-outline`**: 3막 구조 기반 플롯 개요 생성 (16 tests)
  - 3막 구조 자동 생성
  - 주요 플롯 포인트 제안
  - 장르별 가이드

- **`/character-profile`**: 입체적 캐릭터 프로필 작성 (25 tests)
  - Want vs Need 분석
  - Fatal Flaw 정의
  - 백스토리 구조화
  - Character Arc 설계

- **`/scene-write`**: Show, Don't Tell 장면 작성 (20 tests)
  - 오감 묘사 가이드
  - 페이싱 조언
  - 2000-3000자 분량 생성

- **`/dialogue-enhance`**: 자연스러운 대화 개선 (16 tests)
  - 캐릭터 목소리 차별화
  - 서브텍스트 추가
  - 대화 태그 최적화

- **`/consistency-check`**: 일관성 검증 (13 tests)
  - 캐릭터 행동 패턴 체크
  - 타임라인 오류 발견
  - 세계관 규칙 검증

#### Phase 3: Specialized Agents (40 tests)
- **`genre-specialist`**: 장르 전문가 에이전트 (10 tests)
  - 판타지, 로맨스, 스릴러, SF, 호러 전문 지식
  - 장르별 트로프와 관습 가이드
  - 장르 블렌딩 전략

- **`character-developer`**: 캐릭터 개발 에이전트 (10 tests)
  - Want vs Need 심화 분석
  - MBTI/Enneagram 프레임워크
  - 관계 역학 매핑

- **`plot-architect`**: 플롯 설계 에이전트 (10 tests)
  - Save the Cat 15 비트 구조
  - Hero's Journey 적용
  - 서브플롯 짜기

- **`editor`**: 전문 편집 에이전트 (10 tests)
  - Macro-Meso-Micro 3단계 편집
  - 문법, 흐름, 가독성 검토
  - 우선순위 기반 피드백

#### Phase 4: Advanced Features (83 tests)
- **`/worldbuilding`**: 세계관 구축 명령어 (19 tests)
  - 지리, 역사, 문화 설계
  - 마법/기술 시스템 구축
  - 정치, 경제, 종교 설정
  - 일관성 체크리스트

- **`/timeline`**: 타임라인 추적 명령어 (19 tests)
  - 시간순 사건 관리
  - 플래시백 구조화
  - 평행 스토리라인 동기화
  - 시간적 일관성 검증

- **`/name-generator`**: 이름 생성 명령어 (21 tests)
  - 캐릭터/장소 이름 생성
  - 장르별/문화별 작명 가이드
  - 의미와 상징 제공
  - 발음 가이드

- **`/word-count`**: 단어 수 관리 명령어 (24 tests)
  - 목표 설정 및 추적
  - 장르별 분량 가이드
  - 챕터/장면 균형 분석
  - 페이싱 검증
  - 마감 계산

#### Phase 5: Testing & Documentation
- TDD 방식 개발 (Red-Green-Refactor)
- **총 213개 테스트** 100% 통과
- Jest 커버리지 설정
- README.md 작성
- CONTRIBUTING.md 작성
- CHANGELOG.md 작성

### Technical Details

- **Test Coverage**: 213/213 tests passing (100%)
  - Command tests: 173개
  - Agent tests: 40개

- **Development Methodology**: Test-Driven Development (TDD)
  - Red: 테스트 먼저 작성
  - Green: 최소 구현
  - Refactor: 코드 개선

- **Quality Assurance**:
  - ESLint 설정
  - Jest 테스트 프레임워크
  - Conventional Commits
  - 100% 테스트 커버리지

### Repository Structure

```
novel-writer-plugin/
├── .claude-plugin/
│   └── plugin.json
├── commands/ (9 commands)
│   ├── plot-outline.md
│   ├── character-profile.md
│   ├── scene-write.md
│   ├── dialogue-enhance.md
│   ├── consistency-check.md
│   ├── worldbuilding.md
│   ├── timeline.md
│   ├── name-generator.md
│   └── word-count.md
├── agents/ (4 agents)
│   ├── genre-specialist.md
│   ├── character-developer.md
│   ├── plot-architect.md
│   └── editor.md
├── __tests__/ (213 tests)
│   ├── commands/
│   └── agents/
├── README.md
├── CONTRIBUTING.md
├── CHANGELOG.md
├── package.json
└── jest.config.js
```

## [Unreleased]

### Planned for v1.1.0
- [ ] 영어 버전 지원
- [ ] 캐릭터 관계 시각화
- [ ] 플롯 구조 다이어그램
- [ ] 템플릿 라이브러리
- [ ] 성능 최적화

### Ideas for v2.0.0
- [ ] AI 기반 스타일 분석
- [ ] 협업 작가 기능
- [ ] 출판 준비 도구
- [ ] 웹 인터페이스
- [ ] 다국어 지원 (영어, 일본어, 중국어)

## Version History

### [1.0.0] - 2024-10-18
- 초기 릴리스
- 9개 명령어
- 4개 에이전트
- 213개 테스트
- 한국어 완전 지원

---

## 버전 관리 규칙

### Major (x.0.0)
- 호환성이 깨지는 변경
- 전체 구조 재설계

### Minor (0.x.0)
- 새로운 기능 추가
- 하위 호환성 유지

### Patch (0.0.x)
- 버그 수정
- 문서 개선
- 성능 최적화

---

**Contributors**: devlikebear
**License**: MIT
**Homepage**: https://github.com/yourusername/novel-writer-plugin
