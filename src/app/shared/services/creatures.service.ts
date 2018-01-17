import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Creatures } from '../classes/creature';
import { Species } from '../classes/species';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CreaturesService {
  private apiUrl = 'https://raw.githubusercontent.com/CleverRaven/Cataclysm-DDA/master/data/json/';
  constructor(private http: HttpClient) {}

  getCreatures(): Observable<Creatures[]> {
    return this.http.get<Creatures[]>(this.apiUrl + 'monsters.json');
  }

  getSpecies(): Observable<Species[]> {
    return this.http.get<Species[]>(this.apiUrl + 'species.json');
  }
}
