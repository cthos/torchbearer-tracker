import { Component, Input, Inject, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {TownGuildService, TownEventService} from './town.service';
import { LightService } from './light.service';

@Component({
    moduleId: module.id,
    selector: 'gm-sheet',
    templateUrl: './templates/gm_sheet.html',
    providers: [LightService, TownGuildService, TownEventService]
})
export class GMComponent implements OnInit {
    currentPhase : string = 'adventure';

    ngOnInit() : void {

    }


}


