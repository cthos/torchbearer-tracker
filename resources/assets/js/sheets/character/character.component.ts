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
        var that = this;
        this.charService.getCharacter(1).then(function (char) {
            that.char = char;
            console.log(that.char);
        });
    }

    constructor(@Inject(CharService) private charService: CharService) {

    }

    char : Character = <Character>{}
}

