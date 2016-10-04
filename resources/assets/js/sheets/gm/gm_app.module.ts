import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { HttpModule }    from '@angular/http';
import {GMComponent} from './gm.component';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule, ToastModule ],
    declarations: [ GMComponent ],
    bootstrap:    [ GMComponent ]
})
export class GMApp { }