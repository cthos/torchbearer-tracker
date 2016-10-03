import { Component, Input, Inject, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'gm-sheet',
    templateUrl: './templates/gm_sheet.html'
})
export class GMComponent implements OnInit {
    phaseCount : number = 1;
    currentPhase : string = 'adventure';
    campLocation : string;
    campSafety : string;
    formSelectedLight: string = 'candle';

    lights : LightSource[] = [];

    ngOnInit() : void {

    }

    rollCamp() : void {

    }

    dimTheLights() : void {
        this.lights.forEach(function (l) {
            l.turnsRemaining--;
        });

        // Remove any lights which not longer should be lit.
        this.lights = this.lights.filter(function (l) {
            return l.turnsRemaining > 0;
        });
    }

    addLight() : LightSource {
        let newLight = new LightSource(this.formSelectedLight);
        newLight.resetRemainingTurns();

        this.lights.push(newLight);

        return newLight;
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

        this.dimTheLights();
    }
}

export class LightSource {
    lightType: string;
    turnsRemaining: number;

    constructor(t: string) {
        this.lightType = t;
    }

    resetRemainingTurns() : this {
        switch(this.lightType) {
            case 'torch':
                this.turnsRemaining = 2;
                break;
            case 'lantern':
                this.turnsRemaining = 3;
                break;
            case 'candle':
                this.turnsRemaining = 4;
                break;
        }

        return this;
    }
}

