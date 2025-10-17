import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('consistency-check command', () => {
  let commandContent;
  const commandPath = join(__dirname, '../../commands/consistency-check.md');

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

  describe('캐릭터 일관성 검증', () => {
    it('should mention character consistency', () => {
      expect(commandContent).toMatch(/캐릭터.*일관성|character.*consistency/i);
    });

    it('should check behavior patterns', () => {
      expect(commandContent).toMatch(/행동.*패턴|behavior.*pattern/i);
    });

    it('should verify character traits', () => {
      expect(commandContent).toMatch(/성격|trait|특성/i);
    });
  });

  describe('타임라인 일관성 검증', () => {
    it('should include timeline consistency', () => {
      expect(commandContent).toMatch(/타임라인|timeline|시간/i);
    });

    it('should check chronological order', () => {
      expect(commandContent).toMatch(/순서|order|시간.*순|chronological/i);
    });
  });

  describe('설정 일관성 검증', () => {
    it('should verify setting consistency', () => {
      expect(commandContent).toMatch(/설정|setting|세계관/i);
    });

    it('should check world-building rules', () => {
      expect(commandContent).toMatch(/규칙|rule|법칙/i);
    });
  });

  describe('플롯 일관성 검증', () => {
    it('should check plot consistency', () => {
      expect(commandContent).toMatch(/플롯|plot/i);
    });

    it('should verify cause and effect', () => {
      expect(commandContent).toMatch(/인과|cause.*effect/i);
    });
  });

  describe('체크 항목 검증', () => {
    it('should provide checklist items', () => {
      expect(commandContent).toMatch(/체크|check|항목|item/i);
    });

    it('should be systematic', () => {
      expect(commandContent).toMatch(/체계|system|단계|step/i);
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
