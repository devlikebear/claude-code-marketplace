import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('scene-write command', () => {
  let commandContent;
  const commandPath = join(__dirname, '../../commands/scene-write.md');

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

  describe('Show, Don\'t Tell 원칙 검증', () => {
    it('should include Show Don\'t Tell principle', () => {
      expect(commandContent).toMatch(/show.*don't.*tell|보여.*말하지/i);
    });

    it('should mention sensory details', () => {
      expect(commandContent).toMatch(/감각|sensory|오감/i);
    });
  });

  describe('오감 활용 검증', () => {
    it('should list five senses', () => {
      expect(commandContent).toMatch(/시각|visual|sight/i);
      expect(commandContent).toMatch(/청각|audio|sound|hearing/i);
    });

    it('should guide minimum sensory descriptions', () => {
      expect(commandContent).toMatch(/2-3|최소/i);
    });
  });

  describe('긴장과 갈등 검증', () => {
    it('should mention conflict in scenes', () => {
      expect(commandContent).toMatch(/갈등|conflict/i);
    });

    it('should mention hooks', () => {
      expect(commandContent).toMatch(/훅|hook/i);
    });
  });

  describe('대화와 행동 균형 검증', () => {
    it('should mention dialogue and action balance', () => {
      expect(commandContent).toMatch(/대화|dialogue/i);
      expect(commandContent).toMatch(/행동|action/i);
    });

    it('should suggest ratio or balance', () => {
      expect(commandContent).toMatch(/50%|균형|balance/i);
    });
  });

  describe('페이싱 검증', () => {
    it('should include pacing guidelines', () => {
      expect(commandContent).toMatch(/페이싱|pacing/i);
    });

    it('should differentiate scene types', () => {
      expect(commandContent).toMatch(/액션|action/i);
      expect(commandContent).toMatch(/감정|emotion/i);
    });
  });

  describe('장면 작성 프로세스 검증', () => {
    it('should include step-by-step process', () => {
      expect(commandContent).toMatch(/단계|step|프로세스|process/i);
    });

    it('should mention scene goal', () => {
      expect(commandContent).toMatch(/목표|goal/i);
    });
  });

  describe('출력 형식 검증', () => {
    it('should specify word count range', () => {
      expect(commandContent).toMatch(/\d+.*자|word.*count/i);
    });

    it('should mention narrative perspective', () => {
      expect(commandContent).toMatch(/1인칭|3인칭|first.*person|third.*person/i);
    });
  });

  describe('사용 예시 검증', () => {
    it('should include usage examples', () => {
      expect(commandContent).toMatch(/예시|example/i);
    });
  });

  describe('품질 검증', () => {
    it('should be at least 700 characters long', () => {
      expect(commandContent.length).toBeGreaterThan(700);
    });

    it('should not have TODO or FIXME comments', () => {
      expect(commandContent).not.toMatch(/TODO|FIXME/i);
    });
  });
});
