import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'character-sheet',
    templateUrl: './templates/character_sheet.html'
})
export class CharacterComponent {
    char : Character = {
        id: 1,
        name: 'Otto Wilson',
        stock: 'Human',
        class: 'Fighter',
        age: 29,
        home: 'Hommlet'
    }
}

export class Character {
    id: number;
    name: string;
    stock: string;
    class: string;
    age: number;
    home: string;
}