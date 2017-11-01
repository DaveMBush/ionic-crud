import { Observable } from 'rxjs/Rx';
import { Contact } from '../../shared/contact';
import { AppState } from '../../app-state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as List from './list.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  contacts: Observable<ReadonlyArray<Contact>>;

  constructor(private store: Store<AppState>) {
    this.contacts = store.select(
      (x: AppState) => x.list.list
    );
  }

  ngOnInit(): void {
    this.store.dispatch(new List.List());
  }

  delete(evt: Event, id: number): void {
    evt.preventDefault();
    evt.stopPropagation();
    // this.dlg.open<AlertComponent>(AlertComponent, { height: '200px', width: '300px', data: 'Are you sure you want to delete?' })
    //   .afterClosed()
    //   .filter((x: string) => x === 'yes')
    //   .subscribe((): void =>
    //     this.store.dispatch(new List.Delete(id))
    //   );
  }

  edit(id: number): void {
    // this.router.navigate(['/edit', id]);
  }

  add(): void {
    // this.router.navigate(['/add']);
  }

}
