import { Component, Input, Inject, OnInit } from '@angular/core';
import {CharService} from "./charservice.service";
import {Character} from "./character.model";

declare var charId;

@Component({
    moduleId: module.id,
    selector: 'character-sheet',
    templateUrl: './templates/character_sheet.html',
    providers: [CharService]
})
export class CharacterComponent implements OnInit {
    @Input() character = 1;

    ngOnInit() : void {

    }

    constructor(@Inject(CharService) private charService: CharService) {

        var that = this;
        this.charService.getCharacter(charId).then(function (char) {
            that.char = char;
            console.log(that.char);
        });
    }

    char : Character = <Character>{}
}

