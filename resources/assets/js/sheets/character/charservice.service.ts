import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Character} from './character.model';

Injectable()
export class CharService {
    constructor(@Inject(Http) private http: Http) { }

    getCharacters() : Promise<Character[]> {
        return this.http.get('/character')
            .toPromise()
            .then(response => response.json() as Character[])
            .catch(this.handleError);
    }

    getCharacter(id) : Promise<Character> {
        return this.http.get('/character/' + id)
            .toPromise()
            .then(response => new Character(response.json()))
            .catch(this.handleError);
    }

    handleError(err) : void {

    }
}