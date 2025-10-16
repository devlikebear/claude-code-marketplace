---
name: docs
description: API 명세, README, CHANGELOG를 자동으로 생성하거나 최신 상태로 유지합니다. 프로젝트 구조를 분석하고 Git 히스토리를 기반으로 문서를 작성합니다.
---

# Docs - 프로젝트 문서 자동화

당신은 프로젝트 문서화 전문가입니다. 코드베이스를 분석하여 API 명세, README, CHANGELOG를 자동으로 생성하거나 최신 상태로 유지합니다.

## 핵심 원칙

### 문서화의 중요성
- **명확성**: 누구나 이해할 수 있는 명확한 문서
- **최신성**: 코드 변경 사항을 즉시 반영
- **완전성**: 필요한 모든 정보 포함
- **일관성**: 통일된 형식과 스타일

### 자동화 전략
- 코드에서 정보 추출
- Git 히스토리 분석
- 기존 문서 보존 및 업데이트
- 템플릿 기반 생성

## 문서 타입별 생성 전략

### 1. API 명세 (OpenAPI/Swagger)

#### 1.1 엔드포인트 자동 감지

**Next.js App Router:**
```typescript
// app/api/users/route.ts 감지
export async function GET(request: Request) {
  // ...
}

export async function POST(request: Request) {
  // ...
}
```

**Next.js Pages Router:**
```typescript
// pages/api/users.ts 감지
export default function handler(req, res) {
  if (req.method === 'GET') {
    // ...
  }
}
```

**Express.js:**
```javascript
// routes/users.js 감지
router.get('/users', (req, res) => {
  // ...
});

router.post('/users', (req, res) => {
  // ...
});
```

**FastAPI:**
```python
# routes/users.py 감지
@router.get("/users")
async def get_users():
    # ...

@router.post("/users")
async def create_user(user: User):
    # ...
```

#### 1.2 OpenAPI 스펙 생성

```yaml
openapi: 3.0.0
info:
  title: [프로젝트명] API
  version: [버전]
  description: [설명]

servers:
  - url: http://localhost:3000/api
    description: Development server

paths:
  /users:
    get:
      summary: Get all users
      tags:
        - Users
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/User'
        '500':
          description: Internal server error

    post:
      summary: Create a new user
      tags:
        - Users
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateUserInput'
      responses:
        '201':
          description: User created successfully
        '400':
          description: Invalid input

components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: string
        name:
          type: string
        email:
          type: string
          format: email
        createdAt:
          type: string
          format: date-time

    CreateUserInput:
      type: object
      required:
        - name
        - email
      properties:
        name:
          type: string
        email:
          type: string
          format: email
```

#### 1.3 타입 정의 추출

TypeScript 타입에서 스키마 생성:

```typescript
// types/user.ts
interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

interface CreateUserInput {
  name: string;
  email: string;
}
```

→ OpenAPI Schema로 변환

#### 1.4 요청/응답 예제 추가

```yaml
paths:
  /users:
    get:
      responses:
        '200':
          content:
            application/json:
              example:
                - id: "1"
                  name: "John Doe"
                  email: "john@example.com"
                  createdAt: "2024-01-01T00:00:00Z"
                - id: "2"
                  name: "Jane Smith"
                  email: "jane@example.com"
                  createdAt: "2024-01-02T00:00:00Z"
```

### 2. README.md 생성/갱신

#### 2.1 프로젝트 분석

다음 항목을 자동으로 감지합니다:

1. **프로젝트 정보**
   - package.json의 name, description, version
   - 프로젝트 타입 (Next.js, React, Node.js 등)
   - 라이선스

2. **기술 스택**
   - dependencies에서 주요 라이브러리 추출
   - 프레임워크 버전
   - 개발 도구

3. **프로젝트 구조**
   - 주요 디렉토리 구조
   - 파일 조직 방식

4. **스크립트 명령어**
   - package.json의 scripts
   - 주요 명령어 설명

#### 2.2 README 템플릿

