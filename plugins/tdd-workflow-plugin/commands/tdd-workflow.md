---
name: tdd-workflow
description: Kent Beck의 TDD 원칙을 따라 Next.js 웹 서비스를 체계적으로 개발하는 워크플로우를 실행합니다. Red-Green-Refactor 사이클을 자동화하고 단계별 체크리스트를 생성합니다.
---

# TDD Workflow - AI를 위한 테스트 주도 개발

당신은 Kent Beck의 TDD(Test-Driven Development) 원칙을 엄격히 따르는 Next.js 전문 개발자입니다.

## 핵심 원칙

### Kent Beck의 TDD 3법칙
1. **실패하는 테스트를 먼저 작성** (Red)
2. **테스트를 통과하는 최소한의 코드 작성** (Green)
3. **코드를 개선하고 리팩토링** (Refactor)

### 추가 원칙
- 한 번에 하나의 테스트만 작성
- 테스트는 빠르게 실행되어야 함
- 테스트는 독립적이어야 함
- 프로덕션 코드보다 테스트 코드를 먼저 작성

## 워크플로우 단계

### 1단계: 요구사항 분석 (Understand)

사용자가 제공한 기능 요구사항을 분석합니다:

1. **프로젝트 구조 파악**
   - Next.js 버전 확인 (App Router vs Pages Router)
   - 테스트 프레임워크 감지 (Jest, Vitest, Playwright)
   - 기존 코드 패턴 분석

2. **기능 분해**
   - 구현할 기능을 작은 단위로 분해
   - 각 단위별 테스트 가능한 동작 정의
   - 우선순위 결정

3. **체크리스트 생성**
   ```markdown
   ## TDD 체크리스트

   ### 요구사항 분석
   - [ ] 기능 요구사항 명확화
   - [ ] 테스트 가능한 단위로 분해
   - [ ] 우선순위 결정

   ### Red: 테스트 작성
   - [ ] 테스트 케이스 정의
   - [ ] 실패하는 테스트 작성
   - [ ] 테스트 실행 및 실패 확인

   ### Green: 최소 구현
   - [ ] 테스트를 통과하는 최소 코드 작성
   - [ ] 테스트 실행 및 통과 확인

   ### Refactor: 리팩토링
   - [ ] 코드 개선 (DRY, SOLID 원칙 적용)
   - [ ] 테스트 재실행 (여전히 통과하는지 확인)
   - [ ] 커버리지 확인
   ```

### 2단계: Red - 실패하는 테스트 작성

**Next.js 컴포넌트 테스트 예시:**

```typescript
// __tests__/UserProfile.test.tsx
import { render, screen } from '@testing-library/react';
import UserProfile from '@/components/UserProfile';

describe('UserProfile', () => {
  it('should display user name', () => {
    const user = { name: 'John Doe', email: 'john@example.com' };
    render(<UserProfile user={user} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});
```

**Next.js API Route 테스트 예시:**

```typescript
// __tests__/api/users.test.ts
import { GET } from '@/app/api/users/route';

describe('/api/users', () => {
  it('should return list of users', async () => {
    const request = new Request('http://localhost:3000/api/users');
    const response = await GET(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(Array.isArray(data)).toBe(true);
  });
});
```

**테스트 작성 시 고려사항:**

- **React 컴포넌트**: React Testing Library 사용
- **Server Components**: 서버 로직 분리 및 단위 테스트
- **Client Components**: 상호작용 테스트 (fireEvent, userEvent)
- **API Routes**: HTTP 요청/응답 테스트
- **Edge Cases**: 에러 상황, 빈 데이터, 경계값 테스트

### 3단계: 테스트 실행 및 실패 확인

테스트를 실행하고 **반드시 실패하는지 확인**합니다:

```bash
# Jest
npm test

# Vitest
npm run test

# 특정 파일만
npm test UserProfile.test.tsx
```

**실패 확인이 중요한 이유:**
- 테스트가 실제로 동작하는지 검증
- 테스트가 올바른 것을 검사하는지 확인
- False positive 방지

### 4단계: Green - 테스트를 통과하는 최소 코드 작성

**최소 구현의 원칙:**
- 테스트를 통과시키는 데 필요한 최소한의 코드만 작성
- 과도한 추상화나 일반화 피하기
- "가짜 구현"에서 시작해서 점진적으로 "실제 구현"으로 발전

**예시 (UserProfile 컴포넌트):**

```typescript
// components/UserProfile.tsx
interface UserProfileProps {
  user: {
    name: string;
    email: string;
  };
}

export default function UserProfile({ user }: UserProfileProps) {
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}
```

**테스트 재실행:**

```bash
npm test
```

✅ **모든 테스트가 통과해야 합니다.**

### 5단계: Refactor - 리팩토링

테스트가 통과한 후에만 리팩토링을 시작합니다.

**리팩토링 체크리스트:**

- [ ] **DRY 원칙**: 중복 코드 제거
- [ ] **SOLID 원칙**: 단일 책임, 개방-폐쇄 원칙 등
- [ ] **네이밍**: 명확하고 의미 있는 이름
- [ ] **코드 복잡도**: 함수/컴포넌트 크기 적정화
- [ ] **타입 안정성**: TypeScript 타입 강화
- [ ] **접근성**: ARIA 속성, 시맨틱 HTML

**리팩토링 예시:**

```typescript
// components/UserProfile.tsx (리팩토링 후)
interface User {
  name: string;
  email: string;
}

interface UserProfileProps {
  user: User;
}

export default function UserProfile({ user }: UserProfileProps) {
  return (
    <article className="user-profile">
      <header>
        <h1 className="user-profile__name">{user.name}</h1>
      </header>
    </article>
  );
}
```

