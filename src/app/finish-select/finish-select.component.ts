import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
// @ts-ignore
import FinishTypes from '../../assets/finishTypes.json';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-finish-select',
  templateUrl: './finish-select.component.html',
  styleUrls: ['./finish-select.component.scss']
})
export class FinishSelectComponent implements OnInit {

  finishSelect: FormControl;
  finishes = FinishTypes.items;
  @Output() selectedFinish = new EventEmitter<string>();
  @Input() currentFinish: any;

  constructor() {
    this.finishSelect = new FormControl();

  }

  ngOnInit() {
    if(this.currentFinish){
      this.finishSelect.setValue(this.currentFinish);
    } else {
      this.finishSelect.setValue(this.finishes[1]);
    }
  }

  finishChanged() {
    this.selectedFinish.emit(this.finishSelect.value);
  }
}