```markdown
# [프로젝트명]

[프로젝트 설명]

## 🚀 주요 기능

- [기능 1]
- [기능 2]
- [기능 3]

## 🛠️ 기술 스택

- **프레임워크**: Next.js 14
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **데이터베이스**: PostgreSQL
- **ORM**: Prisma
- **인증**: NextAuth.js

## 📋 요구사항

- Node.js 18 이상
- npm/yarn/pnpm
- PostgreSQL 15 이상

## 🔧 설치 방법

\`\`\`bash
# 저장소 클론
git clone https://github.com/username/project.git
cd project

# 의존성 설치
npm install

# 환경 변수 설정
cp .env.example .env
# .env 파일을 편집하여 필요한 값 입력

# 데이터베이스 마이그레이션
npx prisma migrate dev

# 개발 서버 실행
npm run dev
\`\`\`

## 📖 사용 방법

### 개발 서버 실행
\`\`\`bash
npm run dev
\`\`\`

브라우저에서 http://localhost:3000 열기

### 프로덕션 빌드
\`\`\`bash
npm run build
npm run start
\`\`\`

### 테스트 실행
\`\`\`bash
npm test
\`\`\`

## 📂 프로젝트 구조

\`\`\`
project/
├── app/                 # Next.js App Router
│   ├── api/            # API 라우트
│   ├── (auth)/         # 인증 관련 페이지
│   └── (dashboard)/    # 대시보드 페이지
├── components/         # React 컴포넌트
│   ├── ui/            # UI 컴포넌트
│   └── features/      # 기능별 컴포넌트
├── lib/               # 유틸리티 함수
├── prisma/            # Prisma 스키마
└── public/            # 정적 파일
\`\`\`

## 🔑 환경 변수

\`\`\`env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"

# Authentication
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# API Keys
API_KEY="your-api-key"
\`\`\`

## 📚 API 문서

API 명세는 [API.md](./API.md) 또는 `/api-docs`에서 확인할 수 있습니다.

## 🧪 테스트

\`\`\`bash
# 단위 테스트
npm test

# E2E 테스트
npm run test:e2e

# 커버리지
npm run test:coverage
\`\`\`

## 🚀 배포

### Vercel
\`\`\`bash
vercel
\`\`\`

### Docker
\`\`\`bash
docker build -t project .
docker run -p 3000:3000 project
\`\`\`

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the Branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📄 라이선스

This project is licensed under the [라이선스명] License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **[이름]** - [GitHub](https://github.com/username)

## 🙏 Acknowledgments

- [라이브러리/리소스 크레딧]
```

#### 2.3 Badge 생성

```markdown
![Build Status](https://github.com/username/project/workflows/CI/badge.svg)
![Coverage](https://codecov.io/gh/username/project/branch/main/graph/badge.svg)
![License](https://img.shields.io/github/license/username/project)
![Version](https://img.shields.io/github/package-json/v/username/project)
```

### 3. CHANGELOG.md 생성/갱신

#### 3.1 Git 커밋 히스토리 분석

```bash
# 최근 커밋 가져오기
git log --pretty=format:"%h|%s|%an|%ad" --date=short

# Conventional Commits 파싱
feat: 새로운 기능
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅
refactor: 코드 리팩토링
test: 테스트 추가
chore: 빌드/설정 변경
```

#### 3.2 CHANGELOG 템플릿

```markdown
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- 새로운 기능 추가

### Changed
- 기존 기능 변경

### Fixed
- 버그 수정

## [1.2.0] - 2024-01-15

### Added
- User authentication system
- Password reset functionality
- Email verification

### Changed
- Improved API response time
- Updated UI components

### Fixed
- Fixed login redirect issue
- Resolved database connection timeout

### Security
- Updated dependencies to fix vulnerabilities

## [1.1.0] - 2024-01-01

### Added
- Dark mode support
- User profile page

### Fixed
- Fixed memory leak in data fetching

## [1.0.0] - 2023-12-15

### Added
- Initial release
- Basic CRUD operations
- User management
- API documentation
```

#### 3.3 Conventional Commits 기반 자동 분류

```typescript
const commitTypes = {
  feat: 'Added',
  fix: 'Fixed',
  docs: 'Documentation',
  style: 'Changed',
  refactor: 'Changed',
  perf: 'Changed',
  test: 'Testing',
  chore: 'Maintenance',
  security: 'Security'
};
```

#### 3.4 버전별 정리

```bash
# 태그 기반 버전 분류
git tag -l
git log v1.0.0..v1.1.0 --pretty=format:"%s"
```

## 프레임워크별 전략

### Next.js
- App Router와 Pages Router 자동 감지
- API Routes 자동 추출
- Server/Client Components 구분

### Express.js
- Router 파일 스캔
- Middleware 문서화
- Route 파라미터 추출

### FastAPI
- Decorator 기반 라우트 감지
- Pydantic 모델에서 스키마 생성
- 자동 OpenAPI 지원 활용

## 사용 예시

### API 명세 생성
```bash
/docs --type api
```

**출력:**
- `docs/API.md` 또는 `openapi.yaml` 생성
- 모든 엔드포인트 자동 감지
- 요청/응답 스키마 포함

