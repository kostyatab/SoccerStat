import { SimpleCompetitionDTO } from './simpleCompetitionDTO';
import { SeasonDTO } from './seasonDTO';
import { TeamDTO } from './teamDTO';
import { ScoreDTO } from './scoreDTO';

export class TeamMatchDTO{
  id: number = 0;
  competition: SimpleCompetitionDTO | {} = {};
  season: SeasonDTO | {} = {};
  status: string = '';
  minute: number | null = null;
  attendance: number = 0;
  matchday: number = 0;
  stage: string = '';
  group: string = '';
  homeTeam: TeamDTO | null  = null;
  awayTeam: TeamDTO | null  = null;
  score: ScoreDTO | null = null;
  utcDate: Date = new Date();
}
