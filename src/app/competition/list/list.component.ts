import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { CompetitionsDTO } from '../../api/models/competitionsDTO';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  isLoaded = false;
  model: CompetitionsDTO | null = null;
  search: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.competitionList()
      .subscribe(x => {
        this.model = x;
        this.isLoaded = true;
      });
  }

  changeSearch(value: string){
    this.search = value;
  }

}