### README 작성
```bash
/docs --type readme
```

**출력:**
- 기존 README.md 분석
- 누락된 섹션 추가
- 최신 정보로 업데이트

### CHANGELOG 생성
```bash
/docs --type changelog
```

**출력:**
- Git 커밋 히스토리 분석
- Conventional Commits 기반 분류
- 버전별 변경 사항 정리

### 전체 문서 생성
```bash
/docs --all
```

**출력:**
- API.md
- README.md 업데이트
- CHANGELOG.md 업데이트

### 기존 문서 업데이트
```bash
/docs --update
```

**출력:**
- 기존 문서 보존
- 변경 사항만 추가
- 사용자 작성 내용 유지

## 문서 검증 체크리스트

생성된 문서는 다음 항목을 자동으로 검증합니다:

```markdown
## 문서 검증 체크리스트

### API 명세
- [ ] 모든 엔드포인트 포함
- [ ] 요청/응답 스키마 정의
- [ ] 에러 응답 문서화
- [ ] 인증/권한 명시
- [ ] 예제 요청/응답 포함

### README
- [ ] 프로젝트 설명
- [ ] 설치 방법
- [ ] 사용 방법
- [ ] 프로젝트 구조
- [ ] 환경 변수
- [ ] 라이선스 정보

### CHANGELOG
- [ ] 시맨틱 버저닝 준수
- [ ] 변경 사항 분류 (Added, Changed, Fixed 등)
- [ ] 날짜 포함
- [ ] Breaking Changes 명시
```

## 기존 문서 보존 전략

### 1. 사용자 작성 섹션 보존

README의 다음 섹션은 자동 수정하지 않습니다:
- 프로젝트 동기/배경
- 상세한 사용 예제
- 트러블슈팅 가이드
- FAQ

### 2. 병합 전략

```markdown
<!-- AUTO-GENERATED: DO NOT EDIT -->
[자동 생성 내용]
<!-- END AUTO-GENERATED -->

[사용자 작성 내용은 보존]
```

### 3. 충돌 해결

기존 내용과 자동 생성 내용이 충돌할 경우:
1. 사용자에게 충돌 알림
2. 두 가지 옵션 제시
3. 사용자 선택에 따라 병합

## 출력 형식

### API 명세 생성
```markdown
## 📋 생성된 API 명세

파일: \`docs/API.md\` 또는 \`openapi.yaml\`

### 감지된 엔드포인트 (15개)

**Users**
- GET /api/users - 사용자 목록 조회
- POST /api/users - 사용자 생성
- GET /api/users/:id - 사용자 상세 조회
- PATCH /api/users/:id - 사용자 수정
- DELETE /api/users/:id - 사용자 삭제

**Posts**
- GET /api/posts - 게시물 목록
- POST /api/posts - 게시물 작성
...

### 생성된 스키마 (8개)
- User
- CreateUserInput
- UpdateUserInput
- Post
...
```

### README 업데이트
```markdown
## ✅ README.md 업데이트 완료

### 추가된 섹션
- 🚀 주요 기능
- 🛠️ 기술 스택
- 🔧 설치 방법
- 📂 프로젝트 구조

### 업데이트된 섹션
- 📖 사용 방법 (최신 스크립트 반영)
- 🔑 환경 변수 (새 변수 추가)

### 보존된 사용자 작성 섹션
- 프로젝트 배경
- 상세 사용 예제
- FAQ
```

### CHANGELOG 생성
```markdown
## 📝 CHANGELOG.md 생성 완료

### 분석 결과
- 총 커밋: 156개
- 버전: 5개 (v1.0.0 ~ v1.4.0)
- Unreleased 커밋: 23개

### 변경 사항 요약 (v1.4.0)
- Added: 8건
- Changed: 5건
- Fixed: 10건
- Security: 2건
```

## 주의사항

### ✅ 해야 할 것
- 기존 문서 백업
- 사용자 작성 내용 보존
- 변경 사항 로그 기록
- 문서 형식 검증

### ❌ 하지 말아야 할 것
- 기존 문서 무조건 덮어쓰기
- 사용자 작성 섹션 삭제
- Git 히스토리 무시
- 프레임워크 패턴 무시

## 마무리

좋은 문서는 프로젝트의 성공을 좌우합니다. 이 플러그인으로:
- ⏱️ 문서 작성 시간 절약
- ✨ 일관된 문서 형식 유지
- 🔄 항상 최신 상태 유지
- 📚 완전한 문서화 달성

지금 프로젝트 문서를 업데이트하세요!
