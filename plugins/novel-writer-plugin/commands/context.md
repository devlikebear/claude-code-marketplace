---
name: context
description: 작성된 소설 콘텐츠를 검색하고 참조(reference)하여 일관성 있는 글쓰기를 지원하는 컨텍스트 관리 명령어
category: workflow
---

# 컨텍스트 관리 (Context Management)

작성된 소설의 **모든 콘텐츠를 검색하고 참조**하여 일관성 있는 집필을 돕습니다.

## 사용법 (Usage)

```bash
/context [쿼리] [타입]
```

**예시**:
```bash
/context "주인공의 마법 능력"
/context "Chapter 3의 전투 장면" chapter
/context "엘프의 문화" worldbuilding
/context "악당의 동기" character
```

---

## 🔍 컨텍스트 검색 기능

### 전체 프로젝트 검색

**검색 범위**:
- 플롯 개요 (`plot.md`)
- 캐릭터 프로필 (`characters/`)
- 세계관 설정 (`worldbuilding.md`)
- 타임라인 (`timeline.md`)
- 작성된 챕터 (`chapters/`)

**검색 방법**:
```bash
# 키워드로 검색
/context "마법 시스템"

# 특정 타입으로 필터링
/context "주인공" character
/context "Act 2" plot
/context "Chapter 5" chapter
```

---

## 📚 콘텐츠 타입별 검색

### Character (캐릭터) 검색

**사용법**:
```bash
/context "캐릭터명" character
/context "주인공의 과거" character
```

**검색 결과 예시**:
```
📍 위치: characters/protagonist.md

# 캐릭터: 엘리아 스톰

**기본 정보**:
- 나이: 28세
- 직업: 전직 대마법사
- 성격: INTJ, 냉정하지만 정의로움

**Want vs Need**:
- Want: 잃어버린 마법을 되찾기
- Need: 다른 사람을 믿고 의지하는 법 배우기

**Fatal Flaw**: 과도한 독립심, 도움 거부

**관련 장면**:
- Chapter 1: 마법을 잃는 순간
- Chapter 3: 동료에게 도움을 거절함
```

### Plot (플롯) 검색

**사용법**:
```bash
/context "전환점" plot
/context "Act 2" plot
```

**검색 결과 예시**:
```
📍 위치: plot.md

## Act 2: Confrontation (전개)

### Midpoint (중간 전환점)
- **Chapter 15**: 엘리아가 악당의 정체를 알게 됨
- **충격**: 악당은 그녀의 옛 스승
- **전환**: 복수에서 구원으로 목표 변경

**관련 챕터**:
- Chapter 14: 단서 발견
- Chapter 15: 정체 폭로
- Chapter 16: 새로운 계획
```

### Worldbuilding (세계관) 검색

**사용법**:
```bash
/context "마법 시스템" worldbuilding
/context "엘프 문화" worldbuilding
```

**검색 결과 예시**:
```
📍 위치: worldbuilding.md

## 마법 시스템 (Magic System)

**타입**: Hard Magic

**규칙**:
1. 마법은 생명력을 소모함
2. 과도한 사용 시 수명 단축
3. 마법사는 태어날 때 결정됨 (후천적 불가)
4. 4대 원소만 조작 가능

**제한**:
- 죽은 자를 되살릴 수 없음
- 시간을 거스를 수 없음
- 타인의 의지를 강제할 수 없음

**관련 장면**:
- Chapter 2: 마법 시스템 설명
- Chapter 7: 마법의 대가 치름
- Chapter 12: 금기 마법 시도
```

### Chapter (챕터) 검색

**사용법**:
```bash
/context "Chapter 3" chapter
/context "전투 장면" chapter
```

