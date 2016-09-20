import { Component, Inject, OnInit } from '@angular/core';
import {CharService} from "./charservice.service";
import {Character} from "./character.model";

@Component({
    moduleId: module.id,
    selector: 'character-sheet',
    templateUrl: './templates/character_sheet.html',
    providers: [CharService]
})
export class CharacterComponent implements OnInit {
    ngOnInit() : void {
        this.charService.getCharacter(1).then(char => this.char = char);
    }

    constructor(@Inject(CharService) private charService: CharService) {

    }

    char : Character = <Character>{}
}

