import { Component, Input, Inject, OnInit } from '@angular/core';
import * as _ from 'lodash';


@Component({
    moduleId: module.id,
    selector: 'town-phase',
    templateUrl: './templates/town.html'
})
export class TownComponent
{
    townPhaseId : number = 0;

    rollTownEvent() : void {
        let roll = _.random(2, 12, false);

        console.log(roll);
    }

    getTownPhaseName() : string {
        let phaseNames = [
            'Spend Remaining Checks',
            'Determine the Watch',
            'Roll on the Entering Town table and roll again on the appropriate subtable',
            'Dispose of Spoiled Food',
            'Level Up',
            'Strategize',
            'Haggle'
        ];

        return phaseNames[this.townPhaseId];
    }

    nextTownPhase() {
        this.townPhaseId++;

        if (this.townPhaseId > 6) {
            this.townPhaseId = 0;
        }
    }
}