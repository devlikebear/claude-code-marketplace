import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('continue command', () => {
  let commandContent;

  beforeAll(() => {
    const commandPath = join(__dirname, '../../commands/continue.md');
    commandContent = readFileSync(commandPath, 'utf-8');
  });

  describe('기본 구조 검증', () => {
    it('should have frontmatter with name', () => {
      expect(commandContent).toMatch(/^---\s*\n/);
      expect(commandContent).toMatch(/name:\s*continue/);
    });

    it('should have description', () => {
      expect(commandContent).toMatch(/description:/);
    });

    it('should have category', () => {
      expect(commandContent).toMatch(/category:/);
    });
  });

  describe('프로젝트 재개 기능 검증', () => {
    it('should support resuming work', () => {
      expect(commandContent).toMatch(/재개|resume/i);
    });

    it('should load previous progress', () => {
      expect(commandContent).toMatch(/진행|progress/i);
      expect(commandContent).toMatch(/불러오기|load/i);
    });

    it('should reference progress.json', () => {
      expect(commandContent).toMatch(/progress\.json/);
    });

    it('should show last work location', () => {
      expect(commandContent).toMatch(/마지막|last/i);
      expect(commandContent).toMatch(/작업|work/i);
    });
  });

  describe('컨텍스트 복원 검증', () => {
    it('should restore project context', () => {
      expect(commandContent).toMatch(/컨텍스트|context/i);
      expect(commandContent).toMatch(/복원|restore/i);
    });

    it('should reference project files', () => {
      expect(commandContent).toMatch(/plot\.md|character|worldbuilding/i);
    });

    it('should load chapters', () => {
      expect(commandContent).toMatch(/챕터|chapter/i);
    });

    it('should track where user left off', () => {
      expect(commandContent).toMatch(/중단|stopped|left off/i);
    });
  });

  describe('다음 단계 제안 검증', () => {
    it('should suggest next steps', () => {
      expect(commandContent).toMatch(/다음|next/i);
      expect(commandContent).toMatch(/단계|step/i);
    });

    it('should show incomplete tasks', () => {
      expect(commandContent).toMatch(/미완료|incomplete|pending/i);
    });

    it('should prioritize tasks', () => {
      expect(commandContent).toMatch(/우선순위|priority/i);
    });

    it('should provide recommendations', () => {
      expect(commandContent).toMatch(/권장|recommend|suggest/i);
    });
  });

  describe('사용법 검증', () => {
    it('should show command syntax', () => {
      expect(commandContent).toMatch(/\/continue/);
    });

    it('should support project path parameter', () => {
      expect(commandContent).toMatch(/경로|path/i);
    });

    it('should show usage examples', () => {
      expect(commandContent).toMatch(/예시|example/i);
    });
  });

  describe('진행 상황 요약 검증', () => {
    it('should summarize completed work', () => {
      expect(commandContent).toMatch(/완료|completed/i);
      expect(commandContent).toMatch(/요약|summary/i);
    });

    it('should show word count progress', () => {
      expect(commandContent).toMatch(/단어|word/i);
      expect(commandContent).toMatch(/분량|count/i);
    });

    it('should display chapter status', () => {
      expect(commandContent).toMatch(/챕터|chapter/i);
      expect(commandContent).toMatch(/상태|status/i);
    });
  });

  describe('작업 재개 워크플로우 검증', () => {
    it('should provide resume workflow', () => {
      expect(commandContent).toMatch(/워크플로우|workflow/i);
    });

    it('should review previous work', () => {
      expect(commandContent).toMatch(/검토|review/i);
      expect(commandContent).toMatch(/이전|previous/i);
    });

    it('should warm up with context', () => {
      expect(commandContent).toMatch(/맥락|context/i);
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
