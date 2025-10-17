import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('dialogue-enhance command', () => {
  let commandContent;
  const commandPath = join(__dirname, '../../commands/dialogue-enhance.md');

  beforeAll(() => {
    if (!existsSync(commandPath)) {
      throw new Error(`Command file not found: ${commandPath}`);
    }
    commandContent = readFileSync(commandPath, 'utf-8');
  });

  describe('파일 구조 검증', () => {
    it('should have valid frontmatter with description', () => {
      expect(commandContent).toMatch(/^---\s*\n/);
      expect(commandContent).toMatch(/description:/);
    });

    it('should have a title', () => {
      expect(commandContent).toMatch(/^#\s+.+/m);
    });
  });

  describe('캐릭터 목소리 검증', () => {
    it('should mention character voice consistency', () => {
      expect(commandContent).toMatch(/캐릭터.*목소리|character.*voice/i);
    });

    it('should mention distinct speech patterns', () => {
      expect(commandContent).toMatch(/말투|speech.*pattern|distinctive/i);
    });
  });

  describe('서브텍스트 검증', () => {
    it('should include subtext concept', () => {
      expect(commandContent).toMatch(/서브텍스트|subtext/i);
    });

    it('should mention unspoken meaning', () => {
      expect(commandContent).toMatch(/숨은.*의미|hidden.*meaning|implied/i);
    });
  });

  describe('대화 태그 검증', () => {
    it('should mention dialogue tags', () => {
      expect(commandContent).toMatch(/대화.*태그|dialogue.*tag|said/i);
    });

    it('should guide proper usage', () => {
      expect(commandContent).toMatch(/적절|appropriate|proper/i);
    });
  });

  describe('자연스러움 검증', () => {
    it('should emphasize natural dialogue', () => {
      expect(commandContent).toMatch(/자연스|natural/i);
    });

    it('should avoid formal/written language', () => {
      expect(commandContent).toMatch(/구어|spoken|conversational/i);
    });
  });

  describe('개선 체크리스트 검증', () => {
    it('should include improvement checklist', () => {
      expect(commandContent).toMatch(/체크리스트|checklist/i);
    });
  });

  describe('사용 예시 검증', () => {
    it('should include usage examples', () => {
      expect(commandContent).toMatch(/예시|example/i);
    });
  });

  describe('품질 검증', () => {
    it('should be at least 500 characters long', () => {
      expect(commandContent.length).toBeGreaterThan(500);
    });

    it('should not have TODO or FIXME comments', () => {
      expect(commandContent).not.toMatch(/TODO|FIXME/i);
    });
  });
});
