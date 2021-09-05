import { Component, OnInit } from '@angular/core';
import { TeamMatchesDTO } from '../../api/models/teamMatchesDTO';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../../api/api.service';
import { combineLatest } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { FilterModel } from '../../common/filter/filterModel';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.less']
})
export class MatchListComponent implements OnInit {

  isLoaded = false;

  from: Date | null = null;
  to: Date | null = null;

  model: TeamMatchesDTO | null = null;

  teamId: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    const query = this.activatedRoute.queryParams;
    const params = this.activatedRoute.params;

    const queryAndParams = combineLatest([query, params]);

    queryAndParams
      .pipe(mergeMap(data => {
        this.to = data[0]['to'];
        this.from = data[0]['from'];
        this.teamId = data[1]['id'];
        return this.apiService.teamMatches(data[1]['id'], data[0]['from'], data[0]['to'])
      }))
      .subscribe(x => {
        this.model = x;
        this.isLoaded = true;
      });
  }

  changeFilter(value: FilterModel){
    const params: Params = {};

    if (value.from !== null){
      params['from'] = value.from;
    }

    if (value.to !== null){
      params['to'] = value.to;
    }

    this.router.navigate(['/team', this.teamId], {queryParams: params})
  }

}
