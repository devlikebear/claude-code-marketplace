# Changelog

All notable changes to the Novel Writer Plugin will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

**Contributors**: ChangHeon Shin
**License**: MIT
**Homepage**: https://github.com/yourusername/novel-writer-plugin
