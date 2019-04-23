import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  peForm: FormGroup;
  selectCO: FormControl;
  coList: any = [
    {
      name: 'Bob the Builder'
    },
    {
      name: 'Kevin the Constructor'
    },
    {
      name: 'Dan the Doer'
    }
  ];

  constructor(
    private fb: FormBuilder
  ) {
      this.createForm();
  }

  createForm() {
    this.peForm = this.fb.group({
      selectCO: new FormControl(this.selectCO)
    });
  }

  coChanged() {
    console.log('coChanged');
  }
}
