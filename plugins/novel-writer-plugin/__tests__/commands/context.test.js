import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('context command', () => {
  let commandContent;

  beforeAll(() => {
    const commandPath = join(__dirname, '../../commands/context.md');
    commandContent = readFileSync(commandPath, 'utf-8');
  });

  describe('기본 구조 검증', () => {
    it('should have frontmatter with name', () => {
      expect(commandContent).toMatch(/^---\s*\n/);
      expect(commandContent).toMatch(/name:\s*context/);
    });

    it('should have description', () => {
      expect(commandContent).toMatch(/description:/);
    });

    it('should have category', () => {
      expect(commandContent).toMatch(/category:/);
    });
  });

  describe('컨텍스트 관리 기능 검증', () => {
    it('should manage project context', () => {
      expect(commandContent).toMatch(/컨텍스트|context/i);
      expect(commandContent).toMatch(/관리|manage/i);
    });

    it('should reference previous content', () => {
      expect(commandContent).toMatch(/참조|reference/i);
      expect(commandContent).toMatch(/이전|previous/i);
    });

    it('should track content location', () => {
      expect(commandContent).toMatch(/위치|location/i);
    });
  });

  describe('콘텐츠 검색 기능 검증', () => {
    it('should support searching content', () => {
      expect(commandContent).toMatch(/검색|search/i);
    });

    it('should find specific scenes', () => {
      expect(commandContent).toMatch(/장면|scene/i);
    });

    it('should locate characters', () => {
      expect(commandContent).toMatch(/캐릭터|character/i);
    });

    it('should search plot elements', () => {
      expect(commandContent).toMatch(/플롯|plot/i);
    });
  });

  describe('사용법 검증', () => {
    it('should show command syntax', () => {
      expect(commandContent).toMatch(/\/context/);
    });

    it('should support query parameter', () => {
      expect(commandContent).toMatch(/쿼리|query/i);
    });

    it('should show usage examples', () => {
      expect(commandContent).toMatch(/예시|example/i);
    });
  });

  describe('콘텐츠 타입별 검색 검증', () => {
    it('should search characters', () => {
      expect(commandContent).toMatch(/character/i);
    });

    it('should search plot points', () => {
      expect(commandContent).toMatch(/plot/i);
    });

    it('should search worldbuilding', () => {
      expect(commandContent).toMatch(/worldbuilding|세계관/i);
    });

    it('should search chapters', () => {
      expect(commandContent).toMatch(/chapter|챕터/i);
    });
  });

  describe('참조 기능 검증', () => {
    it('should enable referencing', () => {
      expect(commandContent).toMatch(/참조|reference/i);
    });

    it('should show related content', () => {
      expect(commandContent).toMatch(/관련|related/i);
    });

    it('should provide quotes', () => {
      expect(commandContent).toMatch(/인용|quote/i);
    });
  });

  describe('품질 검증', () => {
    it('should be comprehensive (at least 2000 characters)', () => {
      expect(commandContent.length).toBeGreaterThan(2000);
    });

    it('should not have TODO or FIXME', () => {
      expect(commandContent).not.toMatch(/TODO|FIXME/);
    });

    it('should have proper formatting', () => {
      expect(commandContent).toMatch(/#{1,3}\s+\w+/);
    });

    it('should include code blocks', () => {
      expect(commandContent).toMatch(/```/);
    });
  });
});
