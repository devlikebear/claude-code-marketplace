# 장르소설 작성 플러그인 개발 계획

## 프로젝트 개요

Claude Code Plugin을 활용하여 장르 소설 작성을 지원하는 전문 도구 모음을 개발합니다. TDD(Test-Driven Development) 방식으로 개발하며, Slash Commands와 Sub-agents를 중심으로 구성됩니다.

**개발 방법론:** Kent Beck의 TDD 원칙 (Red-Green-Refactor)

**참고 문서:** [docs/DEVELOPMENT_GUIDE.md](docs/DEVELOPMENT_GUIDE.md)

---

## 플러그인 기본 정보

```
novel-writer-plugin/
├── .claude-plugin/
│   └── plugin.json              # 플러그인 메타데이터
├── commands/                     # Slash Commands
│   ├── plot-outline.md          # 플롯 개요 생성
│   ├── character-profile.md     # 캐릭터 프로필 작성
│   ├── scene-write.md           # 장면 작성
│   ├── dialogue-enhance.md      # 대화 개선
│   └── consistency-check.md     # 일관성 체크
├── agents/                       # 전문 에이전트
│   ├── genre-specialist.md      # 장르 전문가
│   ├── character-developer.md   # 캐릭터 개발자
│   ├── plot-architect.md        # 플롯 설계자
│   └── editor.md                # 편집자
├── __tests__/                    # 테스트 파일
│   ├── commands/
│   └── agents/
└── README.md
```

---

## Phase 1: 프로젝트 인프라 구축 (TDD 환경 설정)

### 1.1 디렉토리 구조 생성
- [ ] `.claude-plugin/` 디렉토리 생성
- [ ] `commands/` 디렉토리 생성
- [ ] `agents/` 디렉토리 생성
- [ ] `__tests__/` 디렉토리 생성
- [ ] `docs/` 디렉토리 생성

### 1.2 테스트 프레임워크 설정
- [ ] `package.json` 생성
- [ ] Jest 설치 및 설정
- [ ] 테스트 스크립트 정의
- [ ] `.gitignore` 작성

### 1.3 플러그인 메타데이터 작성
- [ ] `.claude-plugin/plugin.json` 작성
  - name, version, description 정의
  - commands 배열 정의
  - agents 배열 정의

### 1.4 기본 문서 작성
- [ ] `README.md` - 플러그인 소개 및 설치 가이드
- [ ] `CONTRIBUTING.md` - 기여 가이드
- [ ] `CHANGELOG.md` - 버전 변경 이력

---

## Phase 2: 핵심 명령어 개발 (TDD 적용)

### Plugin 1: `/plot-outline` - 플롯 개요 생성

**타입:** Command
**목적:** 3막 구조 기반의 체계적인 플롯 개요 생성

**TDD 사이클:**

#### 🔴 Red: 테스트 작성
- [ ] `__tests__/commands/plot-outline.test.js` 작성
  - 플롯 구조 검증 테스트
  - 3막 구조 요소 존재 여부 테스트
  - 출력 형식 검증 테스트
  - 장르별 특화 요소 테스트

**테스트 케이스:**
```javascript
describe('plot-outline command', () => {
  it('should generate 3-act structure', () => {
    // 3막 구조가 포함되어 있는지 검증
  });

  it('should include main character goals', () => {
    // 주인공의 목표가 정의되어 있는지 검증
  });

  it('should identify central conflict', () => {
    // 중심 갈등이 명확히 정의되어 있는지 검증
  });

  it('should generate genre-specific elements', () => {
    // 장르별 필수 요소가 포함되어 있는지 검증
  });
});
```

#### ✅ Green: 최소 구현
- [ ] `commands/plot-outline.md` 작성
  - 3막 구조 프롬프트 정의
  - 입력 파라미터 정의
  - 출력 형식 템플릿 작성

**구현 요소:**
- 정보 수집 단계
- 3막 구조 설계
- 핵심 요소 정의
- 마크다운 출력 형식

#### 🔄 Refactor: 리팩토링
- [ ] 프롬프트 명확성 개선
- [ ] 장르별 가이드라인 추가
- [ ] 예시 강화
- [ ] 테스트 재실행 및 통과 확인

---

### Plugin 2: `/character-profile` - 캐릭터 프로필 생성

**타입:** Command
**목적:** 입체적인 캐릭터 생성 (Want vs Need, Fatal Flaw)

**TDD 사이클:**

