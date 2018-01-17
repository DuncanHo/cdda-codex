import { Component, OnInit } from '@angular/core';
import { CreaturesService } from '../shared/services/creatures.service';
import { Creatures } from '../shared/classes/creature';

@Component({
    selector: 'creatures',
    templateUrl: './creatures.components.html',
    styleUrls: ['./creatures.components.css']
})
export class CreaturesComponent implements OnInit {
  creatures: Creatures[];

  constructor(private creaturesService: CreaturesService) {}
  ngOnInit() {
    this.getCreatures();
  }

  getCreatures(): void {
    this.creaturesService.getCreatures()
      .subscribe(creatures => this.creatures = creatures);
  }
}
