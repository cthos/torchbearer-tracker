import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { HttpModule }    from '@angular/http';
import {GMComponent} from './gm.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule ],
    declarations: [ GMComponent ],
    bootstrap:    [ GMComponent ]
})
export class GMApp { }