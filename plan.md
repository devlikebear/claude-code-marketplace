# Claude Code Marketplace 개발 계획

## 프로젝트 개요

커뮤니티가 만든 Claude Code 플러그인을 공유하고 설치할 수 있는 마켓플레이스 구축

**참고 문서:** [docs/DEVELOPMENT_GUIDE.md](docs/DEVELOPMENT_GUIDE.md)

---

## Phase 1: 마켓플레이스 인프라 구축

### 1.1 디렉토리 구조 생성
- [ ] `.claude-plugin/` 디렉토리 생성
- [ ] `plugins/commands/` 디렉토리 생성
- [ ] `plugins/agents/` 디렉토리 생성
- [ ] `docs/` 디렉토리 생성

### 1.2 마켓플레이스 설정 파일 작성
- [ ] `.claude-plugin/plugin.json` 작성
  - name, version, description 정의
- [ ] `.claude-plugin/marketplace.json` 작성
  - 플러그인 목록 정의 (상대 경로로 연결)

### 1.3 문서 작성
- [ ] `README.md` - 마켓플레이스 소개 및 설치 가이드
- [ ] `docs/CONTRIBUTING.md` - 플러그인 제출 가이드
- [ ] `docs/PLUGIN_DEVELOPMENT.md` - 간략한 개발 가이드

---

## Phase 2: 플러그인 개발 (4개)

### Plugin 1: `/tdd-workflow` - AI를 위한 TDD 워크플로우 (Next.js)

**타입:** Command
**목적:** Kent Beck의 TDD 원칙을 따라 AI가 Next.js 웹 서비스를 개발하는 체계적인 워크플로우 제공

**기능:**
- **Red-Green-Refactor 사이클 자동화**
  - Red: 실패하는 테스트 먼저 작성
  - Green: 테스트를 통과하는 최소한의 코드 작성
  - Refactor: 코드 개선 및 리팩토링
- **Next.js 특화 테스트 전략**
  - React 컴포넌트 테스트 (Testing Library)
  - API 라우트 테스트
  - Server/Client 컴포넌트 구분 테스트
- **워크플로우 단계별 가이드**
  - 요구사항 분석 → 테스트 케이스 정의 → 구현 → 검증 → 리팩토링
- **테스트 커버리지 추적**

**구현:**
- [ ] `plugins/commands/tdd-workflow/` 디렉토리 생성
- [ ] `.claude-plugin/plugin.json` 작성
- [ ] `commands/tdd-workflow.md` 작성
  - TDD 원칙 및 단계별 시스템 프롬프트
  - Next.js 프로젝트 구조 이해
  - 테스트 프레임워크 감지 (Jest, Vitest, Playwright)
- [ ] `README.md` 작성 (사용 예제, 워크플로우 다이어그램)

**예상 사용법:**
```
/tdd-workflow "Add user authentication feature"
/tdd-workflow --feature "Shopping cart" --type component
/tdd-workflow --refactor src/components/Header.tsx
```

**체크리스트 생성:**
- [ ] 기능 요구사항 분석
- [ ] 테스트 케이스 작성 (Red)
- [ ] 최소 구현 (Green)
- [ ] 테스트 실행 및 통과 확인
- [ ] 코드 리팩토링 (Refactor)
- [ ] 최종 테스트 및 커버리지 확인

---

### Plugin 2: `/docs` - API 명세, README, CHANGELOG 작성/갱신

**타입:** Command
**목적:** 프로젝트 문서를 자동으로 생성하거나 최신 상태로 유지

**기능:**
- **API 명세 생성/갱신**
  - OpenAPI/Swagger 스펙 생성
  - 엔드포인트 자동 감지 (Next.js API Routes, Express, FastAPI 등)
  - 요청/응답 예제 포함
- **README.md 작성/갱신**
  - 프로젝트 개요, 설치 방법, 사용법
  - 최신 코드 변경 사항 반영
  - Badge 생성 (Build status, Coverage, License 등)
