import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { HttpModule }    from '@angular/http';
import {GMComponent} from './gm.component';
import {LightSourceComponent} from './light_source.component';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {CampComponent} from "./camp.component";
import {TownComponent} from "./town.component";
import {AdventureComponent} from "./adventure.component";

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule, ToastModule ],
    declarations: [ GMComponent, LightSourceComponent, AdventureComponent, CampComponent, TownComponent ],
    bootstrap:    [ GMComponent ]
})
export class GMApp { }