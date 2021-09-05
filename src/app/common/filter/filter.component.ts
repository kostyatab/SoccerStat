import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterModel } from './filterModel';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less']
})
export class FilterComponent implements OnInit {

  @Input() model: FilterModel = {to: null, from: null};
  @Output() changeModel = new EventEmitter<FilterModel>();

  constructor() { }

  ngOnInit(): void {
  }

  changeFilterModel(){
    this.model.to = this.getDateFormat(this.model.to);
    this.model.from = this.getDateFormat(this.model.from);

    this.changeModel.emit(this.model);
  }

  getDateFormat(date: Date | string | null): Date | null | string{
    if (date === null || date.toString() === 'Invalid Date'){
      return null;
    } else {
      return date;
    }
  }

  isBtnEnable(){
    if (this.model.to === undefined || this.model.from === undefined) {
      return false;
    }
    const to = this.getDateFormat(this.model.to);
    const from = this.getDateFormat(this.model.from);

    return !(to === null || from === null);
  }
}
