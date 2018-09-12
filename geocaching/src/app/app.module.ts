import { LugaresService } from './../services/lugares.service';
import { TerceraPage } from './../pages/tercera/tercera';
import { AboutPage } from './../pages/about/about';
import { TabsPage } from './../pages/tabs/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LugarPage } from '../pages/lugar/lugar';
import { PerfilPage } from '../pages/perfil/perfil';

// Imports Firebase auth, DatabaseModule, Module
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';


// Firebase Config
export const firebaseConfig = {
  apiKey: "AIzaSyAPJR_dNQGQEXbyIaJ_VCnmIjKOVNjiTa8",
  authDomain: "ionicgeocaching-f86a3.firebaseapp.com",
  databaseURL: "https://ionicgeocaching-f86a3.firebaseio.com",
  projectId: "ionicgeocaching-f86a3",
  storageBucket: "ionicgeocaching-f86a3.appspot.com",
  messagingSenderId: "308626007077"
};

@NgModule({
  // Declaramos las vistas en la app
  declarations: [
    MyApp,
    HomePage,
    LugarPage,
    PerfilPage,
    TabsPage,
    AboutPage,
    TerceraPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  bootstrap: [IonicApp],
  // Le decimos a IONIC que las cargue desde un principio
  entryComponents: [
    MyApp,
    HomePage,
    LugarPage,
    PerfilPage,
    TabsPage,
    AboutPage,
    TerceraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LugaresService
  ]
})
export class AppModule {}
