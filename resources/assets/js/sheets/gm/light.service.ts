import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class LightService
{
    private lightsDimmedSource = new Subject<number>();

    lightsDimmed$ = this.lightsDimmedSource.asObservable();

    dimTheLights(phaseId: number) : void {
        this.lightsDimmedSource.next(phaseId);
    }
}