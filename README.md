# Claude Code Marketplace

커뮤니티 기반 Claude Code 플러그인 마켓플레이스

## 📦 포함된 플러그인

### 1. `/tdd-workflow` - AI를 위한 TDD 워크플로우
Kent Beck의 TDD 원칙을 따라 Next.js 웹 서비스를 체계적으로 개발하는 워크플로우를 제공합니다.

**주요 기능:**
- Red-Green-Refactor 사이클 자동화
- Next.js 특화 테스트 전략
- 단계별 체크리스트 생성

### 2. `/docs` - 문서 자동화
API 명세, README, CHANGELOG를 자동으로 생성하거나 최신 상태로 유지합니다.

**주요 기능:**
- OpenAPI/Swagger 스펙 생성
- README.md 작성/갱신
- CHANGELOG.md 자동 생성

### 3. `/github-flow` - GitHub Flow 워크플로우 자동화
GitHub Flow 전체 프로세스를 체크리스트 중심으로 자동화합니다.

**주요 기능:**
- 이슈 생성 및 작업 계획 수립
- 브랜치 전략 자동화
- PR 생성, 리뷰, 병합 자동화

### 4. `quality-guardian` - 코드 품질 및 보안 종합 검사
코드 품질, 보안, 테스트를 종합적으로 검사하는 전문 Sub-agent입니다.

**주요 기능:**
- 코드 리뷰 및 품질 분석
- 보안 취약점 스캔
- GitLeaks 검사
- 단위 테스트 작성 및 커버리지 분석

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

## 🛠️ 개발 가이드

플러그인 개발 방법은 [docs/DEVELOPMENT_GUIDE.md](docs/DEVELOPMENT_GUIDE.md)를 참조하세요.

## 🤝 기여하기

플러그인 제출 방법은 [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md)를 참조하세요.

## 📄 라이선스

MIT License

## 📞 문의 및 지원

- GitHub Issues: https://github.com/changheonshin/claude-code-marketplace/issues
- GitHub Discussions: https://github.com/changheonshin/claude-code-marketplace/discussions
