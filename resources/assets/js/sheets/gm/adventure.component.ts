import { Component, Input, Inject, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { LightService } from './light.service';

@Component({
    moduleId: module.id,
    selector: 'adventure-phase',
    templateUrl: './templates/adventure.html'
})
export class AdventureComponent
{
    phaseCount : number = 1;

    constructor(@Inject(ToastsManager) private toast: ToastsManager, @Inject(LightService) private lights: LightService)
    {

    }

    getPhaseStyle() : any {
        return {
            'is-success' : this.phaseCount == 1,
            'is-primary' : this.phaseCount == 2,
            'is-warning' : this.phaseCount == 3,
            'is-danger' : this.phaseCount == 4
        };
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