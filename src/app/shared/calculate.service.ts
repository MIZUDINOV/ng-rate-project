import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CalculateService {
    rateOneEconom!: number;
    rateOneAdvanced!: number;
    rateOneLux!: number;

    maxBagWeightEconom!: boolean;
    maxBagWeightAdvanced!: boolean;
    maxBagWeightLux!: boolean;

    rateTwoEconom!: number;
    rateTwoAdvanced!: number;
    rateTwoLux!: number;

    maxBagWeightEconomTwo!: boolean;
    maxBagWeightAdvancedTwo!: boolean;
    maxBagWeightLuxTwo!: boolean;

    calculateEconomRate(km: number, age: number, bgw: number) {
        this.maxBagWeightEconom = bgw <= 20;
        this.rateOneEconom = km * 4 + (bgw <= 5 ? 0 : 4000);

        this.maxBagWeightEconomTwo = bgw <= 15;
        this.rateTwoEconom =
            age <= 5
                ? (km * 0.5) / 2
                : km * 0.5 + (bgw <= 15 ? 0 : (bgw - 15) * 50);

        console.log(this.rateOneEconom, this.rateTwoEconom);
        console.log(this.maxBagWeightEconom, this.maxBagWeightEconomTwo);
    }

    calculateAdvancedRate(km: number, age: number, bgw: number) {
        this.maxBagWeightAdvanced = bgw <= 50;
        this.rateOneAdvanced =
            km * 8 + bgw <= 20
                ? 0
                : 5000 - (age <= 7 ? ((km * 8) / 100) * 30 : 0);

        this.maxBagWeightAdvancedTwo = bgw <= 60;
        this.rateTwoAdvanced =
            km * 2 + bgw <= 20
                ? 0
                : (bgw - 20) * 50 - (age <= 8 ? ((km * 2) / 100) * 30 : 0);
        console.log(this.rateOneAdvanced, this.rateTwoAdvanced);
        console.log(this.maxBagWeightAdvanced, this.maxBagWeightAdvancedTwo);
    }

    calculateLuxRate(km: number, age: number, bgw: number) {
        this.maxBagWeightLux = bgw <= 50;
        this.rateOneLux = km * 15 - (age <= 16 ? ((km * 15) / 100) * 30 : 0);

        this.maxBagWeightLuxTwo = bgw <= 60;
        this.rateTwoLux = km * 4 - (age <= 16 ? ((km * 15) / 100) * 20 : 0);
        console.log(this.rateOneLux, this.rateTwoLux);
        console.log(this.maxBagWeightLux, this.maxBagWeightLuxTwo);
    }
}
