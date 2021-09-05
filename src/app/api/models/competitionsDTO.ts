import { CompetitionsItemDTO } from './competitionsItemDTO';

export class CompetitionsDTO {
  count: number = 0;
  filters: object = {};
  competitions: CompetitionsItemDTO[] = [];
}
