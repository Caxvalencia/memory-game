import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SERVICE_PROVIDERS } from '@config/service-providers/service-provider.config';
import { GetNicknameUseCase } from '@core/nickname/use-cases/get-nickname.use-case';
import { SetNicknameUseCase } from '@core/nickname/use-cases/set-nickname.use-case';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetCardListUseCase } from './core/cards/use-cases/get-card-list.use-case';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SERVICE_PROVIDERS,

    // Core use cases
    GetNicknameUseCase,
    SetNicknameUseCase,

    GetCardListUseCase,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
