import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('help command', () => {
  let commandContent;

  beforeAll(() => {
    const commandPath = join(__dirname, '../../commands/help.md');
    commandContent = readFileSync(commandPath, 'utf-8');
  });

  describe('기본 구조 검증', () => {
    it('should have frontmatter with name', () => {
      expect(commandContent).toMatch(/^---\s*\n/);
      expect(commandContent).toMatch(/name:\s*help/);
    });

    it('should have description', () => {
      expect(commandContent).toMatch(/description:/);
    });

    it('should have category', () => {
      expect(commandContent).toMatch(/category:/);
    });
  });

  describe('명령어 목록 검증', () => {
    it('should list all 9 commands', () => {
      const commands = [
        'plot-outline',
        'character-profile',
        'scene-write',
        'dialogue-enhance',
        'consistency-check',
        'worldbuilding',
        'timeline',
        'name-generator',
        'word-count'
      ];

      commands.forEach(cmd => {
        expect(commandContent).toMatch(new RegExp(cmd));
      });
    });

    it('should categorize commands', () => {
      expect(commandContent).toMatch(/planning|구성/i);
      expect(commandContent).toMatch(/writing|작성/i);
      expect(commandContent).toMatch(/worldbuilding|세계관/i);
    });

    it('should provide command usage examples', () => {
      expect(commandContent).toMatch(/\/plot-outline/);
      expect(commandContent).toMatch(/사용|usage|example/i);
    });
  });

  describe('에이전트 목록 검증', () => {
    it('should list all 4 agents', () => {
      const agents = [
        'genre-specialist',
        'character-developer',
        'plot-architect',
        'editor'
      ];

      agents.forEach(agent => {
        expect(commandContent).toMatch(new RegExp(agent));
      });
    });

    it('should explain agent usage', () => {
      expect(commandContent).toMatch(/agent|에이전트/i);
      expect(commandContent).toMatch(/how to use|사용법/i);
    });

    it('should describe agent specializations', () => {
      expect(commandContent).toMatch(/장르|genre/i);
      expect(commandContent).toMatch(/캐릭터|character/i);
      expect(commandContent).toMatch(/플롯|plot/i);
      expect(commandContent).toMatch(/편집|edit/i);
    });
  });

  describe('워크플로우 가이드 검증', () => {
    it('should provide workflow guide', () => {
      expect(commandContent).toMatch(/workflow|워크플로우|작업 흐름/i);
    });

    it('should have step-by-step instructions', () => {
      expect(commandContent).toMatch(/step|단계/i);
      expect(commandContent).toMatch(/1\.|first|첫|처음/i);
    });

    it('should show recommended order', () => {
      expect(commandContent).toMatch(/순서|order|sequence/i);
      expect(commandContent).toMatch(/권장|recommend/i);
    });

    it('should explain integration between commands', () => {
      expect(commandContent).toMatch(/통합|integration|연계/i);
    });
  });

  describe('사용 예시 검증', () => {
    it('should provide practical examples', () => {
      expect(commandContent).toMatch(/예시|example|sample/i);
    });

    it('should show command syntax', () => {
      expect(commandContent).toMatch(/\/\w+/); // /command 형식
    });

    it('should demonstrate agent invocation', () => {
      expect(commandContent).toMatch(/@\w+|agent/i);
    });

    it('should include beginner guidance', () => {
      expect(commandContent).toMatch(/시작|beginner|getting started/i);
    });
  });

  describe('FAQ 섹션 검증', () => {
    it('should have FAQ section', () => {
      expect(commandContent).toMatch(/faq|자주 묻는 질문|common question/i);
    });

    it('should answer common questions', () => {
      expect(commandContent).toMatch(/\?|질문/);
    });

    it('should provide troubleshooting', () => {
      expect(commandContent).toMatch(/문제|troubleshoot|issue/i);
    });
  });

  describe('카테고리별 명령어 검증', () => {
    it('should group planning commands', () => {
      expect(commandContent).toMatch(/plot-outline/);
      expect(commandContent).toMatch(/timeline/);
      expect(commandContent).toMatch(/word-count/);
    });

    it('should group writing commands', () => {
      expect(commandContent).toMatch(/scene-write/);
      expect(commandContent).toMatch(/dialogue-enhance/);
    });

    it('should group worldbuilding commands', () => {
      expect(commandContent).toMatch(/worldbuilding/);
      expect(commandContent).toMatch(/name-generator/);
    });

    it('should group quality commands', () => {
      expect(commandContent).toMatch(/consistency-check/);
    });
  });

  describe('도움말 옵션 검증', () => {
    it('should support general help', () => {
      expect(commandContent).toMatch(/\/help/);
    });

    it('should support command-specific help', () => {
      expect(commandContent).toMatch(/\/help \[command\]|특정 명령어/i);
    });

    it('should support workflow help', () => {
      expect(commandContent).toMatch(/\/help workflow|워크플로우 도움말/i);
    });

    it('should support agent help', () => {
      expect(commandContent).toMatch(/\/help agent|에이전트 도움말/i);
    });
  });

  describe('품질 검증', () => {
    it('should be comprehensive (at least 3000 characters)', () => {
      expect(commandContent.length).toBeGreaterThan(3000);
    });

    it('should not have TODO or FIXME', () => {
      expect(commandContent).not.toMatch(/TODO|FIXME/);
    });

    it('should have proper formatting', () => {
      expect(commandContent).toMatch(/#{1,3}\s+\w+/); // Markdown headers
    });

    it('should include tables or lists', () => {
      expect(commandContent).toMatch(/\|.*\||[-*]\s+/); // Tables or lists
    });
  });
});
