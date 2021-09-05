import { Component, Input, OnInit } from '@angular/core';
import { CompetitionsItemDTO } from '../../api/models/competitionsItemDTO';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Input() model: CompetitionsItemDTO | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
