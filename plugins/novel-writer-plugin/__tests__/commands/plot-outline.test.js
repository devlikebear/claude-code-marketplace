import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('plot-outline command', () => {
  let commandContent;
  const commandPath = join(__dirname, '../../commands/plot-outline.md');

  beforeAll(() => {
    // 명령어 파일이 존재하는지 확인
    if (!existsSync(commandPath)) {
      throw new Error(`Command file not found: ${commandPath}`);
    }
    commandContent = readFileSync(commandPath, 'utf-8');
  });

  describe('파일 구조 검증', () => {
    it('should have valid frontmatter with description', () => {
      // frontmatter가 존재하고 description 필드를 포함하는지 검증
      expect(commandContent).toMatch(/^---\s*\n/);
      expect(commandContent).toMatch(/description:/);
      expect(commandContent).toMatch(/---\s*\n/);
    });

    it('should have a title', () => {
      // 제목이 존재하는지 검증
      expect(commandContent).toMatch(/^#\s+.+/m);
    });
  });

  describe('플롯 구조 요소 검증', () => {
    it('should include 3-act structure guide', () => {
      // 3막 구조 가이드가 포함되어 있는지 검증
      expect(commandContent).toMatch(/1막|Act 1|Setup/i);
      expect(commandContent).toMatch(/2막|Act 2|Confrontation/i);
      expect(commandContent).toMatch(/3막|Act 3|Resolution/i);
    });

    it('should include main character goals section', () => {
      // 주인공의 목표 섹션이 있는지 검증
      expect(commandContent).toMatch(/주인공.*목표|protagonist.*goal|character.*goal/i);
    });

    it('should identify central conflict section', () => {
      // 중심 갈등 섹션이 있는지 검증
      expect(commandContent).toMatch(/갈등|conflict/i);
    });

    it('should include antagonist section', () => {
      // 대립자/길항자 섹션이 있는지 검증
      expect(commandContent).toMatch(/대립자|길항자|antagonist|villain/i);
    });

    it('should include subplot guidance', () => {
      // 서브플롯 가이드가 있는지 검증
      expect(commandContent).toMatch(/서브.*플롯|subplot/i);
    });
  });

  describe('출력 형식 검증', () => {
    it('should specify markdown output format', () => {
      // 마크다운 출력 형식이 명시되어 있는지 검증
      expect(commandContent).toMatch(/마크다운|markdown/i);
    });

    it('should include scene structure template', () => {
      // 장면 구조 템플릿이 있는지 검증
      expect(commandContent).toMatch(/장면|scene/i);
      expect(commandContent).toMatch(/등장인물|character/i);
      expect(commandContent).toMatch(/사건|event/i);
    });
  });

  describe('프롬프트 단계별 가이드 검증', () => {
    it('should have information gathering step', () => {
      // 정보 수집 단계가 있는지 검증
      expect(commandContent).toMatch(/1단계|step 1|정보.*수집|information/i);
      expect(commandContent).toMatch(/장르|genre/i);
      expect(commandContent).toMatch(/테마|theme/i);
    });

    it('should have structure design step', () => {
      // 구조 설계 단계가 있는지 검증
      expect(commandContent).toMatch(/2단계|step 2|구조.*설계/i);
    });

    it('should have key elements definition step', () => {
      // 핵심 요소 정의 단계가 있는지 검증
      expect(commandContent).toMatch(/3단계|step 3|핵심.*요소/i);
    });
  });

  describe('장르별 특화 요소 검증', () => {
    it('should mention genre-specific considerations', () => {
      // 장르별 고려사항이 언급되어 있는지 검증
      expect(commandContent).toMatch(/장르|genre/i);
    });
  });

  describe('사용 예시 검증', () => {
    it('should include usage examples', () => {
      // 사용 예시가 포함되어 있는지 검증
      expect(commandContent).toMatch(/예시|example/i);
    });
  });

  describe('품질 검증', () => {
    it('should be at least 500 characters long', () => {
      // 최소 길이 검증 (충분한 가이드를 제공하는지)
      expect(commandContent.length).toBeGreaterThan(500);
    });

    it('should not have TODO or FIXME comments', () => {
      // TODO나 FIXME가 없는지 검증
      expect(commandContent).not.toMatch(/TODO|FIXME/i);
    });
  });
});
