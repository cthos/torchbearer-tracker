import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import {Character} from './character.component';

Injectable()
class CharService {
    constructor(private http: Http) { }

    getCharacters() : void {

    }

    getCharacter(id) : void {

    }
}