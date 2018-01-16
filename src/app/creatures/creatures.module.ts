import { NgModule } from '@angular/core';

import { CreaturesComponent } from './creatures.components'
import { SpeciesComponent } from './species/species.components'

@NgModule ({
    declarations: [ CreaturesComponent ],
    imports: [ ],
    exports: [ CreaturesComponent ],
    providers: [],
    bootstrap: [ CreaturesComponent ]
})

export class CreaturesModule {}