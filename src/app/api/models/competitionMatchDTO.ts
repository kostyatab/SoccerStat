import { SeasonDTO } from './seasonDTO';

export class CompetitionMatchDTO{
  id: number = 0;
  season: SeasonDTO | {} = {};
  utcDate: Date = new Date();
  status: string = '';
  attendance: number = 0;
  matchday: number = 0;
  stage: string = '';
  group: string = '';
  lastUpdated: Date = new Date();
}
