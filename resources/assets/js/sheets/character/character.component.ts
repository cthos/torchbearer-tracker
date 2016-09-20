import { Component, Inject } from '@angular/core';
import {CharService} from "./charservice.service";
import {Character} from "./character.model";

@Component({
    moduleId: module.id,
    selector: 'character-sheet',
    templateUrl: './templates/character_sheet.html',
    providers: [CharService]
})
export class CharacterComponent {
    constructor(@Inject(CharService) private charService: CharService) {}

    char : Character = <Character>{
        id: 1,
        name: 'Otto Wilson',
        stock: 'Human',
        class: 'Fighter',
        age: 29,
        home: 'Hommlet',
        raiment: 'None'
    }
}

