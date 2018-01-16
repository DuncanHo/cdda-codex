import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedComponentsModule } from './shared/shared-components.module';
import { AppComponent } from './app.component';
import { AppRoutesModule } from './app-routes.module';
import { HomeComponent } from './home/home.component';
import { CreaturesModule } from './creatures/creatures.module' ;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedComponentsModule,
    AppRoutesModule,
    CreaturesModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
