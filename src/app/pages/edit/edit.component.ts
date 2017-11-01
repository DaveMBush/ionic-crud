import { FormGroup } from '@angular/forms';
import { EditService } from './edit.service';
import { NavController, ToastController } from 'ionic-angular';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [EditService]
})
export class EditComponent implements OnInit, OnDestroy {
  get form(): FormGroup {
    return this.editService.form;
  }

  constructor(private editService: EditService,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit(): void {
    const id: number = this.navCtrl.getActive().getNavParams().data['id']
    this.editService.ngOnInit(id ? id : -1);
  }

  public ngOnDestroy(): void {
    this.editService.ngOnDestroy();
  }

  save(): void {
    this.editService.save().subscribe(() =>
      this.toastCtrl.create({
        message: 'Saved!',
        duration: 2000,
        position: 'top'
      }).present()
    ).unsubscribe();
  }

}
