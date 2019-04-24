import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-work-item-list',
  templateUrl: './work-item-list.component.html',
  styleUrls: ['./work-item-list.component.scss']
})
export class WorkItemListComponent implements OnInit {

  @Input() engagementWorkItems;

  constructor() { }

  ngOnInit() {
  }

  newFinish(value: string, index: number) {
    console.log('newFinish');
    console.log(value);
    console.log(index);
    this.engagementWorkItems[index] = {
      ...this.engagementWorkItems[index],
      finish: value
    };

    console.log(this.engagementWorkItems);
  }
}