- **CHANGELOG.md 작성/갱신**
  - Git 커밋 히스토리 분석
  - Conventional Commits 기반 자동 분류
  - 버전별 변경 사항 정리

**구현:**
- [ ] `plugins/commands/docs/` 디렉토리 생성
- [ ] `.claude-plugin/plugin.json` 작성
- [ ] `commands/docs.md` 작성
  - 코드베이스 분석 로직
  - 문서 템플릿 정의
  - Git 히스토리 분석 로직
- [ ] `README.md` 작성

**예상 사용법:**
```
/docs --type api
/docs --type readme
/docs --type changelog
/docs --all
/docs --update
```

**체크리스트 생성:**
- [ ] 프로젝트 구조 분석
- [ ] API 엔드포인트 추출
- [ ] 기존 문서 확인
- [ ] 문서 생성/갱신
- [ ] 링크 및 형식 검증

---

### Plugin 3: `/github-flow` - GitHub Flow 워크플로우 자동화

**타입:** Command
**목적:** GitHub Flow 전체 프로세스를 체크리스트 중심으로 자동화

**기능:**
- **이슈 생성**
  - 기능 요청(Feature Request) 템플릿
  - 버그 수정(Bug Report) 템플릿
  - 이슈 번호 자동 추적
- **작업 계획 수립**
  - GitHub 이슈와 코드베이스 분석
  - 체크리스트 중심의 작업 계획 문서 생성
  - 예상 소요 시간 및 영향 범위 분석
- **브랜치 전략**
  - `feature/#{issue-number}-{description}` 브랜치 자동 생성
  - `fix/#{issue-number}-{description}` 브랜치 자동 생성
- **PR 생성 및 관리**
  - PR 제목/본문 자동 생성 (이슈 연동)
  - 변경 사항 요약
  - 체크리스트 포함
- **PR 리뷰**
  - 코드 변경 사항 분석
  - 리뷰 코멘트 제안
- **PR 병합 후 정리**
  - main 브랜치로 복귀
  - `git pull origin main` 실행
  - 작업 브랜치 삭제

**구현:**
- [ ] `plugins/commands/github-flow/` 디렉토리 생성
- [ ] `.claude-plugin/plugin.json` 작성
- [ ] `commands/github-flow.md` 작성
  - GitHub CLI (`gh`) 명령어 활용
  - 이슈/PR 템플릿 정의
  - 워크플로우 단계별 자동화
- [ ] `README.md` 작성

**예상 사용법:**
```
/github-flow --issue-create --type feature --title "Add user profile page"
/github-flow --issue-create --type bug --title "Fix login redirect"
/github-flow --plan --issue 123
/github-flow --branch --issue 123
/github-flow --pr-create --issue 123
/github-flow --pr-review 456
/github-flow --merge-cleanup
```

**워크플로우 체크리스트:**
- [ ] GitHub 이슈 생성
- [ ] 이슈 및 코드베이스 분석
- [ ] 작업 계획 문서 작성
- [ ] feature/fix 브랜치 생성
- [ ] 개발 작업 수행
- [ ] PR 생성
- [ ] PR 리뷰 수행
- [ ] PR 병합
- [ ] main 브랜치 복귀 및 pull
- [ ] 작업 브랜치 정리

---

### Plugin 4: `quality-guardian` - 코드 품질 및 보안 종합 검사 Sub-agent

**타입:** Sub-agent
**목적:** 코드 품질, 보안, 테스트를 종합적으로 검사하는 전문 에이전트

**기능:**
- **코드 리뷰**
  - 코드 품질 분석 (복잡도, 가독성, 유지보수성)
  - 코딩 컨벤션 준수 확인
  - 베스트 프랙티스 체크
  - 개선 제안 및 리팩토링 가이드
- **취약점 분석**
  - 보안 취약점 스캔 (OWASP Top 10)
  - 의존성 보안 검사 (`npm audit`, `pip-audit`)
  - SQL Injection, XSS, CSRF 등 취약점 검사
- **GitLeaks 검사**
  - 민감 정보 노출 검사 (API 키, 비밀번호, 토큰)
  - `.env` 파일 관리 확인
  - Git 히스토리 내 비밀 정보 검사
