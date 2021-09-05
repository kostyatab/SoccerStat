import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { ApiService } from '../../api/api.service';
import { CompetitionTeamsDTO } from '../../api/models/competitionTeamsDTO';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.less']
})
export class TeamListComponent implements OnInit {

  isLoaded = false;
  model: CompetitionTeamsDTO | null = null;
  search: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private apiService: ApiService) { }

  ngOnInit(): void {
    const query = this.activatedRoute.queryParams;
    const teams = this.activatedRoute.params
      .pipe(mergeMap(x => this.apiService.competitionTeams(x['id'])));

    combineLatest([query, teams])
      .subscribe(data => {
        this.search = data[0]['search'] || '';
        this.model = data[1];
        this.isLoaded = true;
      })
  }

  changeSearch(value: string){
    this.router.navigate(['/team-list', this.model?.competition?.id], {queryParams: {
        search: value
      }})
  }

}
