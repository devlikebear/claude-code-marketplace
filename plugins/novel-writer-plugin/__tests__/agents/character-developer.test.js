import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('character-developer agent', () => {
  let agentContent;
  const agentPath = join(__dirname, '../../agents/character-developer.md');

  beforeAll(() => {
    if (!existsSync(agentPath)) {
      throw new Error(`Agent file not found: ${agentPath}`);
    }
    agentContent = readFileSync(agentPath, 'utf-8');
  });

  describe('파일 구조 검증', () => {
    it('should have valid frontmatter', () => {
      expect(agentContent).toMatch(/^---\s*\n/);
      expect(agentContent).toMatch(/name:/);
      expect(agentContent).toMatch(/description:/);
    });

    it('should have a title', () => {
      expect(agentContent).toMatch(/^#\s+.+/m);
    });
  });

  describe('핵심 역량 검증', () => {
    it('should mention character development', () => {
      expect(agentContent).toMatch(/캐릭터.*개발|character.*development/i);
    });

    it('should include relationship dynamics', () => {
      expect(agentContent).toMatch(/관계|relationship/i);
    });
  });

  describe('캐릭터 깊이 검증', () => {
    it('should mention character depth', () => {
      expect(agentContent).toMatch(/깊이|depth|입체|dimensional/i);
    });

    it('should include motivation analysis', () => {
      expect(agentContent).toMatch(/동기|motivation/i);
    });
  });

  describe('작업 방식 검증', () => {
    it('should describe working approach', () => {
      expect(agentContent).toMatch(/작업|work|approach/i);
    });
  });

  describe('품질 검증', () => {
    it('should be at least 500 characters long', () => {
      expect(agentContent.length).toBeGreaterThan(500);
    });

    it('should not have TODO or FIXME comments', () => {
      expect(agentContent).not.toMatch(/TODO|FIXME/i);
    });
  });
});