- **단위 테스트 작성**
  - 테스트 커버리지 분석
  - 미테스트 함수 감지
  - 테스트 케이스 생성
  - Edge case 고려
- **테스트 리뷰**
  - 테스트 품질 평가
  - Assertion 적절성 검토
  - Mock/Stub 전략 검토
- **테스트 커버리지 검사**
  - 라인/브랜치/함수 커버리지 분석
  - 커버리지 리포트 생성
  - 미달 영역 식별 및 개선 제안

**구현:**
- [ ] `plugins/agents/quality-guardian/` 디렉토리 생성
- [ ] `.claude-plugin/plugin.json` 작성
- [ ] `agents/quality-guardian.md` 작성
  - 종합 품질 검사 시스템 프롬프트
  - 각 검사 항목별 전문 지식
  - 도구 활용: ESLint, Prettier, npm audit, gitleaks, Jest/Pytest
  - 리포트 생성 포맷
- [ ] `README.md` 작성

**예상 사용법:**
```
"Use the quality-guardian agent to review src/api/auth.ts"
"Use the quality-guardian agent to check security vulnerabilities"
"Use the quality-guardian agent to analyze test coverage"
"Use the quality-guardian agent to scan for leaked secrets"
```

**검사 체크리스트:**
- [ ] 코드 품질 분석
- [ ] 보안 취약점 스캔
- [ ] GitLeaks 비밀 정보 검사
- [ ] 테스트 커버리지 분석
- [ ] 미테스트 함수 식별
- [ ] 단위 테스트 작성
- [ ] 테스트 품질 리뷰
- [ ] 종합 리포트 생성

---

## Phase 3: 품질 보증

### 3.1 로컬 테스트
- [ ] 개발 마켓플레이스를 로컬 경로로 추가
  ```bash
  /plugin marketplace add file:///path/to/claude-code-marketplace
  ```
- [ ] 각 플러그인 개별 설치 및 동작 확인
  - [ ] `/tdd-workflow` 명령어 테스트
  - [ ] `/docs` 명령어 테스트
  - [ ] `/github-flow` 명령어 테스트
  - [ ] `quality-guardian` 에이전트 호출 테스트
- [ ] 실제 프로젝트에서 워크플로우 검증
- [ ] 버그 수정 및 개선

### 3.2 검증
- [ ] 각 플러그인에 대해 `claude plugin validate` 실행
  ```bash
  claude plugin validate plugins/commands/tdd-workflow
  claude plugin validate plugins/commands/docs
  claude plugin validate plugins/commands/github-flow
  claude plugin validate plugins/agents/quality-guardian
  ```
- [ ] 검증 오류 수정
- [ ] plugin.json 스키마 확인
- [ ] frontmatter 필드 확인

### 3.3 문서 검토
- [ ] 모든 플러그인 README 완성도 확인
- [ ] 사용 예제 추가 및 검증
- [ ] 워크플로우 다이어그램 추가
- [ ] 트러블슈팅 가이드 작성

---

## Phase 4: CI/CD 및 배포

### 4.1 GitHub Actions 설정
- [ ] `.github/workflows/validate.yml` 작성
  - PR 시 모든 플러그인 자동 검증
  - `claude plugin validate` 실행
  - 검증 실패 시 PR 차단
- [ ] `.github/workflows/test.yml` 작성 (선택)
  - 플러그인 설치 테스트
  - 기본 동작 테스트

### 4.2 템플릿 작성
- [ ] `.github/PULL_REQUEST_TEMPLATE.md`
  - 플러그인 제출 체크리스트
  - 검증 결과 첨부
- [ ] `.github/ISSUE_TEMPLATE/plugin-submission.md`
  - 새 플러그인 제안 템플릿
- [ ] `.github/ISSUE_TEMPLATE/bug-report.md`
  - 버그 리포트 템플릿
- [ ] `.github/ISSUE_TEMPLATE/feature-request.md`
  - 기능 요청 템플릿

