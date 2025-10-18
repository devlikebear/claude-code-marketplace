# Claude Code Marketplace

커뮤니티 기반 Claude Code 플러그인 마켓플레이스 - **5개 플러그인 제공**

[![Version](https://img.shields.io/badge/version-1.2.0-blue)](https://github.com/changheonshin/claude-code-marketplace)
[![Plugins](https://img.shields.io/badge/plugins-5-brightgreen)](https://github.com/changheonshin/claude-code-marketplace)
[![License](https://img.shields.io/badge/license-MIT-orange)](LICENSE)

## 📦 포함된 플러그인

### 1. `/tdd-workflow` - AI를 위한 TDD 워크플로우
Kent Beck의 TDD 원칙을 따라 Next.js 웹 서비스를 체계적으로 개발하는 워크플로우를 제공합니다.

**버전**: 1.0.0
**타입**: Command
**주요 기능:**
- Red-Green-Refactor 사이클 자동화
- Next.js 특화 테스트 전략
- 단계별 체크리스트 생성

### 2. `/docs` - 문서 자동화
API 명세, README, CHANGELOG를 자동으로 생성하거나 최신 상태로 유지합니다.

**버전**: 1.0.0
**타입**: Command
**주요 기능:**
- OpenAPI/Swagger 스펙 생성
- README.md 작성/갱신
- CHANGELOG.md 자동 생성

### 3. `/github-flow` - GitHub Flow 워크플로우 자동화
GitHub Flow 전체 프로세스를 체크리스트 중심으로 자동화합니다.

**버전**: 1.0.0
**타입**: Command
**주요 기능:**
- 이슈 생성 및 작업 계획 수립
- 브랜치 전략 자동화
- PR 생성, 리뷰, 병합 자동화

### 4. `quality-guardian` - 코드 품질 및 보안 종합 검사
코드 품질, 보안, 테스트를 종합적으로 검사하는 전문 Sub-agent입니다.

**버전**: 1.0.0
**타입**: Agent
**주요 기능:**
- 코드 리뷰 및 품질 분석
- 보안 취약점 스캔
- GitLeaks 검사
- 단위 테스트 작성 및 커버리지 분석

### 5. `novel-writer` - 장르 소설 작성 전문 플러그인 ⭐ NEW

장르 소설 작성을 위한 완전한 통합 워크플로우입니다. TDD 방식으로 개발되어 높은 품질을 보장합니다.

**버전**: 1.2.0
**타입**: Full Plugin (13 Commands + 4 Agents + 6 Skills)
**테스트**: 344개 (100% 통과)
**Featured**: ⭐

**13개 전문 명령어:**

- `/plot-outline`: 3막 구조 플롯 생성
- `/character-profile`: 입체적 캐릭터 프로필
- `/scene-write`: Show, Don't Tell 장면 작성
- `/dialogue-enhance`: 자연스러운 대화 개선
- `/consistency-check`: 일관성 검증
- `/worldbuilding`: 세계관 구축
- `/timeline`: 타임라인 추적
- `/name-generator`: 의미있는 이름 생성
- `/word-count`: 진행 상황 추적
- `/help`: 종합 도움말
- `/start`: 통합 워크플로우 시작
- `/continue`: 프로젝트 재개
- `/context`: 콘텐츠 검색 및 참조

**4개 전문 에이전트:**

- `genre-specialist`: 장르 전문가
- `character-developer`: 캐릭터 개발자
- `plot-architect`: 플롯 설계자
- `editor`: 전문 편집자

**6개 장르 Skills:**

- Fantasy Worldbuilding: 판타지 세계관 구축
- Romance Tropes: 로맨스 트로프 및 관계 역학
- Thriller Pacing: 스릴러 페이싱 및 긴장감
- SciFi Technology: SF 과학기술 설정
- Horror Atmosphere: 공포 분위기 조성
- Mystery Plotting: 미스터리 플롯 구성

**상세 문서**: [plugins/novel-writer-plugin/README.md](plugins/novel-writer-plugin/README.md)

## 🚀 설치 방법

### 마켓플레이스 추가
```bash
/plugin marketplace add changheonshin/claude-code-marketplace
```

### 플러그인 설치

```bash
# 인터랙티브 방식으로 플러그인 선택
/plugin

# 특정 플러그인 설치
/plugin install tdd-workflow@claude-code-marketplace
/plugin install docs@claude-code-marketplace
/plugin install github-flow@claude-code-marketplace
/plugin install quality-guardian@claude-code-marketplace
/plugin install novel-writer@claude-code-marketplace
```

## 📖 사용 방법

### `/tdd-workflow` 사용 예시

```bash
/tdd-workflow "Add user authentication feature"
/tdd-workflow --feature "Shopping cart" --type component
```

### `/docs` 사용 예시

```bash
/docs --type api
/docs --type readme
/docs --all
```

### `/github-flow` 사용 예시

```bash
/github-flow --issue-create --type feature --title "Add user profile page"
/github-flow --plan --issue 123
/github-flow --branch --issue 123
/github-flow --pr-create --issue 123
```

### `quality-guardian` 사용 예시

```
"Use the quality-guardian agent to review src/api/auth.ts"
"Use the quality-guardian agent to check security vulnerabilities"
"Use the quality-guardian agent to analyze test coverage"
```

### `novel-writer` 사용 예시

**명령어 사용:**

```bash
# 플롯 구조 설계
/plot-outline 판타지 소설, 주인공은 마법을 잃은 마법사

# 캐릭터 개발
/character-profile 여성 주인공, 30대 형사, 정의감 강함

# 세계관 구축
/worldbuilding 판타지 세계, 마법 시스템 기반

# 타임라인 관리
/timeline 7일간의 스릴러 플롯

# 이름 생성
/name-generator 판타지 엘프 궁수 여성

# 진행 상황 추적
/word-count 목표: 100,000 단어, 현재: 45,000 단어
```

**에이전트 사용:**

```
"Use genre-specialist to help design a dark fantasy world"
"Ask character-developer to deepen my protagonist's motivation"
"Have plot-architect structure my novel using Save the Cat"
"Ask editor to review my chapter for grammar and flow"
```

**상세 사용법**: [plugins/novel-writer-plugin/README.md](plugins/novel-writer-plugin/README.md)

## 🛠️ 개발 가이드

플러그인 개발 방법은 [docs/DEVELOPMENT_GUIDE.md](docs/DEVELOPMENT_GUIDE.md)를 참조하세요.

## 🤝 기여하기

플러그인 제출 방법은 [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md)를 참조하세요.

## 📄 라이선스

MIT License

## 📞 문의 및 지원

- GitHub Issues: https://github.com/changheonshin/claude-code-marketplace/issues
- GitHub Discussions: https://github.com/changheonshin/claude-code-marketplace/discussions
