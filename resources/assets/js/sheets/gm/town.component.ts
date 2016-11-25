import { Component, Input, Inject, Injectable, OnInit } from '@angular/core';
import {TownGuildService, TownEventService} from './town.service';
import * as _ from 'lodash';


@Component({
    moduleId: module.id,
    selector: 'town-phase',
    templateUrl: './templates/town.html'
})
export class TownComponent
{
    townPhaseId : number = 0;
    guildOnWatch : string = '';
    event : string = '';

    constructor(@Inject(TownGuildService) private tgs: TownGuildService, @Inject(TownEventService) private tes: TownEventService) {

    }

    rollTownEvent() : void {
        let roll = _.random(2, 12, false);

        this.event = this.tes.getChartResults(roll);
    }

    rollGuildChart() : void {
        let tens_roll = _.random(1, 6);
        let ones_roll = _.random(1, 6);

        this.guildOnWatch = this.tgs.getChartResults(tens_roll, ones_roll);
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

