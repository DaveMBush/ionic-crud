import { FilterReducer } from './filter.reducer';
import { ListReducer } from './list.reducer';
import { ListState } from './list-state';
import { IonicPageModule } from 'ionic-angular/module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ListEffects } from './list.effects';
import { FlexLayoutModule } from '@angular/flex-layout';
const reducers: ActionReducerMap<ListState> = {
  list: ListReducer,
  filter: FilterReducer
}

@NgModule({
  entryComponents: [
    ListComponent
  ],
  imports: [
    StoreModule.forFeature('list', reducers),
    EffectsModule.forFeature([ListEffects]),
    FlexLayoutModule,
    CommonModule,
    IonicPageModule.forChild(ListComponent)
  ],
  declarations: [ListComponent]
})
export class ListModule { }
