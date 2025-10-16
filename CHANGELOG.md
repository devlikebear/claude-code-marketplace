# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-10-16

### Added

- 4개의 Claude Code 플러그인 마켓플레이스 초기 릴리즈
  - `/tdd-workflow`: Kent Beck의 TDD 원칙을 따라 Next.js 개발하는 워크플로우 플러그인
  - `/docs`: API 명세, README, CHANGELOG 자동화 플러그인
  - `/github-flow`: GitHub Flow 워크플로우 전체 프로세스 자동화 플러그인
  - `quality-guardian`: 코드 품질 및 보안 종합 검사 Sub-agent
- CI/CD 워크플로우 구성
  - 플러그인 검증 자동화
  - 마켓플레이스 스키마 검증
- GitHub 템플릿 추가
  - Issue 템플릿 (Bug Report, Feature Request)
  - Pull Request 템플릿
- 개발자 문서
  - `docs/DEVELOPMENT_GUIDE.md`: 플러그인 개발 가이드
  - `docs/CONTRIBUTING.md`: 플러그인 제출 가이드
  - `plan.md`: 프로젝트 개발 계획

### Changed

- 프로젝트 구조를 Claude Code 마켓플레이스 표준에 맞게 재구성
- README.md에 마켓플레이스 설치 및 사용 가이드 추가

## [0.1.0] - 2025-10-16

### Added

- 프로젝트 초기 설정
- 기본 디렉토리 구조 생성
- MIT 라이선스 적용