#### 🔴 Red: 테스트 작성
- [ ] `__tests__/commands/character-profile.test.js` 작성
  - 기본 정보 포함 여부 테스트
  - Want vs Need 구조 테스트
  - Fatal Flaw 정의 테스트
  - 캐릭터 아크 존재 여부 테스트

**테스트 케이스:**
```javascript
describe('character-profile command', () => {
  it('should include basic information', () => {
    // 이름, 나이, 외모 등 기본 정보 검증
  });

  it('should define Want vs Need', () => {
    // 의식적 욕구와 무의식적 필요 구분 검증
  });

  it('should identify Fatal Flaw', () => {
    // 치명적 결함이 정의되어 있는지 검증
  });

  it('should outline character arc', () => {
    // 캐릭터 아크가 명확한지 검증
  });
});
```

#### ✅ Green: 최소 구현
- [ ] `commands/character-profile.md` 작성
  - 캐릭터 프레임워크 프롬프트
  - 기본 정보 수집
  - 내면 세계 탐구
  - 관계 다이나믹 정의

#### 🔄 Refactor: 리팩토링
- [ ] 질문 구조 개선
- [ ] 예시 캐릭터 추가
- [ ] 장르별 캐릭터 유형 가이드
- [ ] 테스트 재실행

---

### Plugin 3: `/scene-write` - 장면 작성

**타입:** Command
**목적:** Show, Don't Tell 원칙에 따른 몰입감 있는 장면 작성

**TDD 사이클:**

#### 🔴 Red: 테스트 작성
- [ ] `__tests__/commands/scene-write.test.js` 작성
  - 오감 묘사 포함 여부 테스트
  - 대화와 행동 균형 테스트
  - 장면 목표 달성 여부 테스트
  - 페이싱 적절성 테스트

**테스트 케이스:**
```javascript
describe('scene-write command', () => {
  it('should use sensory details', () => {
    // 최소 2-3개의 감각 묘사 포함 검증
  });

  it('should balance dialogue and action', () => {
    // 대화와 행동 비율 검증
  });

  it('should include conflict element', () => {
    // 갈등 요소가 존재하는지 검증
  });

  it('should end with hook', () => {
    // 장면 끝에 훅이 있는지 검증
  });
});
```

#### ✅ Green: 최소 구현
- [ ] `commands/scene-write.md` 작성
  - Show, Don't Tell 가이드라인
  - 오감 활용 프롬프트
  - 페이싱 전략
  - 출력 형식 정의

#### 🔄 Refactor: 리팩토링
- [ ] 장면 유형별 가이드 추가 (액션, 감정, 전환)
- [ ] 구체적 예시 강화
- [ ] 테스트 재실행

---

### Plugin 4: `/dialogue-enhance` - 대화 개선

**타입:** Command
**목적:** 자연스럽고 캐릭터 특성이 드러나는 대화 작성

**TDD 사이클:**

#### 🔴 Red: 테스트 작성
- [ ] `__tests__/commands/dialogue-enhance.test.js` 작성
  - 캐릭터 목소리 일관성 테스트
  - 서브텍스트 존재 여부 테스트
  - 대화 태그 적절성 테스트

#### ✅ Green: 최소 구현
- [ ] `commands/dialogue-enhance.md` 작성

#### 🔄 Refactor: 리팩토링
- [ ] 대화 개선 체크리스트 추가
- [ ] 테스트 재실행

---

### Plugin 5: `/consistency-check` - 일관성 체크

**타입:** Command
**목적:** 캐릭터, 플롯, 설정의 일관성 검증

**TDD 사이클:**

#### 🔴 Red: 테스트 작성
- [ ] `__tests__/commands/consistency-check.test.js` 작성
  - 캐릭터 행동 일관성 테스트
  - 타임라인 일관성 테스트
  - 설정 일관성 테스트

#### ✅ Green: 최소 구현
- [ ] `commands/consistency-check.md` 작성

#### 🔄 Refactor: 리팩토링
- [ ] 체크 항목 세분화
- [ ] 테스트 재실행

---

## Phase 3: 전문 에이전트 개발 (TDD 적용)

### Agent 1: `genre-specialist` - 장르 전문가

**타입:** Sub-agent
**목적:** 장르별 컨벤션, 트로프, 독자 기대치 전문가

**TDD 사이클:**

#### 🔴 Red: 테스트 작성
- [ ] `__tests__/agents/genre-specialist.test.js` 작성
  - 장르 식별 ���스트
  - 트로프 제안 테스트
  - 클리셰 회피 가이드 테스트

