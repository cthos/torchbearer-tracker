import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CharacterComponent }   from './character.component';
import {FormsModule} from "@angular/forms";
import { HttpModule }    from '@angular/http';

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule ],
    declarations: [ CharacterComponent ],
    bootstrap:    [ CharacterComponent ]
})
export class CharApp { }