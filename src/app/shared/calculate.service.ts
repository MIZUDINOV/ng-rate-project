import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CalculateService {
    private _rateOneEconom: BehaviorSubject<number> = new BehaviorSubject(0);
    public rateOneEconom = this._rateOneEconom.asObservable();

    private _rateOneAdvanced: BehaviorSubject<number> = new BehaviorSubject(0);
    public rateOneAdvanced = this._rateOneAdvanced.asObservable();

    private _rateOneLux: BehaviorSubject<number> = new BehaviorSubject(0);
    public rateOneLux = this._rateOneLux.asObservable();

    maxBagWeightEconom!: boolean;
    maxBagWeightAdvanced!: boolean;
    maxBagWeightLux!: boolean;

    private _rateTwoEconom: BehaviorSubject<number> = new BehaviorSubject(0);
    public rateTwoEconom = this._rateTwoEconom.asObservable();

    private _rateTwoAdvanced: BehaviorSubject<number> = new BehaviorSubject(0);
    public rateTwoAdvanced = this._rateTwoAdvanced.asObservable();

    private _rateTwoLux: BehaviorSubject<number> = new BehaviorSubject(0);
    public rateTwoLux = this._rateTwoLux.asObservable();

    maxBagWeightEconomTwo!: boolean;
    maxBagWeightAdvancedTwo!: boolean;
    maxBagWeightLuxTwo!: boolean;

    calculateEconomRate(km: number, age: number, bgw: number) {
        this.maxBagWeightEconom = bgw <= 20;
        this._rateOneEconom.next(km * 4 + (bgw <= 5 ? 0 : 4000));

        this.maxBagWeightEconomTwo = bgw <= 15;
        this._rateTwoEconom.next(
            age <= 5
                ? (km * 0.5) / 2
                : km * 0.5 + (bgw <= 15 ? 0 : (bgw - 15) * 50)
        );
    }

    calculateAdvancedRate(km: number, age: number, bgw: number) {
        this.maxBagWeightAdvanced = bgw <= 50;
        this._rateOneAdvanced.next(
            km * 8 +
                (bgw <= 20 ? 0 : 5000) -
                (age <= 7 ? ((km * 8) / 100) * 30 : 0)
        );

        this.maxBagWeightAdvancedTwo = bgw <= 60;
        this._rateTwoAdvanced.next(
            km * 2 +
                (bgw <= 20 ? 0 : (bgw - 20) * 50) -
                (age <= 8 ? ((km * 2) / 100) * 30 : 0)
        );
    }

    calculateLuxRate(km: number, age: number, bgw: number) {
        this.maxBagWeightLux = bgw <= 50;
        this._rateOneLux.next(
            km * 15 - (age <= 16 ? ((km * 15) / 100) * 30 : 0)
        );

        this.maxBagWeightLuxTwo = bgw <= 60;
        this._rateTwoLux.next(km * 4 - (age <= 16 ? ((km * 4) / 100) * 20 : 0));
    }
}