### 4.3 배포
- [ ] GitHub 저장소 공개
- [ ] README에 설치 가이드 추가
  ```bash
  /plugin marketplace add changheonshin/claude-code-marketplace
  ```
- [ ] 각 플러그인 소개 및 데모 추가
- [ ] 커뮤니티 공유
  - Claude Discord
  - Reddit r/ClaudeAI
  - Hacker News

---

## 플러그인 선정 이유 및 특징

### 1. `/tdd-workflow`
- **이유**: AI 시대의 개발 방법론으로 TDD는 여전히 중요
- **특징**: Kent Beck의 원칙을 따르며 Next.js 특화
- **가치**: 체계적인 개발 프로세스 제공

### 2. `/docs`
- **이유**: 문서화는 필수지만 종종 간과됨
- **특징**: API 명세, README, CHANGELOG 자동화
- **가치**: 프로젝트 유지보수성 향상

### 3. `/github-flow`
- **이유**: GitHub Flow는 현대 개발의 표준 워크플로우
- **특징**: 이슈부터 PR 병합까지 전체 프로세스 자동화
- **가치**: 개발 효율성 극대화

### 4. `quality-guardian`
- **이유**: 코드 품질과 보안은 출시 전 필수 검증 사항
- **특징**: 코드 리뷰, 보안, 테스트를 하나의 에이전트로 통합
- **가치**: 포괄적인 품질 관리

---

## 기술 스택 및 도구

### Command 플러그인에서 활용
- **Git**: 브랜치, 커밋, diff 분석
- **GitHub CLI (`gh`)**: 이슈, PR 관리
- **npm/yarn/pnpm**: 패키지 관리 및 스크립트 실행
- **테스트 프레임워크**: Jest, Vitest, Playwright
- **린터/포매터**: ESLint, Prettier

### Sub-agent에서 활용
- **보안 도구**: npm audit, gitleaks, OWASP 체크리스트
- **테스트 도구**: Jest, Pytest, coverage.py, c8
- **정적 분석**: ESLint, Pylint, SonarQube (선택)

---

## 예상 일정

- **Week 1**: Phase 1 완료 (마켓플레이스 인프라)
- **Week 2**: Plugin 1-2 개발 (`/tdd-workflow`, `/docs`)
- **Week 3**: Plugin 3-4 개발 (`/github-flow`, `quality-guardian`)
- **Week 4**: Phase 3 완료 (품질 보증 및 테스트)
- **Week 5**: Phase 4 완료 (CI/CD 및 배포)

---

## 성공 지표

### 기능 지표
- [ ] 4개 플러그인 모두 정상 동작
- [ ] 마켓플레이스 설치 가능
- [ ] 모든 플러그인 검증 통과
- [ ] CI/CD 파이프라인 구축

### 품질 지표
- [ ] 문서 완성도 90% 이상
- [ ] 각 플러그인 사용 예제 3개 이상
- [ ] 버그 리포트 0건 (초기 배포 시)

### 커뮤니티 지표
- [ ] GitHub Star 10개 이상
- [ ] 커뮤니티 피드백 수집
- [ ] 플러그인 사용자 5명 이상
- [ ] 외부 기여자 PR 1건 이상

---

## 위험 요소 및 대응 방안

### 위험 1: 플러그인 복잡도 과다
- **대응**: MVP 기능만 우선 구현, 점진적 개선

### 위험 2: GitHub CLI 의존성
- **대응**: `gh` 미설치 시 안내 메시지 및 폴백 제공

### 위험 3: 테스트 프레임워크 다양성
- **대응**: 주요 프레임워크 우선 지원, 확장 가능한 구조 설계

### 위험 4: 보안 도구 설치 필요
- **대응**: 선택적 기능으로 제공, 설치 가이드 명시

---

## 다음 단계

1. **즉시 시작**: Phase 1 구현 (디렉토리 구조 및 기본 설정)
2. **우선순위**: `/tdd-workflow` 플러그인부터 개발 (가장 복잡하므로)
3. **반복 개선**: 각 플러그인 완성 후 피드백 수렴
