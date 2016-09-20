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
}

export class CharExtras {
    parents: string;
    enemy: string;
    friend: string;
    raiment: string;
    mentor: string;
}