**검색 결과 예시**:
```
📍 위치: chapters/chapter-03.md

# Chapter 3: The Betrayal (배신)

**분량**: 3,200 단어
**POV**: 1인칭 (엘리아)
**주요 사건**:
- 동료 마커스가 악당에게 정보 넘김
- 엘리아 함정에 빠짐
- 간신히 탈출하지만 마법 소진

**주요 대화**:
> "너... 네가 그들과 함께 있었구나."
> "미안해, 엘리아. 하지만 선택의 여지가 없었어."

**관련 캐릭터**:
- 엘리아 (주인공)
- 마커스 (배신자)
- 그림자 군주 (악당, 언급만)

**다음 챕터 연결**:
Chapter 4에서 엘리아는 혼자 힘으로 복수를 계획함
```

---

## 🔗 참조 및 인용 기능

### 이전 콘텐츠 참조

**직접 인용**:
```bash
/context "Chapter 1에서 주인공이 한 말"

# 결과:
"나는 다시는 누구도 믿지 않을 거야. 혼자서도 충분해."
- Chapter 1, 엘리아의 대사 (page 15)
```

**장면 요약**:
```bash
/context "Chapter 2의 마법 학교 장면 요약"

# 결과:
Chapter 2에서 엘리아는 마법 학교에 처음 입학합니다.
그녀는 스승 아르카누스를 만나고, 마법의 기본 원리를
배웁니다. 이 장면은 나중에 Chapter 15의 반전을 위한
복선입니다.
```

**관련 콘텐츠 찾기**:
```bash
/context "마커스가 등장하는 모든 장면"

# 결과:
마커스 등장 장면:
- Chapter 2: 첫 만남 (동료로 소개)
- Chapter 3: 배신 (정보 유출)
- Chapter 8: 재등장 (후회하는 모습)
- Chapter 15: 구원 (엘리아를 구함)
```

---

## 💡 활용 시나리오

### 시나리오 1: 캐릭터 일관성 유지

**문제**: Chapter 10을 쓰는데 주인공의 성격이 기억 안 남

**해결**:
```bash
/context "엘리아" character

# 결과로 캐릭터 프로필 전체 확인
# 성격, 동기, Fatal Flaw 상기
# 이전 장면에서의 행동 패턴 확인
```

### 시나리오 2: 플롯 포인트 확인

**문제**: 중반부인데 다음 전개가 뭐였는지 기억 안 남

**해결**:
```bash
/context "Act 2 전환점" plot

# plot.md에서 해당 부분 확인
# 다음에 일어나야 할 사건 파악
```

### 시나리오 3: 세계관 규칙 준수

**문제**: 마법 장면을 쓰는데 규칙이 헷갈림

**해결**:
```bash
/context "마법 시스템 규칙" worldbuilding

# 마법의 제한사항 확인
# 이전에 설정한 규칙 검토
# 일관성 유지
```

### 시나리오 4: 이전 장면 연결

**문제**: Chapter 8을 쓰는데 Chapter 3의 내용과 연결하고 싶음

**해결**:
```bash
/context "Chapter 3 배신 장면" chapter

# 정확한 대사와 상황 확인
# 감정선 파악
# 자연스러운 콜백 작성
```

---

## 🎯 고급 검색 기법

### 복합 검색

**여러 키워드 조합**:
```bash
/context "엘리아 + 마커스 + 배신"
# → Chapter 3, 8, 15에서 관련 장면 찾기
```

**타임라인 기반 검색**:
```bash
/context "1년 전 사건" timeline
# → 타임라인에서 해당 시점 사건 확인
```

**관계 검색**:
```bash
/context "엘리아와 아르카누스의 관계"
# → 두 캐릭터가 함께 등장하는 모든 장면
```

### 컨텍스트 체인

**연속 참조**:
```bash
# 1. 캐릭터 확인
/context "마커스" character

# 2. 관련 장면 찾기
/context "마커스 Chapter 3"

# 3. 대사 인용
/context "마커스가 Chapter 3에서 한 말"

# 4. 새 장면 작성 시 참조
"이 대사를 Chapter 8에서 콜백하고 싶어"
```

---

