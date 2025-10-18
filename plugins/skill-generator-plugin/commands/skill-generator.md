# Skill Generator - Claude Skills 자동 생성

프로젝트의 코드베이스를 분석하여 재사용 가능한 Claude Skills를 자동으로 생성합니다.

## 개요

**Claude Skills**는 Claude에게 특정 도메인이나 작업에 대한 깊이 있는 지식과 능력을 제공하는 재사용 가능한 AI 기능입니다.

이 플러그인은:
- 🔍 코드베이스 분석을 통해 도메인 전문성 식별
- 🎯 각 도메인별 최적의 Skill 구조 자동 생성
- 📝 Skill 정의, 예제, 검증 규칙을 자동으로 작성
- 🔗 기존 플러그인과 통합 가능한 Skills 생성

## 사용 방법

### 기본 사용법

```bash
/skill-generator
```

**동작:**
1. 현재 프로젝트 코드베이스 분석
2. 감지된 도메인별 Skills 추천
3. 각 Skill의 상세 정의 생성

### 특정 도메인별 Skill 생성

```bash
/skill-generator --domain "web-development"
/skill-generator --domain "data-processing"
/skill-generator --domain "security-analysis"
```

### 특정 디렉토리 기반 Skill 생성

```bash
/skill-generator --path ./src/components
/skill-generator --path ./lib/utils
```

### 고급 옵션

```bash
# 상세한 분석과 더 복잡한 Skill 생성
/skill-generator --comprehensive

# 기존 Skill 업데이트
/skill-generator --update

# 생성된 Skill을 플러그인에 통합
/skill-generator --integrate skill-name

# 여러 도메인의 Skill 동시 생성
/skill-generator --multi-domain
```

## Skill 구조

생성되는 각 Skill의 기본 구조:

```markdown
# [Skill 이름]

[Skill 설명 및 목적]

## 능력 (Capabilities)

### 핵심 기능
- [기능 1]
- [기능 2]
- [기능 3]

### 상세 설명
각 기능에 대한 상세한 설명...

## 사용 예제

### 예제 1
\`\`\`
사용 시나리오 및 코드 예제
\`\`\`

결과:
\`\`\`
예상 출력
\`\`\`

### 예제 2
...

## 도메인 지식

### 핵심 개념
- [개념 1]: 설명
- [개념 2]: 설명

### 베스트 프랙티스
1. [프랙티스 1]
2. [프랙티스 2]

### 일반적인 실수
- ❌ [실수 1]: 대신 ✅ [올바른 방법]
- ❌ [실수 2]: 대신 ✅ [올바른 방법]

## 제약사항 및 한계

- [제약사항 1]
- [제약사항 2]

## 관련 리소스

- [리소스 1]
- [리소스 2]
```

## 감지되는 도메인 패턴

### 프론트엔드 개발
**키워드**: React, Vue, Angular, component, UI, CSS, styling
**감지 파일**: `*.tsx`, `*.jsx`, `*.vue`, `**/*.css`
**생성 Skills**:
- React Component Patterns
- UI/UX Best Practices
- CSS Architecture
- Responsive Design

### 백엔드 개발
**키워드**: API, database, service, authentication, middleware
**감지 파일**: `api/**`, `services/**`, `models/**`, `**/route*`
**생성 Skills**:
- RESTful API Design
- Database Schema Design
- Authentication & Security
- API Performance Optimization

### 데이터 처리
**키워드**: data, processing, transformation, analytics, algorithm
**감지 파일**: `data/**`, `utils/processing*`, `**/data*`
**생성 Skills**:
- Data Transformation Patterns
- Algorithm Selection
- Performance Optimization
- Data Validation

### 보안
**키워드**: security, auth, encryption, validation, sanitization
**감지 파일**: `**/auth*`, `**/security*`, `**/*secure*`
**생성 Skills**:
- Security Best Practices
- Vulnerability Prevention
- Authentication Patterns
- Data Protection

### 테스팅
**키워드**: test, spec, mock, fixture, coverage
**감지 파일**: `**/*.test.*`, `**/*.spec.*`, `test/**`
**생성 Skills**:
- Unit Testing Best Practices
- Integration Testing
- Test Data Management
- Coverage Optimization

## 생성 과정 상세

### 1단계: 코드베이스 스캔
```
├─ 파일 구조 분석
├─ 패턴 인식
├─ 기술 스택 감지
└─ 도메인 분류
```

### 2단계: 도메인 식별
```
├─ 키워드 매칭
├─ 파일 경로 분석
├─ 의존성 추적
└─ 기능별 그룹화
```

