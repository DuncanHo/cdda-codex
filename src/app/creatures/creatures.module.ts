import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CreaturesRoutesModule } from './creatures-routes.module';
import { CreaturesComponent } from './creatures.components';
// import { SpeciesComponent } from './species/species.components';

@NgModule ({
    declarations: [
      CreaturesComponent
      // , SpeciesComponent
    ],
    imports: [
      BrowserModule,
      CreaturesRoutesModule ],
    exports: [
      CreaturesComponent
      // , SpeciesComponent
    ],
    providers: [],
    bootstrap: [
      CreaturesComponent
      // , SpeciesComponent
    ]
})

export class CreaturesModule {}
