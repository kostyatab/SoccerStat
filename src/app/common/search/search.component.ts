import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  @Input() model: string = '';
  @Output() changeModel = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changeSearch(){
    this.changeModel.emit(this.model);
  }

}
