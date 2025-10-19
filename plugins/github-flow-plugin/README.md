# `/github-flow` - GitHub Flow 워크플로우 자동화

GitHub Flow 전체 프로세스를 체크리스트 중심으로 자동화하는 플러그인입니다.

## 📋 주요 기능

### 이슈 관리
- Feature Request / Bug Report 템플릿 제공
- 자동 라벨 지정
- 이슈 번호 자동 추적

### 작업 계획 수립
- 이슈 및 코드베이스 분석
- 체크리스트 중심의 작업 계획 문서 생성
- 예상 소요 시간 및 영향 범위 분석

### 브랜치 전략
- `feature/#{issue-number}-{description}` 자동 생성
- `fix/#{issue-number}-{description}` 자동 생성
- main 브랜치 최신 상태 확인

### PR 관리
- PR 제목/본문 자동 생성 (이슈 연동)
- 변경 사항 요약
- 체크리스트 포함
- 코드 변경 사항 분석 및 리뷰 코멘트 제안

### 병합 후 정리
- main 브랜치로 복귀
- `git pull origin main` 실행
- 작업 브랜치 삭제
- 원격 브랜치 정리

## 🚀 사용 방법

### 이슈 생성

```bash
# Feature 요청
/github-flow --issue-create --type feature --title "Add user profile page"

# Bug 리포트
/github-flow --issue-create --type bug --title "Fix login redirect"
```

### 작업 계획 수립

```bash
/github-flow --plan --issue 123
```

### 브랜치 생성

```bash
/github-flow --branch --issue 123
```

### PR 생성

```bash
/github-flow --pr-create --issue 123
```

### PR 리뷰

```bash
/github-flow --pr-review 456
```

### 병합 및 정리

```bash
/github-flow --merge-cleanup
```

### 전체 워크플로우

```bash
/github-flow --full-cycle --issue 123
```

## 📖 사용 예시

### 예시 1: Feature 개발 전체 사이클

**1. 이슈 생성**
```
/github-flow --issue-create --type feature --title "Add user profile page"
```

**출력:**
```markdown
✅ 이슈 생성 완료: #123

Title: Add user profile page
URL: https://github.com/user/repo/issues/123
Labels: feature
```

**2. 작업 계획 수립**
```
/github-flow --plan --issue 123
```

**출력:**
```markdown
# 작업 계획: Add user profile page (#123)

## 요구사항 요약
사용자 프로필 페이지 추가

## 영향 범위 분석
- 생성: app/profile/page.tsx, components/ProfileCard.tsx
- 수정: app/api/user/route.ts, lib/types.ts

## 작업 체크리스트
### 1. 준비 작업
- [ ] Issue #123 확인
- [ ] 관련 코드 리뷰

### 2. 개발 작업
- [ ] 브랜치 생성
- [ ] API 엔드포인트 개발
- [ ] UI 컴포넌트 개발

### 3. 테스트
- [ ] 단위 테스트 작성
- [ ] E2E 테스트

### 4. PR 및 병합
- [ ] PR 생성
- [ ] 코드 리뷰
- [ ] 병합

## 예상 소요 시간: 8시간
```

**3. 브랜치 생성**
```
/github-flow --branch --issue 123
```

**출력:**
```bash
✅ 브랜치 생성 완료

명령어 실행:
git checkout main
git pull origin main
git checkout -b feature/123-user-profile-page
git push -u origin feature/123-user-profile-page

현재 브랜치: feature/123-user-profile-page
```

**4. 개발 작업 (사용자 수행)**

**5. PR 생성**
```
/github-flow --pr-create --issue 123
```

**출력:**
```markdown
✅ PR 생성 완료: #456

Title: feat: Add user profile page
URL: https://github.com/user/repo/pull/456

PR 내용:
- Closes #123
- 프로필 페이지 컴포넌트 추가
- API 엔드포인트 구현
- 테스트 추가

리뷰어: @teammate1, @teammate2
```

**6. PR 리뷰**
```
/github-flow --pr-review 456
```

**출력:**
```markdown
## PR 리뷰 분석: #456

### 변경 사항 요약
- 파일 수: 8개
- 추가: +523 lines
- 삭제: -12 lines

### 주요 변경 파일
- app/profile/page.tsx (새 파일)
- components/ProfileCard.tsx (새 파일)
- app/api/user/route.ts (수정)

### 리뷰 코멘트 제안

**코드 품질**
✅ 컴포넌트 구조가 명확함
✅ TypeScript 타입 정의 완료
⚠️ ProfileCard에 memo 적용 고려

**테스트**
✅ 단위 테스트 추가됨
⚠️ Edge case 테스트 추가 권장

**성능**
⚠️ 이미지 최적화 필요 (Next.js Image 컴포넌트 사용)

**보안**
✅ 입력 검증 완료
✅ 인증 확인 로직 있음
```

