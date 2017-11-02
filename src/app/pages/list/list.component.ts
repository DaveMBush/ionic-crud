import { EditComponent } from '../edit/edit.component';
import { AlertController, NavController, TextInput } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { Contact } from '../../shared/contact';
import { AppState } from '../../app-state';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as List from './list.actions';
import * as Filter from './filter.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
  // can't use onpush because of datetime component.
})
export class ListComponent implements OnInit {
  contacts: Observable<ReadonlyArray<Contact>>;
  @ViewChild('filter') filter: TextInput;

  constructor(private store: Store<AppState>,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private cd: ChangeDetectorRef
  ) {
    this.contacts = store.select(
      (x: AppState) => x.list.list
    );
  }

  ngOnInit(): void {
  }

  // since this page never goes away, we only need this code once.
  ionViewDidLoad(): void {
    this.store.select((x: AppState) => x.list.filter)
      .first()
      .subscribe((v: string) => this.filter.getNativeElement().children[0].value = v);
    Observable.fromEvent(this.filter.getNativeElement().children[0], 'keyup')
      .debounceTime(150)
      .subscribe((): void => {
        this.store.dispatch(new Filter.Set(this.filter.getNativeElement().children[0].value))
        this.store.dispatch(new List.List());
      });
  }

  // make sure we get the current list when we come back
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
