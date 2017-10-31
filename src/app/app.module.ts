import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListEffects } from './pages/list/list.effects';
import { ListReducer } from './pages/list/list.reducer';
import { SharedModule } from './shared/shared.module';
import { ListModule } from './pages/list/list.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ list: ListReducer }),
    EffectsModule.forRoot([]),
    IonicModule.forRoot(AppComponent),
    BrowserModule,
    SharedModule,
    ListModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
