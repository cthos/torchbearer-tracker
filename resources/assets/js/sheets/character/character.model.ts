export class Character {
    id: number;
    name: string;
    stock: string;
    class: string;
    age: number;
    home: string;
    extras: CharExtras;
    alignment: string;
    will: number;
    health: number;
    nature: number;
    resources: number;
    circles: number;

    constructor(fillObj) {
        for (let prop in fillObj) {
            this[prop] = fillObj[prop];
        }
    }

    get traits(): Array<CharTrait> {
        if (!this.extras.traits) {
            this.extras.traits = [];
        }

        let missingLen = 4 - this.extras.traits.length;
        let padArr = [];

        for (let i = 0; i < missingLen; i++) {
            padArr.push(new CharTrait());
        }

        return this.extras.traits.concat(padArr);
    }
}
 
export class CharExtras {
    parents: string;
    enemy: string;
    friend: string;
    raiment: string;
    mentor: string;
    traits: Array<CharTrait> = [];
}

export class CharTrait {
    name: string = '';
    level: number = 1;
    uses: number = 0;
    checks: number = 0;
}