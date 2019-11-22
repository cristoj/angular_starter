import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ExchangeService } from './exchange.service';

@Component({
  selector: 'a-begins-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css'],
})
export class CurrenciesComponent implements OnInit {
  targetAmounts$: Observable<any[]>;
  constructor(private exchangeService: ExchangeService) {}

  ngOnInit() {}

  convert(sourceAmount: number) {
    this.targetAmounts$ = this.exchangeService.getCurrentExchangeRates$().pipe(
      map((rates: any[]) => {
        return rates.map(r => ({ ...r, amount: r.amount *= sourceAmount }));
      })
    );
  }
}
