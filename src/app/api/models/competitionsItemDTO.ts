import { AreaDTO } from './areaDTO';

export class CompetitionsItemDTO{
  id: number = 0;
  name: string = '';
  area: AreaDTO | {} = {};
}