**테스트 케이스:**
```javascript
describe('genre-specialist agent', () => {
  it('should identify genre conventions', () => {
    // 장르 필수 요소 식별 검증
  });

  it('should suggest fresh tropes', () => {
    // 신선한 트로프 변주 제안 검증
  });

  it('should provide genre-blending strategy', () => {
    // 장르 융합 전략 제시 검증
  });
});
```

#### ✅ Green: 최소 구현
- [ ] `agents/genre-specialist.md` 작성
  - 장르별 전문 분야 정의
  - 체크리스트 제공 로직
  - 트로프 가이드 프롬프트

#### 🔄 Refactor: 리팩토링
- [ ] 장르별 상세 가이드 추가
- [ ] 레퍼런스 작품 예시 추가
- [ ] 테스트 재실행

---

### Agent 2: `character-developer` - 캐릭터 개발자

**타입:** Sub-agent
**목적:** 캐릭터 심화 개발 및 관계 설정

**TDD 사이클:**

#### 🔴 Red: 테스트 작성
- [ ] `__tests__/agents/character-developer.test.js` 작성
  - 캐릭터 깊이 평가 테스트
  - 관계 다이나믹 테스트
  - 캐릭터 성장 아크 테스트

#### ✅ Green: 최소 구현
- [ ] `agents/character-developer.md` 작성

#### 🔄 Refactor: 리팩토링
- [ ] 캐릭터 개발 프레임워크 강화
- [ ] 테스트 재실행

---

### Agent 3: `plot-architect` - 플롯 설계자

