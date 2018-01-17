import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreaturesComponent } from './creatures.components';
// import { SpeciesComponent } from './species/species.components';

const creaturesRoutes: Routes = [
  { path: 'creatures', component: CreaturesComponent,
    // children: [
    //   { path: 'species', component: SpeciesComponent }
    // ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(creaturesRoutes) ],
  exports: [ RouterModule ]
})

export class CreaturesRoutesModule {}
