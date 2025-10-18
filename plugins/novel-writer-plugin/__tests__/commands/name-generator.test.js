import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('name-generator command', () => {
  let commandContent;

  beforeAll(() => {
    const commandPath = join(__dirname, '../../commands/name-generator.md');
    commandContent = readFileSync(commandPath, 'utf-8');
  });

  describe('기본 구조 검증', () => {
    it('should have frontmatter with name', () => {
      expect(commandContent).toMatch(/^---\s*\n/);
      expect(commandContent).toMatch(/name:\s*name-generator/);
    });

    it('should have description', () => {
      expect(commandContent).toMatch(/description:/);
    });

    it('should have category', () => {
      expect(commandContent).toMatch(/category:/);
    });
  });

  describe('이름 생성 기능 검증', () => {
    it('should mention name generation', () => {
      expect(commandContent).toMatch(/이름|name|작명|naming/i);
    });

    it('should include character names', () => {
      expect(commandContent).toMatch(/캐릭터|character|인물/i);
    });

    it('should mention places or locations', () => {
      expect(commandContent).toMatch(/장소|place|location|지명/i);
    });

    it('should include meaning or significance', () => {
      expect(commandContent).toMatch(/의미|meaning|상징|symbol/i);
    });
  });

  describe('장르별 이름 검증', () => {
    it('should mention fantasy names', () => {
      expect(commandContent).toMatch(/판타지|fantasy/i);
    });

    it('should include modern or contemporary names', () => {
      expect(commandContent).toMatch(/현대|modern|contemporary/i);
    });

    it('should mention cultural or ethnic names', () => {
      expect(commandContent).toMatch(/문화|culture|민족|ethnic/i);
    });
  });

  describe('이름 유형 검증', () => {
    it('should include first names', () => {
      expect(commandContent).toMatch(/이름|first name|given name/i);
    });

    it('should mention last names or surnames', () => {
      expect(commandContent).toMatch(/성|last name|surname|family name/i);
    });

    it('should include full names', () => {
      expect(commandContent).toMatch(/전체|full|complete/i);
    });
  });

  describe('이름 원칙 검증', () => {
    it('should mention pronunciation', () => {
      expect(commandContent).toMatch(/발음|pronunciation|읽기|read/i);
    });

    it('should include memorability', () => {
      expect(commandContent).toMatch(/기억|memorable|remember/i);
    });

    it('should mention uniqueness or distinctiveness', () => {
      expect(commandContent).toMatch(/독특|unique|distinctive|구별/i);
    });

    it('should include appropriateness', () => {
      expect(commandContent).toMatch(/적절|appropriate|proper/i);
    });
  });

  describe('출력 형식 검증', () => {
    it('should provide examples', () => {
      expect(commandContent).toMatch(/예시|example|샘플|sample/i);
    });

    it('should include options or suggestions', () => {
      expect(commandContent).toMatch(/옵션|option|제안|suggestion/i);
    });
  });

  describe('품질 검증', () => {
    it('should be at least 1500 characters', () => {
      expect(commandContent.length).toBeGreaterThan(1500);
    });

    it('should not have TODO or FIXME', () => {
      expect(commandContent).not.toMatch(/TODO|FIXME/);
    });
  });
});
