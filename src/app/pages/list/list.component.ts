import { EditComponent } from '../edit/edit.component';
import { NavController, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { Contact } from '../../shared/contact';
import { AppState } from '../../app-state';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as List from './list.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  contacts: Observable<ReadonlyArray<Contact>>;

  constructor(private store: Store<AppState>,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {
    this.contacts = store.select(
      (x: AppState) => x.list.list
    );
  }

  ngOnInit(): void {
  }

  ionViewDidEnter(): void {
    this.store.dispatch(new List.List());
  }

  delete(evt: Event, id: number): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.alertCtrl.create({
      title: 'Delete?',
      message: 'Are you sure you want to delete this item?',
      buttons: [
        {
          text: 'Yes',
          handler: (): void => this.store.dispatch(new List.Delete(id))
        },
        {
          text: 'Cancel',
          handler: (): void => { return; }
        }
      ]

    }).present();
  }

  edit(id: number): void {
    this.navCtrl.push(EditComponent, { id: id })
  }

  add(): void {
    this.navCtrl.push(EditComponent, { id: -1 });
  }

}
