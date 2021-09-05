import { AreaDTO } from './areaDTO';
import { SeasonDTO } from './seasonDTO';

export class CompetitionsDetailDTO{
  id: number = 0;
  area: AreaDTO | {} = {};
  name: string = '';
  code: string | null = null;
  plan: string = '';
  currentSeason: SeasonDTO | {} = {};
  seasons: SeasonDTO[] = [];
  lastUpdated: Date = new Date();
}
