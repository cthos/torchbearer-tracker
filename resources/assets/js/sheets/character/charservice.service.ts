import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Character} from './character.model';

Injectable()
export class CharService {
    constructor(@Inject(Http) private http: Http) { }

    getCharacters() : Promise<Character[]> {
        return this.http.get('/characters')
            .toPromise()
            .then(response => response.json().data as Character[])
            .catch(this.handleError);
    }

    getCharacter(id) : Promise<Character> {
        return this.http.get('/characters/' + id)
            .toPromise()
            .then(response => response.json().data as Character)
            .catch(this.handleError);
    }

    handleError(err) : void {

    }
}