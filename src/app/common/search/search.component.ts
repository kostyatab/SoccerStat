import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  @Output() changeModel = new EventEmitter<string>();
  model: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  changeSearch(){
    this.changeModel.emit(this.model);
  }

}
