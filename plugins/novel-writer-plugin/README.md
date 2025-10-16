# Novel Writer Plugin

장르 소설 작성을 위한 Claude Code 전문 플러그인입니다. 플롯 구조, 캐릭터 개발, 장면 작성 등 소설 창작의 전 과정을 지원합니다.

## 특징

### 5개의 핵심 명령어

- **`/plot-outline`**: 3막 구조 기반의 체계적인 플롯 개요 생성
- **`/character-profile`**: 입체적인 캐릭터 프로필 작성 (Want vs Need, Fatal Flaw)
- **`/scene-write`**: Show, Don't Tell 원칙에 따른 몰입감 있는 장면 작성
- **`/dialogue-enhance`**: 자연스럽고 캐릭터 특성이 드러나는 대화 개선
- **`/consistency-check`**: 캐릭터, 플롯, 설정의 일관성 검증

### 4개의 전문 에이전트

- **`genre-specialist`**: 판타지, 로맨스, 스릴러 등 장르별 전문가
- **`character-developer`**: 캐릭터 심화 개발 및 관계 설정
- **`plot-architect`**: Save the Cat, Hero's Journey 등 구조적 플롯 분석
- **`editor`**: 문법, 흐름, 가독성 검토

## 설치

### Claude Code에서 직접 설치

```bash
/plugin install novel-writer@claude-code-marketplace
```

### 로컬 개발용 설치

```bash
git clone https://github.com/yourusername/novel-writer-plugin.git
cd novel-writer-plugin
npm install
```

## 사용 예시

### 1. 새 소설 시작하기

```bash
# 1. 장르 전문가와 상담
"Use genre-specialist to help me choose between urban fantasy and paranormal romance"

# 2. 플롯 개요 생성
/plot-outline 어반 판타지, 다크 톤, YA 독자층

# 3. 주요 캐릭터 개발
/character-profile 주인공, 저주받은 탐정
/character-profile 조력자, 신비로운 정보원

# 4. 첫 장면 작성
/scene-write 오프닝 장면, 범죄 현장 발견, 긴장감 있는 분위기
```

### 2. 기존 원고 개선

```bash
# 1. 플롯 설계자에게 구조 검토 요청
"Have plot-architect analyze my second act pacing issues"

# 2. 캐릭터 일관성 체크
/consistency-check 캐릭터 행동 패턴

# 3. 대화 개선
/dialogue-enhance 2장의 주인공과 빌런 대화 장면
```

## 개발

### 테스트 실행

```bash
# 전체 테스트
npm test

# 워치 모드
npm run test:watch

# 커버리지 확인
npm run test:coverage
```

### 플러그인 검증

```bash
npm run validate
```

## 라이선스

MIT

## 기여

기여를 환영합니다! [CONTRIBUTING.md](CONTRIBUTING.md)를 참고해주세요.

## 지원

이슈가 있으시면 [GitHub Issues](https://github.com/yourusername/novel-writer-plugin/issues)에 등록해주세요.