**7. 병합 및 정리**
```
/github-flow --merge-cleanup
```

**출력:**
```bash
✅ PR 병합 완료

명령어 실행:
gh pr merge 456 --squash --delete-branch
git checkout main
git pull origin main
git branch -d feature/123-user-profile-page
git remote prune origin

현재 브랜치: main
이슈 #123 자동 close됨
```

### 예시 2: Bug Fix 워크플로우

**1. 버그 이슈 생성**
```
/github-flow --issue-create --type bug --title "Fix login redirect issue"
```

**2. 작업 계획**
```
/github-flow --plan --issue 124
```

**출력:**
```markdown
# 작업 계획: Fix login redirect issue (#124)

## 버그 분석
로그인 후 리다이렉트가 홈페이지로 가는 문제

## 원인 분석
- app/api/auth/[...nextauth]/route.ts의 callback 설정 확인 필요
- 리다이렉트 URL 로직 검토

## 작업 체크리스트
- [ ] 브랜치 생성: fix/124-login-redirect-issue
- [ ] 버그 재현
- [ ] 원인 파악
- [ ] 수정
- [ ] 테스트 추가
- [ ] PR 생성

## 예상 소요 시간: 2시간
```

**3. 나머지 워크플로우 동일**

## 🎯 GitHub Flow 원칙

### 핵심 원칙
1. main 브랜치는 항상 배포 가능한 상태
2. 새로운 작업은 main에서 브랜치 생성
3. 작업 완료 후 Pull Request 생성
4. 코드 리뷰 후 main에 병합
5. 병합 즉시 배포

### 브랜치 네이밍 컨벤션
- Feature: `feature/{issue-number}-{description}`
- Bug Fix: `fix/{issue-number}-{description}`
- Hotfix: `hotfix/{issue-number}-{description}`

## 🛠️ GitHub CLI 필요

이 플러그인은 GitHub CLI (`gh`)를 사용합니다.

### 설치

```bash
# macOS
brew install gh

# Windows
winget install --id GitHub.cli

# Linux
sudo apt install gh
```

### 인증

```bash
gh auth login
```

## ✅ 자동 생성되는 체크리스트

### 작업 계획 체크리스트
```markdown
- [ ] 이슈 확인
- [ ] 코드베이스 분석
- [ ] 브랜치 생성
- [ ] 개발 작업
- [ ] 테스트 작성
- [ ] 코드 품질 검사
- [ ] PR 생성
- [ ] 코드 리뷰
- [ ] 병합
- [ ] 정리
```

### PR 체크리스트
```markdown
- [ ] 테스트 통과
- [ ] 린트/타입 체크 통과
- [ ] 문서 업데이트
- [ ] Breaking changes 없음
- [ ] 리뷰어 지정
```

## 📊 Conventional Commits 지원

커밋 메시지 자동 생성 시 Conventional Commits 형식 준수:

- `feat:` - 새로운 기능
- `fix:` - 버그 수정
- `docs:` - 문서 변경
- `style:` - 코드 포맷팅
- `refactor:` - 코드 리팩토링
- `test:` - 테스트 추가
- `chore:` - 빌드/설정 변경

## 💡 Best Practices

### ✅ 해야 할 것
- 명확한 이슈 제목 및 설명
- 작은 단위의 PR (300 lines 이하)
- 자주 커밋 및 푸시
- main 브랜치 최신 상태 유지
- 의미 있는 커밋 메시지
- 충분한 테스트 커버리지

### ❌ 하지 말아야 할 것
- main 브랜치에 직접 커밋
- 거대한 PR (500+ lines)
- 오래된 브랜치 유지 (1주일 이상)
- 리뷰 없이 병합
- 불명확한 커밋 메시지
- Breaking changes 문서화 누락

## 🔧 요구사항

- Git 저장소
- GitHub 저장소
- GitHub CLI (`gh`) 설치 및 인증
- Git 2.23+ (브랜치 생성 기능)

## 📚 추가 자료

- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)
- [GitHub CLI Manual](https://cli.github.com/manual/)
- [Conventional Commits](https://www.conventionalcommits.org/)

## 🤝 기여

버그 리포트나 기능 제안은 [GitHub Issues](https://github.com/devlikebear/claude-code-marketplace/issues)에 등록해주세요.

## 📄 라이선스

MIT License
