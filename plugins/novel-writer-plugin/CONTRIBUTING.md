# Contributing to Novel Writer Plugin

Novel Writer Plugin에 기여해주셔서 감사합니다! 이 문서는 프로젝트에 기여하는 방법을 안내합니다.

## 목차

1. [행동 강령](#행동-강령)
2. [시작하기](#시작하기)
3. [개발 프로세스](#개발-프로세스)
4. [코딩 표준](#코딩-표준)
5. [커밋 메시지](#커밋-메시지)
6. [Pull Request](#pull-request)
7. [테스팅](#테스팅)

## 행동 강령

### 우리의 약속

모두가 환영받는 환경을 만들기 위해, 우리는 다음을 약속합니다:

- 배려심 있고 존중하는 언어 사용
- 다양한 관점과 경험 존중
- 건설적 비판 수용
- 커뮤니티를 위한 최선의 선택

### 용납되지 않는 행동

- 성적인 언어나 이미지 사용
- 모욕적이거나 비하하는 댓글
- 공격적인 언어나 정치적 공격
- 개인 정보 무단 공개
- 기타 비전문적인 행동

## 시작하기

### 개발 환경 설정

```bash
# 1. 저장소 포크
# GitHub에서 Fork 버튼 클릭

# 2. 로컬에 클론
git clone https://github.com/your-username/novel-writer-plugin.git
cd novel-writer-plugin

# 3. 업스트림 리모트 추가
git remote add upstream https://github.com/original-owner/novel-writer-plugin.git

# 4. 의존성 설치
npm install

# 5. 테스트 실행하여 환경 검증
npm test
```

### 브랜치 전략

- `main`: 프로덕션 브랜치 (항상 배포 가능한 상태)
- `develop`: 개발 브랜치 (다음 릴리스 준비)
- `feature/*`: 새로운 기능 개발
- `fix/*`: 버그 수정
- `docs/*`: 문서 개선

## 개발 프로세스

### 1. 이슈 생성

새로운 기능이나 버그 수정을 시작하기 전에 이슈를 생성하세요:

```markdown
**Feature Request:**
- 제목: [FEATURE] 새로운 명령어 추가
- 설명: 어떤 기능인지, 왜 필요한지
- 예상 동작: 어떻게 작동해야 하는지

**Bug Report:**
- 제목: [BUG] 명령어 X가 작동하지 않음
- 재현 방법: 단계별 설명
- 예상 결과: 어떻게 작동해야 하는지
- 실제 결과: 실제로 어떻게 작동하는지
```

### 2. 브랜치 생성

```bash
# feature 브랜치
git checkout -b feature/add-poetry-command

# bugfix 브랜치
git checkout -b fix/dialogue-enhance-error

# docs 브랜치
git checkout -b docs/update-readme
```

### 3. TDD 사이클 준수

Novel Writer Plugin은 **엄격한 TDD 방식**으로 개발됩니다.

**Red-Green-Refactor 사이클:**

#### Red (실패하는 테스트 작성)

```bash
# 1. 테스트 파일 생성
touch __tests__/commands/new-feature.test.js

# 2. 실패하는 테스트 작성
npm test -- new-feature.test.js
# 결과: 테스트 실패 (RED)
```

```javascript
// __tests__/commands/new-feature.test.js
describe('new-feature command', () => {
  it('should have frontmatter with name', () => {
    expect(commandContent).toMatch(/name:\s*new-feature/);
  });

  // 더 많은 테스트...
});
```

#### Green (최소한의 구현)

```bash
# 1. 명령어 파일 생성
touch commands/new-feature.md

# 2. 최소한의 구현
# commands/new-feature.md에 기본 구조 작성

# 3. 테스트 실행
npm test -- new-feature.test.js
# 결과: 테스트 통과 (GREEN)
```

#### Refactor (코드 개선)

```bash
# 1. 코드 품질 개선
# - 더 나은 설명 추가
# - 예시 개선
# - 구조 최적화

# 2. 테스트가 여전히 통과하는지 확인
npm test -- new-feature.test.js
# 결과: 여전히 통과 (GREEN)
```

### 4. 코드 작성

#### 명령어 추가 (Commands)

```markdown
---
name: command-name
description: 명령어에 대한 간단한 설명
category: planning|writing|editing|worldbuilding
---

# 명령어 제목

명령어 설명 및 가이드...

## 주요 기능

- 기능 1
- 기능 2

## 사용 예시

\```
/command-name 인자
\```

## 출력 형식

...
```

#### 에이전트 추가 (Agents)

```markdown
---
name: agent-name
description: 에이전트 역할 설명
---

# 에이전트 제목

당신은 [역할] 전문가입니다...

## 핵심 역량

### 1. 역량 1

...

## 작업 방식

...
```

## 코딩 표준

### Markdown 스타일

- **헤더**: # → ## → ### 순서로 사용
- **목록**: 일관된 마커 사용 (-, *)
- **코드 블록**: 언어 명시 (```bash, ```javascript)
- **강조**: **굵게**, *이탤릭*

### 테스트 작성

```javascript
// 좋은 테스트
it('should mention key concept', () => {
  expect(content).toMatch(/concept|개념/i);
});

// 나쁜 테스트 (너무 구체적)
it('should have exact text', () => {
  expect(content).toBe('정확히 이 문장');
});
```

### 파일 구조

```
새로운 명령어 추가 시:
1. commands/new-command.md
2. __tests__/commands/new-command.test.js

새로운 에이전트 추가 시:
1. agents/new-agent.md
2. __tests__/agents/new-agent.test.js
```

## 커밋 메시지

### Conventional Commits 형식 사용

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type

- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 변경
- `test`: 테스트 추가/수정
- `refactor`: 코드 리팩토링
- `chore`: 빌드/설정 변경

### 예시

```bash
# Feature
git commit -m "feat(command): add poetry-generator command

Adds new command for generating poetry with various styles:
- Haiku
- Sonnet
- Free verse

Includes 15 tests covering all poetry types"

# Bug fix
git commit -m "fix(dialogue): correct character voice detection

Fixes issue where dialogue-enhance was not properly
detecting character-specific speech patterns

Closes #42"

# Documentation
git commit -m "docs(readme): update installation instructions

- Add troubleshooting section
- Update Node.js version requirement
- Add screenshots"
```

## Pull Request

### PR 생성 전 체크리스트

- [ ] 모든 테스트 통과 (`npm test`)
- [ ] 새로운 기능에 대한 테스트 추가
- [ ] 문서 업데이트 (필요시)
- [ ] 커밋 메시지가 Conventional Commits 형식
- [ ] 코드 스타일 일관성 유지

### PR 템플릿

```markdown
## 변경 사항

### 요약
이 PR에서 변경된 내용을 간단히 설명

### 변경 타입
- [ ] 새로운 기능
- [ ] 버그 수정
- [ ] 문서 개선
- [ ] 리팩토링
- [ ] 테스트

### 관련 이슈
Closes #123

## 테스트

### 테스트 결과
\```
npm test
# 결과 붙여넣기
\```

### 테스트 시나리오
- 시나리오 1: ...
- 시나리오 2: ...

## 스크린샷 (필요시)

[스크린샷 첨부]

## 체크리스트

- [ ] 모든 테스트 통과
- [ ] 새 테스트 추가 (기능 추가 시)
- [ ] 문서 업데이트
- [ ] TDD 사이클 준수
```

### PR 리뷰 프로세스

1. **자동 검증**: GitHub Actions가 테스트 실행
2. **코드 리뷰**: 최소 1명의 승인 필요
3. **수정 반영**: 리뷰 코멘트 반영
4. **병합**: Squash and merge 사용

## 테스팅

### 테스트 실행

```bash
# 전체 테스트
npm test

# 특정 테스트
npm test -- plot-outline.test.js

# 워치 모드
npm test -- --watch

# 커버리지
npm run test:coverage
```

### 테스트 작성 가이드

#### 명령어 테스트 구조

```javascript
describe('command-name command', () => {
  let commandContent;

  beforeAll(() => {
    commandContent = readFileSync('commands/command-name.md', 'utf-8');
  });

  describe('기본 구조 검증', () => {
    it('should have frontmatter', () => {
      expect(commandContent).toMatch(/^---\s*\n/);
    });
  });

  describe('기능 검증', () => {
    it('should include key features', () => {
      expect(commandContent).toMatch(/keyword/i);
    });
  });

  describe('품질 검증', () => {
    it('should be at least 1500 characters', () => {
      expect(commandContent.length).toBeGreaterThan(1500);
    });
  });
});
```

### 커버리지 목표

- **Lines**: 80%+
- **Branches**: 75%+
- **Functions**: 80%+
- **Statements**: 80%+

## 릴리스 프로세스

1. **버전 업데이트**
   ```bash
   npm version patch|minor|major
   ```

2. **CHANGELOG 업데이트**
   ```markdown
   ## [1.1.0] - 2024-10-18

   ### Added
   - 새 기능 설명

   ### Fixed
   - 버그 수정 설명
   ```

3. **Git 태그 생성**
   ```bash
   git tag -a v1.1.0 -m "Release v1.1.0"
   git push origin v1.1.0
   ```

## 도움말

### 자주 묻는 질문

**Q: 어떤 기여를 할 수 있나요?**
A: 새 명령어, 버그 수정, 문서 개선, 테스트 추가 등 모든 기여를 환영합니다!

**Q: TDD가 처음인데 어떻게 시작하나요?**
A: 기존 테스트 파일을 참고하고, 간단한 명령어부터 시작하세요.

**Q: 리뷰에 얼마나 걸리나요?**
A: 보통 2-3일 내에 첫 리뷰가 이루어집니다.

### 커뮤니티

- **GitHub Issues**: 버그 리포트, 기능 요청
- **GitHub Discussions**: 질문, 아이디어 공유
- **Email**: your@email.com

## 감사의 글

모든 기여자분들께 진심으로 감사드립니다! 🙏

---

이 문서는 계속 업데이트됩니다. 개선 제안은 언제든 환영합니다!
