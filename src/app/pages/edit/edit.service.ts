import { AppState } from '../../app-state';
import { EditForm } from './edit-form';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs/Rx';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable, OnDestroy } from '@angular/core';
import * as Edit from './edit.actions';


@Injectable()
export class EditService implements OnDestroy {
    form: FormGroup;
    formSubscription: Subscription;
    editEntity: Store<EditForm>;
    editEntitySubscription: Subscription;
    // tslint:disable-next-line:typedef
    saving = false;

    constructor(
        private formBuilder: FormBuilder,
        private store: Store<AppState>
    ) {
        this.form = this.formBuilder.group({
            id: ['', Validators.nullValidator],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            dateOfBirth: ['', Validators.required]
        });
        this.editEntity = this.store.select(
            (x: AppState) => x.edit.form);
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit(id: number): void {
        this.formSubscription =
            this.form.valueChanges.subscribe(
                (x: EditForm) =>
                    this.store.dispatch(new Edit.Update(x))
            );
        this.editEntitySubscription =
            this.editEntity.map((x: EditForm): EditForm => {
                this.form.patchValue({
                    id: x.id,
                    firstName: x.firstName,
                    lastName: x.lastName,
                    dateOfBirth: x.dateOfBirth ? (new Date(x.dateOfBirth)).toISOString() : ''
                }, { emitEvent: false });
                return x;
            })
                .filter(() => this.saving)
                .subscribe(() => this.saving = false);
        this.store.dispatch(new Edit.Get(id));

    }

    public ngOnDestroy(): void {
        this.formSubscription.unsubscribe();
        this.editEntitySubscription.unsubscribe();
    }

    save(): Observable<boolean> {
        this.saving = true;
        this.store.dispatch(new Edit.Save());
        return this.editEntity.filter(() => !this.saving)
            .map(() => !this.saving)
    }
}