## 📊 검색 결과 활용

### 일관성 검증에 활용

```bash
# 캐릭터 묘사 확인
/context "엘리아의 외모"
# → 모든 챕터에서 일관되게 묘사되었는지 확인

# 세계관 규칙 확인
/context "마법 제한"
# → 모든 마법 장면에서 규칙을 지켰는지 확인
```

### 복선과 회수

```bash
# 복선 확인
/context "붉은 목걸이"
# → Chapter 2에서 언급
# → Chapter 15에서 중요 단서로 활용 예정

# 회수 계획
"Chapter 2의 붉은 목걸이를 Chapter 15에서 어떻게 회수할지 계획해줘"
```

### 감정선 추적

```bash
# 캐릭터 감정 변화
/context "엘리아의 감정"
# → Chapter 1: 분노와 복수심
# → Chapter 8: 회의와 고독
# → Chapter 15: 용서와 성장
```

---

## 🔄 /context와 다른 명령어 통합

### with /scene-write

```bash
# 1. 이전 장면 확인
/context "Chapter 7 마지막 장면"

# 2. 컨텍스트 기�� 다음 장면 작성
/scene-write continuation 1인칭
"Chapter 7의 감정을 이어받아 Chapter 8 시작"
```

### with /consistency-check

```bash
# 1. 특정 요소 검색
/context "마법 사용 장면" chapter

# 2. 일관성 검증
/consistency-check worldbuilding "Chapter 1-10"
```

### with /dialogue-enhance

```bash
# 1. 캐릭터 말투 확인
/context "엘리아의 대화" character

# 2. 일관된 말투로 대화 작성
/dialogue-enhance [새 대화]
"엘리아의 기존 말투를 유지하면서 개선"
```

---

## ❓ FAQ

### Q: 검색이 너무 많은 결과를 반환하면?

**A**: 타입을 지정하여 범위를 좁히세요:
```bash
/context "마법" worldbuilding  # 세계관만 검색
/context "마법" chapter        # 챕터만 검색
```

### Q: 정확한 문구를 찾고 싶을 때는?

**A**: 따옴표로 정확한 문구를 지정하세요:
```bash
/context "나는 다시는 누구도 믿지 않을 거야"
```

### Q: 여러 파일에 걸쳐 있는 정보를 찾으려면?

**A**: 관련 키워드로 검색하면 모든 파일에서 검색됩니다:
```bash
/context "마커스의 배신"
# → characters/marcus.md
# → chapters/chapter-03.md
# → plot.md
```

### Q: 검색 속도가 느리면?

**A**: 타입을 지정하면 더 빠릅니다:
```bash
/context "캐릭터명" character  # 캐릭터 폴더만
/context "사건명" plot         # 플롯 파일만
```

---

## 💡 프로 작가 팁

### Tip 1: 작성 전 컨텍스트 확인

```
새 챕터를 시작하기 전:
1. /context "이전 챕터" chapter
2. /context "주요 캐릭터들" character
3. /context "현재 플롯 위치" plot
```

### Tip 2: 정기적인 일관성 점검

```
매 5챕터마다:
/context "캐릭터 묘사"
/context "세계관 규칙"
/context "타임라인"
→ 모순 발견 시 즉시 수정
```

### Tip 3: 복선 관리

```
복선을 심을 때:
"Chapter X에 Y 복선을 심었음" 메모

회수할 때:
/context "Y 복선"
→ 정확한 위치와 내용 확인
```

### Tip 4: 캐릭터 목소리 유지

```
캐릭터 대화 쓰기 전:
/context "[캐릭터명]의 대화"
→ 말투와 표현 패턴 확인
→ 일관성 유지
```

---

**컨텍스트를 활용하세요!** `/context`로 작성한 모든 내용을 쉽게 찾고 참조할 수 있습니다. 일관성 있는 소설 작성의 핵심입니다! 🔍

Need help? Try `/help` for comprehensive guide!
