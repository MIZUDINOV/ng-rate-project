import { Component, OnInit } from '@angular/core';
import { CalculateService } from '../shared/calculate.service';

@Component({
    selector: 'rate-one',
    templateUrl: './rate-one.component.html',
    styleUrls: ['./rate-one.component.scss'],
    providers: [CalculateService],
})
export class RateOne {
    econom!: number;
    advanced!: number;
    lux!: number;

    constructor(private calculateService: CalculateService) {
        this.econom = this.calculateService.rateOneEconom;
    }
}
