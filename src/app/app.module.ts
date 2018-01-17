import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { SharedComponentsModule } from './shared/shared-components.module';
import { AppComponent } from './app.component';
import { AppRoutesModule } from './app-routes.module';
import { HomeComponent } from './home/home.component';
import { CreaturesModule } from './creatures/creatures.module' ;
import { CreaturesService } from './shared/services/creatures.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedComponentsModule,
    CreaturesModule,
    AppRoutesModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    CreaturesService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
