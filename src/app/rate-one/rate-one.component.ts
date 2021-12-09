import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CalculateService } from '../shared/calculate.service';

@Component({
    selector: 'rate-one',
    templateUrl: './rate-one.component.html',
    styleUrls: ['./rate-one.component.scss'],
})
export class RateOne {
    constructor(public calculateService: CalculateService) {}
}
