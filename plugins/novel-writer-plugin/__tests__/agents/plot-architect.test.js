import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('plot-architect agent', () => {
  let agentContent;
  const agentPath = join(__dirname, '../../agents/plot-architect.md');

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

  describe('플롯 이론 검증', () => {
    it('should mention plot structure theories', () => {
      expect(agentContent).toMatch(/save the cat|hero's journey|story circle/i);
    });

    it('should include beat sheet concept', () => {
      expect(agentContent).toMatch(/비트.*시트|beat.*sheet/i);
    });
  });

  describe('구조 분석 검증', () => {
    it('should mention structure analysis', () => {
      expect(agentContent).toMatch(/구조.*분석|structure.*analysis/i);
    });

    it('should include pacing issues', () => {
      expect(agentContent).toMatch(/페이싱|pacing/i);
    });
  });

  describe('서브플롯 검증', () => {
    it('should mention subplot weaving', () => {
      expect(agentContent).toMatch(/서브.*플롯|subplot/i);
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
