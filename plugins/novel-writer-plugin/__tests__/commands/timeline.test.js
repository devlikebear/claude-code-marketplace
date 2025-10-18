import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('timeline command', () => {
  let commandContent;

  beforeAll(() => {
    const commandPath = join(__dirname, '../../commands/timeline.md');
    commandContent = readFileSync(commandPath, 'utf-8');
  });

  describe('기본 구조 검증', () => {
    it('should have frontmatter with name', () => {
      expect(commandContent).toMatch(/^---\s*\n/);
      expect(commandContent).toMatch(/name:\s*timeline/);
    });

    it('should have description', () => {
      expect(commandContent).toMatch(/description:/);
    });

    it('should have category', () => {
      expect(commandContent).toMatch(/category:/);
    });
  });

  describe('타임라인 기능 검증', () => {
    it('should mention timeline or chronology', () => {
      expect(commandContent).toMatch(/타임라인|timeline|시간순|chronology/i);
    });

    it('should include events tracking', () => {
      expect(commandContent).toMatch(/사건|events|이벤트/i);
    });

    it('should mention dates or time', () => {
      expect(commandContent).toMatch(/날짜|date|시간|time/i);
    });

    it('should include sequence or order', () => {
      expect(commandContent).toMatch(/순서|sequence|order/i);
    });
  });

  describe('일관성 검증', () => {
    it('should mention consistency', () => {
      expect(commandContent).toMatch(/일관성|consistency|모순|contradiction/i);
    });

    it('should include tracking or verification', () => {
      expect(commandContent).toMatch(/추적|tracking|검증|verification|확인|check/i);
    });

    it('should mention conflicts or errors', () => {
      expect(commandContent).toMatch(/충돌|conflict|오류|error/i);
    });
  });

  describe('타임라인 유형 검증', () => {
    it('should mention story timeline', () => {
      expect(commandContent).toMatch(/스토리|story|이야기/i);
    });

    it('should include character timeline', () => {
      expect(commandContent).toMatch(/캐릭터|character|인물/i);
    });

    it('should mention world or historical timeline', () => {
      expect(commandContent).toMatch(/세계|world|역사|history/i);
    });
  });

  describe('시간 처리 검증', () => {
    it('should mention flashback', () => {
      expect(commandContent).toMatch(/플래시백|flashback|회상/i);
    });

    it('should include parallel or simultaneous events', () => {
      expect(commandContent).toMatch(/평행|parallel|동시|simultaneous/i);
    });

    it('should mention duration or span', () => {
      expect(commandContent).toMatch(/기간|duration|span/i);
    });
  });

  describe('출력 형식 검증', () => {
    it('should provide visualization', () => {
      expect(commandContent).toMatch(/시각화|visual|표|table|차트|chart/i);
    });

    it('should include examples', () => {
      expect(commandContent).toMatch(/예시|example|샘플|sample/i);
    });
  });

  describe('품질 검증', () => {
    it('should be at least 1500 characters', () => {
      expect(commandContent.length).toBeGreaterThan(1500);
    });

    it('should not have TODO or FIXME', () => {
      expect(commandContent).not.toMatch(/TODO|FIXME/);
    });
  });
});
