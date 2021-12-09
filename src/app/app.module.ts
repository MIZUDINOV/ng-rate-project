import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CalculateRate } from './calculate-rate/calculate-rate.component';
import { RateOne } from './rate-one/rate-one.component';
import { RateTwo } from './rate-two/rate-two.component';

@NgModule({
    declarations: [AppComponent, CalculateRate, RateOne, RateTwo],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
