import { Injectable } from '@angular/core';

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

    getChartResults(tens, ones) : string
    {
        return this.results[tens][ones];
    }
}