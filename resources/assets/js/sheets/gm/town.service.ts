import { Injectable } from '@angular/core';

@Injectable()
export class TownEventService
{
    getChartResults(roll) : string
    {
        if (roll === 2) {
            return 'Disaster';
        }

        if (roll > 2 && roll < 7) {
            return 'Minor Inconvenience';
        }

        if (roll >= 7 && roll < 10) {
            return 'Peaceful Town';
        }

        if (roll >= 10 && roll < 12) {
            return 'Minor Break';
        }

        return 'Major Break';
    }
}

@Injectable()
export class TownGuildService
{
    results = {
        1 : [
            'Apothecaries',
            'Armorers',
            'Bakers',
            'Barbers (surgeons)',
            'Blacksmiths',
            'Blacksmiths'
        ],
        2 : [
            'Bowyers',
            'Brewers',
            'Butchers',
            'Carpenters',
            'Chandlers',
            'Clothworkers'
        ],
        3 : [
            'Tanners',
            'Tanners',
            'Cutlers (knife makers)',
            'Dyers',
            'Farriers (horseshoes)',
            'Fishmongers'
        ],
        4 : [
            'Fishmongers',
            'Fletchers',
            'Goldsmiths',
            'Loriners (bits, bridles, spurs)',
            'Masons',
            'Masons'
        ],
        5 : [
            'Plumbers',
            'Poulters',
            'Saddlers',
            'Salters',
            'Wheelwrights',
            'Skinners'
        ],
        6 : [
            'Vintners',
            'Weavers',
            'Scriveners',
            'Woolmen',
            'Shipwrights',
            'Magicians and Alchemists'
        ]
    }

    /**
     * Gets the results from the guild chart.
     *
     * @param tens
     * @param ones
     * @returns {any}
     */
    getChartResults(tens, ones) : string
    {
        return this.results[tens][ones - 1];
    }
}