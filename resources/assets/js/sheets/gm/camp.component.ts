import { Component, Input, Inject, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'camp-phase',
    templateUrl: './templates/camp.html'
})
export class CampComponent
{
    campLocation : string = 'wilderness';
    campSafety : string = 'typical';

    rollCamp() : void {

    }
}