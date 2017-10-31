import { IonicPageModule } from 'ionic-angular/module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';

@NgModule({
  entryComponents: [
    ListComponent
  ],
  imports: [
    CommonModule,
    IonicPageModule.forChild(ListComponent)
  ],
  declarations: [ListComponent]
})
export class ListModule { }
