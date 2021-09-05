import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { CompetitionsDTO } from '../../api/models/competitionsDTO';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  isLoaded = false;
  model: CompetitionsDTO | null = null;
  search: string = '';

  constructor(
    private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    combineLatest([this.activatedRoute.queryParams, this.apiService.competitionList()])
      .subscribe(data => {
        this.search = data[0]['search'] || '';
        this.model = data[1];
        this.isLoaded = true;
      });
  }

  changeSearch(value: string){
    this.router.navigate(['/'], {queryParams: {
        search: value
      }})
  }

}
