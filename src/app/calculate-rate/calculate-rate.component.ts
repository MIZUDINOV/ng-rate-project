import { Component } from '@angular/core';
import { CalculateService } from '../shared/calculate.service';

@Component({
    selector: 'calculate-rate',
    templateUrl: './calculate-rate.component.html',
    styleUrls: ['./calculate-rate.component.scss'],
})
export class CalculateRate {
    public kilometers!: number;
    public age!: number;
    public baggageWeight!: number;

    constructor(private calculateService: CalculateService) {}

    onCalculate = (
        $event: any,
        km: number,
        age: number,
        baggageWeight: number
    ) => {
        $event.preventDefault();
        this.calculateService.calculateEconomRate(km, age, baggageWeight);
        this.calculateService.calculateAdvancedRate(km, age, baggageWeight);
        this.calculateService.calculateLuxRate(km, age, baggageWeight);
    };
}
