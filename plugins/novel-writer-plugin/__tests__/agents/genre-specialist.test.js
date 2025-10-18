import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('genre-specialist agent', () => {
  let agentContent;
  const agentPath = join(__dirname, '../../agents/genre-specialist.md');

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

  describe('전문 분야 검증', () => {
    it('should mention multiple genres', () => {
      expect(agentContent).toMatch(/판타지|fantasy/i);
      expect(agentContent).toMatch(/로맨스|romance/i);
      expect(agentContent).toMatch(/스릴러|thriller/i);
    });

    it('should define expertise areas', () => {
      expect(agentContent).toMatch(/전문.*분야|expertise|specialization/i);
    });
  });

  describe('장르 컨벤션 검증', () => {
    it('should mention genre conventions', () => {
      expect(agentContent).toMatch(/컨벤션|convention/i);
    });

    it('should provide checklist approach', () => {
      expect(agentContent).toMatch(/체크리스트|checklist/i);
    });
  });

  describe('트로프 가이드 검증', () => {
    it('should include trope guidance', () => {
      expect(agentContent).toMatch(/트로프|trope/i);
    });

    it('should mention cliche avoidance', () => {
      expect(agentContent).toMatch(/클리셰|cliche/i);
    });
  });

  describe('작업 방식 검증', () => {
    it('should describe working style', () => {
      expect(agentContent).toMatch(/작업.*방식|working.*style|approach/i);
    });

    it('should mention asking questions', () => {
      expect(agentContent).toMatch(/질문|question/i);
    });
  });

  describe('서비스 제공 검증', () => {
    it('should list provided services', () => {
      expect(agentContent).toMatch(/서비스|service|제공/i);
    });
  });

  describe('품질 검증', () => {
    it('should be at least 600 characters long', () => {
      expect(agentContent.length).toBeGreaterThan(600);
    });

    it('should not have TODO or FIXME comments', () => {
      expect(agentContent).not.toMatch(/TODO|FIXME/i);
    });
  });
});
