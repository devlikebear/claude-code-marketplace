import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('word-count command', () => {
  let commandContent;

  beforeAll(() => {
    const commandPath = join(__dirname, '../../commands/word-count.md');
    commandContent = readFileSync(commandPath, 'utf-8');
  });

  describe('기본 구조 검증', () => {
    it('should have frontmatter with name', () => {
      expect(commandContent).toMatch(/^---\s*\n/);
      expect(commandContent).toMatch(/name:\s*word-count/);
    });

    it('should have description', () => {
      expect(commandContent).toMatch(/description:/);
    });

    it('should have category', () => {
      expect(commandContent).toMatch(/category:/);
    });
  });

  describe('단어 수 기능 검증', () => {
    it('should mention word count', () => {
      expect(commandContent).toMatch(/단어|word|글자|character/i);
    });

    it('should include counting or tracking', () => {
      expect(commandContent).toMatch(/수|count|추적|track/i);
    });

    it('should mention goals or targets', () => {
      expect(commandContent).toMatch(/목표|goal|target/i);
    });

    it('should include progress tracking', () => {
      expect(commandContent).toMatch(/진행|progress|진척/i);
    });
  });

  describe('분량 관리 검증', () => {
    it('should mention chapters or scenes', () => {
      expect(commandContent).toMatch(/챕터|chapter|장|scene/i);
    });

    it('should include pacing', () => {
      expect(commandContent).toMatch(/페이싱|pacing|속도|pace/i);
    });

    it('should mention length or size', () => {
      expect(commandContent).toMatch(/분량|length|size/i);
    });
  });

  describe('목표 설정 검증', () => {
    it('should mention daily goals', () => {
      expect(commandContent).toMatch(/일일|daily|하루/i);
    });

    it('should include total or overall goals', () => {
      expect(commandContent).toMatch(/전체|total|overall/i);
    });

    it('should mention deadlines', () => {
      expect(commandContent).toMatch(/마감|deadline|기한/i);
    });
  });

  describe('장르별 분량 검증', () => {
    it('should mention novel lengths', () => {
      expect(commandContent).toMatch(/소설|novel|장편/i);
    });

    it('should include short story', () => {
      expect(commandContent).toMatch(/단편|short story/i);
    });

    it('should mention novella', () => {
      expect(commandContent).toMatch(/중편|novella/i);
    });
  });

  describe('통계 및 분석 검증', () => {
    it('should mention statistics or metrics', () => {
      expect(commandContent).toMatch(/통계|statistics|수치|metrics/i);
    });

    it('should include average or mean', () => {
      expect(commandContent).toMatch(/평균|average|mean/i);
    });

    it('should mention tracking or monitoring', () => {
      expect(commandContent).toMatch(/추적|tracking|모니터|monitor/i);
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