### 3단계: 지식 추출
```
├─ 코드 패턴 분석
├─ 설정 파일 파싱
├─ 타입 정의 추출
└─ 주석 및 문서 수집
```

### 4단계: Skill 생성
```
├─ 템플릿 기반 생성
├─ 예제 자동 작성
├─ 베스트 프랙티스 추가
└─ 검증 규칙 정의
```

### 5단계: 통합 및 검증
```
├─ plugin.json 업데이트
├─ Skill 유효성 검사
├─ 호환성 확인
└─ 설치 준비
```

## 출력 형식

### 생성된 파일 구조
```
skills/
├─ [skill-name]/
│  ├─ SKILL.md          # Skill 정의 (메인 문서)
│  ├─ examples.md       # 상세 사용 예제
│  ├─ validation.md     # 검증 규칙 및 체크리스트
│  ├─ resources.md      # 관련 리소스 및 참고자료
│  └─ README.md         # 빠른 시작 가이드
└─ ...
```

### plugin.json 업데이트
```json
{
  "skills": [
    "./skills/[skill-name]/SKILL.md",
    "./skills/[skill-name-2]/SKILL.md"
  ]
}
```

## 예제: React Component Patterns Skill 생성

```bash
/skill-generator --domain "frontend" --focus "react-components"
```

**생성 결과:**
- `skills/react-component-patterns/SKILL.md`
- `skills/react-component-patterns/examples.md`
- `skills/react-component-patterns/validation.md`

## Skill 활용

생성된 Skills는 플러그인의 `plugin.json`에 등록되어 다음과 같이 사용됩니다:

```json
{
  "skills": [
    "./skills/react-component-patterns/SKILL.md",
    "./skills/backend-api-design/SKILL.md",
    "./skills/security-best-practices/SKILL.md"
  ]
}
```

## Skill 커스터마이징

생성된 Skill은 자동으로 생성되지만 언제든지 수정할 수 있습니다:

1. **Skill 수정**: `SKILL.md` 파일 직접 편집
2. **예제 추가**: `examples.md`에 새로운 예제 추가
3. **검증 규칙 업데이트**: `validation.md` 수정

## 고급 기능

### 다중 Skill 생성
```bash
/skill-generator --multi-domain --comprehensive
```

여러 도메인에서 동시에 Skills를 생성합니다.

### 기존 Skill 업데이트
```bash
/skill-generator --update --preserve-custom
```

기존 Skills는 보존하면서 새로운 패턴 추가.

### Skill 플러그인에 통합
```bash
/skill-generator --integrate my-skill --plugin frontend-plugin
```

생성된 Skill을 특정 플러그인에 추가.

## 설정 옵션

### 스캔 범위 (--scope)
- `file`: 단일 파일 기반
- `directory`: 디렉토리 기반 (기본값)
- `project`: 전체 프로젝트

### 분석 깊이 (--depth)
- `shallow`: 기본 패턴만 감지
- `medium`: 일반적인 분석 (기본값)
- `deep`: 상세한 코드 분석

### 출력 형식 (--format)
- `markdown`: Markdown 형식 (기본값)
- `json`: JSON 구조
- `yaml`: YAML 형식

## 주의사항

### ✅ 해야 할 것
- 정기적으로 Skill 업데이트
- 생성된 Skill 검토 및 검증
- 팀의 베스트 프랙티스 반영
- 버전 관리

### ❌ 하지 말아야 할 것
- 생성된 Skill의 과도한 복잡성
- 검증되지 않은 정보 포함
- 라이선스 없는 코드 예제 사용
- 민감한 정보 노출

## 명령어 참조

| 명령어 | 설명 |
|--------|------|
| `/skill-generator` | 전체 코드베이스 분석 및 Skill 생성 |
| `/skill-generator --domain <name>` | 특정 도메인 Skill 생성 |
| `/skill-generator --path <path>` | 특정 디렉토리 기반 Skill 생성 |
| `/skill-generator --comprehensive` | 상세한 분석과 복잡한 Skill 생성 |
| `/skill-generator --update` | 기존 Skill 업데이트 |
| `/skill-generator --integrate <skill>` | Skill을 플러그인에 통합 |
| `/skill-generator --list` | 생성 가능한 Skill 목록 표시 |
| `/skill-generator --validate` | 기존 Skill 검증 |

## 마무리

Skill Generator를 사용하면:
- ⚡ Skill 생성 시간을 90% 단축
- 🎯 도메인 전문성을 체계적으로 정의
- 📚 재사용 가능한 AI 능력 구축
- 🔄 지속적인 개선 및 업데이트

이제 Claude에게 당신의 프로젝트에 대한 깊이 있는 지식을 제공해보세요!
