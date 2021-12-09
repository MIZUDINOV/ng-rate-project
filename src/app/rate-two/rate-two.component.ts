import { Component } from '@angular/core';
import { CalculateService } from '../shared/calculate.service';

@Component({
    selector: 'rate-two',
    templateUrl: './rate-two.component.html',
    styleUrls: ['./rate-two.component.scss'],
})
export class RateTwo {
    constructor(public calculateService: CalculateService) {}
}
