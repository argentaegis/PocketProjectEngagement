import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
// @ts-ignore
import COList from '../../assets/coList.json';
// @ts-ignore
import WorkItems from '../../assets/workItems.json';

@Component({
  selector: 'app-engagement-form',
  templateUrl: './engagement-form.component.html',
  styleUrls: ['./engagement-form.component.scss']
})
export class EngagementFormComponent implements OnInit {

  selectCO: FormControl;
  selectWorkItem: FormControl;

  coList = COList.items;
  workItems = WorkItems.items;

  engagementWorkItems = [];


  constructor(
    private fb: FormBuilder,
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
      this.selectCO = new FormControl();
      this.selectWorkItem = new FormControl();
  }

  coChanged() {
    console.log('coChanged');
  }

  workItemChanged() {
    console.log('workItemChanged');
  }

  addWorkItem() {
    console.log('addWorkItem');
    console.log(JSON.stringify(this.selectWorkItem.value));
    this.engagementWorkItems.push(this.selectWorkItem.value);
    console.log(JSON.stringify(this.engagementWorkItems));
  }
}