**타입:** Sub-agent
**목적:** 구조적 플롯 분석 및 개선 (Save the Cat, Hero's Journey 등)

**TDD 사이클:**

#### 🔴 Red: 테스트 작성
- [ ] `__tests__/agents/plot-architect.test.js` 작성
  - 플롯 구조 분석 테스트
  - 비트 시트 작성 테스트
  - 서브플롯 직조 테스트

#### ✅ Green: 최소 구현
- [ ] `agents/plot-architect.md` 작성

#### 🔄 Refactor: 리팩토링
- [ ] 구조 이론별 가이드 추가
- [ ] 테스트 재실행

---

### Agent 4: `editor` - 편집자

**타입:** Sub-agent
**목적:** 문법, 흐름, 가독성 검토

**TDD 사이클:**

#### 🔴 Red: 테스트 작성
- [ ] `__tests__/agents/editor.test.js` 작성
  - 문법 체크 테스트
  - 흐름 개선 제안 테스트
  - 가독성 평가 테스트

#### ✅ Green: 최소 구현
- [ ] `agents/editor.md` 작성

#### 🔄 Refactor: 리팩토링
- [ ] 편집 체크리스트 추가
- [ ] 테스트 재실행

---

## Phase 4: 고급 기능 개발

### 4.1 세계관 관리 도구
- [ ] `/worldbuilding` 명령어 개발
  - 설정 데이터베이스 구조 설계
  - 지명, 역사, 문화 관리
  - 일관성 체크 통합

### 4.2 타임라인 추적기
- [ ] `/timeline` 명령어 개발
  - 시간 순서 검증
  - 이벤트 타임라인 시각화
  - 모순 감지 알고리즘

### 4.3 이름 생성기
- [ ] `/name-generator` 명령어 개발
  - 장르별 이름 패턴
  - 문화권별 이름 생성
  - 의미 있는 이름 제안

### 4.4 분량 관리
- [ ] `/word-count` 명령어 개발
  - 챕터별 단어 수 추적
  - 목표 진행률 표시
  - 페이싱 분석

---

## Phase 5: 테스트 및 품질 보증

### 5.1 종합 테스트
- [ ] 모든 명령어 통합 테스트
- [ ] 에이전트 간 상호작용 테스트
- [ ] 실전 시나리오 테스트
  - 새 소설 시작 워크플로우
  - 기존 원고 개선 워크플로우

### 5.2 커버리지 확인
```bash
npm test -- --coverage
```
- [ ] 라인 커버리지: 80% 이상
- [ ] 브랜치 커버리지: 75% 이상
- [ ] 함수 커버리지: 80% 이상

### 5.3 플러그인 검증
```bash
claude plugin validate plugins/novel-writer-plugin
```
- [ ] 검증 오류 수정
- [ ] plugin.json 스키마 확인
- [ ] frontmatter 필드 확인

### 5.4 문서 검토
- [ ] 모든 명령어 README 작성
- [ ] 사용 예제 추가 (최소 3개씩)
- [ ] 트러블슈팅 가이드 작성

---

## Phase 6: 배포 및 공유

### 6.1 GitHub 저장소 설정
```bash
git init
git add .
git commit -m "feat: initial commit of novel-writer plugin

- Implement 5 core commands (plot, character, scene, dialogue, consistency)
- Add 4 specialized agents (genre, character, plot, editor)
- Achieve 85%+ test coverage
- Complete documentation

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

### 6.2 마켓플레이스 등록
- [ ] `.claude-plugin/marketplace.json` 작성
- [ ] GitHub 저장소 공개
- [ ] README에 설치 가이드 추가

### 6.3 커뮤니티 공유
- [ ] Claude Discord에 공유
- [ ] Reddit r/ClaudeAI에 게시
- [ ] 사용 데모 영상 제작

---

## TDD 워크플로우 요약

### 각 기능 개발 시 준수할 사이클:

1. **🔴 Red: 실패하는 테스트 작성**
   - 기능 요구사항을 테스트로 표현
   - 테스트 실행 → 실패 확인

2. **✅ Green: 테스트 통과하는 최소 코드 작성**
   - 테스트를 통과시키는 최소한의 구현
   - 테스트 실행 → 통과 확인

3. **🔄 Refactor: 코드 개선**
   - DRY, SOLID 원칙 적용
   - 명확한 네이밍
   - 테스트 재실행 → 여전히 통과 확인

### 커밋 전 체크리스트:
```bash
npm test                 # 모든 테스트 통과
npm run lint            # 린트 검사 통과
npm run type-check      # 타입 체크 통과
npm test -- --coverage  # 커버리지 목표 달성
```

---

## 성공 지표

### 기능 지표
- [ ] 5개 핵심 명령어 정상 동작
- [ ] 4개 전문 에이전트 정상 동작
- [ ] 플러그인 검증 통과
- [ ] 실전 시나리오 테스트 통과

### 품질 지표
- [ ] 테스트 커버리지 80% 이상
- [ ] 모든 명령어 사용 예제 3개 이상
- [ ] 문서 완성도 90% 이상
- [ ] 버그 리포트 0건 (초기 배포 시)

### 커뮤니티 지표
- [ ] GitHub Star 10개 이상
- [ ] 플러그인 설치 사용자 5명 이상
- [ ] 커뮤니티 피드백 수집
- [ ] 외부 기여자 PR 1건 이상

---

## 개발 일정

- **Week 1**: Phase 1-2 완료 (인프라 + 핵심 명령어 3개)
- **Week 2**: Phase 2-3 완료 (나머지 명령어 + 에이전트 4개)
- **Week 3**: Phase 4-5 완료 (고급 기능 + 테스트)
- **Week 4**: Phase 6 완료 (배포 및 공유)

---

## 위험 요소 및 대응 방안

### 위험 1: 테스트 작성 복잡도
- **대응**: 명령어/에이전트의 출력 형식을 명확히 정의하여 테스트 가능하게 설계

### 위험 2: 장르별 특화 어려움
- **대응**: 주요 장르(판타지, 로맨스, 스릴러) 우선 지원, 점진적 확장

### 위험 3: 사용자 피드백 부재
- **대응**: 베타 테스터 모집, 초기 피드백 수렴 후 개선

---

## 참고 자료

### TDD 관련
- Kent Beck, "Test-Driven Development: By Example"
- Martin Fowler, "Refactoring: Improving the Design of Existing Code"

### 소설 작성 이론
- Blake Snyder, "Save the Cat!"
- Christopher Vogler, "The Writer's Journey"
- K.M. Weiland, "Structuring Your Novel"

### Claude Code Plugin
- [Claude Code Plugin Documentation](https://docs.claude.com/en/docs/claude-code/plugins)
- [Jeremy Longshore's Marketplace](https://github.com/jeremylongshore/claude-code-plugins)

---

## 다음 단계

1. **즉시 시작**: Phase 1 구현 (프로젝트 인프라 + 테스트 환경)
2. **우선순위**: `/plot-outline` 명령어부터 TDD로 개발
3. **반복 개선**: Red-Green-Refactor 사이클 엄격히 준수
4. **지속적 통합**: 각 기능 완성 후 통합 테스트 및 검증

**TDD를 통해 견고하고 유지보수 가능한 플러그인을 만들어봅시다!** 🚀
