import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('start command', () => {
  let commandContent;

  beforeAll(() => {
    const commandPath = join(__dirname, '../../commands/start.md');
    commandContent = readFileSync(commandPath, 'utf-8');
  });

  describe('기본 구조 검증', () => {
    it('should have frontmatter with name', () => {
      expect(commandContent).toMatch(/^---\s*\n/);
      expect(commandContent).toMatch(/name:\s*start/);
    });

    it('should have description', () => {
      expect(commandContent).toMatch(/description:/);
    });

    it('should have category', () => {
      expect(commandContent).toMatch(/category:/);
    });
  });

  describe('통합 워크플로우 검증', () => {
    it('should mention integrated workflow', () => {
      expect(commandContent).toMatch(/통합|integrated|워크플로우|workflow/i);
    });

    it('should reference all 9 existing commands', () => {
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

    it('should have step-by-step workflow', () => {
      expect(commandContent).toMatch(/step|단계/i);
      expect(commandContent).toMatch(/1|first|처음/i);
      expect(commandContent).toMatch(/순서|order|sequence/i);
    });

    it('should guide from start to finish', () => {
      expect(commandContent).toMatch(/시작|start|beginning/i);
      expect(commandContent).toMatch(/완성|finish|end|completion/i);
    });
  });

  describe('프로젝트 초기화 검증', () => {
    it('should initialize project directory', () => {
      expect(commandContent).toMatch(/프로젝트|project/i);
      expect(commandContent).toMatch(/디렉토리|directory|folder/i);
      expect(commandContent).toMatch(/초기화|initialize|init/i);
    });

    it('should create .novel-project structure', () => {
      expect(commandContent).toMatch(/\.novel-project/);
    });

    it('should create project.json', () => {
      expect(commandContent).toMatch(/project\.json/);
    });

    it('should include metadata tracking', () => {
      expect(commandContent).toMatch(/메타데이터|metadata/i);
      expect(commandContent).toMatch(/추적|track|manage/i);
    });
  });

  describe('기본 정보 수집 검증', () => {
    it('should collect genre information', () => {
      expect(commandContent).toMatch(/장르|genre/i);
      expect(commandContent).toMatch(/판타지|fantasy/i);
      expect(commandContent).toMatch(/로맨스|romance/i);
    });

    it('should set word count goal', () => {
      expect(commandContent).toMatch(/목표|goal|target/i);
      expect(commandContent).toMatch(/분량|word count/i);
    });

    it('should gather writer preferences', () => {
      expect(commandContent).toMatch(/작가|writer|author/i);
      expect(commandContent).toMatch(/선호|preference/i);
    });

    it('should ask about tone and style', () => {
      expect(commandContent).toMatch(/톤|tone|문체|style/i);
    });
  });

  describe('단계별 안내 검증', () => {
    it('should guide plot outline step', () => {
      expect(commandContent).toMatch(/plot-outline/);
      expect(commandContent).toMatch(/플롯|plot/i);
    });

    it('should guide character creation step', () => {
      expect(commandContent).toMatch(/character-profile/);
      expect(commandContent).toMatch(/캐릭터|character/i);
    });

    it('should guide worldbuilding step', () => {
      expect(commandContent).toMatch(/worldbuilding/);
      expect(commandContent).toMatch(/세계관|world/i);
    });

    it('should guide timeline step', () => {
      expect(commandContent).toMatch(/timeline/);
      expect(commandContent).toMatch(/타임라인|시간|time/i);
    });

    it('should guide scene writing step', () => {
      expect(commandContent).toMatch(/scene-write/);
      expect(commandContent).toMatch(/장면|scene/i);
    });
  });

  describe('진행 상황 추적 검증', () => {
    it('should track completion status', () => {
      expect(commandContent).toMatch(/완료|complete|done/i);
      expect(commandContent).toMatch(/상태|status/i);
    });

    it('should save progress', () => {
      expect(commandContent).toMatch(/진행|progress/i);
      expect(commandContent).toMatch(/저장|save/i);
    });

    it('should suggest next steps', () => {
      expect(commandContent).toMatch(/다음|next/i);
      expect(commandContent).toMatch(/단계|step/i);
    });

    it('should enable resume capability', () => {
      expect(commandContent).toMatch(/재개|resume|continue/i);
    });
  });

  describe('프로젝트 구조 검증', () => {
    it('should define directory structure', () => {
      expect(commandContent).toMatch(/구조|structure/i);
    });

    it('should include chapters directory', () => {
      expect(commandContent).toMatch(/chapters/);
      expect(commandContent).toMatch(/챕터|chapter/i);
    });

    it('should include characters directory', () => {
      expect(commandContent).toMatch(/characters/);
    });

    it('should include plot file', () => {
      expect(commandContent).toMatch(/plot\.md/);
    });

    it('should include worldbuilding file', () => {
      expect(commandContent).toMatch(/worldbuilding\.md/);
    });

    it('should include timeline file', () => {
      expect(commandContent).toMatch(/timeline\.md/);
    });

    it('should include progress tracking', () => {
      expect(commandContent).toMatch(/progress\.json/);
    });
  });

  describe('사용 예시 검증', () => {
    it('should provide usage examples', () => {
      expect(commandContent).toMatch(/예시|example|sample/i);
    });

    it('should show command syntax', () => {
      expect(commandContent).toMatch(/\/start/);
    });

    it('should demonstrate with genre parameter', () => {
      expect(commandContent).toMatch(/\/start.*판타지|\/start.*fantasy/i);
    });

    it('should show project name parameter', () => {
      expect(commandContent).toMatch(/\/start.*\[.*\]/);
    });
  });

  describe('장르별 안내 검증', () => {
    it('should provide fantasy-specific guidance', () => {
      expect(commandContent).toMatch(/판타지|fantasy/i);
      expect(commandContent).toMatch(/마법|magic/i);
    });

    it('should provide romance-specific guidance', () => {
      expect(commandContent).toMatch(/로맨스|romance/i);
    });

    it('should provide thriller-specific guidance', () => {
      expect(commandContent).toMatch(/스릴러|thriller/i);
    });

    it('should provide SF-specific guidance', () => {
      expect(commandContent).toMatch(/sf|science fiction|공상과학/i);
    });
  });

  describe('통합 기능 검증', () => {
    it('should integrate with existing commands', () => {
      expect(commandContent).toMatch(/통합|integration/i);
      expect(commandContent).toMatch(/명령어|command/i);
    });

    it('should reference agents', () => {
      expect(commandContent).toMatch(/@\w+|agent|에이전트/i);
    });

    it('should support continuous workflow', () => {
      expect(commandContent).toMatch(/연속|continuous|sequential/i);
    });

    it('should enable context retention', () => {
      expect(commandContent).toMatch(/참조|reference|context/i);
      expect(commandContent).toMatch(/이전|previous/i);
    });
  });

  describe('품질 검증', () => {
    it('should be comprehensive (at least 4000 characters)', () => {
      expect(commandContent.length).toBeGreaterThan(4000);
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
