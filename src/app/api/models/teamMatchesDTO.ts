import { TeamMatchDTO } from './teamMatchDTO';

export class TeamMatchesDTO{
  count: number = 0;
  filters: {} = {};
  matches: TeamMatchDTO[] = [];
}