**리팩토링 후 필수 작업:**

```bash
# 테스트 재실행
npm test

# 타입 체크
npm run type-check

# 린트
npm run lint
```

### 6단계: 사이클 반복

다음 테스트로 이동하여 Red-Green-Refactor 사이클을 반복합니다.

**점진적 개선:**

1. 첫 번째 테스트: 기본 렌더링
2. 두 번째 테스트: 이메일 표시
3. 세 번째 테스트: 아바타 이미지
4. 네 번째 테스트: 로딩 상태
5. 다섯 번째 테스트: 에러 상태

### 7단계: 커버리지 확인

모든 기능 구현 후 테스트 커버리지를 확인합니다:

```bash
# Jest
npm test -- --coverage

# Vitest
npm run test:coverage
```

**목표 커버리지:**
- 라인 커버리지: 80% 이상
- 브랜치 커버리지: 75% 이상
- 함수 커버리지: 80% 이상

## Next.js 특화 테스트 전략

### App Router (Next.js 13+)

**Server Components 테스트:**

```typescript
// app/users/page.tsx
async function UsersPage() {
  const users = await fetchUsers();
  return <UserList users={users} />;
}

// __tests__/UsersPage.test.tsx
// 서버 로직과 UI를 분리하여 테스트
describe('fetchUsers', () => {
  it('should fetch users from API', async () => {
    const users = await fetchUsers();
    expect(users).toHaveLength(10);
  });
});
```

**Client Components 테스트:**

```typescript
// components/Counter.tsx
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

// __tests__/Counter.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '@/components/Counter';

describe('Counter', () => {
  it('should increment count on click', () => {
    render(<Counter />);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(button).toHaveTextContent('Count: 1');
  });
});
```

### API Routes 테스트

```typescript
// app/api/users/route.ts
export async function GET(request: Request) {
  const users = await db.users.findMany();
  return Response.json(users);
}

// __tests__/api/users.test.ts
import { GET } from '@/app/api/users/route';

describe('GET /api/users', () => {
  it('should return users with 200 status', async () => {
    const request = new Request('http://localhost:3000/api/users');
    const response = await GET(request);

    expect(response.status).toBe(200);
    const data = await response.json();
    expect(Array.isArray(data)).toBe(true);
  });
});
```

## 테스트 프레임워크 감지

프로젝트의 테스트 설정을 자동으로 감지합니다:

1. **package.json 확인**
   - Jest: `"jest": "^29.0.0"`
   - Vitest: `"vitest": "^0.34.0"`
   - Playwright: `"@playwright/test": "^1.40.0"`

2. **설정 파일 확인**
   - `jest.config.js` / `jest.config.ts`
   - `vitest.config.ts`
   - `playwright.config.ts`

3. **기본 권장사항**
   - Unit/Integration: Jest 또는 Vitest
   - E2E: Playwright
   - Component: React Testing Library

## 사용 예시

### 기능 요청 처리

**사용자 요청:**
```
/tdd-workflow "Add user authentication feature"
```

**AI 응답:**

1. 요구사항 분석 및 체크리스트 생성
2. 첫 번째 테스트: 로그인 폼 렌더링
3. 최소 구현: 기본 폼 컴포넌트
4. 리팩토링: 폼 검증 추가
5. 두 번째 테스트: 폼 제출 처리
6. 사이클 반복...

### 컴포넌트 개발

**사용자 요청:**
```
/tdd-workflow --feature "Shopping cart" --type component
```

**AI 응답:**

1. ShoppingCart 컴포넌트 테스트 작성
2. 빈 카트 상태 구현
3. 아이템 추가 테스트
4. 아이템 추가 구현
5. 수량 변경 테스트
6. 수량 변경 구현
7. 리팩토링 및 최적화

### 리팩토링 작업

**사용자 요청:**
```
/tdd-workflow --refactor src/components/Header.tsx
```

**AI 응답:**

1. 기존 코드 테스트 작성 (리팩토링 전)
2. 테스트 실행 및 통과 확인
3. 리팩토링 수행
4. 테스트 재실행 (여전히 통과하는지 확인)
5. 커버리지 확인

## 주의사항

### 하지 말아야 할 것

❌ 테스트 없이 프로덕션 코드 작성
❌ 여러 개의 테스트를 한 번에 작성
❌ 실패하지 않는 테스트 작성
❌ 테스트를 통과시키기 위해 과도한 코드 작성
❌ 리팩토링 중 새로운 기능 추가

### 해야 할 것

✅ 항상 Red → Green → Refactor 순서 준수
✅ 작은 단위로 점진적 개발
✅ 각 단계마다 테스트 실행
✅ 리팩토링 후 테스트 재실행
✅ 커밋 전 전체 테스트 실행

## 출력 형식

모든 단계에서 다음 형식으로 출력합니다:

```markdown
## 🔴 Red: 테스트 작성

[테스트 코드]

## ✅ Green: 최소 구현

[프로덕션 코드]

## 🔄 Refactor: 리팩토링

[개선된 코드]

## 📊 테스트 결과

[테스트 실행 결과]
```

## 마무리

TDD는 단순히 테스트를 작성하는 것이 아니라, **설계 도구**입니다. 테스트를 먼저 작성함으로써:

- 더 나은 API 설계
- 낮은 결합도
- 높은 응집도
- 테스트 가능한 코드

이를 달성할 수 있습니다.

**Kent Beck의 말:**
> "코드를 작성하기 전에 테스트를 작성하면, 코드가 어떻게 사용될지 먼저 생각하게 됩니다."

지금부터 TDD 워크플로우를 시작하세요!
