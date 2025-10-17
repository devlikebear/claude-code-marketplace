import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('character-profile command', () => {
  let commandContent;
  const commandPath = join(__dirname, '../../commands/character-profile.md');

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
      expect(commandContent).toMatch(/---\s*\n/);
    });

    it('should have a title', () => {
      expect(commandContent).toMatch(/^#\s+.+/m);
    });
  });

  describe('기본 정보 요소 검증', () => {
    it('should include basic character information section', () => {
      expect(commandContent).toMatch(/기본.*정보|basic.*information/i);
      expect(commandContent).toMatch(/이름|name/i);
      expect(commandContent).toMatch(/나이|age/i);
      expect(commandContent).toMatch(/외모|appearance/i);
    });

    it('should include character speech patterns', () => {
      expect(commandContent).toMatch(/말투|speech|대화|dialogue/i);
    });
  });

  describe('Want vs Need 구조 검증', () => {
    it('should include Want vs Need framework', () => {
      expect(commandContent).toMatch(/want.*need|욕구.*필요/i);
    });

    it('should distinguish conscious desire and unconscious need', () => {
      expect(commandContent).toMatch(/의식적|conscious/i);
      expect(commandContent).toMatch(/무의식적|unconscious/i);
    });
  });

  describe('Fatal Flaw 검증', () => {
    it('should include fatal flaw section', () => {
      expect(commandContent).toMatch(/fatal.*flaw|치명적.*결함/i);
    });

    it('should mention character weakness', () => {
      expect(commandContent).toMatch(/결함|약점|flaw|weakness/i);
    });

    it('should include character strengths', () => {
      expect(commandContent).toMatch(/강점|strength/i);
    });
  });

  describe('Backstory 검증', () => {
    it('should include backstory section', () => {
      expect(commandContent).toMatch(/backstory|배경.*이야기|과거/i);
    });

    it('should mention formative events', () => {
      expect(commandContent).toMatch(/형성적|formative|사건|event/i);
    });

    it('should include trauma or wounds', () => {
      expect(commandContent).toMatch(/트라우마|trauma|상처|wound/i);
    });
  });

  describe('캐릭터 아크 검증', () => {
    it('should include character arc section', () => {
      expect(commandContent).toMatch(/캐릭터.*아크|character.*arc/i);
    });

    it('should define starting state', () => {
      expect(commandContent).toMatch(/시작|start|beginning/i);
    });

    it('should define transformation or growth', () => {
      expect(commandContent).toMatch(/변화|성장|transformation|growth|change/i);
    });

    it('should define ending state', () => {
      expect(commandContent).toMatch(/최종|끝|final|end/i);
    });
  });

  describe('관계 다이나믹 검증', () => {
    it('should include relationship dynamics', () => {
      expect(commandContent).toMatch(/관계|relationship/i);
    });

    it('should mention conflict elements', () => {
      expect(commandContent).toMatch(/갈등|conflict/i);
    });
  });

  describe('독특한 특징 검증', () => {
    it('should include unique characteristics', () => {
      expect(commandContent).toMatch(/독특|특징|unique|characteristic/i);
    });

    it('should mention habits or quirks', () => {
      expect(commandContent).toMatch(/습관|버릇|habit|quirk/i);
    });
  });

  describe('출력 형식 검증', () => {
    it('should specify output format', () => {
      expect(commandContent).toMatch(/출력|형식|format|output/i);
    });

    it('should include template or example structure', () => {
      expect(commandContent).toMatch(/템플릿|template|예시|example/i);
    });
  });

  describe('사용 예시 검증', () => {
    it('should include usage examples', () => {
      expect(commandContent).toMatch(/예시|example|사용/i);
    });
  });

  describe('품질 검증', () => {
    it('should be at least 800 characters long', () => {
      expect(commandContent.length).toBeGreaterThan(800);
    });

    it('should not have TODO or FIXME comments', () => {
      expect(commandContent).not.toMatch(/TODO|FIXME/i);
    });
  });
});
