import { SeasonDTO } from './seasonDTO';
import { TeamDTO } from './teamDTO';
import { ScoreDTO } from './scoreDTO';

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
  homeTeam: TeamDTO | null  = null;
  awayTeam: TeamDTO | null  = null;
  score: ScoreDTO | null = null;
}
