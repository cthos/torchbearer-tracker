import { Component, Input, Inject, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { LightService } from './light.service';

@Component({
    moduleId: module.id,
    selector: 'gm-sheet',
    templateUrl: './templates/gm_sheet.html',
    providers: [LightService]
})
export class GMComponent implements OnInit {
    phaseCount : number = 1;

    currentPhase : string = 'adventure';

    constructor(@Inject(ToastsManager) private toast: ToastsManager, @Inject(LightService) private lights: LightService)
    {

    }

    ngOnInit() : void {

    }

    decrementPhaseCounter() : void {
        this.phaseCount--;

        if (this.phaseCount <= 0) {
            this.phaseCount = 4;
        }
    }

    incrementPhaseCounter() : void {
        this.phaseCount++;

        if (this.phaseCount > 4) {
            this.toast.error('PCs gain a condition.');
            this.phaseCount = 1;
        }

        this.lights.dimTheLights(this.phaseCount);
    }
}


