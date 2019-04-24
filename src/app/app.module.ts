import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EngagementFormComponent } from './engagement-form/engagement-form.component';
import { FinishSelectComponent } from './finish-select/finish-select.component';
import { WorkItemListComponent } from './work-item-list/work-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EngagementFormComponent,
    FinishSelectComponent,
    WorkItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
