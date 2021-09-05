import { AreaDTO } from './areaDTO';

export class CompetitionTeamDTO{
  id: number = 0;
  area: AreaDTO | {} = {};
  name: string = '';
  shortName: string = '';
  tla: string = '';
  crestUrl: string = '';
  address: string = '';
  phone: string = '';
  website: string = '';
  email: string = '';
  founded: number = 0;
  clubColors: string = '';
  venue: string = '';
  lastUpdated: Date = new Date();
}
