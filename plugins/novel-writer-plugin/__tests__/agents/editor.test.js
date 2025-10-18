import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('editor agent', () => {
  let agentContent;
  const agentPath = join(__dirname, '../../agents/editor.md');

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

  describe('편집 역량 검증', () => {
    it('should mention grammar checking', () => {
      expect(agentContent).toMatch(/문법|grammar/i);
    });

    it('should include flow improvement', () => {
      expect(agentContent).toMatch(/흐름|flow/i);
    });

    it('should mention readability', () => {
      expect(agentContent).toMatch(/가독성|readability/i);
    });
  });

  describe('편집 체크리스트 검증', () => {
    it('should provide editing checklist', () => {
      expect(agentContent).toMatch(/체크리스트|checklist/i);
    });
  });

  describe('작업 방식 검증', () => {
    it('should describe editing approach', () => {
      expect(agentContent).toMatch(/작업|approach|method/i);
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
