import { Component, Input, Inject, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'gm-sheet',
    templateUrl: './templates/gm_sheet.html'
})
export class GMComponent implements OnInit {
    phaseCount : number = 1;
    currentPhase : string = 'adventure';

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
            this.phaseCount = 1;
        }
    }
}

