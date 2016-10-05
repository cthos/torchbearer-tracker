import { Component, Input, Inject, OnInit } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'light-sources',
    templateUrl: './templates/light_sources.html'
})
export class LightSourceComponent {
    formSelectedLight: string = 'candle';

    lights : LightSource[] = [];

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

        this.lights.push(newLight);

        return newLight;
    }
}

export class LightSource {
    lightType: string;
    turnsRemaining: number;
    dim: number;
    light: number;

    constructor(t: string) {
        this.lightType = t;

        this.resetRemainingTurns();
        this.setLightCoverage();
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

    setLightCoverage() : this {
        switch(this.lightType) {
            case 'torch':
                this.light = 2;
                this.dim = 2;
                break;
            case 'lantern':
                this.light = 3;
                this.dim = 3;
                break;
            case 'candle':
                this.light = 1;
                this.dim = 1;
                break;
        }

        return this;
    }
}
