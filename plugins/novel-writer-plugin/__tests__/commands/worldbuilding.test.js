import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('worldbuilding command', () => {
  let commandContent;

  beforeAll(() => {
    const commandPath = join(__dirname, '../../commands/worldbuilding.md');
    commandContent = readFileSync(commandPath, 'utf-8');
  });

  describe('기본 구조 검증', () => {
    it('should have frontmatter with name', () => {
      expect(commandContent).toMatch(/^---\s*\n/);
      expect(commandContent).toMatch(/name:\s*worldbuilding/);
    });

    it('should have description', () => {
      expect(commandContent).toMatch(/description:/);
    });

    it('should have category', () => {
      expect(commandContent).toMatch(/category:/);
    });
  });

  describe('세계관 요소 검증', () => {
    it('should mention world elements', () => {
      expect(commandContent).toMatch(/세계|world|설정|setting/i);
    });

    it('should include geography', () => {
      expect(commandContent).toMatch(/지리|geography|지형|terrain/i);
    });

    it('should include history', () => {
      expect(commandContent).toMatch(/역사|history|과거|past/i);
    });

    it('should include culture', () => {
      expect(commandContent).toMatch(/문화|culture|사회|society/i);
    });

    it('should include magic or technology system', () => {
      expect(commandContent).toMatch(/마법|magic|기술|technology|시스템|system/i);
    });

    it('should include politics', () => {
      expect(commandContent).toMatch(/정치|politics|권력|power/i);
    });

    it('should include economy', () => {
      expect(commandContent).toMatch(/경제|economy|화폐|currency/i);
    });

    it('should include religion', () => {
      expect(commandContent).toMatch(/종교|religion|신앙|faith/i);
    });
  });

  describe('세계관 일관성 검증', () => {
    it('should mention consistency', () => {
      expect(commandContent).toMatch(/일관성|consistency|통일|unified/i);
    });

    it('should include rules or laws', () => {
      expect(commandContent).toMatch(/규칙|rules|법칙|laws|원칙|principles/i);
    });

    it('should mention logic', () => {
      expect(commandContent).toMatch(/논리|logic|합리|rational/i);
    });
  });

  describe('장르별 세계관 검증', () => {
    it('should mention fantasy worldbuilding', () => {
      expect(commandContent).toMatch(/판타지|fantasy/i);
    });

    it('should mention SF worldbuilding', () => {
      expect(commandContent).toMatch(/SF|science fiction|공상과학/i);
    });

    it('should mention realistic worldbuilding', () => {
      expect(commandContent).toMatch(/현실|realistic|현대|contemporary/i);
    });
  });

  describe('출력 형식 검증', () => {
    it('should provide structured output', () => {
      expect(commandContent).toMatch(/체크리스트|checklist|항목|items/i);
    });

    it('should include examples', () => {
      expect(commandContent).toMatch(/예시|example|샘플|sample/i);
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
